import React, { useState, useMemo } from "react";
import { Asset } from "@daml.js/CantonSuite-0.0.1/lib/Assets";

interface IssuerAssetTabProps {
  assets: readonly any[];
  drafts: readonly any[];
  requests: readonly any[];
  settlements: readonly any[];
  pendingSettlements: readonly any[];
  processingIds: Set<string>;  
  onCreateOpen: () => void;
  onManage: (asset: Asset, cid: string) => void;
  onToggleFraction: (cid: string) => void;
  onAcceptTrade: (cid: string) => void;
  onFinalizeTrade: (cid: string) => void;
}

export default function IssuerAssetTab({ 
  assets, drafts, requests, settlements, pendingSettlements, processingIds,
  onCreateOpen, onManage, onToggleFraction, onAcceptTrade, onFinalizeTrade 
}: IssuerAssetTabProps) {
  
  const [searchTerm, setSearchTerm] = useState("");
  const [fractionalFilter, setFractionalFilter] = useState("All");

  const filteredAssets = useMemo(() => {
    return assets.filter(a => {
      const matchesSearch = 
        a.payload.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        a.payload.assetId.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesFilter = 
        fractionalFilter === "All" || 
        (fractionalFilter === "Fractionalized" ? a.payload.fractionalized : !a.payload.fractionalized);
      return matchesSearch && matchesFilter;
    });
  }, [assets, searchTerm, fractionalFilter]);

  return (
    <>
      <div className="grid-cols-3" style={{ marginBottom: "2rem" }}>
        <div className="card"><h3>Live Assets</h3><div className="big-stat">{assets.length}</div></div>
        <div className="card"><h3>Pending Drafts</h3><div className="big-stat">{drafts.length}</div></div>
        <div className="card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', borderStyle: 'dashed', cursor: 'pointer', background: 'rgba(59, 130, 246, 0.1)', borderColor: 'var(--primary)' }} onClick={onCreateOpen}>
          <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>+ Issue New Asset</span>
        </div>
      </div>

      {drafts.length > 0 && (
        <div className="card" style={{ marginBottom: "2rem", border: "1px dashed var(--warning)" }}>
          <h3 style={{ color: "var(--warning)" }}>Asset Issuance - Pending Compliance Approval</h3>
          <table>
            <thead><tr><th>ID</th><th>Name</th><th>Supply</th><th>Status</th></tr></thead>
            <tbody>
              {drafts.map(d => (
                <tr key={d.contractId}>
                  <td>{d.payload.assetId}</td>
                  <td>{d.payload.name}</td>
                  <td>{Number(d.payload.totalSupply).toLocaleString()}</td>
                  <td><span className="badge badge-yellow">Under Review</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="card" style={{ marginBottom: "2rem" }}>
        <div className="flex-between" style={{marginBottom: '1rem', flexWrap: 'wrap', gap: '10px'}}>
          <h3 style={{margin: 0}}>Live Assets Management</h3>
          <div style={{display: 'flex', gap: '10px'}}>
            <input className="input-field" style={{width: '200px', padding: '0.5rem'}} placeholder="Search Name or ID..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
            <select className="input-field" style={{padding: '0.5rem'}} value={fractionalFilter} onChange={e => setFractionalFilter(e.target.value)}>
              <option value="All">All Types</option>
              <option value="Fractionalized">Fractionalized</option>
              <option value="Whole">Whole Assets</option>
            </select>
          </div>
        </div>

        <table>
          <thead><tr><th>ID</th><th>Name</th><th>Supply</th><th>Price</th><th>Frac.</th><th>Actions</th></tr></thead>
          <tbody>
            {filteredAssets.length === 0 && <tr><td colSpan={6} className="text-muted">No assets found matching criteria.</td></tr>}
            {filteredAssets.map(a => (
              <tr key={a.contractId}>
                <td>{a.payload.assetId}</td>
                <td>{a.payload.name}</td>
                <td>{Number(a.payload.availableSupply).toLocaleString()} / {Number(a.payload.totalSupply).toLocaleString()}</td>
                <td>${Number(a.payload.pricePerUnit).toFixed(2)}</td>
                <td>
                  <span 
                    onClick={() => !processingIds.has(a.contractId) && onToggleFraction(a.contractId)} 
                    style={{cursor: processingIds.has(a.contractId) ? 'wait' : 'pointer', opacity: processingIds.has(a.contractId) ? 0.5 : 1}} 
                    className={`badge ${a.payload.fractionalized ? 'badge-green' : 'badge-red'}`}
                  >
                    {processingIds.has(a.contractId) ? '...' : (a.payload.fractionalized ? 'ON' : 'OFF')}
                  </span>
                </td>
                <td>
                  <button className="btn-outline" onClick={() => onManage(a.payload, a.contractId)}>Manage</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
        <div className="card">
          {/* BADGE ADDED HERE */}
          <h3>Incoming Trade Requests {requests.length > 0 && <span className="badge badge-yellow" style={{marginLeft:'8px', fontSize:'0.7em'}}>{requests.length}</span>}</h3>
          <table>
            <thead><tr><th>Asset</th><th>Buyer</th><th>Qty</th><th>Action</th></tr></thead>
            <tbody>
              {requests.length === 0 && <tr><td colSpan={4} className="text-muted">No pending requests</td></tr>}
              {requests.map(r => (
                <tr key={r.contractId}>
                  <td>{r.payload.assetId}</td>
                  <td>{r.payload.buyer.split("::")[0]}</td>
                  <td>{Number(r.payload.quantity).toLocaleString()}</td>
                  <td>
                    <button 
                      className="btn-primary" 
                      disabled={processingIds.has(r.contractId)} 
                      onClick={() => onAcceptTrade(r.contractId)}
                    >
                      {processingIds.has(r.contractId) ? "..." : "Accept"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="card">
          {/* BADGE ADDED HERE (Sum of Pending + Ready) */}
          <h3>Settlement Pipeline {(settlements.length + pendingSettlements.length) > 0 && <span className="badge badge-blue" style={{marginLeft:'8px', fontSize:'0.7em'}}>{settlements.length + pendingSettlements.length}</span>}</h3>
          
          {/* 1. Pending Settlements (Waiting for Compliance) */}
          {pendingSettlements.length > 0 && (
            <div style={{marginBottom: '1.5rem', borderBottom: '1px solid var(--border)', paddingBottom: '1rem'}}>
              <h4 style={{fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.5rem'}}>Waiting for Compliance</h4>
              <table style={{fontSize: '0.85rem'}}>
                <tbody>
                  {pendingSettlements.map(t => (
                    <tr key={t.contractId}>
                      <td>{t.payload.assetId}</td>
                      <td>{t.payload.buyer.split("::")[0]}</td>
                      <td>${(Number(t.payload.quantity) * Number(t.payload.pricePerUnit)).toLocaleString()}</td>
                      <td><span className="badge badge-yellow" style={{fontSize: '0.7rem'}}>Pending</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* 2. Ready to Finalize */}
          <h4 style={{fontSize: '0.85rem', color: 'var(--success)', marginBottom: '0.5rem'}}>Ready for Settlement</h4>
          <table>
            <thead><tr><th>Asset</th><th>Value</th><th>Action</th></tr></thead>
            <tbody>
              {settlements.length === 0 && <tr><td colSpan={3} className="text-muted">No trades ready for settlement</td></tr>}
              {settlements.map(a => (
                <tr key={a.contractId}>
                  <td>{a.payload.assetId}</td>
                  <td>${(Number(a.payload.quantity) * Number(a.payload.pricePerUnit)).toLocaleString()}</td>
                  <td>
                    <button 
                      className="btn-success" 
                      disabled={processingIds.has(a.contractId)} 
                      onClick={() => onFinalizeTrade(a.contractId)}
                    >
                      {processingIds.has(a.contractId) ? "..." : "Finalize"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}