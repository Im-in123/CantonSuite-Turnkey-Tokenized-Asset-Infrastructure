import React, { useState, useMemo } from "react";
import { Asset } from "@daml.js/CantonSuite-0.0.1/lib/Assets";
import { ProposedTrade, TradeAgreement } from "@daml.js/CantonSuite-0.0.1/lib/Trade";
import { useLedger } from "@daml/react";
import { ContractId } from "@daml/types"; 
import { useToast } from "../../context/ToastContext";

interface BuyerMarketplaceProps {
  assets: readonly any[];
  activeTrades: readonly any[];
  isApproved: boolean;
  isPending: boolean;
  onSelectAsset: (asset: Asset) => void;
}

export default function BuyerMarketplace({ assets, activeTrades, isApproved, isPending, onSelectAsset }: BuyerMarketplaceProps) {
  const ledger = useLedger();
  const toast = useToast();

  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("All");
  const [maxPrice, setMaxPrice] = useState<number | "">("");

  const assetTypes = ["All", ...Array.from(new Set(assets.map(a => a.payload.assetType)))];

  const filteredAssets = useMemo(() => {
    return assets.filter(a => {
      const matchesSearch = 
        a.payload.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        a.payload.assetId.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesType = filterType === "All" || a.payload.assetType === filterType;
      const matchesPrice = maxPrice === "" || Number(a.payload.pricePerUnit) <= maxPrice;
      const isAvailable = Number(a.payload.availableSupply) > 0;

      return matchesSearch && matchesType && matchesPrice && isAvailable;
    });
  }, [assets, searchTerm, filterType, maxPrice]);

  const handleCancel = async (trade: any) => {
    try {
        if (trade.status === "Waiting for Issuer") {
            // Cancel ProposedTrade
            await ledger.exercise(ProposedTrade.CancelProposal, trade.contractId as ContractId<ProposedTrade>, {});
            toast.showToast("Proposal Cancelled", "info");
        } else if (trade.status === "In Compliance Review") {
            // Cancel TradeAgreement
            await ledger.exercise(TradeAgreement.CancelTrade, trade.contractId as ContractId<TradeAgreement>, {});
            toast.showToast("Trade Agreement Cancelled", "info");
        }
    } catch(e:any) {
        toast.showToast("Failed to cancel: " + e.message, "error");
    }
  };

  return (
    <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "2rem" }}>
      <div className="card">
        <div className="flex-between" style={{marginBottom: '1rem', flexWrap: 'wrap', gap: '10px'}}>
          <h3>Marketplace</h3>
          <div style={{display: 'flex', gap: '10px'}}>
            <input type="text" placeholder="Search Asset..." className="input-field" style={{padding: '0.5rem', width: '150px'}} value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
            <select className="input-field" style={{padding: '0.5rem'}} value={filterType} onChange={e => setFilterType(e.target.value)}>
              {assetTypes.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
            <input type="number" placeholder="Max Price" className="input-field" style={{padding: '0.5rem', width: '100px'}} value={maxPrice} onChange={e => setMaxPrice(e.target.value ? Number(e.target.value) : "")} />
          </div>
        </div>

        {!isApproved ? (
          <div style={{ padding: '3rem', textAlign: 'center', border: '1px dashed var(--border)', borderRadius: '8px', marginTop: '1rem' }}>
            <p className="text-muted">Regulatory compliance requires KYC verification before viewing the order book.</p>
            {isPending && <small style={{ color: 'var(--warning)' }}>Your application is under review.</small>}
          </div>
        ) : (
          <table style={{ marginTop: '1rem' }}>
            <thead><tr><th>Asset</th><th>Type</th><th>Price</th><th>Availability</th><th>Action</th></tr></thead>
            <tbody>
              {filteredAssets.length === 0 && <tr><td colSpan={5} className="text-muted">No matching assets found.</td></tr>}
              {filteredAssets.map(a => (
                <tr key={a.contractId}>
                  <td>
                    <div style={{ fontWeight: 'bold' }}>{a.payload.name}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{a.payload.assetId}</div>
                  </td>
                  <td>{a.payload.assetType}</td>
                  <td style={{ color: 'var(--success)', fontWeight: 'bold' }}>${Number(a.payload.pricePerUnit).toFixed(2)}</td>
                  <td>
                    <div style={{ width: '100%', background: 'var(--bg-dark)', height: '6px', borderRadius: '3px', marginBottom: '4px' }}>
                      <div style={{ width: `${(Number(a.payload.availableSupply) / Number(a.payload.totalSupply)) * 100}%`, background: 'var(--primary)', height: '100%', borderRadius: '3px' }}></div>
                    </div>
                    <span style={{ fontSize: '0.75rem' }}>{Number(a.payload.availableSupply).toLocaleString()} units</span>
                  </td>
                  <td><button className="btn-success" onClick={() => onSelectAsset(a.payload)}>Buy</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <div className="card">
        <h3>Order Status</h3>
        {activeTrades.length === 0 && <p className="text-muted">No active orders</p>}
        {activeTrades.map(t => (
          <div key={t.contractId} style={{ padding: '0.8rem', borderBottom: '1px solid var(--border)' }}>
            <div className="flex-between">
              <span style={{ fontWeight: 'bold' }}>{t.payload.assetId}</span>
              <span>{Number(t.payload.quantity)} units</span>
            </div>
            <div className="flex-between" style={{marginTop: '4px'}}>
              <div style={{
                fontSize: '0.8rem', color:
                  t.status.includes("Settling") ? 'var(--success)' :
                    t.status.includes("Compliance") ? 'var(--warning)' : 'var(--text-muted)'
              }}>
                {t.status}
              </div>
              {(t.status === "Waiting for Issuer" || t.status === "In Compliance Review") && (
                 <button className="btn-outline" style={{padding:'2px 6px', fontSize:'0.7rem'}} onClick={() => handleCancel(t)}>Cancel</button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}