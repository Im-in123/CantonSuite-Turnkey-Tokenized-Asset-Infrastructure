import React, { useState, useMemo } from "react";
import { RWAInstrument } from "@daml.js/CantonSuite-0.1.0/lib/Finance/Instruments";
import { useLedger, useParty, useStreamQueries } from "@daml/react";
import { Holding } from "@daml.js/CantonSuite-0.1.0/lib/TokenStandard/Interfaces";
import { FractionalizationGovernance } from "@daml.js/CantonSuite-0.1.0/lib/Finance/FractionalizationSafety";
import Modal from "../Modal";
import { useToast } from "../../context/ToastContext";
import CantonIAM from "../../services/CantonIAM";

interface IssuerAssetTabProps {
  assets: readonly any[];
  drafts: readonly any[];
  requests: readonly any[];
  settlements: readonly any[];
  pendingSettlements: readonly any[];
  processingIds: Set<string>;  
  onCreateOpen: () => void;
  onManage: (asset: any, cid: string) => void;
  onToggleFraction: (cid: string) => void;
  onAcceptTrade: (cid: string) => void;
  onFinalizeTrade: (cid: string) => void;
  onPublishToMarket?: (asset: any) => void;
  onClawback?: (assetId: string, quantity: string, reason: string) => void;
  onAssetAction?: (asset: any, action: "MINT" | "BURN" | "CLAWBACK" | "TOGGLE") => void;
}

export default function IssuerAssetTab({ 
  assets, drafts, requests, settlements, pendingSettlements, processingIds,
  onCreateOpen, onManage, onToggleFraction, onAcceptTrade, onFinalizeTrade, onPublishToMarket, onClawback, onAssetAction
}: IssuerAssetTabProps) {
  
  const ledger = useLedger();
  const party = useParty();
  const toast = useToast();
  const iam = CantonIAM.getInstance();
  
  // --- LOCAL STATE FOR MODALS ---
  const [searchTerm, setSearchTerm] = useState("");
  const [fractionalFilter, setFractionalFilter] = useState("All");
  const [selectedAsset, setSelectedAsset] = useState<any>(null);
  const [modalType, setModalType] = useState<"TOGGLE" | "CLAWBACK" | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // --- QUERY HOOKS FOR ASSET OPERATIONS ---
  const { contracts: allHoldings } = useStreamQueries(Holding);
  const { contracts: govPolicies } = useStreamQueries(FractionalizationGovernance);

  // --- HANDLERS FOR FRAC AND CLAWBACK ---
  const handleFracClick = (asset: any) => {
    setSelectedAsset(asset);
    setModalType("TOGGLE");
  };

  const handleClawbackClick = (asset: any) => {
    setSelectedAsset(asset);
    setModalType("CLAWBACK");
  };

  const handleToggleFractionalization = async (newValue: boolean) => {
    if (!selectedAsset) return;
    const assetId = selectedAsset?.instrument?.id?._1 || selectedAsset?.name || 'unknown';
    const policy = govPolicies.find(p => p.payload.assetId === assetId);
    if (!policy) {
      toast.showToast("No governance policy found for this asset", "error");
      return;
    }
    setIsSubmitting(true);
    try {
      await ledger.exercise(FractionalizationGovernance.RequestFractionalizationToggle, policy.contractId, {
        newValue, reason: `Infrastructure update: Switching mode.`
      });
      toast.showToast("Governance Request sent to Compliance.", "info");
      setModalType(null);
    } catch (e: any) { toast.showToast(e.message, "error"); }
    finally { setIsSubmitting(false); }
  };

  const handleClawbackSubmit = async (holdingCid: string, reason: string, caseRef: string) => {
    setIsSubmitting(true);
    try {
      await ledger.exercise(Holding.InitiateClawback, holdingCid as any, {
        legalReason: reason, jurisdiction: "International", caseReference: caseRef
      });
      toast.showToast("Clawback initiated. Asset frozen.", "warning");
      setModalType(null);
    } catch (e: any) { toast.showToast(e.message, "error"); }
    finally { setIsSubmitting(false); }
  };

  // --- ASSET STATS CALCULATION ---
  const assetStats = useMemo(() => {
    const stats: Record<string, { inTreasury: number; totalSupply: number; treasuryCid: string | null }> = {};
    assets.forEach(a => { 
      if (!a.payload) return;
      const instrumentId = a.payload.instrument?.id?._1 || a.payload.name || 'unknown';
      stats[instrumentId] = { inTreasury: 0, totalSupply: 0, treasuryCid: null }; 
    });
    allHoldings.forEach(h => {
      if (!h.payload) return;
      const ticker = h.payload.assetId;
      if (!stats[ticker]) return;
      const qty = Number(h.payload.quantity) || 0;
      stats[ticker].totalSupply += qty;
      if (h.payload.owner === party) {
        stats[ticker].inTreasury += qty;
        if (!h.payload.locked) { stats[ticker].treasuryCid = h.contractId; }
      }
    });
    return stats;
  }, [allHoldings, assets, party]);

  const filteredAssets = useMemo(() => {
    console.log('DEBUG: Total assets received:', assets.length);
    console.log('DEBUG: Assets:', assets);
    
    // First filter for assets with proper structure, then apply search/filter
    const validAssets = assets.filter(a => {
      const isValid = a.payload && a.payload.name && a.payload.instrument;
      console.log('DEBUG: Asset validity check:', isValid, a.payload?.name);
      return isValid;
    });
    console.log('DEBUG: Valid assets after structure check:', validAssets.length);
    
    const finalFiltered = validAssets.filter(a => {
      const matchesSearch = 
        a.payload.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (a.payload.instrument && a.payload.instrument.id && a.payload.instrument.id._1 && a.payload.instrument.id._1.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesFilter = 
        fractionalFilter === "All" || 
        (fractionalFilter === "Fractionalized" ? a.payload.fractionalized : !a.payload.fractionalized);
      console.log('DEBUG: Search match:', matchesSearch, 'Filter match:', matchesFilter, 'Asset:', a.payload.name);
      return matchesSearch && matchesFilter;
    });
    console.log('DEBUG: Final filtered assets:', finalFiltered.length);
    
    return finalFiltered;
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
            <thead><tr><th>Name</th><th>Supply</th><th>Status</th></tr></thead>
            <tbody>
              {drafts.map(d => (
                <tr key={d.contractId}>
                   
                  <td>{d.payload.name || 'N/A'}</td>
                  <td>{Number(d.payload.totalSupply || 0).toLocaleString()}</td>
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
          <thead><tr><th>Name</th><th>Type</th><th>Price</th><th>Frac.</th><th>Supply Health</th><th>Actions</th><th>Live Ops</th></tr></thead>
          <tbody>
            {filteredAssets.length === 0 && <tr><td colSpan={7} className="text-muted">No assets found matching criteria.</td></tr>}
            {filteredAssets.filter(a => a.payload && a.payload.name && a.payload.instrument).map(a => (
              <tr key={a.contractId}>
                <td>{a.payload.name}</td>
                <td>{a.payload.assetType}</td>
                <td>${Number(a.payload.pricePerUnit).toFixed(2)}</td>
                <td>
                  <span 
                    onClick={() => handleFracClick(a.payload)}
                    style={{cursor: 'pointer', opacity: isSubmitting ? 0.5 : 1}} 
                    className={`badge ${a.payload.fractionalized ? 'badge-green' : 'badge-red'}`}
                  >
                    {a.payload.fractionalized ? 'ON' : 'OFF'}
                  </span>
                </td>
                <td>
                  {(() => {
                    const assetId = a.payload.instrument?.id?._1 || a.payload.name || 'unknown';
                    const stats = assetStats[assetId] || { inTreasury: 0, totalSupply: 0 };
                    const utilization = stats.totalSupply > 0 ? (stats.inTreasury / stats.totalSupply) * 100 : 0;
                    return (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div style={{ width: '60px', height: '6px', background: '#222', borderRadius: '3px' }}>
                          <div style={{ height: '100%', width: `${utilization}%`, background: utilization > 50 ? 'var(--success)' : utilization > 20 ? 'var(--warning)' : 'var(--danger)' }} />
                        </div>
                        <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                          {stats.inTreasury.toLocaleString()} / {stats.totalSupply.toLocaleString()}
                        </span>
                      </div>
                    );
                  })()}
                </td>
                <td>
                  <button className="btn-outline" onClick={() => onManage(a.payload, a.contractId)}>Manage</button>
                  {onPublishToMarket && (() => {
                    const assetId = a.payload.instrument?.id?._1 || a.payload.name || 'unknown';
                    const stats = assetStats[assetId] || { totalSupply: 0 };
                    const hasSupply = stats.totalSupply > 0;
                    return (
                      <button 
                        className={`btn-primary ${!hasSupply ? 'btn-disabled' : ''}`}
                        style={{ 
                          marginLeft: '8px',
                          opacity: hasSupply ? 1 : 0.5,
                          cursor: hasSupply ? 'pointer' : 'not-allowed',
                          backgroundColor: hasSupply ? 'var(--primary)' : 'var(--bg-dark)',
                          borderColor: hasSupply ? 'var(--primary)' : 'var(--border)',
                          color: hasSupply ? 'white' : 'var(--text-muted)'
                        }}
                        onClick={() => hasSupply && onPublishToMarket(a.payload)}
                        disabled={!hasSupply}
                        title={hasSupply ? 'Publish to marketplace' : 'No supply available to publish'}
                      >
                        Publish
                      </button>
                    );
                  })()}
                </td>
                <td>
                  <div className="flex-gap" style={{ justifyContent: "flex-end" }}>
                    <button className="btn-danger" style={{ background: "transparent", color: "var(--danger)", border: "1px solid var(--danger)" }} onClick={() => handleClawbackClick(a.payload)}>Clawback</button>
                  </div>
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
                  <td>{r.payload.instrument ? r.payload.instrument._1._2 : 'N/A'}</td>
                  <td>{r.payload.buyer ? r.payload.buyer.split("::")[0] : 'N/A'}</td>
                  <td>{r.payload.quantity ? Number(r.payload.quantity).toLocaleString() : 'N/A'}</td>
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
                      <td>{t.payload.instrument ? t.payload.instrument._1._2 : 'N/A'}</td>
                      <td>{t.payload.buyer ? t.payload.buyer.split("::")[0] : 'N/A'}</td>
                      <td>{t.payload.quantity && t.payload.pricePerUnit ? `$${(Number(t.payload.quantity) * Number(t.payload.pricePerUnit)).toLocaleString()}` : 'N/A'}</td>
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
                  <td>{a.payload.instrument ? a.payload.instrument._1._2 : 'N/A'}</td>
                  <td>{a.payload.quantity && a.payload.pricePerUnit ? `$${(Number(a.payload.quantity) * Number(a.payload.pricePerUnit)).toLocaleString()}` : 'N/A'}</td>
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
      
      {/* FRAC MODAL */}
      <Modal isOpen={modalType === "TOGGLE"} onClose={() => !isSubmitting && setModalType(null)} title="Update Fractionalization Policy">
        <div className="flex-column" style={{gap: '1rem'}}>
          <p>Current: <b>{selectedAsset?.fractionalized ? 'FRACTIONAL' : 'INTEGER-ONLY'}</b></p>
          <button className="btn-primary" onClick={() => handleToggleFractionalization(!selectedAsset?.fractionalized)} disabled={isSubmitting}>
            {isSubmitting ? "Requesting..." : "Request Policy Change"}
          </button>
        </div>
      </Modal>
      
      {/* CLAWBACK MODAL */}
      <Modal isOpen={modalType === "CLAWBACK"} onClose={() => !isSubmitting && setModalType(null)} title="Legal Recovery - Clawback">
        <form onSubmit={(e) => {
          e.preventDefault();
          const fd = new FormData(e.currentTarget);
          handleClawbackSubmit(fd.get("hCid") as string, fd.get("reason") as string, fd.get("case") as string);
        }} style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ fontSize: '0.875rem', fontWeight: '500', color: 'var(--text-main)' }}>Select Holder to Clawback From:</label>
            <select name="hCid" className="input-field" required disabled={isSubmitting}>
              <option value="">Select holder...</option>
              {allHoldings.filter((h: any) => {
                const assetId = selectedAsset?.instrument?.id?._1 || selectedAsset?.name || 'unknown';
                return h.payload.assetId === assetId && h.payload.owner !== party;
              }).map((h: any) => (
                <option key={h.contractId} value={h.contractId}>
                  {h.payload.owner.split('::')[0]} ({h.payload.quantity} units)
                </option>
              ))}
            </select>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ fontSize: '0.875rem', fontWeight: '500', color: 'var(--text-main)' }}>Case Reference #</label>
            <input name="case" placeholder="Enter case reference number" className="input-field" required disabled={isSubmitting} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ fontSize: '0.875rem', fontWeight: '500', color: 'var(--text-main)' }}>Legal Reason for Clawback</label>
            <textarea name="reason" placeholder="Enter legal reason for clawback" className="input-field" required disabled={isSubmitting} rows={3} />
          </div>
          <button className="btn-danger" type="submit" disabled={isSubmitting} style={{marginTop: '0.5rem'}}>
            {isSubmitting ? "Executing..." : "Execute Clawback"}
          </button>
        </form>
      </Modal>
    </>
  );
}