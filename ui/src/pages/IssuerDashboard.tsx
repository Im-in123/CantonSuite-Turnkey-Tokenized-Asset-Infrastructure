import React, { useState } from "react";
import { useLedger, useParty, useStreamQueries } from "@daml/react";
import { ContractId } from "@daml/types";
import { RWAInstrument } from "@daml.js/CantonSuite-0.1.0/lib/Finance/Instruments";
import { DraftRWAInstrument } from "@daml.js/CantonSuite-0.1.0/lib/Finance/Instruments";
import { AtomicMintWithAudit, AtomicBurnWithAudit } from "@daml.js/CantonSuite-0.1.0/lib/Compliance/AtomicAudit";
import { Holding_Impl } from "@daml.js/CantonSuite-0.1.0/lib/Portfolio";
import { Holding } from "@daml.js/CantonSuite-0.1.0/lib/TokenStandard/Interfaces";
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
import { 
  PrivacyPreservingListing,
  GlobalDiscoveryListing, 
  FirmMarketplaceListing, 
  InvestorInvitation,
  ClubDeal,
  SubscriptionRequest,
  PurchaseIntent
} from "@daml.js/CantonSuite-0.1.0/lib/Marketplace/MultiTier";
import CantonIAM from "../services/CantonIAM";

import IssuerAssetTab from "../components/issuer/IssuerAssetTab";
import IssuerRedemptionTab from "../components/issuer/IssuerRedemptionTab";
import IssuerYieldTab from "../components/issuer/IssuerYieldTab";
import MarketPresence from "../components/issuer/MarketPresence";
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

  const [activeTab, setActiveTab] = useState<"assets" | "trading" | "marketplace" | "lending" | "redemptions" | "yields">("assets");
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

  // --- MARKETPLACE PUBLISHING HANDLER ---
  const handlePublishToMarket = (asset: any) => {
    setSelectedAssetForManager(asset);
    setAssetManagerModal("PUBLISH");
  };

  // --- STATE ---
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [newAsset, setNewAsset] = useState({ id: "", name: "", type: "Equity", supply: 1000, price: 10 });
  const [selectedAsset, setSelectedAsset] = useState<any>(null);
  const [manageCid, setManageCid] = useState<any>(null);
  const [actionType, setActionType] = useState<"Mint" | "Burn" | "UpdatePrice">("Mint");
  const [actionValue, setActionValue] = useState(0);
  const [isYieldModalOpen, setIsYieldModalOpen] = useState(false);
  const [yieldForm, setYieldForm] = useState({ assetId: "", label: "", perUnitAmount: 0 });
  
  // Asset Manager state for marketplace publishing
  const [assetManagerModal, setAssetManagerModal] = useState<"PUBLISH" | null>(null);
  const [selectedAssetForManager, setSelectedAssetForManager] = useState<any>(null);

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
    setIsSubmitting(true);
    try {
      const workflowCid = await ledger.create(DividendAnnouncementWorkflow, {
        issuer: party,
        assetId: yieldForm.assetId,
        label: yieldForm.label,
        perUnitAmount: yieldForm.perUnitAmount,
        totalAmount: yieldForm.perUnitAmount * allocations.filter(a => a.payload.instrumentId._1._2 === yieldForm.assetId).reduce((sum, a) => sum + Number(a.payload.quantity), 0),
        createdAt: new Date().toISOString(),
        expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(), // 30 days
        regulators: [iam.getPartyByRole("Regulator")],
        observers: []
      });
      toast.showToast("Dividend workflow created. Awaiting compliance approval.", "success");
      setIsYieldModalOpen(false);
      setYieldForm({ assetId: "", label: "", perUnitAmount: 0 });
    } catch (e: any) { toast.showToast(e.message, "error"); }
    finally { setIsSubmitting(false); }
  };

  const handleClawback = async (assetId: string, quantity: string, reason: string) => {
    try {
      // This would implement the actual clawback logic
      await ledger.exercise("Holding_Impl.InitiateClawback", "PLACEHOLDER_CONTRACT_ID", {
        clawbackReason: reason,
        clawbackQuantity: quantity
      });
      toast.showToast(`Clawback initiated for ${quantity} units of ${assetId}`, "success");
    } catch (e: any) {
      toast.showToast(e.message, "error");
    }
  };

  const tabStyle = (active: boolean) => ({
    padding: '1rem 2rem', 
    background: active ? 'var(--primary)' : 'transparent', 
    color: active ? 'white' : 'var(--text-main)', 
    border: 'none', 
    borderBottom: active ? '3px solid var(--primary)' : 'none', 
    cursor: 'pointer', fontWeight: active ? 'bold' : 'normal', transition: 'all 0.2s', display: 'flex', alignItems: 'center', gap: '8px'
  });

  const handleCreateDraft = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    const complianceParty = iam.getPartyByRole('ComplianceOfficer');
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
    if (!manageCid || isSubmitting) {
      if (!manageCid) {
        toast.showToast("Error: No asset contract selected. Please select an asset first.", "error");
      }
      return;
    }
    
    console.log('DEBUG: Executing', actionType, 'on contract:', manageCid);
    console.log('DEBUG: Selected asset:', selectedAsset);
    console.log('DEBUG: Selected asset payload:', selectedAsset?.payload);
    
    if (!selectedAsset || !selectedAsset.payload) {
      toast.showToast("Error: No asset selected. Please select an asset first.", "error");
      return;
    }
    
    setIsSubmitting(true);
    try {
        if (actionType === "Mint") {
          console.log('DEBUG: Attempting AtomicMintWithAudit approach');
          const complianceParty = iam.getPartyByRole("ComplianceOfficer");
          const regulatorParty = iam.getPartyByRole("Regulator");
          
          if (!complianceParty || !regulatorParty) {
            toast.showToast("System Error: Required parties not found", "error");
            return;
          }
          
          const assetId = selectedAsset?.payload?.instrument?.id?.unpack || 'unknown';
          if (!assetId || assetId === 'unknown') {
            toast.showToast("Error: Invalid asset ID", "error");
            return;
          }
          
          const auditContract = await ledger.create(AtomicMintWithAudit, {
            issuer: party, 
            compliance: complianceParty,
            regulator: regulatorParty, 
            recipient: party, 
            assetId: assetId,
            quantity: actionValue.toFixed(1),
            mintReason: "Treasury Mint via Asset Management"
          });
          await ledger.exercise(AtomicMintWithAudit.ExecuteAtomicMint, auditContract.contractId, {});
        }
        else if (actionType === "Burn") {
          console.log('DEBUG: Attempting AtomicBurnWithAudit approach');
          // For burn, we need to find a treasury holding first
          const assetId = selectedAsset?.payload?.instrument?.id?.unpack || 'unknown';
          const complianceParty = iam.getPartyByRole("ComplianceOfficer");
          const regulatorParty = iam.getPartyByRole("Regulator");
          
          if (!complianceParty || !regulatorParty) {
            toast.showToast("System Error: Required parties not found", "error");
            return;
          }
          
          const treasuryHoldings = await ledger.query(Holding_Impl, { owner: party, assetId: assetId });
          const treasuryHolding = treasuryHoldings.find(h => !h.payload.locked);
          if (!treasuryHolding) {
            throw new Error("No available treasury holding to burn from");
          }
          
          const auditContract = await ledger.create(AtomicBurnWithAudit, {
            issuer: party, 
            compliance: complianceParty,
            regulator: regulatorParty, 
            burnHolder: party, 
            holdingCid: treasuryHolding.contractId as any,
            quantity: actionValue.toFixed(1), 
            burnReason: "Treasury Burn via Asset Management"
          });
          await ledger.exercise(AtomicBurnWithAudit.ExecuteAtomicBurn, auditContract.contractId, {});
        }
        else if (actionType === "UpdatePrice") {
          console.log('DEBUG: Attempting RWAInstrument.UpdatePrice exercise');
          await ledger.exercise(RWAInstrument.UpdatePrice, manageCid, { newPrice: actionValue.toFixed(2) });
        }
        toast.showToast(`${actionType} Executed Successfully`, "success");
        setSelectedAsset(null);
        setManageCid(null);
        setActionValue(0);
    } catch (err: any) { 
      console.error('DEBUG: Management error:', err);
      toast.showToast(err.message || "Failed to execute action", "error"); 
    } finally { 
      setIsSubmitting(false); 
    }
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

  // Calculate Asset Badge (Requests + Ready Settlements + Pending Settlements)
  const assetBadgeCount = requests.length + settlements.length + pendingSettlements.length;

  return (
    <div>
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem', borderBottom: '2px solid var(--border)' }}>
        <button onClick={() => setActiveTab("assets")} style={tabStyle(activeTab === "assets")}>Asset Management {assetBadgeCount > 0 && <span className="badge badge-yellow">{assetBadgeCount}</span>}</button>
        <button onClick={() => setActiveTab("trading")} style={tabStyle(activeTab === "trading")}>Trading {requests.length > 0 && <span className="badge badge-blue">{requests.length}</span>}</button>
        <button onClick={() => setActiveTab("marketplace")} style={tabStyle(activeTab === "marketplace")}>Marketplace</button>
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
          onPublishToMarket={handlePublishToMarket}
        />
      )}
      {activeTab === "trading" && (
        <div className="card">
          <h3>Trading Pipeline</h3>
          <p className="text-muted">Manage trade agreements and settlements.</p>
          {/* Trading functionality would go here */}
        </div>
      )}
      {activeTab === "marketplace" && <MarketPresence />}
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

      <Modal isOpen={!!selectedAsset} onClose={() => !isSubmitting && (setSelectedAsset(null), setManageCid(null))} title={`Manage ${selectedAsset?.payload?.name || 'Asset'}`}>
          <form onSubmit={handleManagement}>
              <div style={{display:'flex', gap:'1rem', marginBottom:'1rem'}}>
                  <button 
                      type="button" 
                      disabled={isSubmitting} 
                      className={`btn-outline ${actionType === 'Mint' ? 'active-action' : ''}`} 
                      onClick={() => setActionType("Mint")}
                      style={{
                          backgroundColor: actionType === 'Mint' ? 'var(--success)' : 'transparent',
                          color: actionType === 'Mint' ? 'white' : 'var(--success)',
                          borderColor: actionType === 'Mint' ? 'var(--success)' : 'var(--success)',
                          fontWeight: actionType === 'Mint' ? 'bold' : 'normal',
                          transform: actionType === 'Mint' ? 'scale(1.05)' : 'scale(1)',
                          boxShadow: actionType === 'Mint' ? '0 4px 12px rgba(34, 197, 94, 0.3)' : 'none'
                      }}
                  >Mint</button>
                  <button 
                      type="button" 
                      disabled={isSubmitting} 
                      className={`btn-outline ${actionType === 'Burn' ? 'active-action' : ''}`} 
                      onClick={() => setActionType("Burn")}
                      style={{
                          backgroundColor: actionType === 'Burn' ? 'var(--danger)' : 'transparent',
                          color: actionType === 'Burn' ? 'white' : 'var(--danger)',
                          borderColor: actionType === 'Burn' ? 'var(--danger)' : 'var(--danger)',
                          fontWeight: actionType === 'Burn' ? 'bold' : 'normal',
                          transform: actionType === 'Burn' ? 'scale(1.05)' : 'scale(1)',
                          boxShadow: actionType === 'Burn' ? '0 4px 12px rgba(239, 68, 68, 0.3)' : 'none'
                      }}
                  >Burn</button>
                  <button 
                      type="button" 
                      disabled={isSubmitting} 
                      className={`btn-outline ${actionType === 'UpdatePrice' ? 'active-action' : ''}`} 
                      onClick={() => setActionType("UpdatePrice")}
                      style={{
                          backgroundColor: actionType === 'UpdatePrice' ? 'var(--primary)' : 'transparent',
                          color: actionType === 'UpdatePrice' ? 'white' : 'var(--primary)',
                          borderColor: actionType === 'UpdatePrice' ? 'var(--primary)' : 'var(--primary)',
                          fontWeight: actionType === 'UpdatePrice' ? 'bold' : 'normal',
                          transform: actionType === 'UpdatePrice' ? 'scale(1.05)' : 'scale(1)',
                          boxShadow: actionType === 'UpdatePrice' ? '0 4px 12px rgba(59, 130, 246, 0.3)' : 'none'
                      }}
                  >Set Price</button>
              </div>
              <label>{actionType === 'UpdatePrice' ? 'New Price ($)' : 'Quantity'}</label>
              <input type="number" className="input-field" style={{width:'100%', marginBottom:'1rem', padding: '0.5rem'}} value={actionValue} onChange={e => setActionValue(parseFloat(e.target.value))} step={actionType === 'UpdatePrice' ? "0.01" : "1"} disabled={isSubmitting} />
              <button 
                  type="submit" 
                  className="btn-primary" 
                  style={{
                      width:'100%', 
                      backgroundColor: actionType === 'Mint' ? 'var(--success)' : actionType === 'Burn' ? 'var(--danger)' : 'var(--primary)',
                      borderColor: actionType === 'Mint' ? 'var(--success)' : actionType === 'Burn' ? 'var(--danger)' : 'var(--primary)',
                      fontWeight: 'bold'
                  }} 
                  disabled={isSubmitting}
              >
                  {isSubmitting ? "Executing..." : `Execute ${actionType}`}
              </button>
          </form>
      </Modal>

      <Modal isOpen={isYieldModalOpen} onClose={() => !isSubmitting && setIsYieldModalOpen(false)} title="Create Dividend Workflow">
        <form onSubmit={handleCreateDividendWorkflow} style={{display:'flex', flexDirection:'column', gap:'1rem'}}>
          <div>
            <label>Asset ID</label>
            <select className="input-field" value={yieldForm.assetId} onChange={e => setYieldForm({...yieldForm, assetId: e.target.value})} required disabled={isSubmitting}>
              <option value="">Select Asset</option>
              {/* UPDATED: Only show my assets in the dropdown with safety checks */}
              {myAssets.filter(a => a.payload && a.payload.instrument && a.payload.instrument.id && a.payload.instrument.id._1).map(a => (<option key={a.contractId} value={String(a.payload.instrument.id._1)}>{a.payload.name} ({a.payload.instrument.id._1})</option>))}
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

      {/* Publish to Market Modal */}
      <Modal isOpen={assetManagerModal === "PUBLISH"} onClose={() => setAssetManagerModal(null)} title={`Publish: ${selectedAssetForManager?.payload?.name || 'Asset'}`}>
        <form onSubmit={async (e) => {
          e.preventDefault();
          if (!selectedAssetForManager) return;
          
          console.log('DEBUG: selectedAssetForManager:', selectedAssetForManager);
          console.log('DEBUG: selectedAssetForManager.payload:', selectedAssetForManager.payload);
          
          setIsSubmitting(true);
          try {
            const formData = new FormData(e.currentTarget);
            const quantity = parseFloat(formData.get("quantity") as string);
            const visibilityTier = formData.get("visibilityTier") as string;
            
            const complianceParty = iam.getPartyByRole("ComplianceOfficer");
            const regulatorParty = iam.getPartyByRole("Regulator");
            
            if (!complianceParty || !regulatorParty) {
              toast.showToast("System Error: Required parties not found", "error");
              return;
            }

            // Safety check for payload
            if (!selectedAssetForManager.payload) {
              throw new Error("Asset payload is undefined");
            }

            // Create the visibility configuration based on tier selection
            let visibility;
            if (visibilityTier === "Global") {
              visibility = {
                tier: "GlobalTier",
                firmMembership: null,
                selectedInvestors: [],
                directRecipient: null
              };
            } else if (visibilityTier === "Firm") {
              visibility = {
                tier: "FirmOnlyTier",
                firmMembership: { value: "DEFAULT_FIRM" }, // You may want to make this configurable
                selectedInvestors: [],
                directRecipient: null
              };
            } else if (visibilityTier === "Selected") {
              visibility = {
                tier: "SelectedTier",
                firmMembership: null,
                selectedInvestors: [], // You may want to make this configurable
                directRecipient: null
              };
            } else {
              visibility = {
                tier: "DirectTier",
                firmMembership: null,
                selectedInvestors: [],
                directRecipient: null // You may want to make this configurable
              };
            }

            // Create PrivacyPreservingListing contract
            await ledger.create(PrivacyPreservingListing, {
              listingId: `${selectedAssetForManager.payload.instrument?.id?.unpack || selectedAssetForManager.payload.name}-${Date.now()}`,
              issuer: party,
              assetId: selectedAssetForManager.payload.instrument?.id?.unpack || selectedAssetForManager.payload.name,
              instrumentCid: selectedAssetForManager.contractId,
              quantity: quantity.toFixed(1),
              pricePerUnit: selectedAssetForManager.payload.pricePerUnit,
              visibility: visibility,
              createdAt: new Date().toISOString(),
              expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(), // 30 days
              minimumPurchase: "1.0",
              compliance: complianceParty
            });

            toast.showToast("Asset published to marketplace! Go to Market Presence to activate.", "success");
            setAssetManagerModal(null);
          } catch (e: any) {
            console.error('DEBUG: Publish error:', e);
            toast.showToast(e.message || "Failed to publish asset", "error");
          } finally {
            setIsSubmitting(false);
          }
        }} style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ fontSize: '0.875rem', fontWeight: '500', color: 'var(--text-main)' }}>Asset</label>
            <input 
              type="text" 
              className="input-field" 
              value={selectedAssetForManager?.payload?.name || ''} 
              disabled 
              style={{background: 'var(--bg-dark)', color: 'var(--text-muted)'}}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ fontSize: '0.875rem', fontWeight: '500', color: 'var(--text-main)' }}>Quantity to Publish</label>
            <input type="number" name="quantity" className="input-field" placeholder="Enter quantity" required min="1" step="0.1" />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ fontSize: '0.875rem', fontWeight: '500', color: 'var(--text-main)' }}>Visibility Tier</label>
            <select name="visibilityTier" className="input-field">
              <option value="Global">Global Discovery</option>
              <option value="Firm">Firm-Only</option>
              <option value="Selected">Whitelist</option>
              <option value="Direct">Direct</option>
            </select>
          </div>
          <button className="btn-primary" type="submit" style={{marginTop: '0.5rem'}} disabled={isSubmitting}>
            {isSubmitting ? "Publishing..." : "Publish to Marketplace"}
          </button>
        </form>
      </Modal>
    </div>
  );
}