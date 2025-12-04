import React, { useState, useMemo } from "react";
import { useStreamQueries } from "@daml/react";
import { RegulatorView } from "@daml.js/CantonSuite-0.0.1/lib/Regulator";
import { LendingRegulatorView } from "@daml.js/CantonSuite-0.0.1/lib/Lending";
import { DividendRegulatorView } from "@daml.js/CantonSuite-0.0.1/lib/Distribution"; 
import { Asset } from "@daml.js/CantonSuite-0.0.1/lib/Assets";
import { useToast } from "../context/ToastContext";

export default function RegulatorDashboard() {
  const { contracts: tradeAudits } = useStreamQueries(RegulatorView);
  const { contracts: lendingAudits } = useStreamQueries(LendingRegulatorView);
  const { contracts: yieldAudits } = useStreamQueries(DividendRegulatorView); 
  const { contracts: assets } = useStreamQueries(Asset);
  
  const toast = useToast();

  const [activeTab, setActiveTab] = useState<"trades" | "lending" | "yields">("trades");
  const [searchTerm, setSearchTerm] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

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
                        a.payload.buyerPseudo.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesText && checkDate(a.payload.executedAt);
  }), [tradeAudits, searchTerm, startDate, endDate]);

  const filteredLending = useMemo(() => lendingAudits.filter(l => {
    const matchesText = l.payload.loanId.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        l.payload.assetId.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        l.payload.eventType.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesText && checkDate(l.payload.eventTimestamp);
  }), [lendingAudits, searchTerm, startDate, endDate]);

  const filteredYields = useMemo(() => yieldAudits.filter(y => {
    const matchesText = y.payload.assetId.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        y.payload.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        y.payload.receiverHash.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesText && checkDate(y.payload.distributedAt);
  }), [yieldAudits, searchTerm, startDate, endDate]);

  // --- EXPORT LOGIC ---
  const handleExport = () => {
      toast.showToast(`Downloading ${activeTab.toUpperCase()} Audit Log...`, "info");
      
      let csvContent = "data:text/csv;charset=utf-8,";
      let filename = `regulator_${activeTab}_audit.csv`;

      if (activeTab === "trades") {
          csvContent += "Timestamp,Asset,Issuer,BuyerHash,Quantity\n";
          filteredTrades.forEach(t => {
              const row = `${t.payload.executedAt},${t.payload.assetId},${t.payload.issuer},${t.payload.buyerPseudo},${t.payload.quantity}`;
              csvContent += row + "\n";
          });
      } else if (activeTab === "lending") {
          csvContent += "Timestamp,Event,LoanHash,Amount,CollateralRatio,Status\n";
          filteredLending.forEach(l => {
              const row = `${l.payload.eventTimestamp},${l.payload.eventType},${l.payload.loanId},${l.payload.principal},${l.payload.collateralRatio},${l.payload.status}`;
              csvContent += row + "\n";
          });
      } else if (activeTab === "yields") {
          csvContent += "Timestamp,Asset,Label,ReceiverHash,Amount\n";
          filteredYields.forEach(y => {
              const row = `${y.payload.distributedAt},${y.payload.assetId},${y.payload.label},${y.payload.receiverHash},${y.payload.amount}`;
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
  const lendingExposure = filteredLending.reduce((acc, c) => acc + Number(c.payload.principal), 0);
  const totalYieldPaid = filteredYields.reduce((acc, c) => acc + Number(c.payload.amount), 0);

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
             <div className="card"><h3>Registered Assets</h3><div className="big-stat">{assets.length}</div></div>
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
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--border)' }}>
        <button onClick={() => setActiveTab("trades")} style={tabStyle(activeTab === "trades")}>Trade Ledger</button>
        <button onClick={() => setActiveTab("lending")} style={tabStyle(activeTab === "lending")}>DeFi Solvency</button>
        <button onClick={() => setActiveTab("yields")} style={tabStyle(activeTab === "yields")}>Yield Audit</button>
      </div>

      {/* Main Content */}
      <div className="card">
        <div className="flex-between" style={{flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem'}}>
          <h3 style={{margin: 0}}>
            {activeTab === 'trades' ? 'Secondary Market Activity' : activeTab === 'lending' ? 'Lending Pool Events' : 'Dividend Distribution Log'}
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
              {filteredYields.map(y => (
                <tr key={y.contractId}>
                  <td style={{ color: "var(--text-muted)" }}>{new Date(y.payload.distributedAt).toLocaleDateString()}</td>
                  <td><span className="badge badge-blue">{y.payload.assetId}</span></td>
                  <td>{y.payload.label}</td>
                  {/* PRIVACY CHECK: Showing Hash Only */}
                  <td style={{ fontFamily: "monospace", color: "var(--text-muted)", fontSize: '0.85rem' }}>{y.payload.receiverHash}</td>
                  <td style={{fontWeight:'bold', color: 'var(--success)'}}>${Number(y.payload.amount).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {/* TRADE TABLE */}
        {activeTab === 'trades' && (
            <table style={{ marginTop: "1rem" }}>
                <thead><tr><th>Date</th><th>Asset</th><th>Issuer</th><th>Buyer Hash</th><th>Qty</th></tr></thead>
                <tbody>
                    {filteredTrades.length === 0 && <tr><td colSpan={5} style={{textAlign:'center', padding:'2rem', color: 'var(--text-muted)'}}>No transactions found.</td></tr>}
                    {filteredTrades.map(t => (
                        <tr key={t.contractId}>
                            <td>{new Date(t.payload.executedAt).toLocaleString()}</td>
                            <td><span className="badge badge-blue">{t.payload.assetId}</span></td>
                            <td>{t.payload.issuer.split("::")[0]}</td>
                            <td style={{fontFamily:'monospace', color:'var(--warning)'}}>{t.payload.buyerPseudo}</td>
                            <td>{t.payload.quantity}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )}
        
        {/* LENDING TABLE */}
        {activeTab === 'lending' && (
            <table style={{ marginTop: "1rem" }}>
                <thead><tr><th>Date</th><th>Event</th><th>Loan Hash</th><th>Principal</th><th>Ratio</th><th>Status</th></tr></thead>
                <tbody>
                    {filteredLending.length === 0 && <tr><td colSpan={6} style={{textAlign:'center', padding:'2rem', color: 'var(--text-muted)'}}>No lending events found.</td></tr>}
                    {filteredLending.map(l => (
                        <tr key={l.contractId}>
                            <td>{new Date(l.payload.eventTimestamp).toLocaleString()}</td>
                            <td><span className={`badge ${l.payload.eventType === 'LOAN_LIQUIDATED' ? 'badge-red' : l.payload.eventType === 'LOAN_REPAID' ? 'badge-green' : 'badge-blue'}`}>{l.payload.eventType}</span></td>
                            <td style={{fontFamily:'monospace', color:'var(--warning)', fontSize:'0.85rem'}}>{l.payload.loanId.substring(0,16)}...</td>
                            <td>${Number(l.payload.principal).toLocaleString()}</td>
                            <td>{Number(l.payload.collateralRatio).toFixed(1)}%</td>
                            <td>{l.payload.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )}
      </div>
    </div>
  );
}