import React from "react";
import { useStreamQueries } from "@daml/react";
import { SolvencyAuditView } from "@daml.js/CantonSuite-0.1.0/lib/Regulator";

export default function SolvencyMonitor() {
  const { contracts: supplyReports } = useStreamQueries(SolvencyAuditView);

  return (
    <div className="card">
      <h3>Network Solvency (Mint vs Burn)</h3>
      <p className="text-muted">Real-time verification of circulating supply across all synchronizers.</p>
      <table>
        <thead>
          <tr>
            <th>Asset ID</th>
            <th>Total Minted</th>
            <th>Total Burned</th>
            <th>Net Supply</th>
            <th>Last Audit</th>
          </tr>
        </thead>
        <tbody>
          {supplyReports.map(s => (
            <tr key={s.contractId}>
              <td><span className="badge badge-blue">{s.payload.assetId}</span></td>
              <td style={{ color: 'var(--success)' }}>+{Number(s.payload.totalMinted).toLocaleString()}</td>
              <td style={{ color: 'var(--danger)' }}>-{Number(s.payload.totalBurned).toLocaleString()}</td>
              <td style={{ fontWeight: 'bold' }}>{Number(s.payload.circulatingSupply).toLocaleString()}</td>
              <td style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                {new Date(s.payload.reportDate).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}