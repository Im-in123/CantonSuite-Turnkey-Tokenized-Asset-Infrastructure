import React from "react";

export default function DraftsTable({ drafts }: { drafts: any[] }) {
  if (drafts.length === 0) return null;
  return (
    <div className="card" style={{ borderLeft: '4px solid var(--warning)', marginBottom: '2rem' }}>
      <h3 style={{ color: 'var(--warning)', fontSize: '0.8rem', marginBottom: '1rem' }}>Pending Compliance Vetting</h3>
      <table>
        <thead>
          <tr><th>Ticker</th><th>Name</th><th>Type</th><th>Price</th><th>Status</th></tr>
        </thead>
        <tbody>
          {drafts.map(d => (
            <tr key={d.contractId}>
              <td><span className="badge badge-yellow">{d.payload.instrumentId}</span></td>
              <td>{d.payload.name}</td>
              <td>{d.payload.assetType}</td>
              <td>${d.payload.pricePerUnit}</td>
              <td><span className="text-muted" style={{fontSize: '0.75rem'}}>Awaiting Approval</span></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}