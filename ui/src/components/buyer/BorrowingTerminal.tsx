import React, { useState, useMemo } from "react";
import { useLedger, useParty, useStreamQueries } from "@daml/react";

// Discovery Templates (Tiers)
import { GlobalPoolDiscovery, InvitedPoolParticipant } from "@daml.js/CantonSuite-0.1.0/lib/Lending/PoolDiscovery";
// Transactional Templates
import { LendingPool } from "@daml.js/CantonSuite-0.1.0/lib/Lending/Pool";
import { LoanRequest, Loan } from "@daml.js/CantonSuite-0.1.0/lib/Lending/Loans";
import { Holding_Impl } from "@daml.js/CantonSuite-0.1.0/lib/Portfolio";

import { useToast } from "../../context/ToastContext";
import Modal from "../Modal";

export default function BorrowingTerminal() {
  const party = useParty();
  const ledger = useLedger();
  const toast = useToast();

  // --- 1. DATA STREAMS ---
  const { contracts: publicPools } = useStreamQueries(GlobalPoolDiscovery);
  const { contracts: invitedPools } = useStreamQueries(InvitedPoolParticipant, () => [{ participant: party }]);
  const { contracts: pools } = useStreamQueries(LendingPool);
  const { contracts: holdings } = useStreamQueries(Holding_Impl, () => [{ owner: party }]);
  const { contracts: myLoans } = useStreamQueries(Loan, () => [{ borrower: party }]);

  // --- 2. UI STATE ---
  const [selectedPool, setSelectedPool] = useState<any>(null);
  const [borrowAmount, setBorrowAmount] = useState("");
  const [collateralH, setCollateralH] = useState<any>(null);

  // --- 3. LOGIC: FEE PREVIEW ---
  const feePreview = useMemo(() => {
    const amt = Number(borrowAmount);
    if (!amt || isNaN(amt)) return { origination: 0, net: 0 };
    // Institutional standard: 50bps (0.5%)
    const origination = (amt * 50) / 10000;
    return {
      origination,
      net: amt - origination
    };
  }, [borrowAmount]);

  // --- 4. HANDLERS ---
  const handleJoinInvitedPool = async (cid: any, role: string) => {
    try {
      await ledger.exercise(InvitedPoolParticipant.AcceptPoolInvitation, cid, {
        desiredAmount: "10000.0",
        collateralOffered: { tag: "None" }
      });
      toast.showToast(`Access request for ${role} pool sent to operator.`, "success");
    } catch (e: any) { toast.showToast(e.message, "error"); }
  };

  const handleRequestLoan = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedPool || !collateralH) return;

    try {
      await ledger.create(LoanRequest, {
        borrower: party,
        poolOperator: selectedPool.payload.poolOperator,
        assetId: selectedPool.payload.assetId,
        requestedAmount: borrowAmount,
        collateralAssetId: collateralH.payload.assetId,
        collateralAmount: collateralH.payload.quantity,
        collateralCid: collateralH.contractId,
        durationDays: "30",
        createdAt: new Date().toISOString(),
        complianceParty: selectedPool.payload.complianceParty,
        regulatorParty: selectedPool.payload.regulatorParty,
        miningRoundCid: null
      });
      toast.showToast("RWA Collateral pledged. Awaiting underwriting approval.", "success");
      setSelectedPool(null);
      setBorrowAmount("");
    } catch (e: any) { toast.showToast(e.message, "error"); }
  };

  return (
    <div className="flex-column" style={{ gap: '2rem' }}>
      <div className="grid-cols-2">
        <div className="card" style={{ borderLeft: '4px solid var(--warning)' }}>
          <h3>Institutional Credit Lines</h3>
          <p className="text-muted" style={{fontSize: '0.8rem'}}>Private invitations from boutique lenders.</p>
          {invitedPools.length === 0 && <p className="text-muted" style={{ textAlign: 'center', padding: '1rem' }}>No private invitations found.</p>}
          {invitedPools.map(p => (
            <div key={p.contractId} className="flex-between" style={{ padding: '1rem', background: 'var(--bg-dark)', borderRadius: '8px', marginBottom: '0.75rem' }}>
              <div>
                <div className="badge badge-yellow" style={{marginBottom: '0.25rem'}}>{p.payload.invitationType}</div>
                <div style={{fontWeight: 'bold'}}>{p.payload.assetId} Pool</div>
                <div style={{fontSize: '0.75rem', color: 'var(--text-muted)'}}>Rate: {p.payload.interestRate}%</div>
              </div>
              <button className="btn-primary" onClick={() => handleJoinInvitedPool(p.contractId, p.payload.allowedRole)}>Join</button>
            </div>
          ))}
        </div>

        <div className="card">
          <h3>Market Discovery</h3>
          <p className="text-muted" style={{fontSize: '0.8rem'}}>Publicly listed liquidity pools.</p>
          {publicPools.map(p => (
            <div key={p.contractId} className="flex-between" style={{ padding: '0.75rem', borderBottom: '1px solid var(--border)' }}>
               <span><b>{p.payload.assetId}</b> ({p.payload.interestRate}%)</span>
               <button className="btn-outline" style={{padding: '4px 10px'}}>View Terms</button>
            </div>
          ))}
        </div>
      </div>

      <div className="grid-cols-2">
        <div className="card">
          <div className="flex-between">
            <h3>Available Liquidity</h3>
            <span className="badge badge-blue">{pools.length} Pools Live</span>
          </div>
          <p className="text-muted" style={{fontSize: '0.8rem', marginBottom: '1rem'}}>Borrow cash against your RWA collateral.</p>
          {pools.map(p => (
            <div key={p.contractId} className="flex-between" style={{ padding: '1rem', background: 'var(--bg-dark)', borderRadius: '8px', marginBottom: '0.5rem' }}>
              <span><b>{p.payload.assetId}</b> ({p.payload.interestRate}%)</span>
              <button className="btn-success" onClick={() => setSelectedPool(p)}>Pledge & Borrow</button>
            </div>
          ))}
        </div>

        <div className="card">
          <h3>Active Debt & Collateral</h3>
          <table>
            <thead><tr><th>Loan Amount</th><th>Status</th></tr></thead>
            <tbody>
              {myLoans.length === 0 && <tr><td colSpan={2} className="text-muted" style={{textAlign: 'center'}}>No active debt.</td></tr>}
              {myLoans.map(l => (
                <tr key={l.contractId}>
                  <td><b>{l.payload.principal} {l.payload.assetId}</b></td>
                  <td><span className="badge badge-green">Active</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Modal isOpen={!!selectedPool} onClose={() => setSelectedPool(null)} title={`Borrow from ${selectedPool?.payload.assetId} Pool`}>
        <form onSubmit={handleRequestLoan} className="flex-column" style={{ gap: '1.25rem' }}>
          <div className="flex-column">
            <label className="text-muted" style={{fontSize: '0.8rem'}}>Amount to Borrow</label>
            <input type="number" className="input-field" value={borrowAmount} onChange={e => setBorrowAmount(e.target.value)} placeholder="0.00" required />
          </div>

          {/* SECTION F.5: SMART CONTRACT MONETIZATION PREVIEW */}
          <div style={{ padding: '1rem', background: 'rgba(59, 130, 246, 0.05)', border: '1px solid var(--border)', borderRadius: '8px' }}>
            <div className="flex-between" style={{ fontSize: '0.8rem', marginBottom: '0.4rem' }}>
              <span className="text-muted">Origination Fee (50bps):</span>
              <span style={{ color: 'var(--danger)' }}>-${feePreview.origination.toFixed(2)}</span>
            </div>
            <div className="flex-between" style={{ fontSize: '0.85rem', fontWeight: 'bold' }}>
              <span>Net Disbursement:</span>
              <span style={{ color: 'var(--success)' }}>${feePreview.net.toFixed(2)}</span>
            </div>
          </div>
          
          <div className="flex-column">
            <label className="text-muted" style={{fontSize: '0.8rem'}}>Pledge RWA Collateral</label>
            <select className="input-field" onChange={e => setCollateralH(holdings.find(h => h.contractId === e.target.value))} required>
              <option value="">-- Select Asset --</option>
              {holdings.filter(h => !h.payload.locked).map(h => (
                <option key={h.contractId} value={h.contractId}>{h.payload.assetId} (Available: {h.payload.quantity})</option>
              ))}
            </select>
          </div>
          
          <button className="btn-success" type="submit">Submit Request</button>
        </form>
      </Modal>
    </div>
  );
}