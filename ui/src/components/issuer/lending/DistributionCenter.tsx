import React, { useState } from "react";
import { useLedger, useParty, useStreamQueries } from "@daml/react";
import { LendingPool } from "@daml.js/CantonSuite-0.1.0/lib/Lending/Pool";
import { 
  PrivacyPreservingPoolListing, 
  GlobalPoolDiscovery 
} from "@daml.js/CantonSuite-0.1.0/lib/Lending/PoolDiscovery";
import { useToast } from "../../../context/ToastContext";
import Modal from "../../Modal";

export default function DistributionCenter() {
  const party = useParty();
  const ledger = useLedger();
  const toast = useToast();

  const { contracts: pools } = useStreamQueries(LendingPool, () => [{ poolOperator: party }]);
  const { contracts: publicListings } = useStreamQueries(GlobalPoolDiscovery, () => [{ poolOperator: party }]);
  const { contracts: privateConfigs } = useStreamQueries(PrivacyPreservingPoolListing, () => [{ poolOperator: party }]);

  const [selectedPool, setSelectedPool] = useState<any>(null);
  const [modalType, setModalType] = useState<"GLOBAL" | "PRIVATE" | null>(null);
  const [targetParty, setTargetParty] = useState("");
  const [tier, setTier] = useState<any>("InvitedPoolTier");

  const handlePublishGlobal = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await ledger.create(GlobalPoolDiscovery, {
        listingId: "GPL-" + Date.now(),
        poolOperator: party,
        poolCid: selectedPool.contractId,
        assetId: selectedPool.payload.assetId,
        interestRate: selectedPool.payload.interestRate,
        minimumDeposit: "1000.0",
        minimumBorrow: "5000.0",
        createdAt: new Date().toISOString(),
        expiresAt: new Date(Date.now() + 2592000000).toISOString(),
        complianceParty: selectedPool.payload.complianceParty,
        discoveryService: party,
        observers: []
      });
      toast.showToast("Broadcasting pool to network...", "success");
      setModalType(null);
    } catch (e: any) { toast.showToast(e.message, "error"); }
  };

  const handleInvite = async (configCid: any) => {
    try {
      await ledger.exercise(PrivacyPreservingPoolListing.InviteSelectedParticipant, configCid, {
        participant: targetParty,
        maxAmount: "100000.0",
        role: "BORROWER"
      });
      toast.showToast("Private invitation dispatched.", "success");
      setTargetParty("");
    } catch (e: any) { toast.showToast(e.message, "error"); }
  };

  return (
    <div className="card dist-card">
      <h3>Distribution & Visibility</h3>
      <p className="text-muted small-text">Market liquidity pools to specific investors or the public.</p>

      {/* POOL LIST - STACKED VERTICALLY */}
      <div className="dist-list">
        {pools.length === 0 && <div className="empty-mini">No pools to distribute.</div>}
        {pools.map(p => {
            const isPublic = publicListings.some(l => l.payload.poolCid === p.contractId);
            const privateConfig = privateConfigs.find(c => c.payload.poolCid === p.contractId);
            
            return (
                <div key={p.contractId} className="dist-item">
                    <div className="flex-between">
                        <div>
                          <span className="dist-ticker">{p.payload.assetId}</span>
                          <div className="small-text text-muted">{p.payload.interestRate}% Rate</div>
                        </div>
                        <div className="flex-gap">
                            {!isPublic ? (
                              <button className="btn-outline tiny" onClick={() => { setSelectedPool(p); setModalType("GLOBAL"); }}>+ Public</button>
                            ) : (
                              <span className="badge badge-green tiny-badge">Public</span>
                            )}
                            <button className="btn-primary tiny accent-bg" onClick={() => { setSelectedPool(p); setModalType("PRIVATE"); }}>Tiers</button>
                        </div>
                    </div>

                    {/* Private Config Child Row */}
                    {privateConfig && (
                        <div className="private-config-sub">
                            <div className="flex-between">
                                <span className="tier-tag">{privateConfig.payload.visibility.tier}</span>
                            </div>
                            {privateConfig.payload.visibility.tier === "InvitedPoolTier" && (
                                <div className="flex-gap" style={{ marginTop: '8px' }}>
                                    <input className="input-field tiny-input" placeholder="Enter Party ID" value={targetParty} onChange={e => setTargetParty(e.target.value)} />
                                    <button className="btn-success tiny" onClick={() => handleInvite(privateConfig.contractId)}>Invite</button>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            );
        })}
      </div>

      <Modal isOpen={modalType === "GLOBAL"} onClose={() => setModalType(null)} title="Public Publication">
          <form onSubmit={handlePublishGlobal} className="flex-column" style={{gap: '1rem'}}>
              <p className="text-muted">This will list the <b>{selectedPool?.payload.assetId}</b> pool for any verified investor to discover.</p>
              <button className="btn-primary" type="submit">Broadcast to Global Tier</button>
          </form>
      </Modal>

      <Modal isOpen={modalType === "PRIVATE"} onClose={() => setModalType(null)} title="Visibility Configuration">
          <div className="flex-column" style={{gap: '1.25rem'}}>
              <label className="small-text text-muted">Select Privacy Level</label>
              <select className="input-field" value={tier} onChange={e => setTier(e.target.value)}>
                  <option value="InvitedPoolTier">Tier 3: Whitelist (Invited)</option>
                  <option value="BilateralPoolTier">Tier 4: Bilateral (Private)</option>
              </select>
              <button className="btn-primary accent-bg" onClick={() => {
                   ledger.create(PrivacyPreservingPoolListing, {
                    listingId: "PPL-" + Date.now(),
                    poolOperator: party,
                    poolCid: selectedPool.contractId,
                    assetId: selectedPool.payload.assetId,
                    interestRate: selectedPool.payload.interestRate,
                    minimumAmount: "1000.0",
                    visibility: {
                      tier: tier,
                      firmMembership: { tag: "None" },
                      selectedParticipants: [],
                      directCounterparty: { tag: "None" }
                    },
                    createdAt: new Date().toISOString(),
                    expiresAt: new Date(Date.now() + 2592000000).toISOString(),
                    complianceParty: selectedPool.payload.complianceParty
                  });
                  toast.showToast("Layer initialized.", "success");
                  setModalType(null);
              }}>Initialize Visibility Layer</button>
          </div>
      </Modal>

      <style>{`
        .dist-card { border-top: 2px solid var(--accent); }
        .small-text { font-size: 0.75rem; margin: 0; }
        .dist-list { display: flex; flex-direction: column; gap: 12px; margin-top: 1rem; }
        .dist-item { padding: 12px; background: #0d1117; border-radius: 6px; border: 1px solid #30363d; }
        .dist-ticker { font-weight: 800; color: var(--accent); font-size: 0.85rem; }
        .tiny { padding: 4px 8px; font-size: 0.65rem; }
        .tiny-badge { font-size: 0.6rem; padding: 2px 6px; }
        .accent-bg { background: var(--accent); }
        .empty-mini { padding: 1rem; text-align: center; font-size: 0.75rem; color: var(--text-muted); border: 1px dashed #333; border-radius: 4px; }
        
        .private-config-sub { margin-top: 10px; padding-top: 10px; border-top: 1px solid #222; }
        .tier-tag { font-size: 0.6rem; background: #1a1b23; color: var(--primary); padding: 2px 5px; border-radius: 3px; font-weight: bold; }
        .tiny-input { font-size: 0.7rem; padding: 6px; flex: 1; }
      `}</style>
    </div>
  );
}