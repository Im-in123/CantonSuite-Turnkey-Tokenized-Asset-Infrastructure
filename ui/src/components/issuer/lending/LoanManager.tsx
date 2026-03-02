import React from "react";
import { useLedger, useParty, useStreamQueries } from "@daml/react";
import { LoanRequest, Loan } from "@daml.js/CantonSuite-0.1.0/lib/Lending/Loans";
import { LendingPool } from "@daml.js/CantonSuite-0.1.0/lib/Lending/Pool";
import { useToast } from "../../../context/ToastContext";

export default function LoanManager() {
  const ledger = useLedger();
  const party = useParty();
  const toast = useToast();

  const { contracts: requests } = useStreamQueries(LoanRequest, () => [{ poolOperator: party }]);
  const { contracts: activeLoans } = useStreamQueries(Loan, () => [{ lender: party }]);
  const { contracts: pools } = useStreamQueries(LendingPool);

  const handleApproveLoan = async (req: any) => {
    const pool = pools.find(p => p.payload.assetId === req.payload.assetId && p.payload.poolOperator === party);
    if (!pool) return toast.showToast("No active pool found for this asset.", "error");

    try {
      // SECTION E.1: Synchronizer compatibility check is done in backend
      await ledger.exercise(LoanRequest.ApproveLoan, req.contractId, {
        poolCid: pool.contractId,
        existingCashCid: null,
        borrowerCurrentSync: "sandbox", 
        poolCurrentSync: "sandbox",
        targetSync: "sandbox"
      });
      toast.showToast("Loan Approved. Principal disbursed.", "success");
    } catch (e: any) { toast.showToast(e.message, "error"); }
  };

  return (
    <div className="flex-column" style={{ gap: '1.5rem' }}>
      <div className="card">
        <h3>Pending Loan Requests</h3>
        <table>
          <thead><tr><th>Borrower</th><th>Amount</th><th>Collateral</th><th>Action</th></tr></thead>
          <tbody>
            {requests.map(r => (
              <tr key={r.contractId}>
                <td>{r.payload.borrower.split('::')[0]}</td>
                <td>${Number(r.payload.requestedAmount).toLocaleString()}</td>
                <td>{r.payload.collateralAmount} {r.payload.collateralAssetId}</td>
                <td><button className="btn-success" onClick={() => handleApproveLoan(r)}>Approve</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="card">
        <h3>Active Debt Portfolio</h3>
        <table>
          <thead><tr><th>Borrower</th><th>Principal</th><th>Rate</th><th>Status</th></tr></thead>
          <tbody>
            {activeLoans.map(l => (
              <tr key={l.contractId}>
                <td>{l.payload.borrower.split('::')[0]}</td>
                <td>${l.payload.principal}</td>
                <td>{l.payload.interestRate}%</td>
                <td><span className="badge badge-green">{l.payload.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}