import React from "react";
import { RedemptionRequest } from "@daml.js/CantonSuite-0.0.1/lib/Redemption";
import { useLedger } from "@daml/react";
import { ContractId } from "@daml/types"; // <--- Import this
import { useToast } from "../../context/ToastContext";

interface BuyerPortfolioProps {
  allocations: readonly any[];
  assets: readonly any[];
  redemptionRequests: readonly any[];
  onRedeem: (allocation: any) => void;
}

export default function BuyerPortfolio({ allocations, assets, redemptionRequests, onRedeem }: BuyerPortfolioProps) {
  const ledger = useLedger();
  const toast = useToast();

  const handleCancelRedemption = async (cid: string) => {
    try {
        // FIXED: Cast string to ContractId<RedemptionRequest>
        await ledger.exercise(RedemptionRequest.CancelRedemption, cid as ContractId<RedemptionRequest>, {});
        toast.showToast("Redemption Cancelled", "info");
    } catch(e:any) {
        toast.showToast(e.message, "error");
    }
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
      <div className="card">
        <h3>My Holdings</h3>
        {allocations.length === 0 ? (
          <p className="text-muted" style={{ padding: '2rem', textAlign: 'center' }}>No assets owned. Visit the Marketplace to start investing.</p>
        ) : (
          <table>
            <thead><tr><th>Asset</th><th>Quantity</th><th>Current Value</th><th>Action</th></tr></thead>
            <tbody>
              {allocations.map(alloc => {
                const asset = assets.find(a => a.payload.assetId === alloc.payload.assetId);
                const value = asset ? Number(alloc.payload.quantity) * Number(asset.payload.pricePerUnit) : 0;
                return (
                  <tr key={alloc.contractId}>
                    <td>{alloc.payload.assetId}</td>
                    <td>{Number(alloc.payload.quantity).toLocaleString()} units</td>
                    <td style={{ color: 'var(--success)', fontWeight: 'bold' }}>${value.toLocaleString(undefined, { minimumFractionDigits: 2 })}</td>
                    <td><button className="btn-outline" onClick={() => onRedeem(alloc)}>Redeem</button></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>

      <div className="card">
        <h3>Redemption Status</h3>
        {redemptionRequests.length === 0 ? (
          <p className="text-muted" style={{ padding: '1rem' }}>No pending requests</p>
        ) : (
          redemptionRequests.map(req => (
            <div key={req.contractId} style={{ padding: '1rem', marginBottom: '0.5rem', background: 'var(--bg-dark)', borderRadius: '8px', border: '1px solid var(--warning)' }}>
              <div className="flex-between" style={{ marginBottom: '0.25rem' }}>
                <span style={{ fontWeight: 'bold' }}>{req.payload.assetId}</span>
                <span className="badge badge-yellow">Pending</span>
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{Number(req.payload.quantity).toLocaleString()} units</div>
              <div className="flex-between" style={{marginTop:'0.5rem'}}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{req.payload.reason}</div>
                  <button className="btn-outline" style={{padding:'2px 6px', fontSize:'0.7rem', color:'var(--danger)', borderColor:'var(--danger)'}} onClick={() => handleCancelRedemption(req.contractId)}>Cancel</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}