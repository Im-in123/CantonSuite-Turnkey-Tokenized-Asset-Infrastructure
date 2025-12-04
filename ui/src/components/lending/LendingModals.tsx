import React from "react";
import Modal from "../Modal";

interface LendingModalsProps {
  type: "DEPOSIT" | "BORROW" | "REPAY" | "CREATE_POOL" | "WITHDRAW" | "UPDATE_RATE" | "EXTEND_LOAN" | null;
  onClose: () => void;
  isSubmitting: boolean;
  
  // Handlers
  onCreatePool: (e: React.FormEvent) => void;
  onUpdateRate: (e: React.FormEvent) => void;
  onDeposit: (e: React.FormEvent) => void;
  onWithdraw: (e: React.FormEvent) => void;
  onBorrow: (e: React.FormEvent) => void;
  onRepay: (e: React.FormEvent) => void;
  onExtend: (e: React.FormEvent) => void;

  // Data & State
  assets: readonly any[];
  allocations: readonly any[];
  selectedPool: any;
  selectedShare: any;
  selectedLoan: any;
  
  // Form State Setters
  amount: string; setAmount: (v: string) => void;
  newRate: string; setNewRate: (v: string) => void;
  extensionDays: string; setExtensionDays: (v: string) => void;
  collateralCid: string; setCollateralCid: (v: string) => void;
  collateralAmount: string; setCollateralAmount: (v: string) => void;
  newPool: { assetId: string; rate: string; ratio: string };
  setNewPool: (v: { assetId: string; rate: string; ratio: string }) => void;
}

export default function LendingModals({
  type, onClose, isSubmitting,
  onCreatePool, onUpdateRate, onDeposit, onWithdraw, onBorrow, onRepay, onExtend,
  assets, allocations, selectedPool, selectedShare, selectedLoan,
  amount, setAmount, newRate, setNewRate, extensionDays, setExtensionDays,
  collateralCid, setCollateralCid, collateralAmount, setCollateralAmount,
  newPool, setNewPool
}: LendingModalsProps) {

  if (!type) return null;

  return (
    <>
      {type === "CREATE_POOL" && (
        <Modal isOpen={true} onClose={onClose} title="Create Pool">
            <form onSubmit={onCreatePool} style={{display:'flex', flexDirection:'column', gap:'1rem'}}>
                <div><label>Asset</label><select className="input-field" style={{width:'100%'}} value={newPool.assetId} onChange={e => setNewPool({...newPool, assetId: e.target.value})} required><option value="">Select Asset</option>{assets.map(a => <option key={a.contractId} value={a.payload.assetId}>{a.payload.name} ({a.payload.assetId})</option>)}</select></div>
                <div><label>Interest Rate %</label><input className="input-field" style={{width:'100%'}} type="number" step="0.1" value={newPool.rate} onChange={e => setNewPool({...newPool, rate: e.target.value})} required /></div>
                <div><label>Collateral Ratio (%)</label><input className="input-field" style={{width:'100%'}} type="number" value={newPool.ratio} onChange={e => setNewPool({...newPool, ratio: e.target.value})} required /></div>
                <button className="btn-primary" disabled={isSubmitting}>Launch Pool</button>
            </form>
        </Modal>
      )}

      {type === "UPDATE_RATE" && (
        <Modal isOpen={true} onClose={onClose} title="Update Interest Rate">
            <form onSubmit={onUpdateRate} style={{display:'flex', flexDirection:'column', gap:'1rem'}}>
                <div><label>Current Rate</label><div style={{padding:'0.5rem', background:'var(--bg-dark)'}}>{selectedPool?.payload.interestRate}%</div></div>
                <div><label>New Rate %</label><input className="input-field" style={{width:'100%'}} type="number" step="0.1" value={newRate} onChange={e => setNewRate(e.target.value)} required /></div>
                <button className="btn-primary" disabled={isSubmitting}>Update Rate</button>
            </form>
        </Modal>
      )}

      {type === "DEPOSIT" && (
        <Modal isOpen={true} onClose={onClose} title="Deposit Funds">
          <form onSubmit={onDeposit} style={{display:'flex', flexDirection:'column', gap:'1rem'}}>
            <div style={{fontSize:'0.9rem', color:'gray'}}>You are providing liquidity to the {selectedPool?.payload.assetId} pool.</div>
            <div><label>Amount to Deposit</label><input className="input-field" style={{width:'100%'}} type="number" value={amount} onChange={e => setAmount(e.target.value)} required /></div>
            <button className="btn-success" disabled={isSubmitting}>Submit Deposit Request</button>
          </form>
        </Modal>
      )}

      {type === "WITHDRAW" && (
        <Modal isOpen={true} onClose={onClose} title="Withdraw Funds">
          <form onSubmit={onWithdraw} style={{display:'flex', flexDirection:'column', gap:'1rem'}}>
            <div><label>Shares to Withdraw (Max: {selectedShare ? Number(selectedShare.payload.shareAmount).toFixed(6) : 0})</label><input className="input-field" style={{width:'100%'}} type="number" value={amount} onChange={e => setAmount(e.target.value)} max={selectedShare ? Number(selectedShare.payload.shareAmount) : 0} step="any" required /></div>
            <button className="btn-primary" disabled={isSubmitting}>Confirm Withdrawal</button>
          </form>
        </Modal>
      )}

      {type === "EXTEND_LOAN" && (
        <Modal isOpen={true} onClose={onClose} title="Extend Loan Duration">
            <form onSubmit={onExtend} style={{display:'flex', flexDirection:'column', gap:'1rem'}}>
                <div><label>Current Due Date</label><div style={{padding:'0.5rem', background:'var(--bg-dark)'}}>{selectedLoan && new Date(selectedLoan.payload.maturityDate).toLocaleDateString()}</div></div>
                <div><label>Additional Days</label><input className="input-field" style={{width:'100%'}} type="number" value={extensionDays} onChange={e => setExtensionDays(e.target.value)} required /></div>
                <button className="btn-primary" disabled={isSubmitting}>Extend Loan</button>
            </form>
        </Modal>
      )}

      {type === "BORROW" && (
        <Modal isOpen={true} onClose={onClose} title="Request Loan">
          <form onSubmit={onBorrow} style={{display:'flex', flexDirection:'column', gap:'1rem'}}>
            <div><label>Amount to Borrow ({selectedPool?.payload.assetId})</label><input className="input-field" style={{width:'100%'}} type="number" value={amount} onChange={e => setAmount(e.target.value)} required /></div>
            <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1rem'}}>
              <div><label>Select Collateral</label><select className="input-field" style={{width:'100%'}} value={collateralCid} onChange={e => setCollateralCid(e.target.value)} required><option value="">-- Choose Asset --</option>{allocations.filter(a => a.payload.assetId !== selectedPool?.payload.assetId).map(a => (<option key={a.contractId} value={a.contractId}>{a.payload.assetId} (Bal: {Number(a.payload.quantity)})</option>))}</select></div>
              <div><label>Collateral Qty</label><input className="input-field" style={{width:'100%'}} type="number" value={collateralAmount} onChange={e => setCollateralAmount(e.target.value)} required /></div>
            </div>
            <button className="btn-primary" disabled={isSubmitting}>Submit Request</button>
          </form>
        </Modal>
      )}

      {type === "REPAY" && (
        <Modal isOpen={true} onClose={onClose} title="Repay Loan">
          <form onSubmit={onRepay} style={{display:'flex', flexDirection:'column', gap:'1rem'}}>
            <div style={{padding:'1rem', background:'var(--bg-dark)'}}>Repaying Principal: ${Number(selectedLoan?.payload.principal).toLocaleString()}</div>
            <button className="btn-primary" disabled={isSubmitting}>Confirm Repayment</button>
          </form>
        </Modal>
      )}
    </>
  );
}