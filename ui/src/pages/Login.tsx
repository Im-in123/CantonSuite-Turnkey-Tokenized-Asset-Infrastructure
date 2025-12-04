import React, { useState, useEffect, useRef } from "react";
import Signup from "./Signup"; 
import CantonIAM from "../services/CantonIAM";

interface LoginProps {
  onLogin: (token: string, party: string) => void;
}

const DEFAULT_ROLES = [
  { name: "Issuer1", color: "#3b82f6", desc: "Tech Asset Manager" },
  { name: "Issuer2", color: "#2563eb", desc: "Real Estate Manager" },
  { name: "Alice", color: "#10b981", desc: "Buyer (Wealthy)" },
  { name: "Bob", color: "#10b981", desc: "Buyer (Retail)" },
  { name: "Compliance", color: "#8b5cf6", desc: "Internal Control" },
  { name: "Regulator", color: "#f59e0b", desc: "Audit & Oversight" },
];

export default function Login({ onLogin }: LoginProps) {
  const [view, setView] = useState<"login" | "signup">("login");
  const [parties, setParties] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const iam = CantonIAM.getInstance();

  useEffect(() => {
    if (view !== "login") return;
    
    const discover = async () => {
      try {
        const partyMap = await iam.discoverParties();
        setParties(partyMap);
        setLoading(false);
      } catch (e: any) {
        console.error(e);
        setError("Ensure `daml start` is running.");
        setLoading(false);
      }
    };
    discover();
  }, [view]);

  const handleLogin = (roleName: string) => {
    const fullPartyId = parties[roleName];
    // Find the public party ID from the discovery list for visibility
    const publicPartyId = parties["Public"]; 

    if (fullPartyId) {
      const token = iam.createUserToken(fullPartyId, publicPartyId);
      iam.setSession(token, fullPartyId);
      onLogin(token, fullPartyId);
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const content = e.target?.result as string;
        const keyData = JSON.parse(content);
        
        // Support old format (party) and new format (partyId)
        const targetParty = keyData.partyId || keyData.party;

        if (!targetParty) throw new Error("Invalid key file");

        const publicPartyId = parties["Public"] || iam.getPartyByRole("Public") || undefined;

        const token = iam.createUserToken(targetParty, publicPartyId);
        iam.setSession(token, targetParty);
        onLogin(token, targetParty);

      } catch (err: any) {
        alert(err.message || "Failed to load key file");
      }
    };
    reader.readAsText(file);
    event.target.value = "";
  };

  if (view === "signup") {
    return <Signup onLogin={onLogin} onSwitchToLogin={() => setView("login")} />;
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem'
    }}>
      <div style={{ maxWidth: '800px', width: '100%' }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h1 style={{ fontSize: "3rem", marginBottom: "0.5rem", color: "white", fontWeight: 'bold' }}>
            CantonSuite+
          </h1>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: '1.1rem' }}>
            Turnkey Tokenized Asset Infrastructure
          </p>

          {/* --- CONNECTED BADGE --- */}
          {!loading && Object.keys(parties).length > 0 && (
            <div style={{ marginTop: '1rem', display: 'inline-block', background: 'rgba(59, 130, 246, 0.3)', color: 'white', padding: '0.5rem 1rem', borderRadius: '0.5rem', fontSize: '0.85rem', border: '1px solid rgba(59, 130, 246, 0.5)' }}>
              ✓ Connected to Canton Ledger
            </div>
          )}
        </div>

        {error && <p style={{ textAlign:'center', color: '#fee', background: 'rgba(239, 68, 68, 0.2)', padding: '1rem', borderRadius: '0.5rem', border: '1px solid rgba(239, 68, 68, 0.5)' }}>⚠️ {error}</p>}
   {/* --- DEVELOPER QUICK ACCESS --- */}
        <div style={{margin: '3rem'}}>
          <p style={{textAlign: 'center', color: 'rgba(255,255,255,0.4)', fontSize: '0.9rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px'}}>Developer Quick Access</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            {!loading && DEFAULT_ROLES.map((role) => {
              const partyId = parties[role.name];
              return (
                <button 
                  key={role.name}
                  onClick={() => partyId && handleLogin(role.name)}
                  disabled={!partyId}
                  style={{
                    background: 'rgba(0,0,0,0.3)', border: partyId ? '1px solid rgba(255,255,255,0.2)' : '1px dashed rgba(255,255,255,0.1)', 
                    color: partyId ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.3)',
                    padding: '0.5rem 1rem', borderRadius: '8px', fontSize: '0.85rem', cursor: partyId ? 'pointer' : 'not-allowed',
                    display: 'flex', alignItems: 'center', gap: '8px', transition: 'all 0.2s'
                  }}
                  onMouseEnter={(e) => partyId && (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
                  onMouseLeave={(e) => partyId && (e.currentTarget.style.background = 'rgba(0,0,0,0.3)')}
                >
                  <span style={{color: partyId ? '#10b981' : '#ef4444', fontSize: '1.2em'}}>●</span>
                  {role.name}
                </button>
              );
            })}
          </div>
        </div>
        <div style={{ 
          background: 'rgba(255,255,255,0.1)', padding: '2rem', borderRadius: '16px', backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.2)', textAlign: 'center'
        }}>
          <input type="file" ref={fileInputRef} style={{display: 'none'}} accept=".json" onChange={handleFileUpload} />
          
          <h2 style={{color: 'white', marginBottom: '1.5rem'}}>Sign In</h2>
          
          <button onClick={() => fileInputRef.current?.click()} style={{
              background: 'white', color: '#667eea', padding: '1rem 2rem', borderRadius: '30px', 
              fontWeight: 'bold', fontSize: '1.1rem', boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
              width: '100%', maxWidth: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', margin: '0 auto 2rem auto', cursor: 'pointer'
            }}>📂 Import Key File</button>

          <div style={{display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem'}}>
            <div style={{height: '1px', background: 'rgba(255,255,255,0.3)', flex: 1}}></div>
            <span style={{color: 'rgba(255,255,255,0.6)'}}>OR CREATE NEW</span>
            <div style={{height: '1px', background: 'rgba(255,255,255,0.3)', flex: 1}}></div>
          </div>

          <button onClick={() => setView("signup")} style={{ 
              background: 'transparent', color: 'white', padding: '0.8rem 2rem', borderRadius: '30px', 
              fontWeight: 'bold', fontSize: '1rem', border: '2px solid rgba(255,255,255,0.5)', transition: 'all 0.2s', cursor: 'pointer'
            }} onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'} onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}>Create New Identity</button>
        </div>

     

      </div>
    </div>
  );
}