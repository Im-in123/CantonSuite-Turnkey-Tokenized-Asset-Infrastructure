import React, { useState, useMemo } from "react";
import { useLedger, useStreamQueries } from "@daml/react";
import { KYC } from "@daml.js/CantonSuite-0.0.1/lib/KYC";
import { TradeAgreement } from "@daml.js/CantonSuite-0.0.1/lib/Trade";
import { DraftAsset } from "@daml.js/CantonSuite-0.0.1/lib/Assets";
import { Dividend } from "@daml.js/CantonSuite-0.0.1/lib/Distribution"; 
import { LoanRequest, Loan } from "@daml.js/CantonSuite-0.0.1/lib/Lending";
import { useToast } from "../context/ToastContext";
import { useStreamNotification } from "../hooks/useStreamNotification";
import CantonIAM from "../services/CantonIAM";

export default function ComplianceDashboard() {
  const ledger = useLedger();
  const toast = useToast();
  const iam = CantonIAM.getInstance();

  const [activeTab, setActiveTab] = useState<"kyc" | "trades" | "lending" | "yields">("kyc");
  const [processingIds, setProcessingIds] = useState<Set<string>>(new Set());
  
  const [kycSearch, setKycSearch] = useState("");
  const [tradeSearch, setTradeSearch] = useState("");

  // --- QUERIES ---
  const { contracts: kycRequests, loading: kycLoading } = useStreamQueries(KYC);
  const { contracts: tradeAgreements, loading: tradesLoading } = useStreamQueries(TradeAgreement);
  const { contracts: draftAssets, loading: assetsLoading } = useStreamQueries(DraftAsset);
  const { contracts: dividends, loading: divLoading } = useStreamQueries(Dividend);
  const { contracts: loanRequests } = useStreamQueries(LoanRequest);
  const { contracts: activeLoans } = useStreamQueries(Loan); 

  // --- NOTIFICATIONS ---
  useStreamNotification(kycRequests, "KYC Application", kycLoading);
  useStreamNotification(tradeAgreements, "Trade Audit Request", tradesLoading);
  useStreamNotification(draftAssets, "Asset Approval Request", assetsLoading);

  // --- FILTERED LISTS ---
  const pendingKYC = useMemo(() => {
    return kycRequests.filter(k => 
      k.payload.status === "KPending" && 
      k.payload.buyer.toLowerCase().includes(kycSearch.toLowerCase())
    );
  }, [kycRequests, kycSearch]);

  const filteredTrades = useMemo(() => {
    return tradeAgreements.filter(t => 
      t.payload.assetId.toLowerCase().includes(tradeSearch.toLowerCase()) || 
      t.payload.buyer.toLowerCase().includes(tradeSearch.toLowerCase())
    );
  }, [tradeAgreements, tradeSearch]);

  const totalPayout = dividends.reduce((acc, d) => acc + Number(d.payload.cashAmount), 0);

  // --- HELPER: EXECUTE LEDGER COMMAND ---
  const execute = async (cid: string, fn: () => Promise<any>, msg: string) => {
      if (processingIds.has(cid)) return;
      setProcessingIds(prev => new Set(prev).add(cid));
      try {
          await fn();
          toast.showToast(msg, "success");
      } catch (e: any) {
          const errorMsg = e.message || "Unknown error";
          if (!errorMsg.includes("CONTRACT_NOT_ACTIVE")) {
              toast.showToast(errorMsg, "error");
          }
      } finally {
          setProcessingIds(prev => { const next = new Set(prev); next.delete(cid); return next; });
      }
  }

  const tabStyle = (active: boolean) => ({
    padding: '0.8rem 1.5rem', 
    background: active ? 'var(--primary)' : 'transparent', 
    color: active ? 'white' : 'var(--text-main)', 
    border: 'none', 
    borderBottom: active ? '2px solid var(--primary)' : '2px solid transparent', 
    cursor: 'pointer', 
    fontWeight: active ? 'bold' : 'normal',
    display: 'flex', alignItems: 'center', gap: '8px'
  });

  return (
    <div>
      {/* STATS HEADER */}
      <div className="grid-cols-4" style={{ marginBottom: "2rem" }}>
        <div className="card"><h3>Pending KYC</h3><div className="big-stat">{pendingKYC.length}</div></div>
        <div className="card"><h3>Assets to Approve</h3><div className="big-stat">{draftAssets.length}</div></div>
        <div className="card"><h3>Pending Loans</h3><div className="big-stat">{loanRequests.length}</div></div>
        <div className="card"><h3>Active Debt Monitored</h3><div className="big-stat" style={{color: 'var(--success)'}}>{activeLoans.length}</div></div>
      </div>

      {/* NAVIGATION TABS */}
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', borderBottom: '1px solid var(--border)' }}>
        <button onClick={() => setActiveTab("kyc")} style={tabStyle(activeTab === "kyc")}>
          KYC & Assets {(pendingKYC.length + draftAssets.length) > 0 && <span className="badge badge-yellow">{pendingKYC.length + draftAssets.length}</span>}
        </button>
        <button onClick={() => setActiveTab("trades")} style={tabStyle(activeTab === "trades")}>
          Trade Monitor {filteredTrades.length > 0 && <span className="badge badge-yellow">{filteredTrades.length}</span>}
        </button>
        <button onClick={() => setActiveTab("lending")} style={tabStyle(activeTab === "lending")}>
          Lending Risk {loanRequests.length > 0 && <span className="badge badge-yellow">{loanRequests.length}</span>}
        </button>
        <button onClick={() => setActiveTab("yields")} style={tabStyle(activeTab === "yields")}>AML Yield Audit</button>
      </div>

      {/* TAB CONTENT: KYC & ASSETS */}
      {activeTab === 'kyc' && (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
          {/* ASSET APPROVALS */}
          <div className="card">
            <h3>Asset Issuance Requests</h3>
            <table>
              <thead><tr><th>Issuer</th><th>Asset</th><th>Action</th></tr></thead>
              <tbody>
                {draftAssets.length === 0 && <tr><td colSpan={3} className="text-muted">No pending assets</td></tr>}
                {draftAssets.map(d => (
                  <tr key={d.contractId}>
                    <td>{d.payload.draftIssuer.split("::")[0]}</td>
                    <td>{d.payload.name}</td>
                    <td>
                      <button 
                        className="btn-primary" 
                        disabled={processingIds.has(d.contractId)} 
                        onClick={() => execute(d.contractId, () => {
                            // FIX 3: Fetch Public Party and add as observer during finalization
                            const publicParty = iam.getPartyByRole("Public");
                            const observers = publicParty ? [publicParty] : [];
                            
                            return ledger.exercise(DraftAsset.FinalizeIssuance, d.contractId, { 
                                additionalObservers: observers 
                            });
                        }, "Asset Finalized & Listed")}
                      >
                          {processingIds.has(d.contractId) ? "..." : "Finalize"}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* KYC WORKLIST */}
          <div className="card">
            <div className="flex-between" style={{marginBottom: '1rem'}}>
              <h3 style={{margin: 0}}>KYC Worklist</h3>
              <input className="input-field" style={{padding: '0.4rem', fontSize: '0.85rem', width: '180px'}} placeholder="Search Applicant..." value={kycSearch} onChange={e => setKycSearch(e.target.value)} />
            </div>
            <table>
              <thead><tr><th>Applicant</th><th>Status</th><th>Actions</th></tr></thead>
              <tbody>
                {pendingKYC.length === 0 && <tr><td colSpan={3} className="text-muted">No matching KYC requests</td></tr>}
                {pendingKYC.map(k => (
                  <tr key={k.contractId}>
                    <td>{k.payload.buyer.split("::")[0]}</td>
                    <td><span className="badge badge-yellow">Pending</span></td>
                    <td>
                      <div className="flex-gap">
                        <button 
                          className="btn-success" 
                          disabled={processingIds.has(k.contractId)} 
                          onClick={() => execute(k.contractId, () => ledger.exercise(KYC.Approve, k.contractId, {}), "KYC Approved")}
                          style={{opacity: processingIds.has(k.contractId) ? 0.5 : 1}}
                        >
                          {processingIds.has(k.contractId) ? "..." : "✓"}
                        </button>
                        <button 
                          className="btn-danger" 
                          disabled={processingIds.has(k.contractId)} 
                          onClick={() => execute(k.contractId, () => ledger.exercise(KYC.Reject, k.contractId, {}), "KYC Rejected")}
                          style={{opacity: processingIds.has(k.contractId) ? 0.5 : 1}}
                        >
                          {processingIds.has(k.contractId) ? "..." : "✗"}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB CONTENT: TRADES */}
      {activeTab === 'trades' && (
        <div className="card">
           <div className="flex-between" style={{marginBottom: '1rem'}}>
             <h3 style={{margin: 0}}>Trade Agreement Monitor</h3>
             <input className="input-field" style={{padding: '0.5rem', width: '250px'}} placeholder="Filter by Asset ID or Buyer..." value={tradeSearch} onChange={e => setTradeSearch(e.target.value)} />
           </div>
           <table>
            <thead><tr><th>Asset</th><th>Buyer (Real ID)</th><th>Seller</th><th>Value</th><th>Action</th></tr></thead>
            <tbody>
              {filteredTrades.length === 0 && <tr><td colSpan={5} className="text-muted">No matching trade agreements</td></tr>}
              {filteredTrades.map(t => (
                <tr key={t.contractId}>
                  <td>{t.payload.assetId}</td>
                  <td style={{fontWeight: 'bold', color: 'var(--primary)'}}>{t.payload.buyer.split("::")[0]}</td>
                  <td>{t.payload.seller.split("::")[0]}</td>
                  <td>${(Number(t.payload.quantity) * Number(t.payload.pricePerUnit)).toLocaleString()}</td>
                  <td>
                    <button className="btn-outline" disabled={processingIds.has(t.contractId)} onClick={() => execute(t.contractId, () => ledger.exercise(TradeAgreement.ApproveByCompliance, t.contractId, {}), "Trade Audited & Approved")}>
                        {processingIds.has(t.contractId) ? "Processing..." : "Log & Approve"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* TAB CONTENT: LENDING */}
      {activeTab === 'lending' && (
        <div className="card">
          <h3 style={{marginBottom: '1rem'}}>Lending Risk Monitor</h3>
          
          <h4 style={{marginTop: '1.5rem', color: 'var(--text-muted)'}}>Pending Requests</h4>
          <table>
            <thead><tr><th>Borrower</th><th>Asset</th><th>Amount</th><th>Collateral</th><th>Status</th></tr></thead>
            <tbody>
              {loanRequests.length === 0 && <tr><td colSpan={5} className="text-muted" style={{textAlign:'center'}}>No active loan requests</td></tr>}
              {loanRequests.map(r => (
                <tr key={r.contractId}>
                  <td>{r.payload.borrower.split("::")[0]}</td>
                  <td>{r.payload.assetId}</td>
                  <td>${Number(r.payload.requestedAmount).toLocaleString()}</td>
                  <td>{r.payload.collateralAssetId} ({Number(r.payload.collateralAmount)})</td>
                  <td><span className="badge badge-yellow">Pending Issuer Approval</span></td>
                </tr>
              ))}
            </tbody>
          </table>

          <h4 style={{marginTop: '2rem', color: 'var(--text-muted)'}}>Active Debt Portfolio</h4>
          <table>
            <thead><tr><th>Borrower</th><th>Asset</th><th>Principal</th><th>Status</th></tr></thead>
            <tbody>
              {activeLoans.length === 0 && <tr><td colSpan={4} className="text-muted" style={{textAlign:'center'}}>No active loans monitored</td></tr>}
              {activeLoans.map(l => (
                <tr key={l.contractId}>
                  <td>{l.payload.borrower.split("::")[0]}</td>
                  <td>{l.payload.assetId}</td>
                  <td>${Number(l.payload.principal).toLocaleString()}</td>
                  <td><span className="badge badge-green">Active</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* TAB CONTENT: YIELDS */}
      {activeTab === 'yields' && (
        <div className="card">
          <h3 style={{marginBottom: '1rem'}}>Dividend Payment Log (AML Check)</h3>
          <table>
            <thead><tr><th>Recipient (Real ID)</th><th>Asset</th><th>Amount</th><th>Status</th><th>Date</th></tr></thead>
            <tbody>
              {dividends.length === 0 && <tr><td colSpan={5} className="text-muted" style={{textAlign:'center', padding:'2rem'}}>No dividends distributed yet.</td></tr>}
              {dividends.map(d => (
                <tr key={d.contractId}>
                  <td style={{fontWeight: 'bold', color: 'var(--primary)'}}>{d.payload.owner.split("::")[0]}</td>
                  <td>{d.payload.assetId}</td>
                  <td style={{color: 'var(--success)', fontWeight:'bold'}}>${Number(d.payload.cashAmount).toFixed(2)}</td>
                  <td><span className="badge badge-green">Issued</span></td>
                  <td style={{color: 'var(--text-muted)'}}>{new Date(d.payload.issuedAt).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}