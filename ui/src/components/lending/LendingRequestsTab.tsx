import React from "react";

interface LendingRequestsTabProps {
  isIssuer: boolean;
  pools: readonly any[];
  depositRequests: readonly any[];
  withdrawalRequests: readonly any[];
  loanRequests: readonly any[]; // Issuer sees theirs, Compliance sees all
  activeLoans: readonly any[]; // Issuer only (for liquidation)
  isSubmitting: boolean;
  
  // Handlers
  onUpdateRate: (pool: any) => void;
  onClosePool: (pool: any) => void;
  onApproveDeposit: (req: any) => void;
  onApproveWithdrawal: (req: any) => void;
  onRejectWithdrawal: (req: any) => void;
  onApproveLoan: (req: any) => void;
  onRejectLoan: (req: any) => void;
  onLiquidate: (loan: any) => void;
}

export default function LendingRequestsTab({ 
  isIssuer, pools, depositRequests, withdrawalRequests, loanRequests, activeLoans, isSubmitting,
  onUpdateRate, onClosePool, onApproveDeposit, onApproveWithdrawal, onRejectWithdrawal, onApproveLoan, onRejectLoan, onLiquidate 
}: LendingRequestsTabProps) {
  
  return (
    <div className="card">
        {isIssuer && (
          <>
            <div className="flex-between"><h3>Active Pools Management</h3></div>
            <div style={{marginBottom:'2rem'}}>
                {pools.map(p => (
                    <div key={p.contractId} style={{padding:'1rem', border:'1px solid var(--border)', marginBottom:'0.5rem', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                        <div>
                            <span style={{fontWeight:'bold', marginRight:'10px'}}>{p.payload.assetId} Pool</span>
                            <span className={`badge ${p.payload.status === 'Open' ? 'badge-green' : 'badge-red'}`}>{p.payload.status}</span>
                            <span style={{marginLeft:'10px', fontSize:'0.9rem', color:'var(--primary)'}}>Rate: {p.payload.interestRate}%</span>
                        </div>
                        <div className="flex-gap">
                            <button className="btn-outline" onClick={() => onUpdateRate(p)}>Edit Rate</button>
                            {p.payload.status === 'Open' && <button className="btn-danger" onClick={() => onClosePool(p)}>Close Pool</button>}
                        </div>
                    </div>
                ))}
            </div>

            <h3>Deposit Requests (Mint Shares)</h3>
            <table>
                <thead><tr><th>Lender</th><th>Asset</th><th>Amount</th><th>Action</th></tr></thead>
                <tbody>
                    {depositRequests.length === 0 && <tr><td colSpan={4} className="text-muted">No requests</td></tr>}
                    {depositRequests.map(r => (
                        <tr key={r.contractId}>
                            <td>{r.payload.lender.split("::")[0]}</td>
                            <td>{r.payload.assetId}</td>
                            <td>${Number(r.payload.amount).toLocaleString()}</td>
                            <td><button className="btn-success" disabled={isSubmitting} onClick={() => onApproveDeposit(r)}>Approve</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <br/>

            <h3>Withdrawal Requests (Burn Shares)</h3>
            <table>
                <thead><tr><th>Lender</th><th>Asset</th><th>Shares</th><th>Action</th></tr></thead>
                <tbody>
                    {withdrawalRequests.length === 0 && <tr><td colSpan={4} className="text-muted">No requests</td></tr>}
                    {withdrawalRequests.map(r => (
                        <tr key={r.contractId}>
                            <td>{r.payload.lender.split("::")[0]}</td>
                            <td>{r.payload.assetId}</td>
                            <td>{Number(r.payload.shares).toFixed(4)}</td>
                            <td>
                                <div className="flex-gap">
                                    <button className="btn-success" disabled={isSubmitting} onClick={() => onApproveWithdrawal(r)}>Pay Out</button>
                                    <button className="btn-outline" style={{color:'var(--danger)', borderColor:'var(--danger)'}} onClick={() => onRejectWithdrawal(r)}>Reject</button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <br/>
          </>
        )}

        <h3>Loan Requests</h3>
        <table>
            <thead><tr><th>Borrower</th><th>Asset</th><th>Amount</th><th>Collateral</th><th>Status / Action</th></tr></thead>
            <tbody>
                {loanRequests.map(r => (
                    <tr key={r.contractId}>
                        <td>{r.payload.borrower.split("::")[0]}</td>
                        <td>{r.payload.assetId}</td>
                        <td>${Number(r.payload.requestedAmount).toLocaleString()}</td>
                        <td>{r.payload.collateralAssetId} ({Number(r.payload.collateralAmount)})</td>
                        <td>
                          {isIssuer ? (
                            <div className="flex-gap">
                              <button className="btn-primary" disabled={isSubmitting} onClick={() => onApproveLoan(r)}>Approve</button>
                              <button className="btn-danger" disabled={isSubmitting} onClick={() => onRejectLoan(r)}>Reject</button>
                            </div>
                          ) : (
                            <span className="badge badge-yellow">Pending</span>
                          )}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>

        {isIssuer && (
          <>
            <h3 style={{marginTop: '2rem'}}>Active Loan Management (Liquidations)</h3>
            <table>
              <thead><tr><th>Borrower</th><th>Principal</th><th>Due Date</th><th>Action</th></tr></thead>
              <tbody>
                {activeLoans.map(l => (
                  <tr key={l.contractId}>
                    <td>{l.payload.borrower.split("::")[0]}</td>
                    <td>${Number(l.payload.principal).toLocaleString()}</td>
                    <td>{new Date(l.payload.maturityDate).toLocaleDateString()}</td>
                    <td>
                      {new Date() > new Date(l.payload.maturityDate) ? (
                        <button className="btn-danger" onClick={() => onLiquidate(l)}>LIQUIDATE</button>
                      ) : (
                        <span className="badge badge-green">Healthy</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
    </div>
  );
}