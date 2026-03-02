import React from "react";
import { useStreamQueries } from "@daml/react";
import { RiskThresholdBreach, AMLAlert } from "@daml.js/CantonSuite-0.1.0/lib/Regulator";

export default function RiskAlerts() {
  const { contracts: breaches } = useStreamQueries(RiskThresholdBreach);
  const { contracts: amlAlerts } = useStreamQueries(AMLAlert);

  return (
    <div className="flex-column" style={{ gap: '2rem' }}>
      <div className="card" style={{ border: breaches.length > 0 ? '1px solid var(--danger)' : '' }}>
        <h3 style={{ color: breaches.length > 0 ? 'var(--danger)' : '' }}>Risk Threshold Breaches</h3>
        {breaches.length === 0 && <p className="text-muted">No high-risk activity detected.</p>}
        {breaches.map(b => (
          <div key={b.contractId} style={{ padding: '1rem', background: '#1a1010', borderRadius: '8px', marginBottom: '0.5rem', borderLeft: '4px solid var(--danger)' }}>
            <div className="flex-between">
              <strong>{b.payload.breachType}</strong>
              <span className="badge badge-red">{b.payload.severity}</span>
            </div>
            <div style={{ fontSize: '0.8rem', marginTop: '0.5rem' }}>
              Asset: {b.payload.assetId} | Actual: {b.payload.actualValue} (Limit: {b.payload.thresholdValue})
            </div>
          </div>
        ))}
      </div>

      <div className="card">
        <h3>AML / Suspicious Activity</h3>
        {amlAlerts.map(a => (
          <div key={a.contractId} style={{ padding: '1rem', background: 'var(--bg-dark)', borderRadius: '8px', marginBottom: '0.5rem' }}>
            <div className="flex-between">
              <span style={{ fontSize: '0.75rem', fontFamily: 'monospace' }}>Alert #{a.payload.alertId}</span>
              <span className="badge badge-yellow">Risk Score: {a.payload.riskScore}</span>
            </div>
            <p style={{ margin: '0.5rem 0', fontSize: '0.85rem' }}>{a.payload.activityPattern}</p>
            <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
              Party Hash: {a.payload.suspiciousPartyHash.substring(0, 20)}...
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}