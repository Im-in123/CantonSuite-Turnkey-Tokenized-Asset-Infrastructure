import React, { useState } from "react";
import { useParty, useStreamQueries } from "@daml/react";
import { User } from "@daml.js/CantonSuite-0.0.1/lib/Users";
import { LoanRequest, DepositRequest, WithdrawalRequest } from "@daml.js/CantonSuite-0.0.1/lib/Lending"; 
import IssuerDashboard from "../pages/IssuerDashboard";
import BuyerDashboard from "../pages/BuyerDashboard";
import ComplianceDashboard from "../pages/ComplianceDashboard";
import RegulatorDashboard from "../pages/RegulatorDashboard";
import LendingDashboard from "../pages/LendingDashboard"; 
import { useToast } from "../context/ToastContext";
import CantonIAM from "../services/CantonIAM";
import { LoadingSpinner } from "./LoadingSpinner";

const MainLayout: React.FC = () => {
  const party = useParty();
  const toast = useToast();
  const [view, setView] = useState<"dashboard" | "lending">("dashboard");

  const { contracts: userContracts, loading } = useStreamQueries(User);
  
  // FETCH ALL REQUESTS VISIBLE TO ME
  const { contracts: loanRequests } = useStreamQueries(LoanRequest);
  const { contracts: depositRequests } = useStreamQueries(DepositRequest);
  const { contracts: withdrawalRequests } = useStreamQueries(WithdrawalRequest);

  const handleExportKey = () => {
      const keyData = {
          partyId: party, 
          role: userContracts[0]?.payload.role || "Unknown",
          name: userContracts[0]?.payload.name || "User",
          createdAt: new Date().toISOString(),
          type: "CANTON_SUITE_IDENTITY_V1"
      };

      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(keyData, null, 2));
      const downloadAnchorNode = document.createElement('a');
      downloadAnchorNode.setAttribute("href", dataStr);
      downloadAnchorNode.setAttribute("download", `${keyData.name.replace(/\s+/g, '_')}_canton_key.json`);
      document.body.appendChild(downloadAnchorNode);
      downloadAnchorNode.click();
      downloadAnchorNode.remove();
      
      toast.showToast("Key File Exported. Keep this safe to login again!", "success");
  };

  const handleLogout = () => {
    CantonIAM.getInstance().clearSession();
    window.location.reload();
  };

  if (loading) return <div className="container" style={{textAlign:'center', marginTop: '20%'}}><LoadingSpinner/></div>;

  const userContract = userContracts.find(u => u.payload.partyId === party);
  if (!userContract) return <div className="container"><div className="card" style={{textAlign:'center', padding: '3rem'}}>User Profile Not Found<button className="btn-outline" onClick={handleLogout}>Logout</button></div></div>;

  const { name, role } = userContract.payload;

  // --- BADGE LOGIC ---
  let lendingBadgeCount = 0;
  
  if (role === "Compliance") {
    // Compliance monitors all pending loans
    lendingBadgeCount = loanRequests.length;
  } 
  else if (role === "Issuer") {
    // Issuer approves requests where they are the operator
    const myLoans = loanRequests.filter(l => l.payload.poolOperator === party);
    const myDeposits = depositRequests.filter(d => d.payload.poolOperator === party);
    const myWithdrawals = withdrawalRequests.filter(w => w.payload.poolOperator === party);
    
    lendingBadgeCount = myLoans.length + myDeposits.length + myWithdrawals.length;
  }
  else if (role === "Buyer") {
    // UPDATED: Buyer sees their own pending requests (Deposit, Withdrawal, Loan)
    const myLoans = loanRequests.filter(l => l.payload.borrower === party);
    const myDeposits = depositRequests.filter(d => d.payload.lender === party);
    const myWithdrawals = withdrawalRequests.filter(w => w.payload.lender === party);

    lendingBadgeCount = myLoans.length + myDeposits.length + myWithdrawals.length;
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <nav style={{ background: 'var(--bg-card)', borderBottom: '1px solid var(--border)', padding: '1rem 2rem' }}>
        <div className="flex-between" style={{ maxWidth: '1400px', margin: '0 auto' }}>
          
          <div className="flex-gap">
            <div style={{ width: 32, height: 32, background: 'linear-gradient(135deg, var(--primary), var(--accent))', borderRadius: 8 }}></div>
            <span style={{ fontWeight: 700, fontSize: '1.2rem', marginRight: '1.5rem' }}>CantonSuite+</span>
            
            <div style={{display: 'flex', gap: '0.5rem'}}>
              <button 
                onClick={() => setView("dashboard")} 
                className={view === "dashboard" ? "btn-primary" : "btn-outline"}
              >
                Dashboard
              </button>
              <button 
                onClick={() => setView("lending")} 
                className={view === "lending" ? "btn-primary" : "btn-outline"}
                style={{ position: 'relative' }}
              >
                DeFi Lending
                {lendingBadgeCount > 0 && (
                  <span style={{
                    position: 'absolute', top: '-8px', right: '-8px',
                    background: 'var(--danger)', color: 'white',
                    borderRadius: '50%', minWidth: '20px', height: '20px', padding: '0 4px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.75rem', fontWeight: 'bold', boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
                  }}>
                    {lendingBadgeCount}
                  </span>
                )}
              </button>
            </div>
          </div>

          <div className="flex-gap">
            <button onClick={handleExportKey} className="btn-outline" style={{borderColor: 'var(--warning)', color:'var(--warning)', fontSize: '0.85rem'}}>🔑 Export Key</button>
            <span className="badge" style={{background: '#333'}}>{role}</span>
            <span style={{ fontWeight: 600 }}>{name}</span>
            <button className="btn-outline" onClick={handleLogout} style={{fontSize: '0.85rem'}}>Logout</button>
          </div>
        </div>
      </nav>

      <main className="container" style={{ flex: 1, marginTop: '2rem' }}>
        {view === "lending" ? (
          <LendingDashboard userRole={role} />
        ) : (
          <>
            {role === "Issuer" && <IssuerDashboard />}
            {role === "Buyer" && <BuyerDashboard />}
            {role === "Compliance" && <ComplianceDashboard />}
            {role === "Regulator" && <RegulatorDashboard />}
          </>
        )}
      </main>
    </div>
  );
};

export default MainLayout;