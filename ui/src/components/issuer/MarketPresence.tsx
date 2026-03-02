import React, { useState } from "react";
import { useLedger, useParty, useStreamQueries } from "@daml/react";
import { 
  PrivacyPreservingListing,
  GlobalDiscoveryListing, 
  FirmMarketplaceListing, 
  InvestorInvitation,
  ClubDeal 
} from "@daml.js/CantonSuite-0.1.0/lib/Marketplace/MultiTier";
import { useToast } from "../../context/ToastContext";
import CantonIAM from "../../services/CantonIAM";

type MarketFilter = "ALL" | "GLOBAL" | "FIRM" | "PRIVATE" | "PENDING";

export default function MarketPresence() {
  const party = useParty();
  const ledger = useLedger();
  const toast = useToast();
  const [filter, setFilter] = useState<MarketFilter>("ALL");

  // 1. Stream "Pending" Listings (Config stage)
  const { contracts: pending } = useStreamQueries(PrivacyPreservingListing, () => [{ issuer: party }]);
  
  // 2. Stream "Live" Listings (Market stage)
  const { contracts: global } = useStreamQueries(GlobalDiscoveryListing, () => [{ issuer: party }]);
  const { contracts: firm } = useStreamQueries(FirmMarketplaceListing, () => [{ issuer: party }]);
  const { contracts: invites } = useStreamQueries(InvestorInvitation, () => [{ issuer: party }]);
  const { contracts: deals } = useStreamQueries(ClubDeal, () => [{ issuer: party }]);

  // 3. Combine and Label
  const allData = [
    ...pending.map(c => ({ ...c, type: "PENDING", label: "Pending Activation", color: "badge-yellow" })),
    ...global.map(c => ({ ...c, type: "GLOBAL", label: "Global Market", color: "badge-blue" })),
    ...firm.map(c => ({ ...c, type: "FIRM", label: "Firm Marketplace", color: "badge-blue" })),
    ...invites.map(c => ({ ...c, type: "PRIVATE", label: "Private Invite", color: "badge-green" })),
    ...deals.map(c => ({ ...c, type: "CLUB", label: "Club Deal", color: "badge-accent" }))
  ];

  const filteredListings = allData.filter(l => filter === "ALL" || l.type === filter);

  // 4. Step 2 Handler: Activating a Pending Listing

const handleActivate = async (listing: any) => {
  const iam = CantonIAM.getInstance();
  const publicMarketId = iam.getPartyByRole("PublicMarket");

  try {
    const tier = listing.payload.visibility.tier;

    if (tier === "GlobalTier") {
      // ✅ Call exercise here: TS knows exactly what arguments are needed
      await ledger.exercise(PrivacyPreservingListing.PublishToGlobalDiscovery, listing.contractId, {
        publicParty: publicMarketId
      });
      toast.showToast("Global Listing is now LIVE.", "success");
    } 
    else if (tier === "FirmOnlyTier") {
      // ✅ Call exercise here: TS knows 'firmId' is required
      await ledger.exercise(PrivacyPreservingListing.PublishToFirmMarketplace, listing.contractId, {
        firmId: listing.payload.visibility.firmMembership.value
      });
      toast.showToast("Firm-Only Listing is now LIVE.", "success");
    } 
    else if (tier === "SelectedTier") {
      toast.showToast("Tier 3 requires invitation workflows.", "info");
    }

  } catch (e: any) {
    console.error("Exercise failed:", e);
    toast.showToast(e.message, "error");
  }
};


  return (
    <div className="flex-column" style={{ gap: '1.5rem' }}>
      {/* FILTER BAR */}
      <div className="flex-gap" style={{ background: 'var(--bg-card)', padding: '0.5rem', borderRadius: '8px', border: '1px solid var(--border)' }}>
        {(["ALL", "GLOBAL", "FIRM", "PRIVATE", "PENDING"] as MarketFilter[]).map(f => (
          <button 
            key={f}
            className={filter === f ? "btn-primary" : "btn-outline"}
            style={{ fontSize: '0.7rem', padding: '4px 12px' }}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="card">
        <h3>Institutional Market Presence</h3>
        <table>
          <thead>
            <tr>
              <th>Status/Tier</th>
              <th>Asset</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredListings.length === 0 && <tr><td colSpan={5} className="text-muted" style={{textAlign:'center'}}>No matching listings found.</td></tr>}
            {filteredListings.map(l => (
              <tr key={l.contractId}>
                <td><span className={`badge ${l.color}`}>{l.label}</span></td>
                <td><b>{l.payload.assetId}</b></td>
                <td>{l.payload.quantity}</td>
                <td>${l.payload.pricePerUnit}</td>
                <td>
                  {l.type === "PENDING" ? (
                    <button className="btn-success" style={{padding:'2px 8px', fontSize:'0.7rem'}} onClick={() => handleActivate(l)}>
                       Activate Listing
                    </button>
                  ) : (
                    <button className="btn-outline" style={{color:'var(--danger)', fontSize:'0.7rem'}} onClick={() => ledger.archive(l.templateId, l.contractId)}>
                       Withdraw
                    </button>
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