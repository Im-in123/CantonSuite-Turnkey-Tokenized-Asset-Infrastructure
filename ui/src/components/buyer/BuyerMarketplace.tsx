import React, { useState } from "react";
import { useLedger, useParty, useStreamQueries } from "@daml/react";
import { 
  GlobalDiscoveryListing, 
  FirmMarketplaceListing, 
  InvestorInvitation,
  FirmMembership,
  SubscriptionRequest,
  PurchaseIntent,
  ClubDeal,
  ClubDealCommitment
} from "@daml.js/CantonSuite-0.1.0/lib/Marketplace/MultiTier";
import { useToast } from "../../context/ToastContext";

type MarketTier = "ALL" | "GLOBAL" | "FIRM" | "INVITED" | "DIRECT" | "CLUB";

interface MarketItem {
  contractId: string;
  templateId: string;
  payload: any;
  type: string;
  label: string;
  color: string;
  accessible: boolean;
  accessReason?: string;
}

export default function Marketplace() {
  const party = useParty();
  const ledger = useLedger();
  const toast = useToast();
  const [tierFilter, setTierFilter] = useState<MarketTier>("ALL");

  // Stream all marketplace items
  const { contracts: globalListings } = useStreamQueries(GlobalDiscoveryListing);
  const { contracts: firmListings } = useStreamQueries(FirmMarketplaceListing);
  const { contracts: invitations } = useStreamQueries(InvestorInvitation, () => [{ investor: party }]);
  const { contracts: memberships } = useStreamQueries(FirmMembership, () => [{ member: party }]);
  const { contracts: directSubscriptions } = useStreamQueries(SubscriptionRequest, () => [{ subscriber: party }]);
  const { contracts: myIntents } = useStreamQueries(PurchaseIntent, () => [{ buyer: party }]);
  const { contracts: clubDeals } = useStreamQueries(ClubDeal);
  const { contracts: myCommitments } = useStreamQueries(ClubDealCommitment, () => [{ investor: party }]);

  // Determine accessibility for each tier
  const marketItems: MarketItem[] = [
    // Tier 1: Global (Always accessible)
    ...globalListings.map(c => ({
      ...c, 
      type: "GLOBAL", 
      label: "Tier 1: Global", 
      color: "badge-blue",
      accessible: true,
      accessReason: "Public discovery"
    })),
    
    // Tier 2: Firm-Only (Check membership)
    ...firmListings.map(c => {
      const hasMembership = memberships.some(m => m.payload.membershipId === c.payload.firmId);
      return {
        ...c,
        type: "FIRM",
        label: `Tier 2: ${c.payload.firmId}`,
        color: "badge-purple",
        accessible: hasMembership,
        accessReason: hasMembership ? "Member access" : "Membership required"
      };
    }),
    
    // Tier 3: Invited (Only if invited)
    ...invitations.map(c => ({
      ...c,
      type: "INVITED",
      label: "Tier 3: Private Placement",
      color: "badge-green",
      accessible: true,
      accessReason: "Invited access"
    })),
    
    // Tier 4: Direct (Only if subscriber)
    ...directSubscriptions.map(c => ({
      ...c,
      type: "DIRECT",
      label: "Tier 4: Bilateral Offer",
      color: "badge-orange",
      accessible: true,
      accessReason: "Direct offer"
    })),
    
    // Club Deals (Check if eligible)
    ...clubDeals.map(c => {
      const hasCommitment = myCommitments.some(commit => commit.payload.dealId === c.payload.dealId);
      const canJoin = !hasCommitment && c.payload.currentInvestors < c.payload.maximumInvestors;
      return {
        ...c,
        type: "CLUB",
        label: "Club Deal",
        color: "badge-accent",
        accessible: canJoin,
        accessReason: canJoin ? "Open for commitment" : "Already committed or full"
      };
    })
  ];

  const filteredItems = marketItems.filter(item => 
    tierFilter === "ALL" || item.type === tierFilter
  );

  const handleGlobalInterest = async (listing: MarketItem) => {
    try {
      await ledger.exercise(GlobalDiscoveryListing.ExpressInterest, listing.contractId, {
        buyer: party,
        desiredQuantity: listing.payload.minimumPurchase
      });
      toast.showToast("Interest expressed for Tier 1 asset.", "success");
    } catch (e: any) { toast.showToast(e.message, "error"); }
  };

  const handleFirmBuy = async (listing: MarketItem) => {
    const membership = memberships.find(m => m.payload.membershipId === listing.payload.firmId);
    if (!membership) {
      toast.showToast("Membership Proof Required: Join the firm to buy at this price.", "error");
      return;
    }
    try {
      await ledger.exercise(FirmMarketplaceListing.CreateMemberInterest, listing.contractId, {
        buyer: party,
        desiredQuantity: listing.payload.minimumPurchase,
        membershipCid: membership.contractId
      });
      toast.showToast("Institutional Interest Registered.", "success");
    } catch (e: any) { toast.showToast(e.message, "error"); }
  };

  const handleAcceptInvite = async (invitation: MarketItem) => {
    try {
      await ledger.exercise(InvestorInvitation.AcceptInvitation, invitation.contractId, {
        desiredQuantity: invitation.payload.quantity
      });
      toast.showToast("Whitelisted allocation accepted.", "success");
    } catch (e: any) { toast.showToast(e.message, "error"); }
  };

  const handleDirectAccept = async (subscription: MarketItem) => {
    try {
      await ledger.exercise(SubscriptionRequest.AcceptSubscription, subscription.contractId, {
        paymentHoldingCid: "PLACEHOLDER_PAYMENT_CID",
        issuerAssetCid: "PLACEHOLDER_ASSET_CID"
      });
      toast.showToast("Bilateral subscription accepted.", "success");
    } catch (e: any) { toast.showToast(e.message, "error"); }
  };

  const handleClubCommit = async (clubDeal: MarketItem) => {
    try {
      await ledger.exercise(ClubDeal.CommitToClubDeal, clubDeal.contractId, {
        investor: party,
        commitmentAmount: clubDeal.payload.minimumCommitment
      });
      toast.showToast("Club deal commitment made.", "success");
    } catch (e: any) { toast.showToast(e.message, "error"); }
  };

  const getActionButtons = (item: MarketItem) => {
    if (!item.accessible) {
      return <button className="btn-outline" disabled>{item.accessReason}</button>;
    }

    switch (item.type) {
      case "GLOBAL":
        return <button className="btn-primary" onClick={() => handleGlobalInterest(item)}>Express Interest</button>;
      case "FIRM":
        return <button className="btn-primary" onClick={() => handleFirmBuy(item)}>Buy as Member</button>;
      case "INVITED":
        return <button className="btn-success" onClick={() => handleAcceptInvite(item)}>Accept Invitation</button>;
      case "DIRECT":
        return <button className="btn-accent" onClick={() => handleDirectAccept(item)}>Accept Offer</button>;
      case "CLUB":
        return <button className="btn-accent" onClick={() => handleClubCommit(item)}>Commit to Deal</button>;
      default:
        return null;
    }
  };

  return (
    <div className="flex-column" style={{ gap: '2rem' }}>
      {/* Tier Filter Controls */}
      <div className="flex-gap" style={{ background: 'var(--bg-card)', padding: '0.5rem', borderRadius: '8px', border: '1px solid var(--border)' }}>
        {(["ALL", "GLOBAL", "FIRM", "INVITED", "DIRECT", "CLUB"] as MarketTier[]).map(tier => (
          <button 
            key={tier} 
            className={tierFilter === tier ? "btn-primary" : "btn-outline"} 
            style={{ fontSize: '0.7rem', padding: '4px 12px' }} 
            onClick={() => setTierFilter(tier)}
          >
            {tier}
          </button>
        ))}
      </div>

      {/* Priority: Direct Subscriptions (Tier 4) */}
      {directSubscriptions.length > 0 && tierFilter === "ALL" && (
        <div className="card" style={{ border: '2px solid var(--warning)', background: 'linear-gradient(to right, #1a1b23, #2b1f1e)' }}>
          <h3 style={{ color: 'var(--warning)' }}>🎯 Direct Bilateral Offers (Tier 4)</h3>
          <div className="grid-cols-1" style={{ marginTop: '1rem' }}>
            {directSubscriptions.map(s => (
              <div key={s.contractId} className="flex-between" style={{ background: 'var(--bg-dark)', padding: '1rem', borderRadius: '12px', marginBottom: '1rem' }}>
                <div>
                  <span className="badge badge-orange">DIRECT OFFER</span>
                  <h4 style={{ margin: '5px 0' }}>{s.payload.assetId}</h4>
                  <p className="text-muted" style={{ fontSize: '0.8rem' }}>
                    Quantity: {s.payload.quantity} | Price: ${s.payload.pricePerUnit}
                  </p>
                  <p className="text-muted" style={{ fontSize: '0.8rem' }}>
                    From: {s.payload.issuer.split("::")[0]}
                  </p>
                </div>
                <button className="btn-accent" onClick={() => handleDirectAccept({...s, type: "DIRECT", label: "Tier 4: Direct", color: "badge-orange", accessible: true})}>Accept Offer</button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Priority: Private Invitations (Tier 3) */}
      {invitations.length > 0 && tierFilter === "ALL" && (
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
                <button className="btn-success" onClick={() => handleAcceptInvite({...i, type: "INVITED", label: "Tier 3: Private", color: "badge-green", accessible: true})}>Commit</button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Main Marketplace Table */}
      <div className="card">
        <h3>4-Tier Marketplace Discovery</h3>
        <table>
          <thead>
            <tr>
              <th>Tier</th>
              <th>Asset</th>
              <th>Price</th>
              <th>Min. Purchase</th>
              <th>Access</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredItems.length === 0 && (
              <tr>
                <td colSpan={6} className="text-muted" style={{ textAlign: 'center' }}>
                  No matching marketplace items found.
                </td>
              </tr>
            )}
            {filteredItems.map(item => (
              <tr key={item.contractId}>
                <td>
                  <span className={`badge ${item.color}`}>
                    {item.label}
                  </span>
                </td>
                <td>
                  <b>{item.payload.assetId}</b>
                  {item.type === "CLUB" && (
                    <div>
                      <small className="text-muted">
                        {item.payload.currentInvestors}/{item.payload.maximumInvestors} investors
                      </small>
                    </div>
                  )}
                </td>
                <td style={{ color: 'var(--success)' }}>
                  ${item.payload.pricePerUnit}
                </td>
                <td>
                  {item.type === "CLUB" ? item.payload.minimumCommitment : item.payload.minimumPurchase}
                </td>
                <td>
                  <span className={`badge ${item.accessible ? 'badge-green' : 'badge-yellow'}`}>
                    {item.accessReason}
                  </span>
                </td>
                <td>
                  {getActionButtons(item)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* My Purchase Intents */}
      {myIntents.length > 0 && (
        <div className="card">
          <h3>My Purchase Intents</h3>
          <table>
            <thead>
              <tr><th>Asset</th><th>Quantity</th><th>Price</th><th>Status</th></tr>
            </thead>
            <tbody>
              {myIntents.map(intent => (
                <tr key={intent.contractId}>
                  <td><b>{intent.payload.assetId}</b></td>
                  <td>{intent.payload.quantity}</td>
                  <td>${intent.payload.pricePerUnit}</td>
                  <td><span className="badge badge-cyan">Pending</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}