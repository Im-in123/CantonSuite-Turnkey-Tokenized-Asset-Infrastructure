import React from "react";

interface IssuerRedemptionTabProps {
  redemptionRequests: readonly any[];
  assets: readonly any[];
  totalRedemptionValue: number;
  processingIds: Set<string>;  
  onApprove: (request: any) => void;
}

export default function IssuerRedemptionTab({ redemptionRequests, assets, totalRedemptionValue, processingIds, onApprove }: IssuerRedemptionTabProps) {
  return (
    <>
      <div className="grid-cols-2" style={{ marginBottom: "2rem" }}>
        <div className="card"><h3>Redemption Requests</h3><div className="big-stat">{redemptionRequests.length}</div></div>
        <div className="card"><h3>Total Redemption Value</h3><div className="big-stat">${totalRedemptionValue.toLocaleString()}</div></div>
      </div>

      <div className="card">
        <h3>Pending Redemptions</h3>
        <table>
          <thead><tr><th>Buyer</th><th>Asset</th><th>Quantity</th><th>Reason</th><th>Action</th></tr></thead>
          <tbody>
            {redemptionRequests.length === 0 && <tr><td colSpan={5} className="text-muted">No redemption requests</td></tr>}
            {redemptionRequests.map(req => {
              const asset = assets.find(a => a.payload.assetId === req.payload.assetId);
              const value = asset ? Number(req.payload.quantity) * Number(asset.payload.pricePerUnit) : 0;
              return (
                <tr key={req.contractId}>
                  <td>{req.payload.buyer.split("::")[0]}</td>
                  <td>{req.payload.assetId}</td>
                  <td>{Number(req.payload.quantity).toLocaleString()}<div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>~${value.toLocaleString()}</div></td>
                  <td style={{ fontSize: '0.85rem', maxWidth: '200px' }}>{req.payload.reason}</td>
                  <td>
                    <button 
                      className="btn-success" 
                      disabled={processingIds.has(req.contractId)}
                      onClick={() => onApprove(req)}
                    >
                      {processingIds.has(req.contractId) ? "Approving..." : "Approve"}
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}