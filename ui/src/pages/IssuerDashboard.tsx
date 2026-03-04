import React, { useState } from "react";
import { useLedger, useParty, useStreamQueries } from "@daml/react";
import { ContractId } from "@daml/types";
import { RWAInstrument } from "@daml.js/CantonSuite-0.1.0/lib/Finance/Instruments";
import { DraftRWAInstrument } from "@daml.js/CantonSuite-0.1.0/lib/Finance/Instruments";
import * as Trade from "@daml.js/CantonSuite-0.1.0/lib/Trade";
import { Allocation } from "@daml.js/CantonSuite-0.1.0/lib/TokenStandard/Interfaces";
import { RedemptionRequest } from "@daml.js/CantonSuite-0.1.0/lib/Redemption/Atomic";
import { DividendAnnouncementWorkflow } from "@daml.js/CantonSuite-0.1.0/lib/Distribution/ClaimBased";
import { 
  LenderShare,
  DepositRequest, 
  WithdrawalRequest
} from "@daml.js/CantonSuite-0.1.0/lib/Lending/Deposits";
import { LoanRequest, Loan } from "@daml.js/CantonSuite-0.1.0/lib/Lending/Loans";
import { LendingPool as LendingPoolPool } from "@daml.js/CantonSuite-0.1.0/lib/Lending/Pool";
import { MiningRoundReference } from "@daml.js/CantonSuite-0.1.0/lib/CantonCoin/MiningRoundSync";
import { SynchronizerMigrationRequest, MigrationWorkflow } from "@daml.js/CantonSuite-0.1.0/lib/Network/SynchronizerMigration";
import Modal from "../components/Modal";
import { useToast } from "../context/ToastContext";
import { useStreamNotification } from "../hooks/useStreamNotification";
import CantonIAM from "../services/CantonIAM";

import IssuerAssetTab from "../components/issuer/IssuerAssetTab";
import IssuerRedemptionTab from "../components/issuer/IssuerRedemptionTab";
import IssuerYieldTab from "../components/issuer/IssuerYieldTab";
// Import advanced issuer lending components
import PoolLifecycleManager from "../components/issuer/lending/PoolLifecycleManager";
import BatchProcessor from "../components/issuer/lending/BatchProcessor";
import DistributionCenter from "../components/issuer/lending/DistributionCenter";
import LoanManager from "../components/issuer/lending/LoanManager";

export default function IssuerDashboard() {
  const ledger = useLedger();
  const party = useParty();
  const toast = useToast();
  const iam = CantonIAM.getInstance();

  const [activeTab, setActiveTab] = useState<"assets" | "trading" | "lending" | "redemptions" | "yields">("assets");
  const [processingIds, setProcessingIds] = useState<Set<string>>(new Set()); 
  const [isSubmitting, setIsSubmitting] = useState(false); 

  // --- QUERY HOOKS ---
  
  // 1. Fetch ALL visible assets (includes other issuers' assets because of Public read rights)
  const { contracts: allAssets } = useStreamQueries(RWAInstrument);

  // 2. FILTER: Create a list of only the assets *I* issued for management
  const myAssets = allAssets.filter(a => a.payload.tokenIssuer === party);

  const { contracts: drafts } = useStreamQueries(DraftRWAInstrument);
  const { contracts: allocations } = useStreamQueries(Allocation);
  const { contracts: redemptionRequests, loading: redLoading } = useStreamQueries(RedemptionRequest);
  const { contracts: workflows } = useStreamQueries(DividendAnnouncementWorkflow);
  
  // --- LENDING QUERY HOOKS ---
  const { contracts: pools } = useStreamQueries(LendingPoolPool);
  const { contracts: loanRequests } = useStreamQueries(LoanRequest);
  const { contracts: depositRequests } = useStreamQueries(DepositRequest);
  const { contracts: withdrawalRequests } = useStreamQueries(WithdrawalRequest);
  
  const ProposedTemplate = Trade.ProposedTrade || Trade.TradeAgreement;
  const ApprovedTemplate = Trade.ApprovedTrade || Trade.TradeAgreement;
  const AgreementTemplate = Trade.TradeAgreement; 
  
  const { contracts: requests, loading: reqLoading } = useStreamQueries(ProposedTemplate);
  const { contracts: pendingSettlements } = useStreamQueries(AgreementTemplate);
  const { contracts: settlements } = useStreamQueries(ApprovedTemplate);
  
  useStreamNotification(requests, "Buy Order", reqLoading);
  useStreamNotification(redemptionRequests, "Redemption Request", redLoading);

  // --- STATE ---
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [newAsset, setNewAsset] = useState({ id: "", name: "", type: "Equity", supply: 1000, price: 10 });
  const [selectedAsset, setSelectedAsset] = useState<RWAInstrument | null>(null);
  const [manageCid, setManageCid] = useState<any>(null);
  const [actionType, setActionType] = useState<"Mint" | "Burn" | "UpdatePrice">("Mint");
  const [actionValue, setActionValue] = useState(0);
  const [isYieldModalOpen, setIsYieldModalOpen] = useState(false);
  const [yieldForm, setYieldForm] = useState({ assetId: "", label: "", perUnitAmount: 0 });

  const eligibleHoldersCount = allocations.length > 0 ? allocations.length : 0;

  // --- HANDLERS ---

  const execute = async (cid: string, fn: () => Promise<any>, msg: string) => {
    if (processingIds.has(cid)) return;
    setProcessingIds(prev => new Set(prev).add(cid));
    try {
        await fn();
        toast.showToast(msg, "success");
    } catch (e: any) {
        toast.showToast(e.message, "error");
    } finally {
        setProcessingIds(prev => { const next = new Set(prev); next.delete(cid); return next; });
    }
  };

  // --- DIVIDEND WORKFLOW CREATION ---
  const handleCreateDividendWorkflow = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    
    const complianceParty = iam.getPartyByRole('Compliance');
    const regulatorParty = iam.getPartyByRole('Regulator');
    if (!complianceParty || !regulatorParty) {
      toast.showToast("System Error: Required parties not found.", "error");
      return;
    }
    
    setIsSubmitting(true);
    try {
      await ledger.create(DividendAnnouncementWorkflow, {
        issuer: party,
        compliance: complianceParty,
        regulator: regulatorParty,
        assetId: String(yieldForm.assetId),
        dividendLabel: yieldForm.label,
        perUnitAmount: yieldForm.perUnitAmount.toFixed(2),
        expirationDays: 30
      });
      toast.showToast(`Dividend workflow created. Awaiting compliance approval.`, "success");
      setIsYieldModalOpen(false);
      setYieldForm({ assetId: "", label: "", perUnitAmount: 0 });
    } catch (e: any) {
      toast.showToast(e.message, "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCreateDraft = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    const complianceParty = iam.getPartyByRole('Compliance');
    const regulatorParty = iam.getPartyByRole('Regulator');
    if (!complianceParty) { toast.showToast("System Error: Compliance party not found.", "error"); setIsSubmitting(false); return; }
    const observersList = [regulatorParty].filter(Boolean) as string[];

    try {
      await ledger.create(DraftRWAInstrument, {
        draftIssuer: party,
        compliance: complianceParty,
        instrumentId: newAsset.id,
        name: newAsset.name,
        assetType: newAsset.type,
        pricePerUnit: newAsset.price.toFixed(2),
        fractionalized: true,
        draftObservers: observersList
      });
      toast.showToast(`Draft Asset Created. Sent to Compliance.`, "success");
      setIsCreateOpen(false);
      setNewAsset({ id: "", name: "", type: "Equity", supply: 1000, price: 10 });
    } catch (err: any) { toast.showToast(err.message, "error"); } finally { setIsSubmitting(false); }
  };

  const handleManagement = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!manageCid || isSubmitting) return;
    setIsSubmitting(true);
    try {
        if (actionType === "Mint") await ledger.exercise(RWAInstrument.Mint, manageCid, { amount: actionValue.toFixed(1) });
        else if (actionType === "Burn") await ledger.exercise(RWAInstrument.Burn, manageCid, { amount: actionValue.toFixed(1) });
        else if (actionType === "UpdatePrice") await ledger.exercise(RWAInstrument.UpdatePrice, manageCid, { newPrice: actionValue.toFixed(2) });
        toast.showToast(`${actionType} Executed Successfully`, "success");
        setSelectedAsset(null);
        setManageCid(null);
    } catch (err: any) { toast.showToast(err.message, "error"); } finally { setIsSubmitting(false); }
  };

  const acceptTrade = (cid: any) => execute(cid, () => ledger.exercise(Trade.ProposedTrade.SellerAccept, cid, {}), "Trade Accepted");
  const finalizeTrade = (cid: any) => execute(cid, () => ledger.exercise(Trade.ApprovedTrade.Approve, cid, {}), "Trade Finalized & Settled");
  const toggleFraction = (cid: any) => {
    toast.showToast("Fractionalization toggle requires governance approval", "info");
  };
  
  const handleApproveRedemption = (req: any) => {
    toast.showToast("Redemption approval requires compliance review", "info");
  };

  const totalRedemptionValue = redemptionRequests.reduce((sum, req) => {
    // Use allAssets here just in case, but usually myAssets is sufficient
    const asset = allAssets.find(a => a.payload.instrument._1._2 === req.payload.assetId);
    const price = asset ? Number(asset.payload.pricePerUnit) : 0;
    return sum + (Number(req.payload.quantity) * price);
  }, 0);

  const tabStyle = (active: boolean) => ({
    padding: '1rem 2rem', 
    background: active ? 'var(--primary)' : 'transparent', 
    color: active ? 'white' : 'var(--text-main)', 
    border: 'none', 
    borderBottom: active ? '3px solid var(--primary)' : 'none', 
    cursor: 'pointer', fontWeight: active ? 'bold' : 'normal', transition: 'all 0.2s', display: 'flex', alignItems: 'center', gap: '8px'
  });

  // Calculate Asset Badge (Requests + Ready Settlements + Pending Settlements)
  const assetBadgeCount = requests.length + settlements.length + pendingSettlements.length;

  return (
    <div>
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem', borderBottom: '2px solid var(--border)' }}>
        <button onClick={() => setActiveTab("assets")} style={tabStyle(activeTab === "assets")}>Asset Management {assetBadgeCount > 0 && <span className="badge badge-yellow">{assetBadgeCount}</span>}</button>
        <button onClick={() => setActiveTab("trading")} style={tabStyle(activeTab === "trading")}>Trading {requests.length > 0 && <span className="badge badge-blue">{requests.length}</span>}</button>
        <button onClick={() => setActiveTab("lending")} style={tabStyle(activeTab === "lending")}>DeFi Lending {loanRequests.length > 0 && <span className="badge badge-green">{loanRequests.length}</span>}</button>
        <button onClick={() => setActiveTab("redemptions")} style={tabStyle(activeTab === "redemptions")}>Redemptions {redemptionRequests.length > 0 && <span className="badge badge-red">{redemptionRequests.length}</span>}</button>
        <button onClick={() => setActiveTab("yields")} style={tabStyle(activeTab === "yields")}>Yield Distribution</button>
      </div>

      {activeTab === "assets" && (
        <IssuerAssetTab 
          assets={myAssets} // <--- UPDATED: Only show my assets
          drafts={drafts} 
          requests={requests} 
          settlements={settlements} 
          pendingSettlements={pendingSettlements} 
          processingIds={processingIds} 
          onCreateOpen={() => setIsCreateOpen(true)} 
          onManage={(asset, cid) => { setSelectedAsset(asset); setManageCid(cid); setActionValue(0); }} 
          onToggleFraction={toggleFraction} 
          onAcceptTrade={acceptTrade} 
          onFinalizeTrade={finalizeTrade} 
        />
      )}
      {activeTab === "trading" && (
        <div className="card">
          <h3>Trading Pipeline</h3>
          <p className="text-muted">Manage trade agreements and settlements.</p>
          {/* Trading functionality would go here */}
        </div>
      )}
      {activeTab === "lending" && (
        <div className="flex-column" style={{ gap: '2rem' }}>
          <PoolLifecycleManager />
          <LoanManager />
          <BatchProcessor />
          <DistributionCenter />
        </div>
      )}
      {activeTab === "redemptions" && <IssuerRedemptionTab redemptionRequests={redemptionRequests} assets={myAssets} totalRedemptionValue={totalRedemptionValue} processingIds={processingIds} onApprove={handleApproveRedemption} />}
      {activeTab === "yields" && <IssuerYieldTab workflows={workflows} activeHolderCount={new Set(allocations.map(a => a.payload.owner)).size} allocations={allocations} processingIds={processingIds} onOpenModal={() => setIsYieldModalOpen(true)} onCreateWorkflow={handleCreateDividendWorkflow} />}

      <Modal isOpen={isCreateOpen} onClose={() => !isSubmitting && setIsCreateOpen(false)} title="Issue New Asset">
        <form onSubmit={handleCreateDraft} style={{display:'flex', flexDirection:'column', gap:'1rem'}}>
          <div><label>Asset ID (Ticker)</label><input placeholder="e.g. TOKEN-A" value={newAsset.id} onChange={e => setNewAsset({...newAsset, id: e.target.value})} className="input-field" style={{ width: '100%', padding: '0.8rem' }} required disabled={isSubmitting} /></div>
          <div><label>Asset Name</label><input placeholder="e.g. Green Energy Bond 2025" value={newAsset.name} onChange={e => setNewAsset({...newAsset, name: e.target.value})} className="input-field" style={{ width: '100%', padding: '0.8rem' }} required disabled={isSubmitting} /></div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div><label>Total Supply</label><input type="number" value={newAsset.supply} onChange={e => setNewAsset({...newAsset, supply: parseFloat(e.target.value)})} className="input-field" style={{ width: '100%', padding: '0.8rem' }} required disabled={isSubmitting} /></div>
            <div><label>Initial Price ($)</label><input type="number" value={newAsset.price} onChange={e => setNewAsset({...newAsset, price: parseFloat(e.target.value)})} className="input-field" style={{ width: '100%', padding: '0.8rem' }} required disabled={isSubmitting} /></div>
          </div>
          <button type="submit" className="btn-primary" disabled={isSubmitting} style={{marginTop: '1rem'}}>{isSubmitting ? "Creating on Ledger..." : "Create Draft Asset"}</button>
        </form>
      </Modal>

      <Modal isOpen={!!selectedAsset} onClose={() => !isSubmitting && (setSelectedAsset(null), setManageCid(null))} title={`Manage ${selectedAsset?.name}`}>
          <form onSubmit={handleManagement}>
              <div style={{display:'flex', gap:'1rem', marginBottom:'1rem'}}>
                  <button type="button" disabled={isSubmitting} className={`btn-outline ${actionType === 'Mint' ? 'btn-primary' : ''}`} onClick={() => setActionType("Mint")}>Mint</button>
                  <button type="button" disabled={isSubmitting} className={`btn-outline ${actionType === 'Burn' ? 'btn-danger' : ''}`} onClick={() => setActionType("Burn")}>Burn</button>
                  <button type="button" disabled={isSubmitting} className={`btn-outline ${actionType === 'UpdatePrice' ? 'btn-success' : ''}`} onClick={() => setActionType("UpdatePrice")}>Set Price</button>
              </div>
              <label>{actionType === 'UpdatePrice' ? 'New Price ($)' : 'Quantity'}</label>
              <input type="number" className="input-field" style={{width:'100%', marginBottom:'1rem', padding: '0.5rem'}} value={actionValue} onChange={e => setActionValue(parseFloat(e.target.value))} step={actionType === 'UpdatePrice' ? "0.01" : "1"} disabled={isSubmitting} />
              <button type="submit" className="btn-primary" style={{width:'100%'}} disabled={isSubmitting}>{isSubmitting ? "Executing..." : `Execute ${actionType}`}</button>
          </form>
      </Modal>

      <Modal isOpen={isYieldModalOpen} onClose={() => !isSubmitting && setIsYieldModalOpen(false)} title="Create Dividend Workflow">
        <form onSubmit={handleCreateDividendWorkflow} style={{display:'flex', flexDirection:'column', gap:'1rem'}}>
          <div>
            <label>Asset ID</label>
            <select className="input-field" value={yieldForm.assetId} onChange={e => setYieldForm({...yieldForm, assetId: e.target.value})} required disabled={isSubmitting}>
              <option value="">Select Asset</option>
              {/* UPDATED: Only show my assets in the dropdown with safety checks */}
              {myAssets.filter(a => a.payload && a.payload.instrument && a.payload.instrument._1).map(a => (<option key={a.contractId} value={String(a.payload.instrument._1._2)}>{a.payload.name} ({a.payload.instrument._1._2})</option>))}
            </select>
            {yieldForm.assetId && (
              <div style={{ marginTop: '0.5rem', fontSize: '0.85rem', color: 'var(--info)', background: 'rgba(59, 130, 246, 0.1)', padding: '0.5rem', borderRadius: '4px' }}>
                ℹ️ Creating workflow for compliance approval. {eligibleHoldersCount} investor{eligibleHoldersCount !== 1 ? 's' : ''} currently hold this asset.
              </div>
            )}
          </div>
          <div><label>Label</label><input placeholder="e.g., Q4 2025 Rental Income" value={yieldForm.label} onChange={e => setYieldForm({...yieldForm, label: e.target.value})} className="input-field" required disabled={isSubmitting} /></div>
          <div><label>Amount Per Token Unit</label><input placeholder="0.00" type="number" step="0.01" value={yieldForm.perUnitAmount} onChange={e => setYieldForm({...yieldForm, perUnitAmount: parseFloat(e.target.value)})} className="input-field" required disabled={isSubmitting} /></div>
          <button type="submit" className="btn-primary" disabled={isSubmitting}>{isSubmitting ? "Creating..." : "Create Workflow"}</button>
        </form>
      </Modal>
    </div>
  );
}