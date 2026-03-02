import React, { useState } from "react";
import { useLedger, useParty, useStreamQueries } from "@daml/react";

// Daml Template Imports
import { 
  DividendAnnouncement, 
  DividendAnnouncementWorkflow 
} from "@daml.js/CantonSuite-0.1.0/lib/Distribution/ClaimBased";
import { RedemptionEffect } from "@daml.js/CantonSuite-0.1.0/lib/Redemption/Atomic";
import { Holding_Impl } from "@daml.js/CantonSuite-0.1.0/lib/Portfolio";
import { RWAInstrument } from "@daml.js/CantonSuite-0.1.0/lib/Finance/Instruments";

// UI Components
import { useToast } from "../../context/ToastContext";
import Modal from "../Modal";
import CantonIAM from "../../services/CantonIAM";

export default function CorporateActions() {
  const ledger = useLedger();
  const party = useParty();
  const toast = useToast();
  const iam = CantonIAM.getInstance();

  // --- 1. DATA STREAMS ---
  const { contracts: myAssets } = useStreamQueries(RWAInstrument, () => [{ tokenIssuer: party }]);
  const { contracts: allHoldings } = useStreamQueries(Holding_Impl);
  const { contracts: redemptionRequests } = useStreamQueries(RedemptionEffect, () => [{ issuer: party }]);
  const { contracts: liveAnnouncements } = useStreamQueries(DividendAnnouncement, () => [{ issuer: party }]);
  const { contracts: institutionalCash } = useStreamQueries(Holding_Impl, () => [{ owner: party, assetId: "USD" }]);

  // --- 2. UI STATE ---
  const [isProcessing, setIsProcessing] = useState(false);
  const [showYieldModal, setShowYieldModal] = useState(false);
  const [selectedEffect, setSelectedEffect] = useState<any>(null);
  const [selectedCashCid, setSelectedCashCid] = useState("");

  const [divForm, setDivForm] = useState({
    assetId: "",
    amountPerUnit: "1.25",
    label: "Quarterly Dividend Q1",
    expiryDays: "30"
  });

  // --- 3. THE SNAPSHOT ENGINE (NO SIMPLIFICATION) ---
  /**
   * Performs a real-time scan of the global holding registry.
   * Groups by owner to handle cases where one user has multiple split contracts.
   */
  const performLedgerSnapshot = (ticker: string) => {
    // 1. Filter for the specific ticker
    const tickerHoldings = allHoldings.filter(h => h.payload.assetId === ticker);
    
    // 2. Aggregate unique holders and total quantities
    const holderAggregator = new Map<string, number>();
    let totalQuantity = 0;

    tickerHoldings.forEach(holding => {
      const owner = holding.payload.owner;
      const qty = Number(holding.payload.quantity);
      
      const currentBalance = holderAggregator.get(owner) || 0;
      holderAggregator.set(owner, currentBalance + qty);
      totalQuantity += qty;
    });

    // 3. Prepare result
    return {
      eligibleHolders: Array.from(holderAggregator.keys()),
      totalUnitsOutstanding: totalQuantity,
      holderCount: holderAggregator.size
    };
  };

  // --- 4. HANDLERS ---
  const handleAnnounceYield = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!divForm.assetId) return;

    setIsProcessing(true);
    
    // Step A: Perform Snapshot
    const snapshot = performLedgerSnapshot(divForm.assetId);

    if (snapshot.totalUnitsOutstanding <= 0) {
        toast.showToast("Cannot distribute yield: Total circulating supply is 0.", "error");
        setIsProcessing(false);
        return;
    }

    try {
      const compliance = iam.getPartyByRole("ComplianceOfficer");
      const regulator = iam.getPartyByRole("Regulator");

      // Step B: Initialize Workflow
      const workflow = await ledger.create(DividendAnnouncementWorkflow, {
        issuer: party,
        compliance,
        regulator,
        assetId: divForm.assetId,
        dividendLabel: divForm.label,
        perUnitAmount: divForm.amountPerUnit,
        expirationDays: divForm.expiryDays
      });

      // Step C: Execute Pull-Based Announcement with the Snapshot Data
      await ledger.exercise(DividendAnnouncementWorkflow.CreateAnnouncement, workflow.contractId, {
        totalUnitsOutstanding: snapshot.totalUnitsOutstanding.toFixed(10), // Numeric string
        uniqueAnnouncementId: `YLD-${divForm.assetId}-${Date.now()}`,
        holdersAtSnapshot: snapshot.eligibleHolders
      });

      toast.showToast(`Yield broadcasted to ${snapshot.holderCount} unique wallets.`, "success");
      setShowYieldModal(false);
    } catch (e: any) {
      toast.showToast(e.message, "error");
    } finally {
      setIsProcessing(false);
    }
  };

  const handleProcessRedemption = async () => {
    if (!selectedEffect || isProcessing) return;
    setIsProcessing(true);
    try {
      // Logic: Finalize the redemption by burning the asset and releasing cash
      await ledger.exercise(RedemptionEffect.ExecuteRedemptionEffect, selectedEffect.contractId, {});
      toast.showToast("Redemption finalized. Cash disbursed to investor.", "success");
      setSelectedEffect(null);
    } catch (e: any) {
      toast.showToast(e.message, "error");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="flex-column" style={{ gap: '2rem' }}>
      
      {/* SECTION 1: YIELD ENGINE */}
      <div className="card" style={{ borderTop: '4px solid var(--accent)' }}>
        <div className="flex-between">
          <div>
            <h3 style={{ color: 'var(--accent)', marginBottom: '0.25rem' }}>Dividend & Yield Engine</h3>
            <p className="text-muted" style={{ fontSize: '0.8rem' }}>Initialize pull-based distributions based on current ledger snapshots.</p>
          </div>
          <button className="btn-primary" style={{ background: 'var(--accent)' }} onClick={() => setShowYieldModal(true)}>
             + Announce Yield
          </button>
        </div>

        <div style={{ marginTop: '1.5rem' }}>
          <table>
            <thead>
              <tr>
                <th>Distribution ID</th>
                <th>Asset</th>
                <th>Rate / Unit</th>
                <th>Snapshot Pop.</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {liveAnnouncements.length === 0 && (
                <tr><td colSpan={5} className="text-muted" style={{ textAlign: 'center' }}>No historical distributions found.</td></tr>
              )}
              {liveAnnouncements.map(a => (
                <tr key={a.contractId}>
                  <td>{a.payload.dividendLabel}</td>
                  <td><b>{a.payload.assetId}</b></td>
                  <td style={{ color: 'var(--success)', fontWeight: 'bold' }}>${a.payload.perUnitAmount}</td>
                  <td>{a.payload.eligibleHolders.length} Wallets</td>
                  <td><span className="badge badge-green">Pull Active</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* SECTION 2: REDEMPTION PAYOUTS */}
      <div className="card" style={{ borderTop: '4px solid var(--primary)' }}>
        <h3>Redemption Payout Queue</h3>
        <p className="text-muted" style={{ fontSize: '0.8rem' }}>Authorize cash disbursements for investors exiting positions.</p>
        
        <div className="flex-column" style={{ gap: '0.75rem', marginTop: '1.5rem' }}>
          {redemptionRequests.length === 0 && (
            <div style={{ textAlign: 'center', padding: '2rem', border: '1px dashed var(--border)', borderRadius: '8px' }}>
               <p className="text-muted">No pending redemption requests.</p>
            </div>
          )}
          {redemptionRequests.map(e => (
            <div key={e.contractId} className="flex-between" style={{ padding: '1rem', background: 'var(--bg-dark)', borderRadius: '8px', border: '1px solid var(--border)' }}>
              <div>
                <strong style={{ color: 'var(--primary)' }}>{e.payload.redeemer.split('::')[0]}</strong>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  Ticker: {e.payload.assetId} | Amount: {e.payload.quantity} units
                </div>
              </div>
              <button className="btn-primary" onClick={() => setSelectedEffect(e)} disabled={isProcessing}>
                 Authorize Disburse
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL 1: ANNOUNCE YIELD */}
      <Modal isOpen={showYieldModal} onClose={() => setShowYieldModal(false)} title="New Yield Announcement">
        <form onSubmit={handleAnnounceYield} className="flex-column" style={{ gap: '1.25rem' }}>
          <div className="form-group">
            <label className="text-muted" style={{ fontSize: '0.7rem' }}>Underlying RWA Asset</label>
            <select 
              className="input-field" 
              style={{ width: '100%', padding: '12px' }}
              value={divForm.assetId} 
              onChange={e => setDivForm({ ...divForm, assetId: e.target.value })} 
              required
            >
              <option value="">-- Select Asset for Snapshot --</option>
              {myAssets.map(a => <option key={a.contractId} value={a.payload.instrument.id.unpack}>{a.payload.instrument.id.unpack} - {a.payload.name}</option>)}
            </select>
          </div>

          <div className="form-group">
            <label className="text-muted" style={{ fontSize: '0.7rem' }}>Payout Amount (USD per unit)</label>
            <input 
              type="number" step="0.01" className="input-field" style={{ width: '100%', padding: '12px' }}
              value={divForm.amountPerUnit} 
              onChange={e => setDivForm({ ...divForm, amountPerUnit: e.target.value })} 
              required 
            />
          </div>

          <div className="form-group">
            <label className="text-muted" style={{ fontSize: '0.7rem' }}>Distribution Label</label>
            <input 
              className="input-field" style={{ width: '100%', padding: '12px' }}
              value={divForm.label} 
              onChange={e => setDivForm({ ...divForm, label: e.target.value })} 
              required 
            />
          </div>

          {/* REAL-TIME SNAPSHOT PREVIEW */}
          {divForm.assetId && (
            <div style={{ padding: '1rem', background: '#0d1117', borderRadius: '8px', border: '1px solid #30363d', fontSize: '0.75rem' }}>
              <div style={{ color: 'var(--accent)', fontWeight: 'bold', marginBottom: '5px' }}>Ledger Snapshot Preview:</div>
              <div className="flex-between">
                <span>Total Circulating:</span>
                <span>{performLedgerSnapshot(divForm.assetId).totalUnitsOutstanding.toLocaleString()} Units</span>
              </div>
              <div className="flex-between">
                <span>Unique Eligible Holders:</span>
                <span>{performLedgerSnapshot(divForm.assetId).holderCount} Wallets</span>
              </div>
              <div className="flex-between" style={{ marginTop: '5px', borderTop: '1px solid #222', paddingTop: '5px' }}>
                <span style={{ fontWeight: 'bold' }}>Estimated Total Pool:</span>
                <span style={{ color: 'var(--success)' }}>
                  ${(Number(divForm.amountPerUnit) * performLedgerSnapshot(divForm.assetId).totalUnitsOutstanding).toLocaleString()}
                </span>
              </div>
            </div>
          )}

          <button className="btn-primary" type="submit" style={{ width: '100%', background: 'var(--accent)' }} disabled={isProcessing || !divForm.assetId}>
            {isProcessing ? "Performing Snapshot..." : "Authorize Distribution"}
          </button>
        </form>
      </Modal>

      {/* MODAL 2: PROCESS REDEMPTION */}
      <Modal isOpen={!!selectedEffect} onClose={() => setSelectedEffect(null)} title="Finalize Redemption">
        <div className="flex-column" style={{ gap: '1.25rem' }}>
          <div style={{ textAlign: 'center', padding: '1rem', background: 'rgba(239, 68, 68, 0.05)', borderRadius: '8px', border: '1px dashed var(--danger)' }}>
            <p className="text-muted" style={{ margin: 0 }}>Total Amount to Burn</p>
            <h2 style={{ margin: '5px 0', color: 'var(--danger)' }}>{selectedEffect?.payload.quantity} {selectedEffect?.payload.assetId}</h2>
          </div>

          <div className="form-group">
            <label className="text-muted" style={{ fontSize: '0.7rem' }}>Institutional Funding Account</label>
            <select 
              className="input-field" style={{ width: '100%', padding: '12px' }}
              value={selectedCashCid} 
              onChange={e => setSelectedCashCid(e.target.value)}
              required
            >
              <option value="">-- Choose Account --</option>
              {institutionalCash.map(c => (
                <option key={c.contractId} value={c.contractId}>Account {c.contractId.substring(0,8)} (Bal: ${c.payload.quantity})</option>
              ))}
            </select>
          </div>

          <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', lineHeight: '1.4' }}>
            <b>Network Action:</b> This will atomically burn the tokenized assets and move USD from your institutional account to the redeemer.
          </div>

          <button className="btn-success" style={{ width: '100%' }} onClick={handleProcessRedemption} disabled={isProcessing || !selectedCashCid}>
            {isProcessing ? "Processing Payout..." : "Sign & Disburse Funds"}
          </button>
        </div>
      </Modal>

    </div>
  );
}