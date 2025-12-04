import React, { useState } from "react";
import { User } from "@daml.js/CantonSuite-0.0.1/lib/Users";
import CantonIAM from "../services/CantonIAM";
 

interface SignupProps {
  onLogin: (token: string, party: string) => void;
  onSwitchToLogin: () => void;
}

export default function Signup({ onLogin, onSwitchToLogin }: SignupProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "Buyer" // Default role
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
   
  // Helper to auto-download key
  const autoSaveKey = (partyId: string, name: string, role: string) => {
    const keyData = {
      partyId,
      role,
      name,
      createdAt: new Date().toISOString(),
      type: "CANTON_SUITE_IDENTITY_V1"
    };

    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(keyData, null, 2));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", `${name.replace(/\s+/g, '_')}_canton_key.json`);
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const iam = CantonIAM.getInstance();

      // 1. Allocate Party
      const newPartyId = await iam.allocateParty(formData.name);
      
      // 2. Generate Token
      const userToken = iam.createUserToken(newPartyId);

      // 3. Create User Profile
      const userPayload = {
        templateId: User.templateId,
        payload: {
          partyId: newPartyId,
          name: formData.name,
          email: formData.email,
          role: formData.role
        }
      };

      const createResponse = await fetch('/v1/create', { 
        method: 'POST',
        headers: { 'Authorization': `Bearer ${userToken}`, 'Content-Type': 'application/json' },
        body: JSON.stringify(userPayload)
      });

      if (!createResponse.ok) {
        const errorData = await createResponse.json();
        throw new Error(`Profile Creation Failed: ${errorData.errors?.[0] || createResponse.statusText}`);
      }

      // 4. Auto Save Key
      autoSaveKey(newPartyId, formData.name, formData.role);
       alert("Key File Exported. Keep this safe to login again!");
      // 5. Success - Auto Login
      iam.setSession(userToken, newPartyId);
      onLogin(userToken, newPartyId);

    } catch (err: any) {
      console.error(err);
      setError(err.message || "Signup failed");
      setIsLoading(false);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem'
    }}>
      <div style={{ maxWidth: '450px', width: '100%', background: 'var(--bg-card)', padding: '2.5rem', borderRadius: '16px', border: '1px solid var(--border)', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)' }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <h2 style={{ color: "white", marginBottom: '0.5rem' }}>Create Account</h2>
          <p style={{ color: "var(--text-muted)" }}>Join the Canton Network</p>
        </div>

        {error && (
          <div style={{ background: 'rgba(239, 68, 68, 0.2)', color: '#fca5a5', padding: '0.75rem', borderRadius: '8px', marginBottom: '1.5rem', fontSize: '0.9rem', border: '1px solid rgba(239, 68, 68, 0.5)' }}>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>Full Name</label>
            <input 
              className="input-field" 
              style={{ width: '100%', padding: '0.8rem' }}
              placeholder="e.g. Jane Doe"
              value={formData.name}
              onChange={e => setFormData({ ...formData, name: e.target.value })}
              required
              disabled={isLoading}
            />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>Email Address</label>
            <input 
              type="email"
              className="input-field" 
              style={{ width: '100%', padding: '0.8rem' }}
              placeholder="name@company.com"
              value={formData.email}
              onChange={e => setFormData({ ...formData, email: e.target.value })}
              required
              disabled={isLoading}
            />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>Role</label>
            <select 
              className="input-field"
              style={{ width: '100%', padding: '0.8rem' }}
              value={formData.role}
              onChange={e => setFormData({ ...formData, role: e.target.value })}
              disabled={isLoading}
            >
              <option value="Buyer">Buyer (Investor)</option>
              <option value="Issuer">Issuer (Asset Manager)</option>
              <option value="Compliance">Compliance Officer</option>
              <option value="Regulator">Regulator (Auditor)</option>
            </select>
          </div>

          <button 
            type="submit" 
            className="btn-primary" 
            style={{ padding: '1rem', fontSize: '1rem', marginTop: '0.5rem' }}
            disabled={isLoading}
          >
            {isLoading ? "Creating Identity..." : "Sign Up & Login"}
          </button>
        </form>

        <div style={{ marginTop: '2rem', textAlign: 'center', borderTop: '1px solid var(--border)', paddingTop: '1.5rem' }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            Already have a key file? <br/>
            <button onClick={onSwitchToLogin} style={{ background: 'none', border: 'none', color: 'var(--primary)', fontWeight: 'bold', marginTop: '0.5rem', fontSize: '1rem' }}>
              Import Key & Log In
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}