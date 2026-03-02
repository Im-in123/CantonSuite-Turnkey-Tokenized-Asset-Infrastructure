import React, { useState } from "react";
import { useLedger, useParty, useStreamQueries } from "@daml/react";
import { Holding_Impl } from "@daml.js/CantonSuite-0.1.0/lib/Portfolio";
import { HoldingSynchronizerMetadata, SynchronizerMigrationRequest } from "@daml.js/CantonSuite-0.1.0/lib/Network/SynchronizerMigration";
import { Holding } from "@daml.js/CantonSuite-0.1.0/lib/TokenStandard/Interfaces";
import { ContractId } from "@daml/types";
import { useToast } from "../../context/ToastContext";
import Modal from "../Modal";

export default function SyncInventory() {
  const ledger = useLedger();
  const party = useParty();
  const toast = useToast();

  const { contracts: holdings } = useStreamQueries(Holding_Impl, () => [{ owner: party }]);
  const { contracts: syncMeta } = useStreamQueries(HoldingSynchronizerMetadata, () => [{ owner: party }]);

  const [selectedHolding, setSelectedHolding] = useState<any>(null);
  const [targetSync, setTargetSync] = useState("global");

  const handleRequestMigration = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedHolding) return;

    try {
      // Logic: SECTION E.1 - Initiate a move request to the issuer
      await ledger.create(SynchronizerMigrationRequest, {
        requester: party,
        issuer: selectedHolding.payload.issuer,
        holdingCid: selectedHolding.contractId as unknown as ContractId<Holding>,
        currentSync: "sandbox", // In this demo, default is sandbox
        targetSync: targetSync,
        reason: "Liquidity migration for DVP settlement",
        requestedAt: new Date().toISOString(),
        deadline: new Date(Date.now() + 86400000).toISOString()
      });
      toast.showToast(`Migration to ${targetSync} requested.`, "success");
      setSelectedHolding(null);
    } catch (e: any) { toast.showToast(e.message, "error"); }
  };

  return (
    <div className="card">
      <h3>Synchronizer Residency</h3>
      <p className="text-muted">View and migrate holdings between network segments.</p>
      <table>
        <thead><tr><th>Asset</th><th>Resides On</th><th>Amount</th><th>Action</th></tr></thead>
        <tbody>
          {holdings.map(h => {
            const meta = syncMeta.find(m => m.payload.holdingCid === h.contractId);
            const currentSync = meta?.payload.synchronizerInfo.synchronizerId || "Sandbox (Local)";
            return (
              <tr key={h.contractId}>
                <td><span className="badge badge-blue">{h.payload.assetId}</span></td>
                <td><code style={{fontSize:'0.75rem'}}>{currentSync}</code></td>
                <td>{h.payload.quantity}</td>
                <td>
                  <button className="btn-outline" style={{fontSize:'0.7rem'}} onClick={() => setSelectedHolding(h)}>
                    Migrate
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <Modal isOpen={!!selectedHolding} onClose={() => setSelectedHolding(null)} title="Initiate Cross-Sync Move">
        <form onSubmit={handleRequestMigration} className="flex-column" style={{gap: '1rem'}}>
          <p className="text-muted">Moving <b>{selectedHolding?.payload.assetId}</b> requires Issuer & Compliance approval.</p>
          <label>Target Synchronizer</label>
          <select className="input-field" value={targetSync} onChange={e => setTargetSync(e.target.value)}>
            <option value="global">Canton Global Sync</option>
            <option value="private-sync-1">Institutional Private Sync</option>
            <option value="us-east-sync">US Regional Sync</option>
          </select>
          <button className="btn-primary" type="submit">Send Move Request</button>
        </form>
      </Modal>
    </div>
  );
}