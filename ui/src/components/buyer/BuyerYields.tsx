import React from "react";

interface BuyerYieldsProps {
  dividends: readonly any[]; 
  allocations: readonly any[];
  totalUnclaimedYield: number;
  claimingIds: Set<string>;
  onClaim: (dividend: any) => void;
}

export default function BuyerYields({ dividends, allocations, totalUnclaimedYield, claimingIds, onClaim }: BuyerYieldsProps) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
      <div className="card">
        <div className="flex-between" style={{ marginBottom: '1rem' }}>
          <h3>Available Dividends</h3>
          {dividends.length > 0 && (
            <span className="badge badge-green">
              {dividends.length} payment{dividends.length !== 1 ? 's' : ''} ready
            </span>
          )}
        </div>

        {dividends.length === 0 ? (
          <div style={{ padding: '2rem', textAlign: 'center', border: '1px dashed var(--border)', borderRadius: '8px' }}>
            <p className="text-muted">No pending dividend payments</p>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {dividends.map(div => (
              <div
                key={div.contractId}
                style={{
                  padding: '1rem',
                  background: 'var(--bg-dark)',
                  borderRadius: '8px',
                  border: '1px solid var(--border)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <div>
                  <div style={{ fontWeight: 'bold', marginBottom: '0.25rem' }}>
                    {div.payload.label}
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    Asset: {div.payload.assetId}
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--success)' }}>
                      ${Number(div.payload.cashAmount).toFixed(2)}
                    </div>
                  </div>
                  <button
                    className="btn-success"
                    onClick={() => onClaim(div)}
                    disabled={claimingIds.has(div.contractId)}
                  >
                    {claimingIds.has(div.contractId) ? "Claiming..." : "Claim"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="card">
        <h3>Yield Summary</h3>
        <div style={{ padding: '1rem', background: 'var(--bg-dark)', borderRadius: '8px', marginBottom: '1rem' }}>
          <div className="flex-between" style={{ marginBottom: '0.5rem' }}>
            <span className="text-muted">Total Unclaimed</span>
            <span style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--success)' }}>
              ${totalUnclaimedYield.toFixed(2)}
            </span>
          </div>
          <div className="flex-between">
            <span className="text-muted">Pending Payments</span>
            <span>{dividends.length}</span>
          </div>
        </div>

        <h4 style={{ marginTop: '1.5rem', marginBottom: '0.75rem' }}>Yield-Bearing Assets</h4>
        {allocations.length === 0 ? (
          <p className="text-muted" style={{ fontSize: '0.85rem' }}>No holdings</p>
        ) : (
          allocations.map(alloc => (
            <div
              key={alloc.contractId}
              style={{
                padding: '0.75rem',
                background: 'var(--bg-dark)',
                borderRadius: '6px',
                marginBottom: '0.5rem',
                border: '1px solid var(--border)'
              }}
            >
              <div className="flex-between">
                <span style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>{alloc.payload.assetId}</span>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  {Number(alloc.payload.quantity).toLocaleString()} units
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}