import React from "react";

interface BuyerStatsProps {
  isApproved: boolean;
  isPending: boolean;
  isRejected: boolean;
  isSubmitting: boolean;  
  portfolioValue: number;
  totalUnclaimedYield: number;
  activeOrdersCount: number;
  onStartKYC: () => void;
}

export default function BuyerStats({
  isApproved, isPending, isRejected, isSubmitting, portfolioValue, totalUnclaimedYield, activeOrdersCount, onStartKYC
}: BuyerStatsProps) {
  return (
    <div className="grid-cols-4" style={{ marginBottom: "2rem" }}>
      <div className="card">
        <h3>KYC Identity</h3>
        <div style={{ marginTop: '0.5rem' }}>
          {isApproved ? (
            <span className="badge badge-green">Verified Investor</span>
          ) : isPending ? (
            <span className="badge badge-yellow">Verification Pending</span>
          ) : isRejected ? (
            <span className="badge badge-red">Rejected</span>
          ) : (
            <button 
              className="btn-primary" 
              onClick={onStartKYC} 
              disabled={isSubmitting}
              style={{opacity: isSubmitting ? 0.7 : 1, cursor: isSubmitting ? 'not-allowed' : 'pointer'}}
            >
              {isSubmitting ? "Processing..." : "Verify Identity"}
            </button>
          )}
        </div>
      </div>
      <div className="card"><h3>Portfolio Value</h3><div className="big-stat">${portfolioValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div></div>
      <div className="card"><h3>Unclaimed Yield</h3><div className="big-stat" style={{ color: 'var(--success)' }}>${totalUnclaimedYield.toFixed(2)}</div></div>
      <div className="card"><h3>Active Orders</h3><div className="big-stat">{activeOrdersCount}</div></div>
    </div>
  );
}