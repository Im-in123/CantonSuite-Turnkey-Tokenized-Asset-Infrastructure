import React, { useState, useEffect, useRef } from "react";
import { useLedger, useParty, useStreamQueries } from "@daml/react";
import { Asset } from "@daml.js/CantonSuite-0.0.1/lib/Assets";
import { KYC } from "@daml.js/CantonSuite-0.0.1/lib/KYC";
import { Allocation } from "@daml.js/CantonSuite-0.0.1/lib/Portfolio";
import { RedemptionRequest } from "@daml.js/CantonSuite-0.0.1/lib/Redemption";
import { Dividend } from "@daml.js/CantonSuite-0.0.1/lib/Distribution";
import * as Trade from "@daml.js/CantonSuite-0.0.1/lib/Trade";
import Modal from "../components/Modal"; 
import { useToast } from "../context/ToastContext";
import { useStreamNotification } from "../hooks/useStreamNotification";
import CantonIAM from "../services/CantonIAM";

// New Components
import BuyerStats from "../components/buyer/BuyerStats";
import BuyerMarketplace from "../components/buyer/BuyerMarketplace";
import BuyerPortfolio from "../components/buyer/BuyerPortfolio";
import BuyerYields from "../components/buyer/BuyerYields";

export default function BuyerDashboard() {
  const ledger = useLedger();
  const party = useParty();
  const toast = useToast();
  const iam = CantonIAM.getInstance();

  const [activeTab, setActiveTab] = useState<"marketplace" | "portfolio" | "yields">("marketplace");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Safely handle missing templates during initial load
  if (!Trade.ProposedTrade || !Trade.TradeAgreement) {
      return <div className="container" style={{textAlign:'center', marginTop:'20%', color:'var(--text-muted)'}}>Loading Application Resources...</div>;
  }

  const ProposedTemplate = Trade.ProposedTrade || Trade.TradeAgreement;
  const ApprovedTemplate = Trade.ApprovedTrade || Trade.TradeAgreement;

  // --- QUERY HOOKS ---
  const { contracts: kycContracts, loading: kycLoading } = useStreamQueries(KYC);
  const { contracts: assets } = useStreamQueries(Asset);
  const { contracts: allocations } = useStreamQueries(Allocation);
  const { contracts: redemptionRequests } = useStreamQueries(RedemptionRequest, () => [{ buyer: party }]);
  const { contracts: dividends, loading: divLoading } = useStreamQueries(Dividend, () => [{ owner: party }]);
  
  const { contracts: proposed } = useStreamQueries(ProposedTemplate, () => [{ buyer: party }]);
  const { contracts: agreed } = useStreamQueries(Trade.TradeAgreement, () => [{ buyer: party }]);
  const { contracts: approved } = useStreamQueries(ApprovedTemplate, () => [{ buyer: party }]);

  useStreamNotification(dividends, "Dividend Payment", divLoading);
  
  const hasCheckedInitialKYC = useRef(false);
  const [wasApproved, setWasApproved] = useState(false);

  useEffect(() => {
      if (kycLoading) return;
      const isNowApproved = kycContracts.some(k => k.payload.status === "KApproved");
      if (!hasCheckedInitialKYC.current) {
          setWasApproved(isNowApproved);
          hasCheckedInitialKYC.current = true;
          return;
      }
      if (!wasApproved && isNowApproved) {
          toast.showToast("🎉 Identity Verified! You can now trade.", "success");
          setWasApproved(true);
      }
  }, [kycContracts, kycLoading, wasApproved]);

  const realApproved = Trade.ApprovedTrade ? approved : [];

  const [selectedAsset, setSelectedAsset] = useState<Asset | null>(null);
  
  // FIXED: Use string state for inputs to prevent NaN and backspace issues
  const [buyQty, setBuyQty] = useState<string>(""); 
  
  const [isRedemptionModalOpen, setIsRedemptionModalOpen] = useState(false);
  const [redemptionForm, setRedemptionForm] = useState({
    allocation: null as any,
    quantity: "" as string,  
    reason: ""
  });

  const isApproved = kycContracts.some(k => k.payload.status === "KApproved");
  const isRejected = !isApproved && kycContracts.some(k => k.payload.status === "KRejected");
  const isPending = !isApproved && !isRejected && kycContracts.some(k => k.payload.status === "KPending");

  const portfolioValue = allocations.reduce((total, allocation) => {
    const asset = assets.find(a => a.payload.assetId === allocation.payload.assetId);
    const price = asset ? Number(asset.payload.pricePerUnit) : 0;
    const qty = Number(allocation.payload.quantity);
    return total + (price * qty);
  }, 0);

  const totalUnclaimedYield = dividends.reduce((sum, div) => sum + Number(div.payload.cashAmount), 0);

  const getParty = (role: string) => {
      return iam.getPartyByRole(role);
  };

  const handleStartKYC = async () => {
    if (isPending || isApproved || isSubmitting) return;
    setIsSubmitting(true);
    
    const complianceParty = getParty("Compliance");
    if (!complianceParty) {
      toast.showToast("System Error: Compliance party not found.", "error");
      setIsSubmitting(false);
      return;
    }
    try {
        await ledger.create(KYC, { buyer: party, compliance: complianceParty, status: "KPending" });
        toast.showToast("KYC Application Submitted", "success");
    } catch (e: any) { 
        console.error(e);
        toast.showToast("Failed to submit KYC", "error"); 
    } finally {
        setIsSubmitting(false);
    }
  };

  const submitTrade = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedAsset || isSubmitting) return;
    
    // FIXED: Convert string to number for validation
    const quantityNum = Number(buyQty);

    if (quantityNum <= 0) {
        toast.showToast("Quantity must be greater than 0", "error");
        return;
    }

    setIsSubmitting(true);
    
    const assetContract = assets.find(a => a.payload.assetId === selectedAsset.assetId);
    if (!assetContract) { setIsSubmitting(false); return; }

    const regulatorParty = getParty("Regulator");
    if (!regulatorParty) {
      toast.showToast("Regulator node offline. Cannot trade.", "error");
      setIsSubmitting(false);
      return;
    }

    try {
      await ledger.create(Trade.ProposedTrade, {
        buyer: party,
        seller: selectedAsset.issuer,
        assetIssuer: selectedAsset.issuer,
        assetId: selectedAsset.assetId,
        assetCid: assetContract.contractId,
        quantity: quantityNum.toFixed(2),  
        pricePerUnit: selectedAsset.pricePerUnit,
        isPrimary: true,
        complianceParty: selectedAsset.compliance,
        regulatorParty: regulatorParty,
        createdAt: new Date().toISOString()
      });
      toast.showToast("Trade Request Sent to Issuer", "success");
      setSelectedAsset(null);
      setBuyQty(""); // Reset to empty
    } catch (err: any) {
      toast.showToast("Trade Failed: " + err.message, "error");
    } finally {
        setIsSubmitting(false);
    }
  };

  const handleRequestRedemption = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!redemptionForm.allocation || isSubmitting) return;

    // FIXED: Convert string to number
    const quantityNum = Number(redemptionForm.quantity);

    if (quantityNum <= 0) {
        toast.showToast("Redemption quantity must be greater than 0", "error");
        return;
    }

    setIsSubmitting(true);
    try {
      await ledger.create(RedemptionRequest, {
        buyer: party,
        issuer: redemptionForm.allocation.payload.issuer,
        assetId: redemptionForm.allocation.payload.assetId,
        quantity: quantityNum.toFixed(2),
        reason: redemptionForm.reason
      });
      toast.showToast("Redemption request submitted", "success");
      setIsRedemptionModalOpen(false);
      setRedemptionForm({ allocation: null, quantity: "", reason: "" });
    } catch (err: any) {
      toast.showToast("Failed to submit redemption: " + err.message, "error");
    } finally {
        setIsSubmitting(false);
    }
  };

  const [claimingIds, setClaimingIds] = useState<Set<string>>(new Set());
  const handleClaimDividend = async (dividend: any) => {
    if (claimingIds.has(dividend.contractId)) return;
    setClaimingIds(prev => new Set(prev).add(dividend.contractId));
    try {
      await ledger.exercise(Dividend.ClaimDividend, dividend.contractId, {});
      toast.showToast(`Claimed ${Number(dividend.payload.cashAmount).toFixed(2)}`, "success");
    } catch (err: any) {
      if (!err.message?.includes("CONTRACT_NOT_ACTIVE")) {
        toast.showToast("Failed to claim: " + err.message, "error");
      }
    } finally {
      setClaimingIds(prev => { const next = new Set(prev); next.delete(dividend.contractId); return next; });
    }
  };

  const allActiveTrades = [
      ...proposed.map(t => ({...t, status: "Waiting for Issuer"})),
      ...agreed.map(t => ({...t, status: "In Compliance Review"})),
      ...realApproved.map(t => ({...t, status: "Settling..."}))
  ];

  return (
    <div>
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem', borderBottom: '2px solid var(--border)' }}>
        <button onClick={() => setActiveTab("marketplace")} style={{ padding: '1rem 2rem', background: activeTab === "marketplace" ? 'var(--primary)' : 'transparent', color: activeTab === "marketplace" ? 'white' : 'var(--text)', border: 'none', borderBottom: activeTab === "marketplace" ? '3px solid var(--primary)' : 'none', cursor: 'pointer', fontWeight: activeTab === "marketplace" ? 'bold' : 'normal', transition: 'all 0.2s' }}>Marketplace</button>
        <button onClick={() => setActiveTab("portfolio")} style={{ padding: '1rem 2rem', background: activeTab === "portfolio" ? 'var(--primary)' : 'transparent', color: activeTab === "portfolio" ? 'white' : 'var(--text)', border: 'none', borderBottom: activeTab === "portfolio" ? '3px solid var(--primary)' : 'none', cursor: 'pointer', fontWeight: activeTab === "portfolio" ? 'bold' : 'normal', transition: 'all 0.2s' }}>Portfolio & Redemptions</button>
        <button onClick={() => setActiveTab("yields")} style={{ padding: '1rem 2rem', background: activeTab === "yields" ? 'var(--primary)' : 'transparent', color: activeTab === "yields" ? 'white' : 'var(--text)', border: 'none', borderBottom: activeTab === "yields" ? '3px solid var(--primary)' : 'none', cursor: 'pointer', fontWeight: activeTab === "yields" ? 'bold' : 'normal', transition: 'all 0.2s' }}>Yield & Dividends {dividends.length > 0 && <span className="badge badge-green" style={{marginLeft: '0.5rem'}}>{dividends.length}</span>}</button>
      </div>

      <BuyerStats isApproved={isApproved} isPending={isPending} isRejected={isRejected} isSubmitting={isSubmitting} portfolioValue={portfolioValue} totalUnclaimedYield={totalUnclaimedYield} activeOrdersCount={allActiveTrades.length} onStartKYC={handleStartKYC} />

      {activeTab === "marketplace" && <BuyerMarketplace assets={assets} activeTrades={allActiveTrades} isApproved={isApproved} isPending={isPending} onSelectAsset={(asset) => setSelectedAsset(asset)} />}
      {activeTab === "portfolio" && <BuyerPortfolio allocations={allocations} assets={assets} redemptionRequests={redemptionRequests} onRedeem={(alloc) => { setRedemptionForm({ allocation: alloc, quantity: "", reason: "" }); setIsRedemptionModalOpen(true); }} />}
      {activeTab === "yields" && <BuyerYields dividends={dividends} allocations={allocations} totalUnclaimedYield={totalUnclaimedYield} claimingIds={claimingIds} onClaim={handleClaimDividend} />}

      <Modal isOpen={!!selectedAsset} onClose={() => !isSubmitting && setSelectedAsset(null)} title="Place Order">
        <form onSubmit={submitTrade}>
            <div style={{background:'var(--bg-dark)', padding:'1rem', borderRadius:'8px', marginBottom:'1.5rem'}}>
                <div className="flex-between" style={{marginBottom:'0.5rem'}}><span className="text-muted">Asset</span><span>{selectedAsset?.name}</span></div>
                <div className="flex-between" style={{marginBottom:'0.5rem'}}><span className="text-muted">Price per unit</span><span>${Number(selectedAsset?.pricePerUnit)}</span></div>
            </div>
            <div style={{marginBottom:'1rem'}}>
                <label style={{display:'block', marginBottom:'0.5rem', fontSize:'0.9rem'}}>Quantity to Buy</label>
                {/* FIXED: Uses string state, min="0", step="any" */}
                <input 
                    type="number" 
                    className="input-field" 
                    style={{width:'100%', padding:'0.8rem', fontSize:'1.1rem'}} 
                    value={buyQty} 
                    onChange={e => setBuyQty(e.target.value)} 
                    max={Number(selectedAsset?.availableSupply)} 
                    min="0"
                    step="any" 
                    placeholder="0.00"
                    required 
                    disabled={isSubmitting} 
                />
            </div>
            <div className="flex-between" style={{marginBottom:'1.5rem', padding:'1rem', borderTop:'1px solid var(--border)'}}>
                <span>Total Estimated Cost</span>
                <span style={{fontSize:'1.2rem', fontWeight:'bold'}}>${(Number(buyQty) * Number(selectedAsset?.pricePerUnit || 0)).toFixed(2)}</span>
            </div>
            <button type="submit" className="btn-primary" style={{width:'100%'}} disabled={isSubmitting}>{isSubmitting ? "Sending Order..." : "Confirm Purchase"}</button>
        </form>
      </Modal>

      <Modal isOpen={isRedemptionModalOpen} onClose={() => !isSubmitting && setIsRedemptionModalOpen(false)} title="Request Redemption">
        <form onSubmit={handleRequestRedemption} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {redemptionForm.allocation && (<div style={{ background: 'var(--bg-dark)', padding: '1rem', borderRadius: '8px' }}><div className="flex-between" style={{ marginBottom: '0.5rem' }}><span className="text-muted">Asset</span><span>{redemptionForm.allocation.payload.assetId}</span></div><div className="flex-between"><span className="text-muted">Available Balance</span><span>{Number(redemptionForm.allocation.payload.quantity).toLocaleString()} units</span></div></div>)}
          <div>
              <label style={{ display: 'block', marginBottom: '0.5rem' }}>Quantity to Redeem</label>
              {/* FIXED: Uses string state, min="0", step="any" */}
              <input 
                  type="number" 
                  className="input-field" 
                  style={{ width: '100%', padding: '0.8rem' }} 
                  value={redemptionForm.quantity} 
                  onChange={e => setRedemptionForm({ ...redemptionForm, quantity: e.target.value })} 
                  max={redemptionForm.allocation ? Number(redemptionForm.allocation.payload.quantity) : 0} 
                  min="0"
                  step="any"
                  placeholder="0.00"
                  required 
                  disabled={isSubmitting} 
              />
          </div>
          <div><label style={{ display: 'block', marginBottom: '0.5rem' }}>Reason for Redemption</label><textarea className="input-field" style={{ width: '100%', padding: '0.8rem', minHeight: '80px' }} value={redemptionForm.reason} onChange={e => setRedemptionForm({ ...redemptionForm, reason: e.target.value })} placeholder="e.g., Liquidity needs, portfolio rebalancing..." required disabled={isSubmitting} /></div>
          <button type="submit" className="btn-primary" style={{ width: '100%' }} disabled={isSubmitting}>{isSubmitting ? "Submitting..." : "Submit Redemption Request"}</button>
        </form>
      </Modal>
    </div>
  );
}