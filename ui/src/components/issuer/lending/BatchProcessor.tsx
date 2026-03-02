import React from "react";
import { useLedger, useParty, useStreamQueries } from "@daml/react";
import { LendingPool, DepositEffect, WithdrawalEffect, BatchEffectProcessor } from "@daml.js/CantonSuite-0.1.0/lib/Lending/Pool";
import { useToast } from "../../../context/ToastContext";

export default function BatchProcessor() {
  const ledger = useLedger();
  const party = useParty();
  const toast = useToast();

  const { contracts: pools } = useStreamQueries(LendingPool, () => [{ poolOperator: party }]);
  const { contracts: depositEffects } = useStreamQueries(DepositEffect, () => [{ poolOperator: party }]);
  const { contracts: withdrawalEffects } = useStreamQueries(WithdrawalEffect, () => [{ poolOperator: party }]);
  const { contracts: processors } = useStreamQueries(BatchEffectProcessor, () => [{ poolOperator: party }]);

  const handleApplyBatch = async (poolCid: string) => {
    const processor = processors.find(p => p.payload.poolCid === poolCid);
    const poolDeposits = depositEffects.filter(e => e.payload.poolCid === poolCid).map(e => e.contractId);
    const poolWithdrawals = withdrawalEffects.filter(e => e.payload.poolCid === poolCid).map(e => e.contractId);

    if (!processor) return;

    try {
      // Logic: Process both deposits and withdrawals atomically
      await ledger.exercise(BatchEffectProcessor.ProcessMixedBatch, processor.contractId, {
        depositCids: poolDeposits,
        withdrawalCids: poolWithdrawals,
        borrowCids: [],
        repaymentCids: []
      });
      toast.showToast("Batch processed: Liquidity updated atomically.", "success");
    } catch (e: any) { toast.showToast(e.message, "error"); }
  };

  return (
    <div className="card">
      <h3>Atomic Liquidity Queue</h3>
      {pools.map(p => {
        const dCount = depositEffects.filter(e => e.payload.poolCid === p.contractId).length;
        const wCount = withdrawalEffects.filter(e => e.payload.poolCid === p.contractId).length;
        
        return (
          <div key={p.contractId} className="flex-between" style={{ padding: '1rem', background: 'var(--bg-dark)', borderRadius: '8px', marginBottom: '1rem' }}>
            <div>
              <strong>{p.payload.assetId} Pool</strong>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                {dCount} Deposits | {wCount} Withdrawals pending
              </div>
            </div>
            <button 
              className="btn-primary" 
              disabled={dCount + wCount === 0} 
              onClick={() => handleApplyBatch(p.contractId)}
            >
              Apply All Changes
            </button>
          </div>
        );
      })}
    </div>
  );
}