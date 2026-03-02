import React, { useState } from "react";
import { useLedger, useParty, useStreamQueries } from "@daml/react";
import { SynchronizerMigrationRequest, MigrationWorkflow } from "@daml.js/CantonSuite-0.1.0/lib/Network/SynchronizerMigration";
import { useToast } from "../../context/ToastContext";

export default function MigrationManager() {
  const ledger = useLedger();
  const party = useParty();
  const toast = useToast();

  const { contracts: requests } = useStreamQueries(SynchronizerMigrationRequest, () => [{ issuer: party }]);
  const { contracts: workflows } = useStreamQueries(MigrationWorkflow, () => [{ issuer: party }]);

  const handleApprove = async (cid: any) => {
    try {
      await ledger.exercise(SynchronizerMigrationRequest.ApproveMigration, cid, {});
      toast.showToast("Migration Request Approved. Workflow started.", "success");
    } catch (e: any) { toast.showToast(e.message, "error"); }
  };

  const handleExecuteLock = async (cid: any) => {
    try {
      // SECTION E.1: First step of the atomic move - locks the holding
      await ledger.exercise(MigrationWorkflow.LockForMigration, cid, {});
      toast.showToast("Holding locked for transfer. Ready for completion.", "info");
    } catch (e: any) { toast.showToast(e.message, "error"); }
  };

  const handleComplete = async (cid: any) => {
    try {
      // SECTION E.1: Final step - recreates the holding on the target sync
      await ledger.exercise(MigrationWorkflow.CompleteMigration, cid, {
        migrationProof: "CANTON-PROOF-" + Date.now()
      });
      toast.showToast("Cross-sync migration finalized.", "success");
    } catch (e: any) { toast.showToast(e.message, "error"); }
  };

  return (
    <div className="flex-column" style={{gap:'2rem'}}>
      <div className="card">
        <h3>Pending Migration Requests</h3>
        {requests.length === 0 && <p className="text-muted">No move requests.</p>}
        {requests.map(r => (
          <div key={r.contractId} className="flex-between" style={{padding:'1rem', background:'var(--bg-dark)', borderRadius:'8px', marginBottom:'0.5rem'}}>
            <span>{r.payload.requester.split('::')[0]} requests move to <b>{r.payload.targetSync}</b></span>
            <button className="btn-primary" onClick={() => handleApprove(r.contractId)}>Approve</button>
          </div>
        ))}
      </div>

      <div className="card">
        <h3>Active Move Handshakes</h3>
        {workflows.map(w => (
          <div key={w.contractId} className="flex-between" style={{padding:'1rem', borderBottom:'1px solid var(--border)'}}>
            <div>
              <strong>Move: {w.payload.targetSync}</strong>
              <div className="badge badge-yellow" style={{marginLeft:'10px'}}>{w.payload.status}</div>
            </div>
            <div className="flex-gap">
              {w.payload.status === "MigrationPending" && 
                <button className="btn-outline" onClick={() => handleExecuteLock(w.contractId)}>1. Lock Holding</button>
              }
              {w.payload.status === "MigrationInProgress" && 
                <button className="btn-success" onClick={() => handleComplete(w.contractId)}>2. Complete Move</button>
              }
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}