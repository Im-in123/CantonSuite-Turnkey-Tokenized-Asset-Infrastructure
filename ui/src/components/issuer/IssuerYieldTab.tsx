import React from "react";

interface IssuerYieldTabProps {
  workflows: readonly any[];
  activeHolderCount: number;
  allocations: readonly any[];
  processingIds: Set<string>;  
  onOpenModal: () => void;
  onCreateWorkflow: () => void;
}

export default function IssuerYieldTab({ workflows, activeHolderCount, allocations, processingIds, onOpenModal, onCreateWorkflow }: IssuerYieldTabProps) {
  return (
    <>
      <div className="grid-cols-3" style={{ marginBottom: "2rem" }}>
        <div className="card"><h3>Pending Workflows</h3><div className="big-stat">{workflows ? workflows.length : 0}</div></div>
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
            {(!workflows || workflows.length === 0) && <tr><td colSpan={5} className="text-muted">No pending workflows</td></tr>}
            {workflows && workflows.map(workflow => {
              const holders = allocations ? allocations.filter(a => a.payload.assetId === workflow.payload.assetId) : [];
              return (
                <tr key={workflow.contractId}>
                  <td><span className="badge badge-blue">{workflow.payload.assetId}</span></td>
                  <td>{workflow.payload.dividendLabel}</td>
                  <td style={{ color: 'var(--success)', fontWeight: 'bold' }}>${Number(workflow.payload.perUnitAmount).toFixed(2)}</td>
                  <td>{holders.length} holders</td>
                  <td>
                    <div className="flex-gap">
                        <button 
                          className="btn-primary" 
                          disabled={processingIds.has(workflow.contractId)}
                          onClick={() => onCreateWorkflow()}
                        >
                          {processingIds.has(workflow.contractId) ? "..." : "Create Workflow"}
                        </button>
                        <button 
                          className="btn-outline"
                          disabled={processingIds.has(workflow.contractId)}
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