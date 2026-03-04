import React, { useState } from "react";
import { useLedger, useParty, useStreamQueries } from "@daml/react";
import { ContractId } from "@daml/types"; 
import { Allocation } from "@daml.js/CantonSuite-0.0.1/lib/Portfolio";
import { Asset } from "@daml.js/CantonSuite-0.0.1/lib/Assets";
import { 
  LendingPool, 
  LenderShare,
  DepositRequest, 
  WithdrawalRequest, 
  LoanRequest, 
  Loan,
  LendingRegulatorView 
} from "@daml.js/CantonSuite-0.0.1/lib/Lending";
import { useToast } from "../context/ToastContext";
import { LoadingSpinner } from "../components/LoadingSpinner";
import CantonIAM from "../services/CantonIAM";

import LendingMarketTab from "../components/lending/LendingMarketTab";
import LendingPositionsTab from "../components/lending/LendingPositionsTab";
import LendingRequestsTab from "../components/lending/LendingRequestsTab";
import LendingAuditTab from "../components/lending/LendingAuditTab";
import LendingModals from "../components/lending/LendingModals";

interface LendingDashboardProps {
  userRole: string;
}

export default function LendingDashboard({ userRole }: LendingDashboardProps) {
  const ledger = useLedger();
  const party = useParty();
  const toast = useToast();
  const iam = CantonIAM.getInstance();

  const [activeTab, setActiveTab] = useState<"market" | "positions" | "requests" | "audit">("market");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isRegulator = userRole === "Regulator";
  const isCompliance = userRole === "Compliance";
  const isIssuer = userRole === "Issuer";
  const isParticipant = !isRegulator && !isCompliance;

  const { contracts: pools, loading: poolsLoading } = useStreamQueries(LendingPool);
  const { contracts: assets } = useStreamQueries(Asset);
  const { contracts: allocations } = useStreamQueries(Allocation); 
  const { contracts: allShares } = useStreamQueries(LenderShare);
  
  const myShares = isParticipant ? allShares.filter(d => d.payload.lender === party) : [];
  const { contracts: myLoans } = useStreamQueries(Loan, () => isParticipant ? [{ borrower: party }] : []);
  const { contracts: myRequests } = useStreamQueries(LoanRequest, () => isParticipant ? [{ borrower: party }] : []);
  const { contracts: myDepositRequests } = useStreamQueries(DepositRequest, () => isParticipant ? [{ lender: party }] : []);
  const { contracts: myWithdrawalRequests } = useStreamQueries(WithdrawalRequest, () => isParticipant ? [{ lender: party }] : []);

  const { contracts: issuerLoanRequests } = useStreamQueries(LoanRequest, () => isIssuer ? [{ poolOperator: party }] : []);
  const { contracts: issuerActiveLoans } = useStreamQueries(Loan, () => isIssuer ? [{ lender: party }] : []);
  const { contracts: depositRequests } = useStreamQueries(DepositRequest, () => isIssuer ? [{ poolOperator: party }] : []);
  const { contracts: withdrawalRequests } = useStreamQueries(WithdrawalRequest, () => isIssuer ? [{ poolOperator: party }] : []);
  
  const { contracts: allLoanRequests } = useStreamQueries(LoanRequest);
  const { contracts: regulatorViews } = useStreamQueries(LendingRegulatorView);

  // ---   Filter lists for Issuer ---
  const myPools = pools.filter(p => p.payload.poolOperator === party);
  const myAssets = assets.filter(a => a.payload.issuer === party);

  const [modalType, setModalType] = useState<"DEPOSIT" | "BORROW" | "REPAY" | "CREATE_POOL" | "WITHDRAW" | "UPDATE_RATE" | "EXTEND_LOAN" | null>(null);
  const [selectedPool, setSelectedPool] = useState<any>(null);
  const [selectedLoan, setSelectedLoan] = useState<any>(null);
  const [selectedShare, setSelectedShare] = useState<any>(null);
  
  const [amount, setAmount] = useState("");
  const [collateralCid, setCollateralCid] = useState(""); 
  const [collateralAmount, setCollateralAmount] = useState("");
  const [duration, setDuration] = useState("30");
  const [extensionDays, setExtensionDays] = useState("30");
  const [newRate, setNewRate] = useState("");
  const [newPool, setNewPool] = useState({ assetId: "", rate: "5.0", ratio: "150" });

  const calculateTotalMyLiquidity = () => {
    return myShares.reduce((acc, s) => {
        const pool = pools.find(p => p.payload.assetId === s.payload.assetId);
        if(!pool) return acc;
        const totalAssets = Number(pool.payload.totalLiquidity) + Number(pool.payload.totalBorrowed);
        const totalShares = Number(pool.payload.totalShares);
        const sharePrice = totalShares > 0 ? totalAssets / totalShares : 1;
        return acc + (Number(s.payload.shareAmount) * sharePrice);
    }, 0);
  };

  const totalMyLiquidity = calculateTotalMyLiquidity();
  const totalBorrowed = myLoans.reduce((sum, l) => sum + Number(l.payload.principal), 0);
  const systemRiskExposure = regulatorViews.reduce((sum, v) => sum + Number(v.payload.principal), 0);

  const requestBadgeCount = isIssuer 
    ? (depositRequests.length + issuerLoanRequests.length + withdrawalRequests.length)
    : isCompliance 
      ? allLoanRequests.length
      : 0;

  const positionsBadgeCount = myDepositRequests.length + myWithdrawalRequests.length + myRequests.length;

  const closeModal = () => {
    setModalType(null); setSelectedPool(null); setSelectedLoan(null); setSelectedShare(null);
    setAmount(""); setCollateralCid(""); setCollateralAmount(""); setExtensionDays("30"); setNewRate("");
    setNewPool({ assetId: "", rate: "5.0", ratio: "150" });
  };

  const handleCreatePool = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    const regulator = iam.getPartyByRole("Regulator");
    const publicParty = iam.getPartyByRole("Public");
    if (!regulator || !publicParty) return toast.showToast("System Error: Regulator/Public party not found.", "error");

    setIsSubmitting(true);
    try {
        await ledger.create(LendingPool, {
            poolOperator: party,
            assetId: newPool.assetId,
            totalLiquidity: "0.0",
            totalBorrowed: "0.0",
            totalShares: "0.0",
            interestRate: newPool.rate,
            collateralRatio: Number(newPool.ratio).toFixed(1),
            status: "Open",
            observers: [publicParty],
            regulatorParty: regulator
        });
        toast.showToast("Lending Pool Created", "success");
        closeModal();
    } catch (err: any) { toast.showToast(err.message, "error"); } finally { setIsSubmitting(false); }
  };

  const handleUpdateRate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedPool || isSubmitting) return;
    setIsSubmitting(true);
    try {
        await ledger.exercise(LendingPool.UpdateInterestRate, selectedPool.contractId, { newRate: newRate });
        toast.showToast("Interest Rate Updated", "success");
        closeModal();
    } catch(err:any) { toast.showToast(err.message, "error"); } finally { setIsSubmitting(false); }
  };

  const handleClosePool = async (pool: any) => {
    if(!confirm("Are you sure? This will stop all new loans and set status to Closing.")) return;
    try {
        await ledger.exercise(LendingPool.InitiateClosure, pool.contractId, {});
        toast.showToast("Pool Closure Initiated", "info");
    } catch(e:any) { toast.showToast(e.message, "error"); }
  };

  const handleDeposit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedPool || isSubmitting) return;
    if (selectedPool.payload.status !== "Open") { toast.showToast("Pool is not Open", "error"); return; }

    setIsSubmitting(true);
    try {
      const numAmount = Number(amount);
      await ledger.create(DepositRequest, {
        lender: party,
        poolOperator: selectedPool.payload.poolOperator,
        assetId: selectedPool.payload.assetId,
        amount: numAmount.toFixed(2)
      });
      toast.showToast("Deposit Request Sent", "success");
      closeModal();
    } catch (err: any) { toast.showToast(err.message, "error"); } finally { setIsSubmitting(false); }
  };

  const handleWithdraw = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedShare || isSubmitting) return;
    setIsSubmitting(true);
    try {
        await ledger.exercise(LenderShare.RequestWithdrawal, selectedShare.contractId, {
            sharesToWithdraw: Number(amount).toFixed(8) 
        });
        toast.showToast("Withdrawal Request Sent", "success");
        closeModal();
    } catch (err: any) { toast.showToast(err.message, "error"); } finally { setIsSubmitting(false); }
  };

  const handleCancelDeposit = async (cid: string) => {
      try { 
        await ledger.exercise(DepositRequest.CancelDepositRequest, cid as ContractId<DepositRequest>, {}); 
        toast.showToast("Deposit Cancelled", "info"); 
      }
      catch(e:any) { toast.showToast(e.message, "error"); }
  };

  const handleCancelWithdrawal = async (cid: string) => {
      try { 
        await ledger.exercise(WithdrawalRequest.CancelWithdrawalRequest, cid as ContractId<WithdrawalRequest>, {}); 
        toast.showToast("Withdrawal Cancelled", "info"); 
      }
      catch(e:any) { toast.showToast(e.message, "error"); }
  };

  const handleApproveDeposit = async (req: any) => {
    if (isSubmitting) return;
    setIsSubmitting(true);
    try {
        const pool = pools.find(p => p.payload.assetId === req.payload.assetId && p.payload.status === "Open");
        if (!pool) throw new Error(`No active 'Open' pool found for ${req.payload.assetId}`);
        await ledger.exercise(DepositRequest.AcceptDeposit, req.contractId, { poolCid: pool.contractId });
        toast.showToast("Deposit Accepted (Shares Minted)", "success");
    } catch (err: any) { toast.showToast(err.message, "error"); } finally { setIsSubmitting(false); }
  };

  const handleApproveWithdrawal = async (req: any) => {
    if (isSubmitting) return;
    setIsSubmitting(true);
    try {
        const pool = pools.find(p => p.payload.assetId === req.payload.assetId);
        if (!pool) throw new Error(`Pool not found`);
        await ledger.exercise(WithdrawalRequest.ApproveWithdrawal, req.contractId, { poolCid: pool.contractId });
        toast.showToast("Withdrawal Processed", "success");
    } catch (err: any) { toast.showToast(err.message, "error"); } finally { setIsSubmitting(false); }
  };

  const handleRejectWithdrawal = async (req: any) => {
      try { await ledger.exercise(WithdrawalRequest.RejectWithdrawal, req.contractId, {}); toast.showToast("Withdrawal Rejected", "info"); }
      catch(e:any) { toast.showToast(e.message, "error"); }
  };

  const handleBorrowRequest = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedPool || isSubmitting) return;
    const collateralAlloc = allocations.find(a => a.contractId === collateralCid);
    if (!collateralAlloc) return toast.showToast("Error: Collateral asset not found.", "error");
    const complianceParty = iam.getPartyByRole("Compliance");
    
    setIsSubmitting(true);
    try {
      await ledger.create(LoanRequest, {
        borrower: party,
        poolOperator: selectedPool.payload.poolOperator,
        assetId: selectedPool.payload.assetId,
        requestedAmount: Number(amount).toFixed(2),
        collateralAssetId: collateralAlloc.payload.assetId,
        collateralAmount: Number(collateralAmount).toFixed(2),
        collateralCid: collateralAlloc.contractId,
        durationDays: duration,
        createdAt: new Date().toISOString(),
        regulatorParty: selectedPool.payload.regulatorParty,
        complianceParty: complianceParty || ""
      });
      toast.showToast("Loan Request Submitted", "success");
      closeModal();
    } catch (err: any) { toast.showToast("Failed: " + err.message, "error"); } finally { setIsSubmitting(false); }
  };

  const handleRepay = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedLoan || isSubmitting) return;
    setIsSubmitting(true);
    try {
       const pool = pools.find(p => p.payload.assetId === selectedLoan.payload.assetId);
       if (!pool) throw new Error("Pool not found");
       const repaymentAlloc = allocations.find(a => a.payload.owner === party && a.payload.assetId === selectedLoan.payload.assetId);
       if (!repaymentAlloc) throw new Error("Insufficient funds for repayment");

      await ledger.exercise(Loan.RepayLoan, selectedLoan.contractId, {
        repaymentAllocCid: repaymentAlloc.contractId,
        poolCid: pool.contractId
      });
      toast.showToast("Loan Repaid", "success");
      closeModal();
    } catch (err: any) { toast.showToast(err.message, "error"); } finally { setIsSubmitting(false); }
  };

  const handleExtendLoan = async (e: React.FormEvent) => {
      e.preventDefault();
      if(!selectedLoan || isSubmitting) return;
      setIsSubmitting(true);
      try {
          await ledger.exercise(Loan.ExtendLoan, selectedLoan.contractId, { 
            additionalDays: extensionDays 
          });
          toast.showToast("Loan Extended", "success");
          closeModal();
      } catch(e:any) { toast.showToast(e.message, "error"); } finally { setIsSubmitting(false); }
  };

  const handleApproveLoan = async (req: any) => {
    if(isSubmitting) return;
    setIsSubmitting(true);
    try {
      const pool = pools.find(p => p.payload.assetId === req.payload.assetId && p.payload.status === "Open");
      if(!pool) throw new Error(`No active 'Open' pool found`);
      await ledger.exercise(LoanRequest.ApproveLoan, req.contractId, { poolCid: pool.contractId });
      toast.showToast("Loan Approved", "success");
    } catch(err:any) { toast.showToast(err.message, "error"); } finally { setIsSubmitting(false); }
  };

  const handleRejectLoan = async (req: any) => {
    if(isSubmitting) return;
    setIsSubmitting(true);
    try {
      await ledger.exercise(LoanRequest.RejectLoan, req.contractId, {});
      toast.showToast("Loan Request Rejected", "success");
    } catch(err:any) { toast.showToast(err.message, "error"); } finally { setIsSubmitting(false); }
  };

  const handleLiquidate = async (loan: any) => {
    if(isSubmitting) return;
    setIsSubmitting(true);
    try {
      const pool = pools.find(p => p.payload.assetId === loan.payload.assetId);
      if(!pool) throw new Error("Pool not found");
      await ledger.exercise(Loan.LiquidateCollateral, loan.contractId, { poolCid: pool.contractId });
      toast.showToast("Collateral Liquidated", "success");
    } catch(err:any) { toast.showToast(err.message, "error"); } finally { setIsSubmitting(false); }
  };

  const tabStyle = (active: boolean) => ({
    padding: '0.8rem 1.5rem', background: active ? 'var(--primary)' : 'transparent', 
    color: active ? 'white' : 'var(--text-main)', border: 'none', 
    borderBottom: active ? '2px solid var(--primary)' : '2px solid transparent', 
    cursor: 'pointer', fontWeight: active ? 'bold' : 'normal',
    display: 'flex', alignItems: 'center', gap: '8px'
  });

  if (poolsLoading) return <LoadingSpinner fullScreen />;

  return (
    <div>
      <div className="grid-cols-3" style={{ marginBottom: "2rem" }}>
        {isIssuer && (
          <>
            <div className="card"><h3>Active Pools</h3><div className="big-stat">{myPools.length}</div></div>
            <div className="card"><h3>Pending Requests</h3><div className="big-stat">{depositRequests.length + issuerLoanRequests.length + withdrawalRequests.length}</div></div>
            <div className="card" onClick={() => setModalType("CREATE_POOL")} style={{cursor:'pointer', borderStyle:'dashed', borderColor:'var(--primary)', display:'flex', alignItems:'center', justifyContent:'center'}}>
                <span style={{color:'var(--primary)', fontWeight:'bold'}}>+ Create Pool</span>
            </div>
          </>
        )}
        {isParticipant && !isIssuer && (
          <>
            <div className="card"><h3>Current Liquidity</h3><div className="big-stat" style={{color: 'var(--success)'}}>${totalMyLiquidity.toLocaleString(undefined, {maximumFractionDigits:2})}</div></div>
            <div className="card"><h3>Active Debt</h3><div className="big-stat" style={{color: 'var(--danger)'}}>${totalBorrowed.toLocaleString()}</div></div>
            <div className="card"><h3>Positions</h3><div className="big-stat">{myShares.length}</div></div>
          </>
        )}
        {(isRegulator || isCompliance) && (
          <>
            <div className="card"><h3>Active Pools</h3><div className="big-stat">{pools.length}</div></div>
            <div className="card"><h3>Loans Monitored</h3><div className="big-stat">{allLoanRequests.length + regulatorViews.length}</div></div>
            <div className="card"><h3>Risk Exposure</h3><div className="big-stat">${systemRiskExposure.toLocaleString()}</div></div>
          </>
        )}
      </div>

      <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', borderBottom: '1px solid var(--border)' }}>
        <button onClick={() => setActiveTab("market")} style={tabStyle(activeTab === "market")}>Market</button>
        {isParticipant && <button onClick={() => setActiveTab("positions")} style={tabStyle(activeTab === "positions")}>Positions {positionsBadgeCount > 0 && <span className="badge badge-yellow" style={{marginLeft:'8px', fontSize:'0.7em'}}>{positionsBadgeCount}</span>}</button>}
        {(isCompliance || isIssuer) && <button onClick={() => setActiveTab("requests")} style={tabStyle(activeTab === "requests")}>Loan Monitor {requestBadgeCount > 0 && <span className="badge badge-yellow" style={{marginLeft:'8px', fontSize:'0.7em'}}>{requestBadgeCount}</span>}</button>}
        {isRegulator && <button onClick={() => setActiveTab("audit")} style={tabStyle(activeTab === "audit")}>Audit</button>}
      </div>

      {activeTab === "market" && (
        <LendingMarketTab 
          pools={pools} 
          isIssuer={isIssuer} 
          isParticipant={isParticipant} 
          onDeposit={(pool) => { setSelectedPool(pool); setModalType("DEPOSIT"); }}
          onBorrow={(pool) => { setSelectedPool(pool); setModalType("BORROW"); }}
        />
      )}

      {activeTab === "positions" && isParticipant && (
        <LendingPositionsTab 
          myShares={myShares} myLoans={myLoans} myDepositRequests={myDepositRequests} myWithdrawalRequests={myWithdrawalRequests} myRequests={myRequests} pools={pools}
          onWithdraw={(share) => { setSelectedShare(share); setModalType("WITHDRAW"); }}
          onCancelDeposit={handleCancelDeposit}
          onCancelWithdrawal={handleCancelWithdrawal}
          onRepay={(loan) => { setSelectedLoan(loan); setModalType("REPAY"); }}
          onExtend={(loan) => { setSelectedLoan(loan); setModalType("EXTEND_LOAN"); }}
        />
      )}

      {activeTab === "requests" && (
        <LendingRequestsTab 
          isIssuer={isIssuer} 
          pools={isIssuer ? myPools : pools} 
          depositRequests={depositRequests} 
          withdrawalRequests={withdrawalRequests} 
          loanRequests={isIssuer ? issuerLoanRequests : allLoanRequests} 
          activeLoans={issuerActiveLoans} 
          isSubmitting={isSubmitting}
          onUpdateRate={(pool) => { setSelectedPool(pool); setModalType("UPDATE_RATE"); }}
          onClosePool={handleClosePool}
          onApproveDeposit={handleApproveDeposit}
          onApproveWithdrawal={handleApproveWithdrawal}
          onRejectWithdrawal={handleRejectWithdrawal}
          onApproveLoan={handleApproveLoan}
          onRejectLoan={handleRejectLoan}
          onLiquidate={handleLiquidate}
        />
      )}

      {activeTab === "audit" && (
        <LendingAuditTab regulatorViews={regulatorViews} />
      )}

      <LendingModals 
        type={modalType} onClose={closeModal} isSubmitting={isSubmitting}
        onCreatePool={handleCreatePool} onUpdateRate={handleUpdateRate} onDeposit={handleDeposit} onWithdraw={handleWithdraw} onBorrow={handleBorrowRequest} onRepay={handleRepay} onExtend={handleExtendLoan}
        //   If Issuer, pass only myAssets for Create Pool dropdown
        assets={isIssuer ? myAssets : assets} 
        allocations={allocations} selectedPool={selectedPool} selectedShare={selectedShare} selectedLoan={selectedLoan}
        amount={amount} setAmount={setAmount} newRate={newRate} setNewRate={setNewRate} extensionDays={extensionDays} setExtensionDays={setExtensionDays}
        collateralCid={collateralCid} setCollateralCid={setCollateralCid} collateralAmount={collateralAmount} setCollateralAmount={setCollateralAmount}
        newPool={newPool} setNewPool={setNewPool}
      />
    </div>
  );
}