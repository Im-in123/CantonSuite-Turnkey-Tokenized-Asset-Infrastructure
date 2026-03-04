import React, { useState } from "react";
import Modal from "../../Modal";

export default function AssetModals({ modalType, setModalType, selectedAsset, assetStats, allHoldings, party, loading, handlers }: any) {
  // Publication-specific local state
  const [tier, setTier] = useState<any>("GlobalTier");
  const [targetParticipant, setTargetParticipant] = useState("");
  const [firmId, setFirmId] = useState("");
  const [publishQty, setPublishQty] = useState("");

  const onClose = () => setModalType(null);

  return (
    <>
      {/* 4-TIER PUBLISH MODAL */}
      <Modal isOpen={modalType === "PUBLISH"} onClose={onClose} title={`Distribute: ${selectedAsset?.payload.name || 'Asset'}`}>
        <form onSubmit={(e) => {
          e.preventDefault();
          const publicMarketId = handlers.iam.getPartyByRole("PublicMarket");
          const assetId = selectedAsset?.payload.instrument && selectedAsset.payload.instrument.id && selectedAsset.payload.instrument.id._1 
            ? selectedAsset.payload.instrument.id._1 
            : selectedAsset?.payload.name || 'unknown';
          
          handlers.handlePublishToMarket({
            listingId: "LST-" + Date.now(),
            issuer: party,
            assetId: assetId,
            instrumentCid: selectedAsset.contractId,
            quantity: publishQty,
            pricePerUnit: selectedAsset.payload.pricePerUnit,
            visibility: {
              tier,
              firmMembership: tier === "FirmOnlyTier" ? firmId : null,
              selectedInvestors: tier === "SelectedTier" ? [targetParticipant] : [],
              directRecipient: tier === "DirectTier" ? targetParticipant : null
            },
            createdAt: new Date().toISOString(),
            expiresAt: new Date(Date.now() + 2592000000).toISOString(),
            minimumPurchase: "1.0",
            compliance: selectedAsset.payload.compliance,
            observers: tier === "GlobalTier" ? [publicMarketId] : [] 
          });
        }} className="flex-column" style={{gap: '1.25rem'}}>
          <div className="form-group">
            <label>Select Distribution Tier:</label>
            <select className="input-field" value={tier} onChange={e => setTier(e.target.value)}>
              <option value="GlobalTier">Tier 1: Global Discovery (Public)</option>
              <option value="FirmOnlyTier">Tier 2: Firm-Only (Membership Gated)</option>
              <option value="SelectedTier">Tier 3: Whitelist (Private Placement)</option>
              <option value="DirectTier">Tier 4: Bilateral (Direct Offer)</option>
            </select>
          </div>
          
          <div className="form-group">
            <label>Quantity to Distribute:</label>
            <input type="number" className="input-field" value={publishQty} onChange={e => setPublishQty(e.target.value)} placeholder="Enter quantity" required />
          </div>
          
          {tier === "FirmOnlyTier" && (
            <div className="form-group">
              <label>Firm ID:</label>
              <input className="input-field" placeholder="Enter firm membership ID" value={firmId} onChange={e => setFirmId(e.target.value)} required />
              <small className="text-muted">Only members of this firm can access the listing</small>
            </div>
          )}
          
          {(tier === "SelectedTier" || tier === "DirectTier") && (
            <div className="form-group">
              <label>{tier === "SelectedTier" ? "Target Investors" : "Direct Recipient"}:</label>
              <input className="input-field" placeholder="Enter party ID" value={targetParticipant} onChange={e => setTargetParticipant(e.target.value)} required />
              <small className="text-muted">
                {tier === "SelectedTier" 
                  ? "Comma-separated list of invited investor party IDs" 
                  : "Single party ID for bilateral offer"}
              </small>
            </div>
          )}
          
          <div className="tier-info" style={{ 
            background: 'var(--bg-dark)', 
            padding: '1rem', 
            borderRadius: '8px', 
            border: '1px solid var(--border)',
            fontSize: '0.85rem'
          }}>
            <h4 style={{ margin: '0 0 0.5rem 0', color: 'var(--primary)' }}>Tier Information:</h4>
            {tier === "GlobalTier" && (
              <p style={{ margin: 0 }}>🌍 Public discovery - anyone can see and express interest</p>
            )}
            {tier === "FirmOnlyTier" && (
              <p style={{ margin: 0 }}>🏢 Firm-gated - only verified firm members can purchase</p>
            )}
            {tier === "SelectedTier" && (
              <p style={{ margin: 0 }}>✨ Private placement - only whitelisted investors can participate</p>
            )}
            {tier === "DirectTier" && (
              <p style={{ margin: 0 }}>🎯 Bilateral offer - one-to-one subscription with specific party</p>
            )}
          </div>
          
          <button className="btn-primary" style={{background: 'var(--accent)'}} type="submit" disabled={loading}>
            {loading ? "Creating..." : "Execute Listing"}
          </button>
        </form>
      </Modal>

     {/* CREATE DRAFT MODAL - FIXED LOADING & DISABLING */}
      <Modal isOpen={modalType === "CREATE"} onClose={onClose} title="Draft New Asset">
        <form 
          onSubmit={(e) => {
            e.preventDefault();
            const fd = new FormData(e.currentTarget);
            handlers.handleCreateDraft({ 
              instrumentId: fd.get("ticker"), 
              name: fd.get("name"), 
              assetType: fd.get("type"), 
              pricePerUnit: fd.get("price") 
            });
          }} 
          style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label className="text-muted" style={{ fontSize: '0.75rem', fontWeight: 'bold', textAlign: 'left' }}>Asset Ticker</label>
            <input 
              name="ticker" 
              placeholder="e.g. GOLD-TOKEN" 
              className="input-field" 
              style={{ width: '100%', padding: '0.8rem', boxSizing: 'border-box' }} 
              required 
              disabled={loading} // Prevent editing during submission
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label className="text-muted" style={{ fontSize: '0.75rem', fontWeight: 'bold', textAlign: 'left' }}>Asset Name</label>
            <input 
              name="name" 
              placeholder="e.g. 24k Institutional Gold" 
              className="input-field" 
              style={{ width: '100%', padding: '0.8rem', boxSizing: 'border-box' }} 
              required 
              disabled={loading}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label className="text-muted" style={{ fontSize: '0.75rem', fontWeight: 'bold', textAlign: 'left' }}>Instrument Category</label>
            <select 
              name="type" 
              className="input-field" 
              style={{ width: '100%', padding: '0.8rem', boxSizing: 'border-box' }}
              disabled={loading}
            >
              <option value="RealEstate">Real Estate</option>
              <option value="Equity">Equity</option>
              <option value="Bond">Fixed Income / Bond</option>
            </select>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label className="text-muted" style={{ fontSize: '0.75rem', fontWeight: 'bold', textAlign: 'left' }}>Initial Price (USD)</label>
            <input 
              name="price" 
              type="number" 
              step="0.01"
              placeholder="0.00" 
              className="input-field" 
              style={{ width: '100%', padding: '0.8rem', boxSizing: 'border-box' }} 
              required 
              disabled={loading}
            />
          </div>

          <button 
            className="btn-primary" 
            type="submit" 
            style={{ 
              width: '100%', 
              padding: '1rem', 
              marginTop: '0.5rem',
              opacity: loading ? 0.7 : 1, // Visual feedback
              cursor: loading ? 'not-allowed' : 'pointer'
            }}
            disabled={loading} // THIS DISABLES THE BUTTON
          >
            {loading ? "Drafting Asset on Ledger..." : "Submit for Compliance Vetting"}
          </button>
        </form>
      </Modal>

      {/* MINT MODAL */}
      <Modal isOpen={modalType === "MINT"} onClose={onClose} title="Mint to Treasury">
        <form onSubmit={(e) => { e.preventDefault(); handlers.handleMintToTreasury(new FormData(e.currentTarget).get("amt") as string); }} className="flex-column" style={{gap: '1rem'}}>
          <input name="amt" type="number" placeholder="Quantity" className="input-field" required />
          <button className="btn-success" type="submit">Confirm Mint</button>
        </form>
      </Modal>

      {/* BURN MODAL */}
      <Modal isOpen={modalType === "BURN"} onClose={onClose} title="Burn from Treasury">
        <form onSubmit={(e) => { e.preventDefault(); handlers.handleBurnFromTreasury(new FormData(e.currentTarget).get("amt") as string); }} className="flex-column" style={{gap: '1rem'}}>
          <input name="amt" type="number" placeholder="Quantity" className="input-field" required />
          <button className="btn-danger" type="submit">Confirm Burn</button>
        </form>
      </Modal>

      {/* CLAWBACK MODAL */}
      <Modal isOpen={modalType === "CLAWBACK"} onClose={onClose} title="Legal Recovery">
        <form onSubmit={(e) => {
          e.preventDefault();
          const fd = new FormData(e.currentTarget);
          handlers.handleClawback(fd.get("hCid"), fd.get("reason"), fd.get("case"));
        }} className="flex-column" style={{gap: '1rem'}}>
          <select name="hCid" className="input-field" required>
            {allHoldings.filter((h: any) => h.payload.assetId === selectedAsset?.payload.instrument.id.unpack && h.payload.owner !== party).map((h: any) => (
              <option key={h.contractId} value={h.contractId}>{h.payload.owner.split('::')[0]} ({h.payload.quantity})</option>
            ))}
          </select>
          <input name="case" placeholder="Case #" className="input-field" required />
          <textarea name="reason" placeholder="Reason" className="input-field" required />
          <button className="btn-danger" type="submit">Execute Clawback</button>
        </form>
      </Modal>

      {/* TOGGLE MODAL */}
      <Modal isOpen={modalType === "TOGGLE"} onClose={onClose} title="Update Policy">
        <div className="flex-column" style={{gap: '1rem'}}>
          <p>Current: <b>{selectedAsset?.payload.fractionalized ? 'FRACTIONAL' : 'INTEGER-ONLY'}</b></p>
          <button className="btn-primary" onClick={() => handlers.handleToggleRequest(!selectedAsset?.payload.fractionalized)}>Request Policy Change</button>
        </div>
      </Modal>
    </>
  );
}