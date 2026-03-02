import React, { useState, useEffect } from "react";
import { useLedger, useParty, useStreamQueries } from "@daml/react";
import { LendingPool } from "@daml.js/CantonSuite-0.1.0/lib/Lending/Pool";
import { RWAInstrument } from "@daml.js/CantonSuite-0.1.0/lib/Finance/Instruments";
import { useToast } from "../../../context/ToastContext";
import Modal from "../../Modal";
import CantonIAM from "../../../services/CantonIAM";

export default function PoolLifecycleManager() {
  const party = useParty();
  const ledger = useLedger();
  const toast = useToast();
  const iam = CantonIAM.getInstance();

  const { contracts: pools } = useStreamQueries(LendingPool, () => [{ poolOperator: party }]);
  const { contracts: availableAssets } = useStreamQueries(RWAInstrument);

  // Concurrency Guard
  const [isProcessing, setIsProcessing] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [selectedPool, setSelectedPool] = useState<any>(null);
  const [newRate, setNewRate] = useState("");

  const [formData, setFormData] = useState({
    assetId: "",
    interestRate: "8.0",
    collateralRatio: "150.0"
  });

  useEffect(() => {
    if (isCreateModalOpen && availableAssets.length > 0 && !formData.assetId) {
        setFormData(prev => ({ ...prev, assetId: availableAssets[0].payload.instrument.id.unpack }));
    }
  }, [isCreateModalOpen, availableAssets]);

  const handleCreatePool = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    try {
      const compliance = iam.getPartyByRole("ComplianceOfficer");
      const regulator = iam.getPartyByRole("Regulator");

      await ledger.create(LendingPool, {
        poolOperator: party,
        complianceParty: compliance,
        assetId: formData.assetId,
        totalLiquidity: "0.0",
        totalBorrowed: "0.0",
        totalShares: "0.0",
        interestRate: formData.interestRate,
        collateralRatio: formData.collateralRatio,
        status: "Open", 
        regulatorParty: regulator,
        sequenceNumber: "0"
      });
      
      toast.showToast(`${formData.assetId} Pool Deployed Successfully.`, "success");
      setIsCreateModalOpen(false);
    } catch (e: any) { toast.showToast(e.message, "error"); }
    finally { setIsProcessing(false); }
  };

  const handleUpdateRate = async () => {
    if (!selectedPool || !newRate) return;
    setIsProcessing(true);
    try {
      await ledger.exercise(LendingPool.UpdateInterestRate, selectedPool.contractId, { newRate: newRate });
      toast.showToast("Interest rate updated on ledger.", "info");
      setSelectedPool(null);
      setNewRate("");
    } catch (e: any) { toast.showToast(e.message, "error"); }
    finally { setIsProcessing(false); }
  };

  const handleClosePool = async () => {
    if (!selectedPool) return;
    if (!window.confirm("Permanently transition this pool to CLOSING status? This prevents new deposits/borrows.")) return;
    
    setIsProcessing(true);
    try {
      await ledger.exercise(LendingPool.InitiateClosure, selectedPool.contractId, {});
      toast.showToast("Pool closure initiated. Status: Closing.", "warning");
      setSelectedPool(null);
    } catch (e: any) { toast.showToast(e.message, "error"); }
    finally { setIsProcessing(false); }
  };

  return (
    <div className="card terminal-card">
      <div className="flex-between" style={{ marginBottom: '1.5rem' }}>
        <h3 style={{ fontSize: '0.8rem', letterSpacing: '1px', margin: 0 }}>POOL REGISTRY</h3>
        <button className="btn-primary" onClick={() => setIsCreateModalOpen(true)} disabled={isProcessing}>
            {isProcessing ? "Connecting..." : "+ NEW POOL"}
        </button>
      </div>

      <div className="flex-column" style={{ gap: '0.75rem' }}>
        {pools.length === 0 ? (
           <div className="empty-state">No active pools under management.</div>
        ) : (
          pools.map(p => (
            <div key={p.contractId} className="pool-row">
              <div>
                <span className="ticker-label">{p.payload.assetId}</span>
                <span className={`badge ${p.payload.status === 'Open' ? 'badge-green' : 'badge-red'}`} style={{fontSize: '0.5rem', marginLeft: '5px'}}>
                    {p.payload.status.toUpperCase()}
                </span>
              </div>
              <button className="btn-outline tiny-btn" onClick={() => setSelectedPool(p)} disabled={isProcessing}>Manage</button>
            </div>
          ))
        )}
      </div>

      {/* CREATE POOL MODAL */}
      <Modal isOpen={isCreateModalOpen} onClose={() => setIsCreateModalOpen(false)} title="Initialize New Pool">
        <form onSubmit={handleCreatePool} className="modal-form-container">
          <div className="form-group">
            <label>Underlying RWA Asset</label>
            <select className="input-field" value={formData.assetId} onChange={e => setFormData({...formData, assetId: e.target.value})} required>
                {availableAssets.map(a => (
                    <option key={a.contractId} value={a.payload.instrument.id.unpack}>{a.payload.instrument.id.unpack}</option>
                ))}
            </select>
          </div>
          <div className="form-group">
            <label>Interest Rate (APR %)</label>
            <input className="input-field" type="number" step="0.1" value={formData.interestRate} onChange={e => setFormData({...formData, interestRate: e.target.value})} required />
          </div>
          <button className="btn-success full-width" type="submit" disabled={isProcessing || availableAssets.length === 0}>
              {isProcessing ? "Deploying Smart Contract..." : "Authorize Genesis"}
          </button>
        </form>
      </Modal>

      {/* MANAGE POOL MODAL */}
      <Modal isOpen={!!selectedPool} onClose={() => setSelectedPool(null)} title={`Governance: ${selectedPool?.payload.assetId} Pool`}>
        <div className="flex-column" style={{ gap: '1.5rem' }}>
          <div className="form-group">
            <label>Adjust Interest Rate (%)</label>
            <div className="flex-gap">
                <input className="input-field" type="number" value={newRate} onChange={e => setNewRate(e.target.value)} placeholder={selectedPool?.payload.interestRate} />
                <button className="btn-primary" onClick={handleUpdateRate} disabled={isProcessing || !newRate}>
                    {isProcessing ? "..." : "Update"}
                </button>
            </div>
          </div>

          <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1rem' }}>
            <label className="text-muted" style={{fontSize: '0.7rem', display: 'block', marginBottom: '0.5rem'}}>Protocol Governance</label>
            <button 
                className="btn-danger" 
                style={{ width: '100%', background: 'transparent', border: '1px solid var(--danger)', color: 'var(--danger)' }}
                onClick={handleClosePool}
                disabled={isProcessing || selectedPool?.payload.status !== 'Open'}
            >
              {isProcessing ? "Processing Closure..." : "Initiate Pool Closure"}
            </button>
            <p className="text-muted" style={{fontSize: '0.65rem', marginTop: '0.5rem'}}>
                * Closing a pool prevents new capital inflow but allows existing borrowers to repay.
            </p>
          </div>
        </div>
      </Modal>

      <style>{`
        .terminal-card { border-top: 2px solid var(--primary); width: 100%; box-sizing: border-box; }
        .empty-state { padding: 1.5rem; text-align: center; color: var(--text-muted); font-size: 0.8rem; border: 1px dashed #333; border-radius: 8px; }
        .pool-row { display: flex; justify-content: space-between; align-items: center; padding: 0.75rem; background: #0d1117; border-radius: 6px; border: 1px solid #30363d; }
        .ticker-label { font-weight: 800; color: var(--primary); font-size: 0.9rem; }
        .tiny-btn { padding: 4px 10px; font-size: 0.65rem; }
        .modal-form-container { display: flex; flex-direction: column; gap: 1.25rem; }
        .form-group { display: flex; flex-direction: column; gap: 0.5rem; }
        .form-group label { font-size: 0.75rem; color: var(--text-muted); font-weight: bold; }
        .full-width { width: 100%; }
      `}</style>
    </div>
  );
}