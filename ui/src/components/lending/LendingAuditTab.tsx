import React from "react";

interface LendingAuditTabProps {
  regulatorViews: readonly any[];
}

export default function LendingAuditTab({ regulatorViews }: LendingAuditTabProps) {
  return (
    <div className="card" style={{border: '1px solid var(--warning)'}}>
      <h3 style={{color:'var(--warning)'}}>Privacy-Preserving Ledger View</h3>
      <table>
        <thead><tr><th>Event</th><th>Timestamp</th><th>Loan Hash</th><th>Amount</th><th>Ratio</th><th>Status</th></tr></thead>
        <tbody>
          {regulatorViews.map(v => (
            <tr key={v.contractId}>
              <td>{v.payload.eventType}</td>
              <td>{new Date(v.payload.eventTimestamp).toLocaleString()}</td>
              <td style={{fontFamily:'monospace', fontSize:'0.8rem'}}>{v.payload.loanId.substring(0, 16)}...</td>
              <td style={{fontWeight:'bold'}}>${Number(v.payload.principal).toLocaleString()}</td>
              <td>{Number(v.payload.collateralRatio).toFixed(1)}%</td>
              <td><span className={`badge ${v.payload.status === 'ACTIVE' ? 'badge-blue' : 'badge-green'}`}>{v.payload.status}</span></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}