import React from "react";
import { useStreamQueries } from "@daml/react";
import { RegulatorView } from "@daml.js/CantonSuite-0.1.0/lib/Regulator";

export default function HashedLedger() {
  const { contracts: trades } = useStreamQueries(RegulatorView);

  return (
    <div className="card">
      <h3>Institutional Trade Ledger</h3>
      <p className="text-muted">Privacy-preserved transaction stream using hashed identifiers.</p>
      <table>
        <thead>
          <tr>
            <th>Timestamp</th>
            <th>Event</th>
            <th>Asset</th>
            <th>Qty</th>
            <th>Buyer Hash</th>
            <th>Seller Hash</th>
          </tr>
        </thead>
        <tbody>
          {trades.map(t => (
            <tr key={t.contractId}>
              <td style={{ fontSize: '0.7rem' }}>{new Date(t.payload.executedAt).toLocaleTimeString()}</td>
              <td><span className="badge" style={{background: '#333'}}>{t.payload.eventType}</span></td>
              <td><b>{t.payload.assetId}</b></td>
              <td>{t.payload.quantity}</td>
              <td><code style={{ fontSize: '0.65rem', color: 'var(--warning)' }}>{t.payload.buyerHash.substring(0, 12)}...</code></td>
              <td><code style={{ fontSize: '0.65rem', color: 'var(--warning)' }}>{t.payload.sellerHash.substring(0, 12)}...</code></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}