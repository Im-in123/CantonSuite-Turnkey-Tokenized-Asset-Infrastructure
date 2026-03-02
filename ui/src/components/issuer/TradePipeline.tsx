import React, { useState } from "react";
import { useLedger, useParty, useStreamQueries } from "@daml/react";
import { ContractId } from "@daml/types";
import { ApprovedTrade } from "@daml.js/CantonSuite-0.1.0/lib/Trade";
import { MiningRoundReference } from "@daml.js/CantonSuite-0.1.0/lib/CantonCoin/MiningRoundSync";
import { SanctionsClearance } from "@daml.js/CantonSuite-0.1.0/lib/Compliance/SanctionsRegistry";
import { Holding_Impl } from "@daml.js/CantonSuite-0.1.0/lib/Portfolio";
import { Holding } from "@daml.js/CantonSuite-0.1.0/lib/TokenStandard/Interfaces";
import { useToast } from "../../context/ToastContext";

export default function TradePipeline() {
  const ledger = useLedger();
  const party = useParty();
  const toast = useToast();
  
  // Concurrency Guard: tracks the specific trade currently being settled
  const [settlingId, setSettlingId] = useState<string | null>(null);

  const { contracts: approved } = useStreamQueries(ApprovedTrade, () => [{ assetIssuer: party }]);
  const { contracts: rounds } = useStreamQueries(MiningRoundReference);
  const { contracts: myHoldings } = useStreamQueries(Holding_Impl);
  const { contracts: clearances } = useStreamQueries(SanctionsClearance);

  const handleFinalizeSettlement = async (trade: ApprovedTrade.CreateEvent) => {
    if (settlingId) return; // Guard against multi-click
    
    const inventoryHolding = myHoldings.find(h => h.payload.assetId === trade.payload.assetId && !h.payload.locked);
    if (!inventoryHolding) {
      toast.showToast(`Insufficient treasury inventory for ticker ${trade.payload.assetId}`, "error");
      return;
    }

    setSettlingId(trade.contractId);
    try {
      // Logic: SECTION F.1 - Execute atomic DVP including regulatory audit
      await ledger.exercise(ApprovedTrade.ExecuteAtomicSettlement, trade.contractId, {
        buyerPaymentCid: trade.payload.buyerVoucherCid as unknown as ContractId<Holding>, 
        sellerAssetCid: inventoryHolding.contractId as unknown as ContractId<Holding>,
        miningRoundCid: rounds[0]?.contractId || null
      });
      toast.showToast("Trade finalized. Assets exchanged atomically.", "success");
    } catch (e: any) { toast.showToast(e.message, "error"); }
    finally { setSettlingId(null); }
  };

  return (
    <div className="card">
      <h3>Approved Trade Settlement Pipe</h3>
      <table>
        <thead><tr><th>Asset</th><th>Counterparty</th><th>AML</th><th>Action</th></tr></thead>
        <tbody>
          {approved.length === 0 && <tr><td colSpan={4} className="text-muted" style={{textAlign:'center'}}>No trades ready for settlement.</td></tr>}
          {approved.map(a => {
            const isSettling = settlingId === a.contractId;
            const hasAml = clearances.some(c => c.payload.clearedParty === a.payload.buyer && !c.payload.consumed);
            const miningRoundValid = rounds.length > 0;
            
            return (
              <tr key={a.contractId}>
                <td><b>{a.payload.assetId}</b></td>
                <td>{a.payload.buyer.split('::')[0]}</td>
                <td>
                  {hasAml ? <span className="badge badge-green">Cleared</span> : <span className="badge badge-red">Pending</span>}
                </td>
                <td>
                  <button 
                    className="btn-success" 
                    onClick={() => handleFinalizeSettlement(a)} 
                    disabled={isSettling || !hasAml || !miningRoundValid}
                  >
                    {isSettling ? "Committing..." : !miningRoundValid ? "Waiting for Sync" : "Execute DVP"}
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}