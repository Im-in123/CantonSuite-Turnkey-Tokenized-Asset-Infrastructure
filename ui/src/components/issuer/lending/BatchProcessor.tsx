import React from "react";
import { useLedger, useParty, useStreamQueries } from "@daml/react";
import { 
  LendingPool, 
  DepositEffect, 
  WithdrawalEffect, 
  BorrowEffect,
  RepaymentEffect,
  BatchEffectProcessor 
} from "@daml.js/CantonSuite-0.1.0/lib/Lending/Pool";
import { useToast } from "../../../context/ToastContext";

export default function BatchProcessor() {
  const ledger = useLedger();
  const party = useParty();
  const toast = useToast();

  const { contracts: pools } = useStreamQueries(LendingPool, () => [{ poolOperator: party }]);
  const { contracts: processors } = useStreamQueries(BatchEffectProcessor, () => [{ poolOperator: party }]);
  
  // All pending effects
  const { contracts: dEffs } = useStreamQueries(DepositEffect, () => [{ poolOperator: party }]);
  const { contracts: wEffs } = useStreamQueries(WithdrawalEffect, () => [{ poolOperator: party }]);
  const { contracts: bEffs } = useStreamQueries(BorrowEffect, () => [{ poolOperator: party }]);
  const { contracts: rEffs } = useStreamQueries(RepaymentEffect, () => [{ poolOperator: party }]);

  const handleApplyBatch = async (poolCid: string) => {
    const processor = processors.find(p => p.payload.poolCid === poolCid);
    if (!processor) return;

    const byPool = (arr: any[]) => arr.filter(e => e.payload.poolCid === poolCid).map(e => e.contractId);

    try {
      // Logic: SECTION D.1 - Apply Mixed Batch (The Backend reorders Repayments first for Liquidity)
      await ledger.exercise(BatchEffectProcessor.ProcessMixedBatch, processor.contractId, {
        depositCids: byPool(dEffs),
        withdrawalCids: byPool(wEffs),
        borrowCids: byPool(bEffs),
        repaymentCids: byPool(rEffs)
      });
      toast.showToast("Atomic Pool Synchronization Complete.", "success");
    } catch (e: any) { toast.showToast(e.message, "error"); }
  };

  return (
    <div className="card" style={{ borderTop: '4px solid var(--primary)' }}>
      <h3>Atomic Liquidity Processor</h3>
      <p className="text-muted" style={{fontSize: '0.8rem'}}>Process parallel commitments into the lending pool.</p>
      {pools.map(p => {
        const totalCount = [dEffs, wEffs, bEffs, rEffs].reduce((sum, arr) => sum + arr.filter(e => e.payload.poolCid === p.contractId).length, 0);
        return (
          <div key={p.contractId} className="flex-between" style={{ padding: '1rem', background: 'var(--bg-dark)', borderRadius: '8px', marginTop: '1rem' }}>
            <span><b>{p.payload.assetId} Pool</b> ({totalCount} Effects)</span>
            <button className="btn-primary" disabled={totalCount === 0} onClick={() => handleApplyBatch(p.contractId)}>Sync Ledger</button>
          </div>
        );
      })}
    </div>
  );
}