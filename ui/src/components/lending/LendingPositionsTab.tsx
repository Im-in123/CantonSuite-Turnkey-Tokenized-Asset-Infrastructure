import React from "react";

interface LendingPositionsTabProps {
  myShares: readonly any[];
  myLoans: readonly any[];
  myDepositRequests: readonly any[];
  myWithdrawalRequests: readonly any[];
  myRequests: readonly any[]; // Loan Requests
  pools: readonly any[];
  onWithdraw: (share: any) => void;
  onCancelDeposit: (cid: string) => void;
  onCancelWithdrawal: (cid: string) => void;
  onRepay: (loan: any) => void;
  onExtend: (loan: any) => void;
}

export default function LendingPositionsTab({ 
  myShares, myLoans, myDepositRequests, myWithdrawalRequests, myRequests, pools, 
  onWithdraw, onCancelDeposit, onCancelWithdrawal, onRepay, onExtend 
}: LendingPositionsTabProps) {
  
  return (
    <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'2rem'}}>
      {/* LEFT: SHARES & DEPOSITS */}
      <div className="card">
        <h3>My Pool Shares</h3>
        <table>
          <thead><tr><th>Asset</th><th>Shares</th><th>Value</th><th>Action</th></tr></thead>
          <tbody>
            {myShares.length === 0 && myDepositRequests.length === 0 && myWithdrawalRequests.length === 0 && <tr><td colSpan={4} className="text-muted">No active positions</td></tr>}
            
            {/* Active Shares */}
            {myShares.map(s => {
                const pool = pools.find(p => p.payload.assetId === s.payload.assetId);
                let estimatedValue = 0;
                if (pool) {
                    const totalAssets = Number(pool.payload.totalLiquidity) + Number(pool.payload.totalBorrowed);
                    const sharePrice = Number(pool.payload.totalShares) > 0 ? totalAssets / Number(pool.payload.totalShares) : 1;
                    estimatedValue = Number(s.payload.shareAmount) * sharePrice;
                }
                return (
                    <tr key={s.contractId}>
                        <td>{s.payload.assetId}</td>
                        <td>{Number(s.payload.shareAmount).toFixed(4)}</td>
                        <td style={{color:'var(--success)'}}>${estimatedValue.toFixed(2)}</td>
                        <td><button className="btn-outline" onClick={() => onWithdraw(s)}>Withdraw</button></td>
                    </tr>
                );
            })}

            {/* Pending Deposits */}
            {myDepositRequests.map(r => (
                <tr key={r.contractId}>
                    <td>{r.payload.assetId}</td>
                    <td colSpan={2}>${Number(r.payload.amount).toLocaleString()} <span className="badge badge-yellow">Processing</span></td>
                    <td><button className="btn-outline" style={{fontSize:'0.7rem'}} onClick={() => onCancelDeposit(r.contractId)}>Cancel</button></td>
                </tr>
            ))}

            {/* Pending Withdrawals */}
            {myWithdrawalRequests.map(r => (
                <tr key={r.contractId}>
                    <td>{r.payload.assetId}</td>
                    <td colSpan={2}>{Number(r.payload.shares).toFixed(4)} Shares <span className="badge badge-yellow">Selling...</span></td>
                    <td><button className="btn-outline" style={{fontSize:'0.7rem'}} onClick={() => onCancelWithdrawal(r.contractId)}>Cancel</button></td>
                </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* RIGHT: LOANS */}
      <div className="card">
        <h3>My Active Loans</h3>
        <table>
          <thead><tr><th>Asset</th><th>Principal</th><th>Due</th><th>Action</th></tr></thead>
          <tbody>
            {myLoans.length === 0 && <tr><td colSpan={4} className="text-muted">No active loans</td></tr>}
            {myLoans.map(l => (
              <tr key={l.contractId}>
                <td>{l.payload.assetId}</td>
                <td>${Number(l.payload.principal).toLocaleString()}</td>
                <td>{new Date(l.payload.maturityDate).toLocaleDateString()}</td>
                <td>
                    <div className="flex-gap">
                        <button className="btn-primary" onClick={() => onRepay(l)}>Repay</button>
                        <button className="btn-outline" style={{fontSize:'0.8rem'}} onClick={() => onExtend(l)}>Extend</button>
                    </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        {myRequests.length > 0 && <h4 style={{marginTop:'1rem', fontSize:'0.9rem', color:'var(--text-muted)'}}>Pending Loan Requests</h4>}
        {myRequests.map(r => (
            <div key={r.contractId} style={{padding:'0.5rem', borderBottom:'1px solid var(--border)', display:'flex', justifyContent:'space-between'}}>
                <span>{r.payload.assetId}: ${r.payload.requestedAmount}</span> 
                <span className="badge badge-yellow">Under Review</span>
            </div>
        ))}
      </div>
    </div>
  );
}