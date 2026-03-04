import React, { useState } from "react";
import { useLedger, useParty, useStreamQueries } from "@daml/react";
import { RWAInstrument } from "@daml.js/CantonSuite-0.1.0/lib/Finance/Instruments";
import { PrivacyPreservingListing } from "@daml.js/CantonSuite-0.1.0/lib/Marketplace/MultiTier";
import { useToast } from "../../context/ToastContext";
import Modal from "../Modal";

export default function PublicationTogglere() {
  const party = useParty();
  const ledger = useLedger();
  const toast = useToast();

  const { contracts: assets } = useStreamQueries(RWAInstrument);
  
  const [selectedAsset, setSelectedAsset] = useState<any>(null);
  const [tier, setTier] = useState<"GlobalTier" | "FirmOnlyTier" | "SelectedTier" | "DirectTier">("GlobalTier");
  const [targetParty, setTargetParty] = useState("");
  const [firmId, setFirmId] = useState("");
  const [quantity, setQuantity] = useState("");

  const handlePublish = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedAsset) return;

    try {
      // Logic: SECTION F.6 & F.8 - Create Privacy Preserving Listing with chosen visibility
      const listingPayload = {
        listingId: "LIST-" + Date.now(),
        issuer: party,
        assetId: selectedAsset.payload.instrument && selectedAsset.payload.instrument._1 ? selectedAsset.payload.instrument._1._2 : 'unknown',
        instrumentCid: selectedAsset.contractId,
        quantity: quantity,
        pricePerUnit: selectedAsset.payload.pricePerUnit,
        visibility: {
          tier: tier,
          firmMembership: tier === "FirmOnlyTier" ? { tag: "Some", value: firmId } : { tag: "None" },
          selectedInvestors: tier === "SelectedTier" ? [targetParty] : [],
          directRecipient: tier === "DirectTier" ? { tag: "Some", value: targetParty } : { tag: "None" }
        },
        createdAt: new Date().toISOString(),
        expiresAt: new Date(Date.now() + 2592000000).toISOString(), // 30 days
        minimumPurchase: "1.0",
        compliance: selectedAsset.payload.compliance
      };

      await ledger.create(PrivacyPreservingListing, listingPayload);
      toast.showToast(`Asset published to ${tier.replace('Tier', '')} layer.`, "success");
      setSelectedAsset(null);
    } catch (e: any) { toast.showToast(e.message, "error"); }
  };

  return (
    <div className="card">
      <h3>Multitier Distribution Control</h3>
      <p className="text-muted" style={{ fontSize: '0.8rem' }}>Select an inventory asset to configure visibility layers.</p>
      
      <div className="grid-cols-3" style={{ marginTop: '1.5rem' }}>
        {assets.map(a => (
          <div key={a.contractId} className="card" style={{ background: 'var(--bg-dark)', border: '1px solid var(--border)' }}>
            <div className="flex-between">
              <span className="badge badge-blue">{a.payload.instrument && a.payload.instrument._1 ? a.payload.instrument._1._2 : 'unknown'}</span>
              <button className="btn-primary" style={{ padding: '4px 12px' }} onClick={() => setSelectedAsset(a)}>Publish</button>
            </div>
          </div>
        ))}
      </div>

      <Modal isOpen={!!selectedAsset} onClose={() => setSelectedAsset(null)} title="Configure Visibility Tier">
        <form onSubmit={handlePublish} className="flex-column" style={{ gap: '1.25rem' }}>
          <div className="flex-column">
            <label className="text-muted" style={{ fontSize: '0.8rem' }}>Visibility Layer</label>
            <select className="input-field" value={tier} onChange={e => setTier(e.target.value as any)}>
              <option value="GlobalTier">Tier 1: Global Discovery (Public)</option>
              <option value="FirmOnlyTier">Tier 2: Firm-Only (Membership Gate)</option>
              <option value="SelectedTier">Tier 3: Selected Whitelist (Invitation)</option>
              <option value="DirectTier">Tier 4: Bilateral (One-to-One)</option>
            </select>
          </div>

          <div className="flex-column">
            <label className="text-muted" style={{ fontSize: '0.8rem' }}>Total Quantity to List</label>
            <input type="number" className="input-field" value={quantity} onChange={e => setQuantity(e.target.value)} placeholder="0.00" required />
          </div>

          {tier === "FirmOnlyTier" && (
            <input className="input-field" placeholder="Target Firm ID" value={firmId} onChange={e => setFirmId(e.target.value)} required />
          )}

          {(tier === "SelectedTier" || tier === "DirectTier") && (
            <input className="input-field" placeholder="Target Investor Party ID" value={targetParty} onChange={e => setTargetParty(e.target.value)} required />
          )}

          <div style={{ padding: '1rem', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '8px', fontSize: '0.75rem' }}>
             <b>Privacy Note:</b> {tier === 'GlobalTier' ? 'Visible to all verified network nodes.' : 'Encrypted. Only the specified participants can observe this listing.'}
          </div>

          <button className="btn-success" type="submit" style={{ marginTop: '1rem' }}>Authorize Publication</button>
        </form>
      </Modal>
    </div>
  );
}