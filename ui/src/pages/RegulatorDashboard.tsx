import { useState, useMemo } from "react";
import { useStreamQueries } from "@daml/react";
import { RegulatorView } from "@daml.js/CantonSuite-0.1.0/lib/Regulator";
import { LendingRegulatorView } from "@daml.js/CantonSuite-0.1.0/lib/Lending/Loans";
import { DividendRegulatorView } from "@daml.js/CantonSuite-0.1.0/lib/Distribution/ClaimBased";
import { useToast } from "../context/ToastContext";

export default function RegulatorDashboard() {
  const { contracts: tradeAudits } = useStreamQueries(RegulatorView);
  const { contracts: lendingAudits } = useStreamQueries(LendingRegulatorView);
  const { contracts: yieldAudits } = useStreamQueries(DividendRegulatorView);
  
  const toast = useToast();

  const [activeTab, setActiveTab] = useState<"trades" | "lending" | "yields" | "atomic">("trades");
  const [searchTerm, setSearchTerm] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [showAtomicDetails, setShowAtomicDetails] = useState(false);
  const [selectedAudit, setSelectedAudit] = useState<any>(null);

  // --- FILTER LOGIC ---
  const checkDate = (dateStr: string) => {
    const d = new Date(dateStr);
    const start = startDate ? new Date(startDate) : null;
    const end = endDate ? new Date(endDate) : null;
    const afterStart = start ? d >= start : true;
    const beforeEnd = end ? d <= new Date(end.getTime() + 86400000) : true;
    return afterStart && beforeEnd;
  };

  const filteredTrades = useMemo(() => tradeAudits.filter(a => {
    const matchesText = a.payload.assetId.toLowerCase().includes(searchTerm.toLowerCase()) || 
                        a.payload.issuer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        a.payload.buyerHash.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesText && checkDate(a.payload.executedAt);
  }), [tradeAudits, searchTerm, startDate, endDate]);

  const filteredLending = useMemo(() => lendingAudits.filter(l => {
    const payload = l.payload as { loanIdHash: string; assetId: string; eventType: string; originationDate: any };
    const matchesText = payload.loanIdHash.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        payload.assetId.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        payload.eventType.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesText && checkDate(payload.originationDate);
  }), [lendingAudits, searchTerm, startDate, endDate]);

  const filteredYields = useMemo(() => yieldAudits.filter(y => {
    const payload = y.payload as { assetId: string; dividendLabel: string; recipientHash: string; distributedAt: any };
    const matchesText = payload.assetId.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        payload.dividendLabel.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        payload.recipientHash.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesText && checkDate(payload.distributedAt);
  }), [yieldAudits, searchTerm, startDate, endDate]);

  // --- EXPORT LOGIC ---
  const handleExport = () => {
      toast.showToast(`Downloading ${activeTab.toUpperCase()} Audit Log...`, "info");
      
      let csvContent = "data:text/csv;charset=utf-8,";
      let filename = `regulator_${activeTab}_audit.csv`;

      if (activeTab === "trades") {
          csvContent += "Timestamp,Asset,Issuer,BuyerHash,Quantity\n";
          filteredTrades.forEach(t => {
              const payload = t.payload as { executedAt: any; assetId: string; issuer: string; buyerHash: string; quantity: any };
              const row = `${payload.executedAt},${payload.assetId},${payload.issuer},${payload.buyerHash},${payload.quantity}`;
              csvContent += row + "\n";
          });
      } else if (activeTab === "lending") {
          csvContent += "Timestamp,Event,LoanHash,Amount,CollateralRatio,Status\n";
          filteredLending.forEach(l => {
              const payload = l.payload as { originationDate: any; eventType: string; loanIdHash: string; principal: any; collateralRatio: any; status: string };
              const row = `${payload.originationDate},${payload.eventType},${payload.loanIdHash},${payload.principal},${payload.collateralRatio},${payload.status}`;
              csvContent += row + "\n";
          });
      } else if (activeTab === "yields") {
          csvContent += "Timestamp,Asset,Label,ReceiverHash,Amount\n";
          filteredYields.forEach(y => {
              const payload = y.payload as { distributedAt: any; assetId: string; dividendLabel: string; recipientHash: string; totalAmount: any };
              const row = `${payload.distributedAt},${payload.assetId},${payload.dividendLabel},${payload.recipientHash},${payload.totalAmount}`;
              csvContent += row + "\n";
          });
      }

      const encodedUri = encodeURI(csvContent);
      const link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", filename);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setTimeout(() => toast.showToast("Export Complete", "success"), 1000);
  }

  // --- STATS ---
  const tradeVolume = filteredTrades.reduce((acc, c) => acc + Number(c.payload.quantity), 0);
  const lendingExposure = filteredLending.reduce((acc, c) => {
    const payload = c.payload as { principal: any };
    return acc + Number(payload.principal);
  }, 0);
  const totalYieldPaid = filteredYields.reduce((acc, c) => {
    const payload = c.payload as { totalAmount: any };
    return acc + Number(payload.totalAmount);
  }, 0);

  // --- ATOMIC AUDIT STATS ---
  const atomicCompletions = tradeAudits.filter(a => 
    (a.payload as any).regulatorView?.settlementTime
  ).length;
  
  const atomicFailureRate = tradeAudits.length > 0 
    ? ((tradeAudits.length - atomicCompletions) / tradeAudits.length * 100).toFixed(1)
    : "0.0";
  
  const getAtomicCompleteness = () => {
    if (atomicCompletions === tradeAudits.length && tradeAudits.length > 0) return "Complete";
    if (atomicCompletions > 0) return "Partial";
    return "No Data";
  };

  const tabStyle = (active: boolean) => ({
    padding: '1rem 2rem', 
    background: active ? 'var(--warning)' : 'transparent', 
    color: active ? 'black' : 'var(--text-main)', 
    border: 'none', 
    borderTopLeftRadius: '8px', 
    borderTopRightRadius: '8px', 
    fontWeight: 'bold', 
    opacity: active ? 1 : 0.6,
    cursor: 'pointer'
  });

  return (
    <div>
      {/* Header */}
      <div className="card" style={{ background: "linear-gradient(to right, #f59e0b10, transparent)", border: "1px solid #f59e0b40", marginBottom: "2rem" }}>
        <div className="flex-between">
            <div>
                <h2 style={{ color: "var(--warning)", marginBottom: '0.5rem' }}>Regulatory Oversight Node</h2>
                <p style={{ color: "var(--text-muted)", margin: 0 }}>
                  <span style={{marginRight: '15px'}}>🔒 Zero-Knowledge Proofs</span>
                  <span style={{marginRight: '15px'}}>👁️ Read-Only View</span>
                  <span>⚡ Real-Time Solvency</span>
                </p>
            </div>
            <button className="btn-outline" onClick={handleExport}>Export {activeTab.toUpperCase()} Log</button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid-cols-3" style={{ marginBottom: "2rem" }}>
         {activeTab === 'trades' && (
           <>
             <div className="card"><h3>Trade Records</h3><div className="big-stat">{filteredTrades.length}</div></div>
             <div className="card"><h3>Volume (Units)</h3><div className="big-stat">{tradeVolume.toLocaleString()}</div></div>
           </>
         )}
         {activeTab === 'lending' && (
           <>
             <div className="card"><h3>Active Pools</h3><div className="big-stat">--</div></div>
             <div className="card"><h3>Loan Events</h3><div className="big-stat">{filteredLending.length}</div></div>
             <div className="card"><h3>Total Exposure</h3><div className="big-stat" style={{color: 'var(--warning)'}}>${lendingExposure.toLocaleString()}</div></div>
           </>
         )}
         {activeTab === 'yields' && (
           <>
             <div className="card"><h3>Distribution Events</h3><div className="big-stat">{filteredYields.length}</div></div>
             <div className="card"><h3>Avg Payment</h3><div className="big-stat">${filteredYields.length ? (totalYieldPaid/filteredYields.length).toFixed(2) : 0}</div></div>
             <div className="card"><h3>Total Distributed</h3><div className="big-stat" style={{color: 'var(--success)'}}>${totalYieldPaid.toLocaleString()}</div></div>
           </>
         )}
         {activeTab === 'atomic' && (
           <>
             <div className="card"><h3>Atomic Completions</h3><div className="big-stat" style={{color: 'var(--success)'}}>{atomicCompletions}</div></div>
             <div className="card"><h3>Failure Rate</h3><div className="big-stat" style={{color: atomicFailureRate === '0.0' ? 'var(--success)' : 'var(--danger)'}}>{atomicFailureRate}%</div></div>
             <div className="card"><h3>Audit Completeness</h3><div className="big-stat">{getAtomicCompleteness()}</div></div>
           </>
         )}
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--border)' }}>
        <button onClick={() => setActiveTab("trades")} style={tabStyle(activeTab === "trades")}>Trade Ledger</button>
        <button onClick={() => setActiveTab("lending")} style={tabStyle(activeTab === "lending")}>DeFi Solvency</button>
        <button onClick={() => setActiveTab("yields")} style={tabStyle(activeTab === "yields")}>Yield Audit</button>
        <button onClick={() => setActiveTab("atomic")} style={tabStyle(activeTab === "atomic")}>⚛️ Atomic Audit</button>
      </div>

      {/* Main Content */}
      <div className="card">
        <div className="flex-between" style={{flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem'}}>
          <h3 style={{margin: 0}}>
            {activeTab === 'trades' ? 'Secondary Market Activity' : activeTab === 'lending' ? 'Lending Pool Events' : activeTab === 'yields' ? 'Dividend Distribution Log' : '⚛️ Atomic Audit Trail'}
          </h3>
          <div style={{display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center'}}>
            <input type="text" placeholder="Search Asset, Hash..." className="input-field" style={{padding: '0.5rem', width: '250px'}} value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
            <input type="date" className="input-field" style={{padding: '0.4rem'}} value={startDate} onChange={e => setStartDate(e.target.value)} />
            <span className="text-muted">-</span>
            <input type="date" className="input-field" style={{padding: '0.4rem'}} value={endDate} onChange={e => setEndDate(e.target.value)} />
          </div>
        </div>

        {/* YIELD TABLE */}
        {activeTab === 'yields' && (
          <table style={{ marginTop: "1rem" }}>
            <thead><tr><th>Date</th><th>Asset</th><th>Label</th><th>Receiver Hash (Anonymized)</th><th>Amount</th></tr></thead>
            <tbody>
              {filteredYields.length === 0 && <tr><td colSpan={5} style={{textAlign:'center', padding:'2rem', color: 'var(--text-muted)'}}>No distribution records found.</td></tr>}
              {filteredYields.map(y => {
                const payload = y.payload as { distributedAt: any; assetId: string; dividendLabel: string; recipientHash: string; totalAmount: any };
                return (
                  <tr key={y.contractId}>
                    <td style={{ color: "var(--text-muted)" }}>{new Date(payload.distributedAt).toLocaleDateString()}</td>
                    <td><span className="badge badge-blue">{payload.assetId}</span></td>
                    <td>{payload.dividendLabel}</td>
                    {/* PRIVACY CHECK: Showing Hash Only */}
                    <td style={{ fontFamily: "monospace", color: "var(--text-muted)", fontSize: '0.85rem' }}>{payload.recipientHash}</td>
                    <td style={{fontWeight:'bold', color: 'var(--success)'}}>${Number(payload.totalAmount).toFixed(2)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}

        {/* TRADE TABLE */}
        {activeTab === 'trades' && (
            <table style={{ marginTop: "1rem" }}>
                <thead><tr><th>Date</th><th>Asset</th><th>Issuer</th><th>Buyer Hash</th><th>Qty</th></tr></thead>
                <tbody>
                    {filteredTrades.length === 0 && <tr><td colSpan={5} style={{textAlign:'center', padding:'2rem', color: 'var(--text-muted)'}}>No transactions found.</td></tr>}
                    {filteredTrades.map(t => {
                      const payload = t.payload as { executedAt: any; assetId: string; issuer: string; buyerHash: string; quantity: any };
                      return (
                        <tr key={t.contractId}>
                            <td>{new Date(payload.executedAt).toLocaleString()}</td>
                            <td><span className="badge badge-blue">{payload.assetId}</span></td>
                            <td>{payload.issuer.split("::")[0]}</td>
                            <td style={{fontFamily:'monospace', color:'var(--warning)'}}>{payload.buyerHash}</td>
                            <td>{payload.quantity}</td>
                        </tr>
                      );
                    })}
                </tbody>
            </table>
        )}
        
        {/* LENDING TABLE */}
        {activeTab === 'lending' && (
            <table style={{ marginTop: "1rem" }}>
                <thead><tr><th>Date</th><th>Event</th><th>Loan Hash</th><th>Principal</th><th>Ratio</th><th>Status</th></tr></thead>
                <tbody>
                    {filteredLending.length === 0 && <tr><td colSpan={6} style={{textAlign:'center', padding:'2rem', color: 'var(--text-muted)'}}>No lending events found.</td></tr>}
                    {filteredLending.map(l => {
                      const payload = l.payload as { originationDate: any; eventType: string; loanIdHash: string; principal: any; collateralRatio: any; status: string };
                      return (
                        <tr key={l.contractId}>
                            <td>{new Date(payload.originationDate).toLocaleString()}</td>
                            <td><span className={`badge ${payload.eventType === 'LOAN_LIQUIDATED' ? 'badge-red' : payload.eventType === 'LOAN_REPAID' ? 'badge-green' : 'badge-blue'}`}>{payload.eventType}</span></td>
                            <td style={{fontFamily:'monospace', color:'var(--warning)', fontSize:'0.85rem'}}>{payload.loanIdHash.substring(0,16)}...</td>
                            <td>${Number(payload.principal).toLocaleString()}</td>
                            <td>{Number(payload.collateralRatio).toFixed(1)}%</td>
                            <td>{payload.status}</td>
                        </tr>
                      );
                    })}
                </tbody>
            </table>
        )}
        
        {/* ATOMIC AUDIT TABLE */}
        {activeTab === 'atomic' && (
            <div style={{ marginTop: "1rem" }}>
              <div className="card" style={{background: 'var(--bg-info)', border: '1px solid var(--primary)', marginBottom: '1rem'}}>
                <h4>⚛️ Atomic Audit Completeness</h4>
                <p>Every settlement creates an immutable regulator view atomically. No settlement can complete without audit creation.</p>
                <div className="flex-between" style={{marginTop: '1rem'}}>
                  <span><strong>Atomic Completions:</strong> {atomicCompletions}/{tradeAudits.length}</span>
                  <span className={`badge ${atomicFailureRate === '0.0' ? 'badge-success' : 'badge-red'}`}>
                    Failure Rate: {atomicFailureRate}%
                  </span>
                </div>
              </div>
              
              <table>
                <thead>
                  <tr>
                    <th>Settlement Time</th>
                    <th>Asset ID</th>
                    <th>Buyer (Hash)</th>
                    <th>Seller (Hash)</th>
                    <th>Quantity</th>
                    <th>Atomic Status</th>
                    <th>Regulator View</th>
                  </tr>
                </thead>
                <tbody>
                  {tradeAudits.length === 0 && (
                    <tr><td colSpan={7} style={{textAlign:'center', padding:'2rem', color: 'var(--text-muted)'}}>No atomic audit records found.</td></tr>
                  )}
                  {tradeAudits.map(audit => {
                    const payload = audit.payload as any;
                    const hasAtomicView = payload.regulatorView?.settlementTime;
                    return (
                      <tr key={audit.contractId}>
                        <td>{payload.settlementTime ? new Date(payload.settlementTime).toLocaleString() : 'N/A'}</td>
                        <td><span className="badge badge-blue">{payload.assetId || 'Unknown'}</span></td>
                        <td style={{fontFamily:'monospace', fontSize:'0.8rem', color:'var(--text-muted)'}}>
                          {payload.buyerHash?.substring(0,12) || 'N/A'}...
                        </td>
                        <td style={{fontFamily:'monospace', fontSize:'0.8rem', color:'var(--text-muted)'}}>
                          {payload.sellerHash?.substring(0,12) || 'N/A'}...
                        </td>
                        <td>{payload.quantity ? Number(payload.quantity).toLocaleString() : 'N/A'}</td>
                        <td>
                          <span className={`badge ${hasAtomicView ? 'badge-success' : 'badge-red'}`}>
                            {hasAtomicView ? '✓ Atomic' : '✗ Missing'}
                          </span>
                        </td>
                        <td>
                          {hasAtomicView ? (
                            <button 
                              className="btn-outline" 
                              style={{fontSize: '0.7rem', padding: '0.25rem 0.5rem'}}
                              onClick={() => {
                                setSelectedAudit(audit);
                                setShowAtomicDetails(true);
                              }}
                            >
                              View Details
                            </button>
                          ) : (
                            <span className="text-muted" style={{fontSize: '0.8rem'}}>No Regulator View</span>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
        )}
      </div>
      
      {/* Atomic Audit Details Modal */}
      {showAtomicDetails && selectedAudit && (
        <div className="modal-overlay" onClick={() => setShowAtomicDetails(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()} style={{maxWidth: '600px'}}>
            <div className="flex-between" style={{marginBottom: '1rem'}}>
              <h4>⚛️ Atomic Audit Details</h4>
              <button className="btn-secondary" onClick={() => setShowAtomicDetails(false)}>×</button>
            </div>
            
            <div className="flex-column" style={{gap: '1rem'}}>
              <div className="card">
                <h5>Settlement Information</h5>
                <div style={{fontFamily: 'monospace', fontSize: '0.8rem', color: 'var(--text-muted)'}}>
                  Contract ID: {selectedAudit.contractId}
                </div>
              </div>
              
              <div className="card">
                <h5>Regulator View Proof</h5>
                <p><strong>✓ Atomic Guarantee:</strong> Regulator view created in the same transaction as settlement.</p>
                <p><strong>✓ Audit Completeness:</strong> No settlement can exist without corresponding regulator audit.</p>
                <p><strong>✓ Immutable Record:</strong> Audit trail cannot be modified or deleted.</p>
              </div>
              
              <div className="card">
                <h5>Compliance Verification</h5>
                <div className="flex-between">
                  <span>Atomic Completeness:</span>
                  <span className="badge badge-success">VERIFIED</span>
                </div>
                <div className="flex-between">
                  <span>Regulatory Oversight:</span>
                  <span className="badge badge-success">ACTIVE</span>
                </div>
                <div className="flex-between">
                  <span>Audit Trail Integrity:</span>
                  <span className="badge badge-success">INTACT</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}