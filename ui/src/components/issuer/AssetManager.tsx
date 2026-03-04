import React, { useState, useMemo } from "react";
import { useLedger, useParty, useStreamQueries } from "@daml/react";
import { RWAInstrument, DraftRWAInstrument } from "@daml.js/CantonSuite-0.1.0/lib/Finance/Instruments";
import { AtomicMintWithAudit, AtomicBurnWithAudit } from "@daml.js/CantonSuite-0.1.0/lib/Compliance/AtomicAudit";
import { Holding_Impl } from "@daml.js/CantonSuite-0.1.0/lib/Portfolio";
import { Holding } from "@daml.js/CantonSuite-0.1.0/lib/TokenStandard/Interfaces";
import { FractionalizationGovernance } from "@daml.js/CantonSuite-0.1.0/lib/Finance/FractionalizationSafety";
import { PrivacyPreservingListing } from "@daml.js/CantonSuite-0.1.0/lib/Marketplace/MultiTier";
import { ContractId } from "@daml/types";
import { useToast } from "../../context/ToastContext";
import CantonIAM from "../../services/CantonIAM";

// Sub-components
import DraftsTable from "./asset-manager/DraftsTable";
import InventoryTable from "./asset-manager/InventoryTable";
import AssetModals from "./asset-manager/AssetModals";

export default function AssetManager() {
  const ledger = useLedger();
  const party = useParty();
  const toast = useToast();
  const iam = CantonIAM.getInstance();

  // --- DATA STREAMS ---
  const { contracts: assets } = useStreamQueries(RWAInstrument);
  const { contracts: drafts } = useStreamQueries(DraftRWAInstrument);
  const { contracts: allHoldings } = useStreamQueries(Holding_Impl);
  const { contracts: govPolicies } = useStreamQueries(FractionalizationGovernance);
  
  // --- UI STATE ---
  const [selectedAsset, setSelectedAsset] = useState<any>(null);
  const [modalType, setModalType] = useState<"MINT" | "BURN" | "CREATE" | "CLAWBACK" | "TOGGLE" | "PUBLISH" | null>(null);
  const [loading, setLoading] = useState(false);

  // --- LOGIC: TREASURY vs TOTAL SUPPLY ---
  const assetStats = useMemo(() => {
    const stats: Record<string, { inTreasury: number; totalSupply: number; treasuryCid: string | null }> = {};
    assets.forEach(a => { 
      const instrumentId = a.payload.instrument && a.payload.instrument._1 ? a.payload.instrument._1._2 : 'unknown';
      stats[instrumentId] = { inTreasury: 0, totalSupply: 0, treasuryCid: null }; 
    });
    allHoldings.forEach(h => {
      const ticker = h.payload.assetId;
      if (!stats[ticker]) return;
      const qty = Number(h.payload.quantity);
      stats[ticker].totalSupply += qty;
      if (h.payload.owner === party) {
        stats[ticker].inTreasury += qty;
        if (!h.payload.locked) { stats[ticker].treasuryCid = h.contractId; }
      }
    });
    return stats;
  }, [allHoldings, assets, party]);

  // --- HANDLERS ---
  const handlePublishToMarket = async (payload: any) => {
    setLoading(true);
    try {
      await ledger.create(PrivacyPreservingListing, payload);
      toast.showToast(`Asset published to ${payload.visibility.tier.replace('Tier', '')} layer.`, "success");
      setModalType(null);
    } catch (e: any) { toast.showToast(e.message, "error"); }
    finally { setLoading(false); }
  };

  const handleMintToTreasury = async (amount: string) => {
    setLoading(true);
    try {
      const auditContract = await ledger.create(AtomicMintWithAudit, {
        issuer: party, compliance: iam.getPartyByRole("ComplianceOfficer"),
        regulator: iam.getPartyByRole("Regulator"), recipient: party, 
        assetId: selectedAsset.payload.instrument && selectedAsset.payload.instrument._1 ? selectedAsset.payload.instrument._1._2 : 'unknown', quantity: amount,
        mintReason: "Institutional Capital Increase"
      });
      await ledger.exercise(AtomicMintWithAudit.ExecuteAtomicMint, auditContract.contractId, {});
      toast.showToast(`Minted ${amount} units to Treasury.`, "success");
      setModalType(null);
    } catch (e: any) { toast.showToast(e.message, "error"); }
    finally { setLoading(false); }
  };

  const handleBurnFromTreasury = async (amount: string) => {
    const ticker = selectedAsset?.payload.instrument && selectedAsset.payload.instrument._1 ? selectedAsset.payload.instrument._1._2 : 'unknown';
    const stats = assetStats[ticker];
    if (!stats?.treasuryCid) return;
    setLoading(true);
    try {
      const auditContract = await ledger.create(AtomicBurnWithAudit, {
        issuer: party, compliance: iam.getPartyByRole("ComplianceOfficer"),
        regulator: iam.getPartyByRole("Regulator"), burnHolder: party, 
        holdingCid: stats.treasuryCid as unknown as ContractId<Holding>,
        quantity: amount, burnReason: "Retiring Institutional Supply"
      });
      await ledger.exercise(AtomicBurnWithAudit.ExecuteAtomicBurn, auditContract.contractId, {});
      toast.showToast(`Burn Successful: ${amount} units destroyed.`, "success");
      setModalType(null);
    } catch (e: any) { toast.showToast(e.message, "error"); }
    finally { setLoading(false); }
  };

  const handleToggleRequest = async (newValue: boolean) => {
    const ticker = selectedAsset.payload.instrument.id.unpack;
    const policy = govPolicies.find(p => p.payload.assetId === ticker);
    if (!policy) return;
    try {
      await ledger.exercise(FractionalizationGovernance.RequestFractionalizationToggle, policy.contractId, {
        newValue, reason: `Infrastructure update: Switching mode.`
      });
      toast.showToast("Governance Request sent to Compliance.", "info");
      setModalType(null);
    } catch (e: any) { toast.showToast(e.message, "error"); }
  };

  const handleCreateDraft = async (data: any) => {
    setLoading(true);
    try {
      await ledger.create(DraftRWAInstrument, {
        draftIssuer: party, compliance: iam.getPartyByRole("ComplianceOfficer"),
        ...data, fractionalized: true, draftObservers: []
      });
      toast.showToast("RWA Draft created.", "success");
      setModalType(null);
    } catch (e: any) { toast.showToast(e.message, "error"); }
    finally { setLoading(false); }
  };

  const handleClawback = async (holdingCid: string, reason: string, caseRef: string) => {
    try {
      await ledger.exercise(Holding_Impl.InitiateClawback, holdingCid as any, {
        legalReason: reason, jurisdiction: "International", caseReference: caseRef
      });
      toast.showToast("Clawback initiated. Asset frozen.", "warning");
      setModalType(null);
    } catch (e: any) { toast.showToast(e.message, "error"); }
  };

  return (
    <div style={{ maxWidth: "100%", overflowX: "hidden" }}>
      <div className="flex-between" style={{ marginBottom: "2rem" }}>
        <div>
          <h2 style={{ margin: 0 }}>Asset Management</h2>
          <p className="text-muted" style={{ fontSize: "0.85rem" }}>Issuance, Supply Control, and Recovery</p>
        </div>
        <button className="btn-primary" onClick={() => setModalType("CREATE")}>+ Tokenize Asset</button>
      </div>

      <DraftsTable drafts={drafts} />

      <InventoryTable 
        assets={assets} 
        assetStats={assetStats} 
        onAction={(asset, type) => { setSelectedAsset(asset); setModalType(type); }} 
      />

      <AssetModals 
        modalType={modalType}
        setModalType={setModalType}
        selectedAsset={selectedAsset}
        assetStats={assetStats}
        allHoldings={allHoldings}
        party={party}
        loading={loading}
        handlers={{
          handlePublishToMarket,
          handleMintToTreasury,
          handleBurnFromTreasury,
          handleToggleRequest,
          handleCreateDraft,
          handleClawback,
          iam: iam  

        }}
      />
    </div>
  );
}