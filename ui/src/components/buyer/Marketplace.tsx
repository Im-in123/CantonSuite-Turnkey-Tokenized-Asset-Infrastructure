import React, { useState } from "react";
import { useLedger, useParty, useStreamQueries } from "@daml/react";
import { 
  GlobalDiscoveryListing, 
  InvestorInvitation, 
  SubscriptionRequest, 
  PurchaseIntent 
} from "@daml.js/CantonSuite-0.1.0/lib/Marketplace/MultiTier";
import { useToast } from "../../context/ToastContext";

export default function Marketplace() {
  const party = useParty();
  const ledger = useLedger();
  const toast = useToast();

  const { contracts: globalListings } = useStreamQueries(GlobalDiscoveryListing);
  const { contracts: invitations } = useStreamQueries(InvestorInvitation, () => [{ investor: party }]);
  const { contracts: subs } = useStreamQueries(SubscriptionRequest, () => [{ subscriber: party }]);

  const handleAcceptInvite = async (inv: any) => {
    try {
      await ledger.exercise(InvestorInvitation.AcceptInvitation, inv.contractId, {
        desiredQuantity: inv.payload.quantity
      });
      toast.showToast("Acceptance sent to Issuer.", "success");
    } catch (e: any) { toast.showToast(e.message, "error"); }
  };

  return (
    <div className="flex-column" style={{ gap: '2rem' }}>
      
      {/* EXCLUSIVE OFFERS SECTION (Tiers 3 & 4) */}
      {(invitations.length > 0 || subs.length > 0) && (
        <div className="card" style={{ border: '2px solid var(--accent)', background: 'linear-gradient(to right, #1a1b23, #1e1b2e)' }}>
          <h3 style={{ color: 'var(--accent)', display: 'flex', alignItems: 'center', gap: '8px' }}>
             ✨ Institutional Private Placements
          </h3>
          <div className="grid-cols-2" style={{ marginTop: '1.5rem' }}>
            {invitations.map(i => (
              <div key={i.contractId} className="flex-between" style={{ background: 'var(--bg-dark)', padding: '1.25rem', borderRadius: '12px', border: '1px solid #4c1d95' }}>
                <div>
                  <span className="badge" style={{ background: 'var(--accent)', color: 'white', marginBottom: '0.5rem', display: 'inline-block' }}>WHITESLISTED</span>
                  <h4 style={{ margin: 0 }}>{i.payload.assetId}</h4>
                  <p className="text-muted" style={{ fontSize: '0.8rem' }}>Exclusive Price: ${i.payload.pricePerUnit}</p>
                </div>
                <button className="btn-primary" onClick={() => handleAcceptInvite(i)}>Accept Offer</button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* GLOBAL DISCOVERY SECTION (Tier 1) */}
      <div className="card">
        <h3>Global Secondary Market</h3>
        <div className="grid-cols-3" style={{ marginTop: '1.5rem' }}>
          {globalListings.length === 0 && <p className="text-muted">Scanning synchronizers for public listings...</p>}
          {globalListings.map(g => (
            <div key={g.contractId} className="card" style={{ background: 'var(--bg-dark)' }}>
              <div className="flex-between">
                <span className="badge badge-blue">GLOBAL</span>
                <span style={{ color: 'var(--success)', fontWeight: 'bold' }}>${g.payload.pricePerUnit}</span>
              </div>
              <h4 style={{ margin: '1rem 0' }}>{g.payload.assetId}</h4>
              <button className="btn-outline" style={{ width: '100%' }}>Express Interest</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}