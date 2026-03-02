import React from "react";
import BatchProcessor from "./lending/BatchProcessor";
import LoanManager from "./lending/LoanManager";
import DistributionCenter from "./lending/DistributionCenter";
import PoolLifecycleManager from "./lending/PoolLifecycleManager";

export default function LendingProcessor() {
  return (
    <div className="lending-terminal">
      {/* HEADER */}
      <header className="terminal-header">
        <div>
          <h1>LENDING CONTROL CENTER</h1>
          <p className="text-muted">Genesis, Distribution, and Credit Risk Management</p>
        </div>
        <div className="flex-gap">
          <div className="status-badge">
            <span className="dot pulse"></span>
            SYNC: SANDBOX-PRIMARY
          </div>
          <span className="badge badge-blue">V4.0.0</span>
        </div>
      </header>

      {/* 3-COLUMN DECK */}
      <div className="control-deck">
        
        {/* COLUMN 1: GENESIS */}
        <div className="deck-column">
          <div className="column-label">01 GENESIS & PARAMS</div>
          <PoolLifecycleManager />
          <div className="card protocol-card">
             <h4>Governance Rule</h4>
             <p>Parameter changes (LTV/APR) only affect new loan originations. Existing debt is locked via sub-transaction privacy.</p>
          </div>
        </div>

        {/* COLUMN 2: OPERATIONS */}
        <div className="deck-column">
          <div className="column-label">02 DISTRIBUTION & LIQUIDITY</div>
          <DistributionCenter />
          <BatchProcessor />
        </div>

        {/* COLUMN 3: CREDIT */}
        <div className="deck-column">
          <div className="column-label">03 CREDIT & UNDERWRITING</div>
          <LoanManager />
        </div>
      </div>

      <style>{`
        .lending-terminal {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          width: 100%;
          box-sizing: border-box;
        }

        .terminal-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          border-bottom: 1px solid var(--border);
          padding-bottom: 1rem;
        }

        .terminal-header h1 {
          margin: 0;
          font-size: 1.4rem;
          letter-spacing: 2px;
          color: var(--primary);
          font-weight: 900;
        }

        /* GRID SYSTEM - PREVENTS OVERLAP */
        .control-deck {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 1.5rem;
          align-items: start;
          width: 100%;
        }

        @media (max-width: 1250px) {
          .control-deck { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 900px) {
          .control-deck { grid-template-columns: 1fr; }
        }

        .deck-column {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          min-width: 0; /* Crucial: allows grid to shrink column */
          overflow: hidden;
        }

        .column-label {
          font-size: 0.65rem;
          font-weight: 800;
          color: var(--text-muted);
          letter-spacing: 1.5px;
          padding-left: 0.5rem;
          border-left: 2px solid var(--primary);
        }

        .status-badge {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.7rem;
          font-weight: bold;
          background: #0d1117;
          padding: 6px 12px;
          border-radius: 4px;
          border: 1px solid #30363d;
          font-family: monospace;
        }

        .dot { height: 6px; width: 6px; border-radius: 50%; }
        .pulse { 
          background: var(--success); 
          box-shadow: 0 0 8px var(--success);
          animation: pulse-kf 2s infinite;
        }

        .protocol-card {
          background: rgba(59, 130, 246, 0.05) !important;
          border: 1px dashed #3b82f677 !important;
        }

        .protocol-card h4 { margin: 0 0 0.5rem 0; font-size: 0.75rem; color: var(--primary); text-transform: uppercase; }
        .protocol-card p { font-size: 0.7rem; color: var(--text-muted); line-height: 1.4; margin: 0; }

        @keyframes pulse-kf { 0% { opacity: 1; } 50% { opacity: 0.4; } 100% { opacity: 1; } }

        /* Global table containment */
        table { display: block; width: 100%; overflow-x: auto; }
      `}</style>
    </div>
  );
}