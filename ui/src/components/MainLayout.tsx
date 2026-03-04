import React from "react";
import { useParty, useStreamQueries } from "@daml/react";
import { User } from "@daml.js/CantonSuite-0.1.0/lib/Users";
import IssuerDashboard from "../pages/IssuerDashboard";
import BuyerDashboard from "../pages/BuyerDashboard";
import ComplianceDashboard from "../pages/ComplianceDashboard";
import RegulatorDashboard from "../pages/RegulatorDashboard";
import AdminDashboard from "../pages/AdminDashboard";
import { useToast } from "../context/ToastContext";
import CantonIAM from "../services/CantonIAM";
import { LoadingSpinner } from "./LoadingSpinner";

const MainLayout: React.FC = () => {
  const party = useParty();
  const toast = useToast();

  const { contracts: userContracts, loading } = useStreamQueries(User);
  
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

  // Check if this is an admin user (PlatformIssuer or special admin party)
  const isAdmin = party.includes('PlatformIssuer') || party.includes('Admin');

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <nav style={{ background: 'var(--bg-card)', borderBottom: '1px solid var(--border)', padding: '1rem 2rem' }}>
        <div className="flex-between" style={{ maxWidth: '1400px', margin: '0 auto' }}>
          
          <div style={{display: 'flex', gap: '0.5rem'}}>
            <span style={{ fontWeight: 700, fontSize: '1.2rem', marginRight: '1.5rem' }}>CantonSuite+</span>
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
        <>
          {isAdmin && <AdminDashboard />}
          {role === "Issuer" && !isAdmin && <IssuerDashboard />}
          {role === "Buyer" && <BuyerDashboard />}
          {role === "Compliance" && <ComplianceDashboard />}
          {role === "Regulator" && <RegulatorDashboard />}
        </>
      </main>
    </div>
  );
};

export default MainLayout;