import { useState, useEffect, useRef } from "react";
import { useLedger, useParty, useStreamQueries } from "@daml/react";
import { RWAInstrument } from "@daml.js/CantonSuite-0.1.0/lib/Finance/Instruments";
import { KYC } from "@daml.js/CantonSuite-0.1.0/lib/KYC";
import { RedemptionRequest } from "@daml.js/CantonSuite-0.1.0/lib/Redemption/Atomic";
import { Allocation } from "@daml.js/CantonSuite-0.1.0/lib/TokenStandard/Interfaces";
import { DividendClaim } from "@daml.js/CantonSuite-0.1.0/lib/Distribution/ClaimBased";
import * as Trade from "@daml.js/CantonSuite-0.1.0/lib/Trade";
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

// New Components
import BuyerStats from "../components/buyer/BuyerStats";
import BuyerMarketplace from "../components/buyer/BuyerMarketplace";
import BuyerPortfolio from "../components/buyer/BuyerPortfolio";
import BuyerYields from "../components/buyer/BuyerYields";
// Lending components for buyer
import LendingMarketTab from "../components/lending/LendingMarketTab";
import LendingPositionsTab from "../components/lending/LendingPositionsTab";
import LendingModals from "../components/lending/LendingModals";

export default function BuyerDashboard() {
  const ledger = useLedger();
  const party = useParty();
  const toast = useToast();
  const iam = CantonIAM.getInstance();

  const [activeTab, setActiveTab] = useState<"marketplace" | "portfolio" | "lending" | "yields">("marketplace");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Safely handle missing templates during initial load
  if (!Trade.ProposedTrade || !Trade.TradeAgreement) {
      return <div className="container" style={{textAlign:'center', marginTop:'20%', color:'var(--text-muted)'}}>Loading Application Resources...</div>;
  }

  const ProposedTemplate = Trade.ProposedTrade || Trade.TradeAgreement;
  const ApprovedTemplate = Trade.ApprovedTrade || Trade.TradeAgreement;

  // --- QUERY HOOKS ---
  const { contracts: kycContracts, loading: kycLoading } = useStreamQueries(KYC);
  const { contracts: assets } = useStreamQueries(RWAInstrument);
  const { contracts: allocations } = useStreamQueries(Allocation);
  const { contracts: redemptionRequests } = useStreamQueries(RedemptionRequest, () => [{ buyer: party }]);
  const { contracts: dividends, loading: divLoading } = useStreamQueries(DividendClaim);
  
  // --- LENDING QUERY HOOKS ---
  const { contracts: pools } = useStreamQueries(LendingPoolPool);
  const { contracts: myShares } = useStreamQueries(LenderShare, () => [{ lender: party }]);
  const { contracts: myLoans } = useStreamQueries(Loan, () => [{ borrower: party }]);
  const { contracts: myDepositRequests } = useStreamQueries(DepositRequest, () => [{ lender: party }]);
  const { contracts: myWithdrawalRequests } = useStreamQueries(WithdrawalRequest, () => [{ lender: party }]);
  const { contracts: myLoanRequests } = useStreamQueries(LoanRequest, () => [{ borrower: party }]);
  
  // --- SYNC QUERY HOOKS ---
  const { contracts: miningRounds } = useStreamQueries(MiningRoundReference);
  const { contracts: migrationRequests } = useStreamQueries(SynchronizerMigrationRequest, () => [{ requester: party }]);
  const { contracts: migrationWorkflows } = useStreamQueries(MigrationWorkflow, () => [{ requester: party }]);
  
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

  const [selectedAsset, setSelectedAsset] = useState<RWAInstrument | null>(null);
  
  // --- LENDING STATE ---
  const [showLendingModal, setShowLendingModal] = useState<"DEPOSIT" | "BORROW" | "REPAY" | "WITHDRAW" | "EXTEND_LOAN" | null>(null);
  const [selectedPool, setSelectedPool] = useState<any>(null);
  const [selectedShare, setSelectedShare] = useState<any>(null);
  const [selectedLoan, setSelectedLoan] = useState<any>(null);
  const [lendingAmount, setLendingAmount] = useState<string>("");
  const [collateralCid, setCollateralCid] = useState<string>("");
  const [collateralAmount, setCollateralAmount] = useState<string>("");
  const [extensionDays, setExtensionDays] = useState<string>("");
  
  // --- SYNC STATE ---
  const [showSyncModal, setShowSyncModal] = useState(false);
  const [syncIssue, setSyncIssue] = useState<string>("");
  const [pendingMigration, setPendingMigration] = useState<any>(null);
  
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
    const asset = assets.find(a => a.payload.instrument._1._2 === allocation.payload.instrument._1._2);
    const price = asset ? Number(asset.payload.pricePerUnit) : 0;
    const qty = Number(allocation.payload.quantity);
    return total + (price * qty);
  }, 0);

  const totalUnclaimedYield = dividends.reduce((sum, div) => sum + Number(div.payload.amount), 0);

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

  const handleCancelDeposit = async (cid: string) => {
    try { 
      await ledger.exercise(DepositRequest.CancelDepositRequest, cid as any, {}); 
      toast.showToast("Deposit Cancelled", "info"); 
    }
    catch(e:any) { toast.showToast(e.message, "error"); }
  };

  const handleCancelWithdrawal = async (cid: string) => {
    try { 
      await ledger.exercise(WithdrawalRequest.CancelWithdrawalRequest, cid as any, {}); 
      toast.showToast("Withdrawal Cancelled", "info"); 
    }
    catch(e:any) { toast.showToast(e.message, "error"); }
  };

  // --- LENDING HANDLERS ---
  const handleDeposit = async (pool: any) => {
    setSelectedPool(pool);
    setLendingAmount("");
    setShowLendingModal("DEPOSIT");
  };

  const handleBorrow = async (pool: any) => {
    setSelectedPool(pool);
    setLendingAmount("");
    setCollateralCid("");
    setCollateralAmount("");
    setShowLendingModal("BORROW");
  };

  const handleWithdraw = async (share: any) => {
    setSelectedShare(share);
    setLendingAmount("");
    setShowLendingModal("WITHDRAW");
  };

  const handleRepay = async (loan: any) => {
    setSelectedLoan(loan);
    setShowLendingModal("REPAY");
  };

  const handleExtend = async (loan: any) => {
    setSelectedLoan(loan);
    setExtensionDays("");
    setShowLendingModal("EXTEND_LOAN");
  };

  const submitDeposit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedPool || isSubmitting) return;
    
    const amountNum = Number(lendingAmount);
    if (amountNum <= 0) {
      toast.showToast("Amount must be greater than 0", "error");
      return;
    }

    setIsSubmitting(true);
    try {
      await ledger.create(DepositRequest, {
        lender: party,
        poolOperator: selectedPool.payload.poolOperator,
        assetId: selectedPool.payload.assetId,
        amount: amountNum.toFixed(2)
      });
      toast.showToast("Deposit request submitted", "success");
      setShowLendingModal(null);
      setLendingAmount("");
    } catch (err: any) {
      toast.showToast("Deposit failed: " + err.message, "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const submitBorrow = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedPool || isSubmitting) return;
    
    const amountNum = Number(lendingAmount);
    const collateralNum = Number(collateralAmount);
    
    if (amountNum <= 0 || collateralNum <= 0) {
      toast.showToast("Amounts must be greater than 0", "error");
      return;
    }

    if (!collateralCid) {
      toast.showToast("Please select collateral", "error");
      return;
    }

    setIsSubmitting(true);
    try {
      const collateralAllocation = allocations.find(a => a.contractId === collateralCid);
      if (!collateralAllocation) {
        throw new Error("Collateral allocation not found");
      }

      await ledger.create(LoanRequest, {
        borrower: party,
        poolOperator: selectedPool.payload.poolOperator,
        assetId: selectedPool.payload.assetId,
        requestedAmount: amountNum.toFixed(2),
        collateralAssetId: collateralAllocation.payload.assetId,
        collateralAmount: collateralNum.toFixed(2),
        collateralCid: collateralAllocation.contractId as any,
        durationDays: 30, // Default 30 days
        createdAt: new Date().toISOString(),
        complianceParty: selectedPool.payload.complianceParty,
        regulatorParty: selectedPool.payload.regulatorParty,
        miningRoundCid: miningRounds.length > 0 ? { tag: "Some", value: miningRounds[0].contractId } : { tag: "None" }
      });
      toast.showToast("Loan request submitted", "success");
      setShowLendingModal(null);
      setLendingAmount("");
      setCollateralCid("");
      setCollateralAmount("");
    } catch (err: any) {
      toast.showToast("Borrow request failed: " + err.message, "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const submitWithdrawal = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedShare || isSubmitting) return;
    
    const sharesNum = Number(lendingAmount);
    if (sharesNum <= 0) {
      toast.showToast("Shares must be greater than 0", "error");
      return;
    }

    if (sharesNum > Number(selectedShare.payload.shareAmount)) {
      toast.showToast("Insufficient shares", "error");
      return;
    }

    setIsSubmitting(true);
    try {
      await ledger.exercise(LenderShare.RequestWithdrawal, selectedShare.contractId, {
        sharesToWithdraw: sharesNum
      });
      toast.showToast("Withdrawal request submitted", "success");
      setShowLendingModal(null);
      setLendingAmount("");
    } catch (err: any) {
      toast.showToast("Withdrawal failed: " + err.message, "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const submitRepayment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedLoan || isSubmitting) return;

    setIsSubmitting(true);
    try {
      // Find a holding with the same asset for repayment
      const repaymentHolding = allocations.find(a => a.payload.assetId === selectedLoan.payload.assetId);
      if (!repaymentHolding) {
        throw new Error("No holding found for repayment");
      }

      const pool = pools.find(p => p.payload.assetId === selectedLoan.payload.assetId);
      if (!pool) {
        throw new Error("Pool not found");
      }

      await ledger.exercise(Loan.RepayLoan, selectedLoan.contractId, {
        repaymentHoldingCid: repaymentHolding.contractId as any,
        poolCid: pool.contractId,
        existingCollateralCid: { tag: "None" }
      });
      toast.showToast("Loan repaid successfully", "success");
      setShowLendingModal(null);
    } catch (err: any) {
      toast.showToast("Repayment failed: " + err.message, "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const submitExtension = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedLoan || isSubmitting) return;
    
    const daysNum = Number(extensionDays);
    if (daysNum <= 0) {
      toast.showToast("Days must be greater than 0", "error");
      return;
    }

    setIsSubmitting(true);
    try {
      await ledger.exercise(Loan.ExtendLoan, selectedLoan.contractId, {
        additionalDays: daysNum
      });
      toast.showToast(`Loan extended by ${daysNum} days`, "success");
      setShowLendingModal(null);
      setExtensionDays("");
    } catch (err: any) {
      toast.showToast("Extension failed: " + err.message, "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // --- SYNC HELPER FUNCTIONS ---
  
  const checkMiningRoundStatus = () => {
    if (miningRounds.length === 0) return { status: "no-round", message: "No active mining round" };
    
    const currentRound = miningRounds[0];
    const now = new Date();
    const expiresAt = new Date(currentRound.payload.expiresAt);
    const remainingSeconds = Math.floor((expiresAt.getTime() - now.getTime()) / 1000);
    
    if (remainingSeconds <= 0) {
      return { status: "expired", message: "Mining round expired" };
    } else if (remainingSeconds < 300) { // Less than 5 minutes
      return { 
        status: "warning", 
        message: `Only ${Math.floor(remainingSeconds / 60)} minutes left in mining round`,
        remainingSeconds 
      };
    } else {
      return { 
        status: "good", 
        message: `${Math.floor(remainingSeconds / 60)} minutes remaining in mining round`,
        remainingSeconds 
      };
    }
  };
  
  const handleSyncIssue = (issue: string) => {
    setSyncIssue(issue);
    setShowSyncModal(true);
  };
  
  const initiateMigration = async (targetSync: string) => {
    if (!selectedAsset) return;
    
    try {
      await ledger.create(SynchronizerMigrationRequest, {
        requester: party,
        issuer: selectedAsset.payload.tokenIssuer,
        holdingCid: selectedAsset.contractId as any,
        currentSync: "sandbox",
        targetSync: targetSync,
        reason: "Trading synchronization",
        requestedAt: new Date().toISOString(),
        deadline: new Date(Date.now() + 86400000).toISOString()
      });
      toast.showToast(`Migration to ${targetSync} requested`, "success");
      setShowSyncModal(false);
    } catch (e: any) {
      toast.showToast(e.message, "error");
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
    
    // --- CHECK MINING ROUND STATUS ---
    const miningStatus = checkMiningRoundStatus();
    if (miningStatus.status === "expired") {
      toast.showToast("Mining round expired. Please wait for next round.", "error");
      setIsSubmitting(false);
      return;
    }
    if (miningStatus.status === "warning") {
      toast.showToast(miningStatus.message, "warning");
    }
    
    const assetContract = assets.find(a => a.payload.instrument._2 === selectedAsset.payload.instrument._2);
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
        seller: selectedAsset.payload.tokenIssuer,
        assetIssuer: selectedAsset.payload.tokenIssuer,
        assetId: selectedAsset.payload.instrument._2,
        assetCid: assetContract.contractId,
        quantity: quantityNum.toFixed(2),  
        pricePerUnit: selectedAsset.payload.pricePerUnit,
        isPrimary: true,
        complianceParty: selectedAsset.payload.tokenIssuer,
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
      await ledger.exercise(DividendClaim.ClaimDividend, dividend.contractId, {});
      toast.showToast(`Claimed ${Number(dividend.payload.amount).toFixed(2)}`, "success");
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
        <button onClick={() => setActiveTab("lending")} style={{ padding: '1rem 2rem', background: activeTab === "lending" ? 'var(--primary)' : 'transparent', color: activeTab === "lending" ? 'white' : 'var(--text)', border: 'none', borderBottom: activeTab === "lending" ? '3px solid var(--primary)' : 'none', cursor: 'pointer', fontWeight: activeTab === "lending" ? 'bold' : 'normal', transition: 'all 0.2s' }}>DeFi Lending {myShares.length > 0 && <span className="badge badge-blue" style={{marginLeft: '0.5rem'}}>{myShares.length}</span>}</button>
        <button onClick={() => setActiveTab("yields")} style={{ padding: '1rem 2rem', background: activeTab === "yields" ? 'var(--primary)' : 'transparent', color: activeTab === "yields" ? 'white' : 'var(--text)', border: 'none', borderBottom: activeTab === "yields" ? '3px solid var(--primary)' : 'none', cursor: 'pointer', fontWeight: activeTab === "yields" ? 'bold' : 'normal', transition: 'all 0.2s' }}>Yield & Dividends {dividends.length > 0 && <span className="badge badge-green" style={{marginLeft: '0.5rem'}}>{dividends.length}</span>}</button>
      </div>

      <BuyerStats isApproved={isApproved} isPending={isPending} isRejected={isRejected} isSubmitting={isSubmitting} portfolioValue={portfolioValue} totalUnclaimedYield={totalUnclaimedYield} activeOrdersCount={allActiveTrades.length} onStartKYC={handleStartKYC} />

      {activeTab === "marketplace" && (
        <div>
          {/* Mining Round Status Indicator */}
          <div className="card" style={{marginBottom: '1rem'}}>
            <div className="flex-between">
              <span>⏱️ Mining Round Status</span>
              <div className={`badge ${checkMiningRoundStatus().status === 'good' ? 'badge-success' : checkMiningRoundStatus().status === 'warning' ? 'badge-yellow' : 'badge-red'}`}>
                {checkMiningRoundStatus().message}
              </div>
            </div>
          </div>
          
          <BuyerMarketplace 
            assets={assets} 
            activeTrades={allActiveTrades} 
            isApproved={isApproved} 
            isPending={isPending} 
            onSelectAsset={(asset) => setSelectedAsset(asset)} 
          />
        </div>
      )}
      {activeTab === "portfolio" && <BuyerPortfolio allocations={allocations} assets={assets} redemptionRequests={redemptionRequests} onRedeem={(alloc) => { setRedemptionForm({ allocation: alloc, quantity: "", reason: "" }); setIsRedemptionModalOpen(true); }} />}
      {activeTab === "lending" && (
        <div className="flex-column" style={{ gap: '2rem' }}>
          <LendingMarketTab 
            pools={pools} 
            isIssuer={false} 
            isParticipant={true} 
            onDeposit={handleDeposit}
            onBorrow={handleBorrow}
          />
          <LendingPositionsTab 
            myShares={myShares} 
            myLoans={myLoans} 
            myDepositRequests={myDepositRequests} 
            myWithdrawalRequests={myWithdrawalRequests} 
            myRequests={myLoanRequests} 
            pools={pools}
            onWithdraw={handleWithdraw}
            onCancelDeposit={handleCancelDeposit}
            onCancelWithdrawal={handleCancelWithdrawal}
            onRepay={handleRepay}
            onExtend={handleExtend}
          />
        </div>
      )}
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

      {/* LENDING MODALS */}
      <LendingModals
        type={showLendingModal}
        onClose={() => !isSubmitting && setShowLendingModal(null)}
        isSubmitting={isSubmitting}
        onDeposit={submitDeposit}
        onWithdraw={submitWithdrawal}
        onBorrow={submitBorrow}
        onRepay={submitRepayment}
        onExtend={submitExtension}
        onCreatePool={() => {}}
        onUpdateRate={() => {}}
        assets={assets}
        allocations={allocations}
        selectedPool={selectedPool}
        selectedShare={selectedShare}
        selectedLoan={selectedLoan}
        amount={lendingAmount}
        setAmount={setLendingAmount}
        newRate=""
        setNewRate={() => {}}
        extensionDays={extensionDays}
        setExtensionDays={setExtensionDays}
        collateralCid={collateralCid}
        setCollateralCid={setCollateralCid}
        collateralAmount={collateralAmount}
        setCollateralAmount={setCollateralAmount}
        newPool={{ assetId: "", rate: "", ratio: "" }}
        setNewPool={() => {}}
      />

      {/* SYNC ISSUES MODAL */}
      <Modal isOpen={showSyncModal} onClose={() => setShowSyncModal(false)} title="Synchronization Required">
        <div className="flex-column" style={{gap: '1.5rem'}}>
          <div className="card" style={{background: 'var(--bg-warning)', border: '1px solid var(--warning)'}}>
            <h4>⚠️ Synchronization Issue</h4>
            <p>{syncIssue}</p>
          </div>
          
          <div>
            <h5>Mining Round Status</h5>
            <div className={`badge ${checkMiningRoundStatus().status === 'good' ? 'badge-success' : checkMiningRoundStatus().status === 'warning' ? 'badge-yellow' : 'badge-red'}`}>
              {checkMiningRoundStatus().message}
            </div>
          </div>
          
          <div>
            <h5>Available Actions</h5>
            <div className="flex-column" style={{gap: '0.5rem'}}>
              <button className="btn-outline" onClick={() => initiateMigration('global')}>
                Migrate to Global Sync
              </button>
              <button className="btn-outline" onClick={() => initiateMigration('institutional-sync')}>
                Migrate to Institutional Sync
              </button>
              <button className="btn-secondary" onClick={() => setShowSyncModal(false)}>
                Cancel
              </button>
            </div>
          </div>
          
          {migrationRequests.length > 0 && (
            <div>
              <h5>Pending Migration Requests</h5>
              {migrationRequests.map(req => (
                <div key={req.contractId} className="flex-between" style={{padding: '0.5rem', background: 'var(--bg-dark)', borderRadius: '4px'}}>
                  <span>To {req.payload.targetSync}</span>
                  <span className="badge badge-yellow">Pending</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
}