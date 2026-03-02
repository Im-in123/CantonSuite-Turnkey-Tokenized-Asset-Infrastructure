import React from "react";
import { useLedger, useParty, useStreamQueries } from "@daml/react";
import { Holding_Impl } from "@daml.js/CantonSuite-0.1.0/lib/Portfolio";
import { InitiateRedemption } from "@daml.js/CantonSuite-0.1.0/lib/Redemption/Atomic";
import { useToast } from "../../context/ToastContext";
import CantonIAM from "../../services/CantonIAM";

export default function PortfolioManager() {
  const ledger = useLedger();
  const party = useParty();
  const toast = useToast();
  const iam = CantonIAM.getInstance();

  const { contracts: holdings } = useStreamQueries(Holding_Impl, () => [{ owner: party }]);

  const handleRedeem = async (holding: any) => {
    const compliance = iam.getPartyByRole("ComplianceOfficer");
    const regulator = iam.getPartyByRole("Regulator");

    try {
      // Logic: SECTION D.4 - Start atomic redemption handshake
      await ledger.create(InitiateRedemption, {
        redeemer: party,
        issuer: holding.payload.issuer,
        compliance,
        regulatorParty: regulator,
        assetId: holding.payload.assetId,
        quantity: holding.payload.quantity,
        reason: "Investor Liquidity Request"
      });
      toast.showToast("Redemption initiated. Awaiting Issuer payout.", "success");
    } catch (e: any) { toast.showToast(e.message, "error"); }
  };

  return (
    <div className="card">
      <h3>My Holdings</h3>
      <table>
        <thead><tr><th>Asset</th><th>Quantity</th><th>Status</th><th>Action</th></tr></thead>
        <tbody>
          {holdings.length === 0 && <tr><td colSpan={4} className="text-muted" style={{textAlign:'center'}}>No assets in portfolio.</td></tr>}
          {holdings.map(h => (
            <tr key={h.contractId}>
              <td><b>{h.payload.assetId}</b></td>
              <td>{h.payload.quantity}</td>
              <td>{h.payload.locked ? <span className="badge badge-yellow">Locked</span> : <span className="badge badge-green">Available</span>}</td>
              <td>
                <button className="btn-outline" disabled={h.payload.locked} onClick={() => handleRedeem(h)}>Redeem for Cash</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}