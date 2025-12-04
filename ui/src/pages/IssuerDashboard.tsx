import React, { useState } from "react";
import { useLedger, useParty, useStreamQueries } from "@daml/react";
import { ContractId } from "@daml/types";
import { Asset, DraftAsset } from "@daml.js/CantonSuite-0.0.1/lib/Assets";
import * as Trade from "@daml.js/CantonSuite-0.0.1/lib/Trade";
import { Allocation } from "@daml.js/CantonSuite-0.0.1/lib/Portfolio";
import { RedemptionRequest } from "@daml.js/CantonSuite-0.0.1/lib/Redemption";
import { DividendAnnouncement } from "@daml.js/CantonSuite-0.0.1/lib/Distribution";
import Modal from "../components/Modal";
import { useToast } from "../context/ToastContext";
import { useStreamNotification } from "../hooks/useStreamNotification";
import CantonIAM from "../services/CantonIAM";

import IssuerAssetTab from "../components/issuer/IssuerAssetTab";
import IssuerRedemptionTab from "../components/issuer/IssuerRedemptionTab";
import IssuerYieldTab from "../components/issuer/IssuerYieldTab";

export default function IssuerDashboard() {
  const ledger = useLedger();
  const party = useParty();
  const toast = useToast();
  const iam = CantonIAM.getInstance();

  const [activeTab, setActiveTab] = useState<"assets" | "redemptions" | "yields">("assets");
  const [processingIds, setProcessingIds] = useState<Set<string>>(new Set()); 
  const [isSubmitting, setIsSubmitting] = useState(false); 

  // --- QUERY HOOKS ---
  
  // 1. Fetch ALL visible assets (includes other issuers' assets because of Public read rights)
  const { contracts: allAssets } = useStreamQueries(Asset);

  // 2. FILTER: Create a list of only the assets *I* issued for management
  const myAssets = allAssets.filter(a => a.payload.issuer === party);

  const { contracts: drafts } = useStreamQueries(DraftAsset);
  const { contracts: allocations } = useStreamQueries(Allocation, () => [{ issuer: party }]);
  const { contracts: redemptionRequests, loading: redLoading } = useStreamQueries(RedemptionRequest, () => [{ issuer: party }]);
  const { contracts: announcements } = useStreamQueries(DividendAnnouncement, () => [{ issuer: party }]);
  
  const ProposedTemplate = Trade.ProposedTrade || Trade.TradeAgreement;
  const ApprovedTemplate = Trade.ApprovedTrade || Trade.TradeAgreement;
  const AgreementTemplate = Trade.TradeAgreement; 
  
  const { contracts: requests, loading: reqLoading } = useStreamQueries(ProposedTemplate, () => [{ seller: party }]);
  const { contracts: pendingSettlements } = useStreamQueries(AgreementTemplate, () => [{ assetIssuer: party }]);
  const { contracts: settlements } = useStreamQueries(ApprovedTemplate, () => [{ assetIssuer: party }]);
  
  useStreamNotification(requests, "Buy Order", reqLoading);
  useStreamNotification(redemptionRequests, "Redemption Request", redLoading);

  // --- STATE ---
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [newAsset, setNewAsset] = useState({ id: "", name: "", type: "Equity", supply: 1000, price: 10 });
  const [selectedAsset, setSelectedAsset] = useState<Asset | null>(null);
  const [manageCid, setManageCid] = useState<any>(null);
  const [actionType, setActionType] = useState<"Mint" | "Burn" | "UpdatePrice">("Mint");
  const [actionValue, setActionValue] = useState(0);
  const [isYieldModalOpen, setIsYieldModalOpen] = useState(false);
  const [yieldForm, setYieldForm] = useState({ assetId: "", label: "", perUnitAmount: 0 });

  const eligibleHoldersCount = yieldForm.assetId 
    ? new Set(allocations.filter(a => a.payload.assetId === yieldForm.assetId).map(a => a.payload.owner)).size 
    : 0;

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

  const handleCreateDraft = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    const complianceParty = iam.getPartyByRole('Compliance');
    const regulatorParty = iam.getPartyByRole('Regulator');
    if (!complianceParty) { toast.showToast("System Error: Compliance party not found.", "error"); setIsSubmitting(false); return; }
    const observersList = [regulatorParty].filter(Boolean) as string[];

    try {
      await ledger.create(DraftAsset, {
        draftIssuer: party,
        compliance: complianceParty,
        assetId: newAsset.id,
        name: newAsset.name,
        assetType: newAsset.type,
        totalSupply: newAsset.supply.toFixed(1),
        fractionalized: true,
        pricePerUnit: newAsset.price.toFixed(2),
        availableSupply: newAsset.supply.toFixed(1),
        observers: observersList
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
        if (actionType === "Mint") await ledger.exercise(Asset.Mint, manageCid, { amount: actionValue.toFixed(1) });
        else if (actionType === "Burn") await ledger.exercise(Asset.Burn, manageCid, { amount: actionValue.toFixed(1) });
        else if (actionType === "UpdatePrice") await ledger.exercise(Asset.UpdatePrice, manageCid, { newPrice: actionValue.toFixed(2) });
        toast.showToast(`${actionType} Executed Successfully`, "success");
        setSelectedAsset(null);
        setManageCid(null);
    } catch (err: any) { toast.showToast(err.message, "error"); } finally { setIsSubmitting(false); }
  };

  const handleCreateYieldAnnouncement = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    const complianceParty = iam.getPartyByRole('Compliance');
    const regulatorParty = iam.getPartyByRole('Regulator');
    if (!complianceParty || !regulatorParty) { toast.showToast("System Error: Compliance or Regulator party not found.", "error"); return; }
    setIsSubmitting(true);
    try {
      await ledger.create(DividendAnnouncement, {
        issuer: party,
        assetId: yieldForm.assetId,
        label: yieldForm.label,
        perUnitAmount: yieldForm.perUnitAmount.toFixed(2),
        distributionDate: new Date().toISOString(),
        compliance: complianceParty,
        regulator: regulatorParty
      });
      toast.showToast("Yield announcement created", "success");
      setIsYieldModalOpen(false);
      setYieldForm({ assetId: "", label: "", perUnitAmount: 0 });
    } catch (err: any) { toast.showToast(err.message, "error"); } finally { setIsSubmitting(false); }
  };

  const acceptTrade = (cid: any) => execute(cid, () => ledger.exercise(Trade.ProposedTrade.SellerAccept, cid, {}), "Trade Accepted");
  const finalizeTrade = (cid: any) => execute(cid, () => ledger.exercise(Trade.ApprovedTrade.Finalize, cid, {}), "Trade Finalized & Settled");
  const toggleFraction = (cid: any) => execute(cid, () => ledger.exercise(Asset.ToggleFractionalized, cid, {}), "Fractionalization Toggled");
  
  const handleApproveRedemption = (req: any) => execute(req.contractId, async () => {
      // Find asset in myAssets (since I issued it)
      const asset = myAssets.find(a => a.payload.assetId === req.payload.assetId);
      if (!asset) throw new Error("Asset not found");
      await ledger.exercise(RedemptionRequest.ApproveRedemption, req.contractId, { assetCid: asset.contractId });
  }, "Redemption Approved");
  
  const handleDistributeYield = (ann: any) => execute(ann.contractId, async () => {
      const holders = allocations.filter(a => a.payload.assetId === ann.payload.assetId);
      if (holders.length === 0) throw new Error("No token holders found");
      const uniqueHolders = new Map<string, { owner: string; quantity: number }>();
      holders.forEach(h => {
        const key = h.payload.owner;
        const exist = uniqueHolders.get(key);
        uniqueHolders.set(key, { owner: key, quantity: (exist?.quantity || 0) + Number(h.payload.quantity) });
      });
      const holdersList = Array.from(uniqueHolders.values()).map(h => ({ _1: h.owner, _2: h.quantity.toFixed(1) }));
      await ledger.exercise(DividendAnnouncement.DistributeToAll, ann.contractId, { holders: holdersList });
  }, "Yield Distributed");
  
  const cancelAnnouncement = (cid: string) => execute(cid, () => ledger.exercise(DividendAnnouncement.CancelAnnouncement, cid as ContractId<DividendAnnouncement>, {}), "Announcement Cancelled");

  const totalRedemptionValue = redemptionRequests.reduce((sum, req) => {
    // Use allAssets here just in case, but usually myAssets is sufficient
    const asset = allAssets.find(a => a.payload.assetId === req.payload.assetId);
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
      {activeTab === "redemptions" && <IssuerRedemptionTab redemptionRequests={redemptionRequests} assets={myAssets} totalRedemptionValue={totalRedemptionValue} processingIds={processingIds} onApprove={handleApproveRedemption} />}
      {activeTab === "yields" && <IssuerYieldTab announcements={announcements} activeHolderCount={new Set(allocations.map(a => a.payload.owner)).size} allocations={allocations} processingIds={processingIds} onOpenModal={() => setIsYieldModalOpen(true)} onDistribute={handleDistributeYield} onCancel={cancelAnnouncement} />}

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

      <Modal isOpen={isYieldModalOpen} onClose={() => !isSubmitting && setIsYieldModalOpen(false)} title="Announce Yield Distribution">
        <form onSubmit={handleCreateYieldAnnouncement} style={{display:'flex', flexDirection:'column', gap:'1rem'}}>
          <div>
            <label>Asset ID</label>
            <select className="input-field" value={yieldForm.assetId} onChange={e => setYieldForm({...yieldForm, assetId: e.target.value})} required disabled={isSubmitting}>
              <option value="">Select Asset</option>
              {/* UPDATED: Only show my assets in the dropdown */}
              {myAssets.map(a => (<option key={a.contractId} value={a.payload.assetId}>{a.payload.name} ({a.payload.assetId})</option>))}
            </select>
            {yieldForm.assetId && (
              <div style={{ marginTop: '0.5rem', fontSize: '0.85rem', color: 'var(--success)', background: 'rgba(16, 185, 129, 0.1)', padding: '0.5rem', borderRadius: '4px' }}>
                ✓ {eligibleHoldersCount} investor{eligibleHoldersCount !== 1 ? 's' : ''} currently hold this asset.
              </div>
            )}
          </div>
          <div><label>Label</label><input placeholder="e.g., Q4 2025 Rental Income" value={yieldForm.label} onChange={e => setYieldForm({...yieldForm, label: e.target.value})} className="input-field" required disabled={isSubmitting} /></div>
          <div><label>Amount Per Token Unit</label><input placeholder="0.00" type="number" step="0.01" value={yieldForm.perUnitAmount} onChange={e => setYieldForm({...yieldForm, perUnitAmount: parseFloat(e.target.value)})} className="input-field" required disabled={isSubmitting} /></div>
          <button type="submit" className="btn-primary" disabled={isSubmitting}>{isSubmitting ? "Announcing..." : "Create Announcement"}</button>
        </form>
      </Modal>
    </div>
  );
}