import React from "react";
import { useLedger, useParty, useStreamQueries } from "@daml/react";
import { 
  GlobalDiscoveryListing, 
  FirmMarketplaceListing, 
  InvestorInvitation,
  FirmMembership 
} from "@daml.js/CantonSuite-0.1.0/lib/Marketplace/MultiTier";
import { useToast } from "../../context/ToastContext";

export default function Marketplace() {
  const party = useParty();
  const ledger = useLedger();
  const toast = useToast();

  const { contracts: globalListings } = useStreamQueries(GlobalDiscoveryListing);
  const { contracts: firmListings } = useStreamQueries(FirmMarketplaceListing);
  const { contracts: invitations } = useStreamQueries(InvestorInvitation, () => [{ investor: party }]);
  const { contracts: memberships } = useStreamQueries(FirmMembership, () => [{ member: party }]);

  const handleFirmBuy = async (listing: any) => {
    const membership = memberships.find(m => m.payload.membershipId === listing.payload.firmId);
    if (!membership) {
      toast.showToast("Membership Proof Required: Join the firm to buy at this price.", "error");
      return;
    }
    try {
      // Logic: SECTION F.6 - Provide Membership Proof to buy from restricted Tier 2
      await ledger.exercise(FirmMarketplaceListing.CreateMemberInterest, listing.contractId, {
        buyer: party,
        desiredQuantity: listing.payload.minimumPurchase,
        membershipCid: membership.contractId
      });
      toast.showToast("Institutional Interest Registered.", "success");
    } catch (e: any) { toast.showToast(e.message, "error"); }
  };

  const handleAcceptInvite = async (inv: any) => {
    try {
      // Logic: Tier 3 whitelisted acceptance
      await ledger.exercise(InvestorInvitation.AcceptInvitation, inv.contractId, {
        desiredQuantity: inv.payload.quantity
      });
      toast.showToast("Whitelisted allocation accepted.", "success");
    } catch (e: any) { toast.showToast(e.message, "error"); }
  };

  return (
    <div className="flex-column" style={{ gap: '2rem' }}>
      {invitations.length > 0 && (
        <div className="card" style={{ border: '2px solid var(--accent)', background: 'linear-gradient(to right, #1a1b23, #1e1b2e)' }}>
          <h3 style={{ color: 'var(--accent)' }}>✨ Institutional Private Placements (Tier 3)</h3>
          <div className="grid-cols-2" style={{ marginTop: '1rem' }}>
            {invitations.map(i => (
              <div key={i.contractId} className="flex-between" style={{ background: 'var(--bg-dark)', padding: '1rem', borderRadius: '12px' }}>
                <div>
                  <span className="badge badge-accent">EXCLUSIVE</span>
                  <h4 style={{ margin: '5px 0' }}>{i.payload.assetId}</h4>
                  <p className="text-muted" style={{ fontSize: '0.8rem' }}>Discounted Price: ${i.payload.pricePerUnit}</p>
                </div>
                <button className="btn-primary" onClick={() => handleAcceptInvite(i)}>Commit</button>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="card">
        <h3>Market Discovery</h3>
        <table>
          <thead><tr><th>Tier</th><th>Asset</th><th>Price</th><th>Action</th></tr></thead>
          <tbody>
            {globalListings.map(g => (
              <tr key={g.contractId}>
                <td><span className="badge badge-blue">Tier 1: Global</span></td>
                <td><b>{g.payload.assetId}</b></td>
                <td style={{ color: 'var(--success)' }}>${g.payload.pricePerUnit}</td>
                <td><button className="btn-outline">Express Interest</button></td>
              </tr>
            ))}
            {firmListings.map(f => (
              <tr key={f.contractId}>
                <td><span className="badge badge-accent">Tier 2: {f.payload.firmId}</span></td>
                <td><b>{f.payload.assetId}</b></td>
                <td style={{ color: 'var(--success)' }}>${f.payload.pricePerUnit}</td>
                <td><button className="btn-primary" onClick={() => handleFirmBuy(f)}>Buy as Member</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}