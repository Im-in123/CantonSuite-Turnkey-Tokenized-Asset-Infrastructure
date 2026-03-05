import React, { useState } from "react";
import { useLedger, useParty, useStreamQueries } from "@daml/react";
import { 
  PrivacyPreservingListing,
  GlobalDiscoveryListing, 
  FirmMarketplaceListing, 
  InvestorInvitation,
  ClubDeal,
  SubscriptionRequest,
  PurchaseIntent
} from "@daml.js/CantonSuite-0.1.0/lib/Marketplace/MultiTier";
import { useToast } from "../../context/ToastContext";
import CantonIAM from "../../services/CantonIAM";

type MarketFilter = "ALL" | "GLOBAL" | "FIRM" | "PRIVATE" | "DIRECT" | "PENDING" | "INTEREST";

interface MarketListing {
  contractId: string;
  templateId: string;
  payload: any;
  type: string;
  label: string;
  color: string;
  status?: string;
}

export default function MarketPresence() {
  const party = useParty();
  const ledger = useLedger();
  const toast = useToast();
  const iam = CantonIAM.getInstance();
  const [filter, setFilter] = useState<MarketFilter>("ALL");

  // 1. Stream "Pending" Configs (PrivacyPreservingListing)
  const { contracts: pending } = useStreamQueries(PrivacyPreservingListing, () => [{ issuer: party }]);
  
  // 2. Stream "Live" Listings
  const { contracts: global } = useStreamQueries(GlobalDiscoveryListing, () => [{ issuer: party }]);
  const { contracts: firm } = useStreamQueries(FirmMarketplaceListing, () => [{ issuer: party }]);
  const { contracts: invites } = useStreamQueries(InvestorInvitation, () => [{ issuer: party }]);
  const { contracts: deals } = useStreamQueries(ClubDeal, () => [{ issuer: party }]);
  
  // 3. Stream Direct Subscriptions (Tier 4)
  const { contracts: directSubscriptions } = useStreamQueries(SubscriptionRequest, () => [{ issuer: party }]);
  
  // 4. Stream Purchase Intents (Buyer Interest)
  const { contracts: purchaseIntents } = useStreamQueries(PurchaseIntent, () => [{ issuer: party }]);

  const allData: MarketListing[] = [
    ...pending.map(c => ({ ...c, type: "PENDING", label: "Configuration", color: "badge-yellow" })),
    ...global.map(c => ({ ...c, type: "GLOBAL", label: "Tier 1: Global", color: "badge-blue" })),
    ...firm.map(c => ({ ...c, type: "FIRM", label: "Tier 2: Firm-Only", color: "badge-purple" })),
    ...invites.map(c => ({ ...c, type: "PRIVATE", label: "Tier 3: Whitelist", color: "badge-green" })),
    ...deals.map(c => ({ ...c, type: "CLUB", label: "Club Deal", color: "badge-accent" })),
    ...directSubscriptions.map(c => ({ ...c, type: "DIRECT", label: "Tier 4: Direct", color: "badge-orange" })),
    ...purchaseIntents.map(c => ({ ...c, type: "INTEREST", label: "Buyer Interest", color: "badge-cyan" }))
  ];

  const filteredListings = allData.filter(l => filter === "ALL" || l.type === filter);

  const handleActivate = async (listing: MarketListing) => {
    const publicMarketId = iam.getPartyByRole("PublicMarket");
    try {
      // Defensive check for template availability
      if (!PrivacyPreservingListing || !PrivacyPreservingListing.PublishToGlobalDiscovery) {
        toast.showToast("Marketplace templates not available", "error");
        return;
      }

      const tier = listing.payload.visibility.tier;

      if (tier === "GlobalTier") {
        // Logic: Transition Tier 1 Config to Live Public Listing
        await ledger.exercise(PrivacyPreservingListing.PublishToGlobalDiscovery, listing.contractId, {
          publicParty: publicMarketId
        });
        toast.showToast("Global Listing is now LIVE.", "success");
      } 
      else if (tier === "FirmOnlyTier") {
        // Logic: Transition Tier 2 Config with Membership gating
        await ledger.exercise(PrivacyPreservingListing.PublishToFirmMarketplace, listing.contractId, {
          firmId: listing.payload.visibility.firmMembership.value,
          observers: listing.payload.visibility.selectedInvestors
        });
        toast.showToast("Firm Listing is now LIVE.", "success");
      } 
      else if (tier === "SelectedTier") {
        // Logic: Send invitations to whitelisted investors
        for (const investor of listing.payload.visibility.selectedInvestors) {
          await ledger.exercise(PrivacyPreservingListing.InviteSelectedInvestor, listing.contractId, {
            investor: investor
          });
        }
        toast.showToast("Invitations sent to selected investors.", "success");
      }
      else if (tier === "DirectTier") {
        // Logic: Create bilateral subscription
        await ledger.exercise(PrivacyPreservingListing.CreateBilateralSubscription, listing.contractId);
        toast.showToast("Direct subscription request sent.", "success");
      }
    } catch (e: any) { 
      console.error("Activation error:", e);
      toast.showToast(e.message || "Failed to activate listing", "error"); 
    }
  };

  const handleAcceptIntent = async (intent: MarketListing) => {
    try {
      // Defensive check for template availability
      if (!PurchaseIntent || !PurchaseIntent.AcceptIntent) {
        toast.showToast("Purchase intent template not available", "error");
        return;
      }
      // Logic: Accept buyer purchase intent and create settlement
      await ledger.exercise(PurchaseIntent.AcceptIntent, intent.contractId, {
        buyerPaymentCid: "PLACEHOLDER_PAYMENT_CID", // This would come from payment processing
        issuerAssetCid: "PLACEHOLDER_ASSET_CID"     // This would come from asset holdings
      });
      toast.showToast("Purchase intent accepted. Settlement initiated.", "success");
    } catch (e: any) { 
      console.error("Accept intent error:", e);
      toast.showToast(e.message || "Failed to accept purchase intent", "error"); 
    }
  };

  const handleRejectIntent = async (intent: MarketListing) => {
    try {
      // Defensive check for template availability
      if (!PurchaseIntent || !PurchaseIntent.RejectIntent) {
        toast.showToast("Purchase intent template not available", "error");
        return;
      }
      await ledger.exercise(PurchaseIntent.RejectIntent, intent.contractId, {
        reason: "Insufficient availability or pricing mismatch"
      });
      toast.showToast("Purchase intent rejected.", "info");
    } catch (e: any) { 
      console.error("Reject intent error:", e);
      toast.showToast(e.message || "Failed to reject purchase intent", "error"); 
    }
  };

  const handleDirectSubscription = async (subscription: MarketListing) => {
    try {
      // Defensive check for template availability
      if (!SubscriptionRequest || !SubscriptionRequest.AcceptSubscription) {
        toast.showToast("Subscription request template not available", "error");
        return;
      }
      await ledger.exercise(SubscriptionRequest.AcceptSubscription, subscription.contractId, {
        paymentHoldingCid: "PLACEHOLDER_PAYMENT_CID",
        issuerAssetCid: "PLACEHOLDER_ASSET_CID"
      });
      toast.showToast("Direct subscription accepted.", "success");
    } catch (e: any) { 
      console.error("Direct subscription error:", e);
      toast.showToast(e.message || "Failed to accept direct subscription", "error"); 
    }
  };

  const handleWithdrawListing = async (listing: MarketListing) => {
    try {
      // Check if the listing exists before trying to archive it
      if (!listing || !listing.contractId) {
        toast.showToast("Invalid listing data", "error");
        return;
      }
      
      // Handle different contract types differently
      if (listing.type === "PENDING") {
        // PrivacyPreservingListing - can be archived directly
        await ledger.exercise(PrivacyPreservingListing.Archive, listing.contractId, {});
      } else if (listing.type === "GLOBAL") {
        // GlobalDiscoveryListing - can be archived directly
        await ledger.exercise(GlobalDiscoveryListing.Archive, listing.contractId, {});
      } else if (listing.type === "FIRM") {
        // FirmMarketplaceListing - can be archived directly
        await ledger.exercise(FirmMarketplaceListing.Archive, listing.contractId, {});
      } else if (listing.type === "PRIVATE") {
        // InvestorInvitation - can be archived directly
        await ledger.exercise(InvestorInvitation.DeclineInvitation, listing.contractId, {});
      } else if (listing.type === "DIRECT") {
        // SubscriptionRequest - can be declined
        await ledger.exercise(SubscriptionRequest.DeclineSubscription, listing.contractId, {});
      } else if (listing.type === "CLUB") {
        // ClubDeal - can be archived directly
        await ledger.exercise(ClubDeal.Archive, listing.contractId, {});
      } else {
        // Fallback to direct archive for unknown types
        await ledger.archive(listing.contractId);
      }
      
      toast.showToast("Listing withdrawn successfully", "success");
    } catch (e: any) {
      console.error("Withdrawal error:", e);
      if (e.message && e.message.includes("CONTRACT_NOT_ACTIVE")) {
        toast.showToast("Listing already withdrawn or expired", "info");
      } else if (e.message && e.message.includes("template")) {
        toast.showToast("Template not available - listing may have changed state", "error");
      } else {
        toast.showToast("Failed to withdraw listing: " + (e.message || "Unknown error"), "error");
      }
    }
  };

  return (
    <div className="flex-column" style={{ gap: '1.5rem' }}>
      {/* Tier Summary Dashboard */}
      <div className="grid-cols-4" style={{ gap: '1rem' }}>
        <div className="card" style={{ textAlign: 'center', border: '1px solid var(--primary)' }}>
          <h4 style={{ color: 'var(--primary)', margin: '0 0 0.5rem 0' }}>Tier 1: Global</h4>
          <div className="big-stat" style={{ color: 'var(--primary)' }}>{global.length}</div>
          <p className="text-muted" style={{ fontSize: '0.8rem', margin: 0 }}>Public Discovery</p>
        </div>
        <div className="card" style={{ textAlign: 'center', border: '1px solid var(--purple)' }}>
          <h4 style={{ color: 'var(--purple)', margin: '0 0 0.5rem 0' }}>Tier 2: Firm</h4>
          <div className="big-stat" style={{ color: 'var(--purple)' }}>{firm.length}</div>
          <p className="text-muted" style={{ fontSize: '0.8rem', margin: 0 }}>Membership Gated</p>
        </div>
        <div className="card" style={{ textAlign: 'center', border: '1px solid var(--success)' }}>
          <h4 style={{ color: 'var(--success)', margin: '0 0 0.5rem 0' }}>Tier 3: Private</h4>
          <div className="big-stat" style={{ color: 'var(--success)' }}>{invites.length}</div>
          <p className="text-muted" style={{ fontSize: '0.8rem', margin: 0 }}>Whitelisted</p>
        </div>
        <div className="card" style={{ textAlign: 'center', border: '1px solid var(--warning)' }}>
          <h4 style={{ color: 'var(--warning)', margin: '0 0 0.5rem 0' }}>Tier 4: Direct</h4>
          <div className="big-stat" style={{ color: 'var(--warning)' }}>{directSubscriptions.length}</div>
          <p className="text-muted" style={{ fontSize: '0.8rem', margin: 0 }}>Bilateral</p>
        </div>
      </div>
      <div className="flex-gap" style={{ background: 'var(--bg-card)', padding: '0.5rem', borderRadius: '8px', border: '1px solid var(--border)' }}>
        {(["ALL", "GLOBAL", "FIRM", "PRIVATE", "DIRECT", "PENDING", "INTEREST"] as MarketFilter[]).map(f => (
          <button key={f} className={filter === f ? "btn-primary" : "btn-outline"} style={{ fontSize: '0.7rem', padding: '4px 12px' }} onClick={() => setFilter(f)}>{f}</button>
        ))}
      </div>

      <div className="card">
        <h3>4-Tier Marketplace Distribution Control</h3>
        <table>
          <thead>
            <tr><th>Tier/Status</th><th>Asset</th><th>Quantity</th><th>Price</th><th>Buyer</th><th>Action</th></tr>
          </thead>
          <tbody>
            {filteredListings.length === 0 && <tr><td colSpan={6} className="text-muted" style={{textAlign:'center'}}>No matching records.</td></tr>}
            {filteredListings.map(l => (
              <tr key={l.contractId}>
                <td><span className={`badge ${l.color}`}>{l.label}</span></td>
                <td><b>{l.payload.assetId}</b></td>
                <td>{l.payload.quantity}</td>
                <td>${l.payload.pricePerUnit}</td>
                <td>
                  {l.type === "INTEREST" && l.payload.buyer ? 
                    l.payload.buyer.split("::")[0] : 
                    l.type === "DIRECT" && l.payload.subscriber ?
                    l.payload.subscriber.split("::")[0] :
                    "-"
                  }
                </td>
                <td>
                  {l.type === "PENDING" ? (
                    <button className="btn-success" onClick={() => handleActivate(l)}>Activate</button>
                  ) : l.type === "INTEREST" ? (
                    <div style={{ display: 'flex', gap: '4px' }}>
                      <button className="btn-primary" onClick={() => handleAcceptIntent(l)}>Accept</button>
                      <button className="btn-outline" onClick={() => handleRejectIntent(l)}>Reject</button>
                    </div>
                  ) : l.type === "DIRECT" ? (
                    <button className="btn-primary" onClick={() => handleDirectSubscription(l)}>Accept</button>
                  ) : (
                    <button className="btn-outline" style={{color:'var(--danger)'}} onClick={() => handleWithdrawListing(l)}>Withdraw</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    
    </div>
  );
}