import React from "react";

interface IssuerYieldTabProps {
  announcements: readonly any[];
  activeHolderCount: number;
  allocations: readonly any[];
  processingIds: Set<string>;  
  onOpenModal: () => void;
  onDistribute: (announcement: any) => void;
  onCancel: (cid: string) => void;
}

export default function IssuerYieldTab({ announcements, activeHolderCount, allocations, processingIds, onOpenModal, onDistribute, onCancel }: IssuerYieldTabProps) {
  return (
    <>
      <div className="grid-cols-3" style={{ marginBottom: "2rem" }}>
        <div className="card"><h3>Pending Announcements</h3><div className="big-stat">{announcements.length}</div></div>
        <div className="card"><h3>Active Token Holders</h3><div className="big-stat">{activeHolderCount}</div></div>
        <div className="card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', borderStyle: 'dashed', cursor: 'pointer', background: 'rgba(16, 185, 129, 0.1)', borderColor: 'var(--success)' }} onClick={onOpenModal}>
          <span style={{ color: 'var(--success)', fontWeight: 'bold' }}>+ Announce Yield</span>
        </div>
      </div>

      <div className="card">
        <h3>Yield Distribution Queue</h3>
        <table>
          <thead><tr><th>Asset</th><th>Label</th><th>Per Unit</th><th>Eligible Holders</th><th>Action</th></tr></thead>
          <tbody>
            {announcements.length === 0 && <tr><td colSpan={5} className="text-muted">No pending distributions</td></tr>}
            {announcements.map(ann => {
              const holders = allocations.filter(a => a.payload.assetId === ann.payload.assetId);
              return (
                <tr key={ann.contractId}>
                  <td><span className="badge badge-blue">{ann.payload.assetId}</span></td>
                  <td>{ann.payload.label}</td>
                  <td style={{ color: 'var(--success)', fontWeight: 'bold' }}>${Number(ann.payload.perUnitAmount).toFixed(2)}</td>
                  <td>{holders.length} holders</td>
                  <td>
                    <div className="flex-gap">
                        <button 
                          className="btn-primary" 
                          disabled={processingIds.has(ann.contractId)}
                          onClick={() => onDistribute(ann)}
                        >
                          {processingIds.has(ann.contractId) ? "..." : "Distribute"}
                        </button>
                        <button 
                          className="btn-outline"
                          onClick={() => onCancel(ann.contractId)}
                        >
                          Cancel
                        </button>
                    </div>
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