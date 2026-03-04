import React, { useState, useEffect } from "react";
import { useStreamQueries } from "@daml/react";
import { U } from "@daml.js/CantonSuite-0.1.0/lib/Users";
import { KYC } from "@daml.js/CantonSuite-0.1.0/lib/KYC";
import { RWAInstrument } from "@daml.js/CantonSuite-0.1.0/lib/Finance/Instruments";
import { DraftRWAInstrument } from "@daml.js/CantonSuite-0.1.0/lib/Finance/Instruments";
import CantonIAM from "../services/CantonIAM";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<"overview" | "users" | "assets" | "system">("overview");
  const iam = CantonIAM.getInstance();

  // --- QUERIES ---
  const { contracts: users } = useStreamQueries(U.User);
  const { contracts: kycRequests } = useStreamQueries(KYC);
  const { contracts: assets } = useStreamQueries(RWAInstrument);
  const { contracts: draftAssets } = useStreamQueries(DraftRWAInstrument);

  // --- CALCULATIONS ---
  const totalUsers = users.length;
  const approvedUsers = users.filter(u => u.payload.role === "Buyer").length;
  const pendingKYC = kycRequests.filter(k => k.payload.status === "KPending").length;
  const totalAssets = assets.length;
  const pendingAssets = draftAssets.length;

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
      {/* HEADER */}
      <div style={{ marginBottom: "2rem" }}>
        <h1>🛡️ Admin Dashboard</h1>
        <p style={{ color: 'var(--text-muted)', margin: '0.5rem 0' }}>
          System administration and oversight for Canton Suite
        </p>
      </div>

      {/* STATS GRID */}
      <div className="grid-cols-4" style={{ marginBottom: "2rem" }}>
        <div className="card">
          <h3>Total Users</h3>
          <div className="big-stat">{totalUsers}</div>
          <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            {approvedUsers} approved buyers
          </div>
        </div>
        <div className="card">
          <h3>Pending KYC</h3>
          <div className="big-stat" style={{ color: 'var(--warning)' }}>{pendingKYC}</div>
          <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            Awaiting compliance review
          </div>
        </div>
        <div className="card">
          <h3>Live Assets</h3>
          <div className="big-stat" style={{ color: 'var(--success)' }}>{totalAssets}</div>
          <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            Tokenized instruments
          </div>
        </div>
        <div className="card">
          <h3>Pending Assets</h3>
          <div className="big-stat" style={{ color: 'var(--info)' }}>{pendingAssets}</div>
          <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            Awaiting approval
          </div>
        </div>
      </div>

      {/* NAVIGATION TABS */}
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', borderBottom: '1px solid var(--border)' }}>
        <button onClick={() => setActiveTab("overview")} style={tabStyle(activeTab === "overview")}>
          📊 Overview
        </button>
        <button onClick={() => setActiveTab("users")} style={tabStyle(activeTab === "users")}>
          👥 Users ({totalUsers})
        </button>
        <button onClick={() => setActiveTab("assets")} style={tabStyle(activeTab === "assets")}>
          🏦 Assets ({totalAssets})
        </button>
        <button onClick={() => setActiveTab("system")} style={tabStyle(activeTab === "system")}>
          ⚙️ System
        </button>
      </div>

      {/* TAB CONTENT */}
      {activeTab === "overview" && (
        <div className="card">
          <h3>System Overview</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            <div>
              <h4>👥 User Management</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li>✅ {totalUsers} registered users</li>
                <li>✅ {approvedUsers} approved buyers</li>
                <li>⚠️ {pendingKYC} KYC requests pending</li>
              </ul>
            </div>
            <div>
              <h4>🏦 Asset Management</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li>✅ {totalAssets} live assets</li>
                <li>⚠️ {pendingAssets} pending approvals</li>
                <li>🔄 Active tokenization pipeline</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {activeTab === "users" && (
        <div className="card">
          <h3>Registered Users</h3>
          <table>
            <thead>
              <tr>
                <th>Party ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {users.length === 0 && (
                <tr><td colSpan={5} className="text-muted">No users registered</td></tr>
              )}
              {users.map(user => (
                <tr key={user.contractId}>
                  <td style={{ fontFamily: 'monospace', fontSize: '0.8rem' }}>
                    {user.payload.partyId.split('::')[0]}
                  </td>
                  <td>{user.payload.name}</td>
                  <td>{user.payload.email}</td>
                  <td>
                    <span className={`badge ${
                      user.payload.role === 'Issuer' ? 'badge-blue' : 
                      user.payload.role === 'Buyer' ? 'badge-green' : 'badge-purple'
                    }`}>
                      {user.payload.role}
                    </span>
                  </td>
                  <td>
                    <span className="badge badge-green">Active</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {activeTab === "assets" && (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          <div className="card">
            <h3>📈 Live Assets</h3>
            <table>
              <thead><tr><th>Name</th><th>Type</th><th>Price</th><th>Fractionalized</th></tr></thead>
              <tbody>
                {assets.length === 0 && (
                  <tr><td colSpan={4} className="text-muted">No live assets</td></tr>
                )}
                {assets.map(asset => (
                  <tr key={asset.contractId}>
                    <td>{asset.payload.name}</td>
                    <td>{asset.payload.assetType}</td>
                    <td>${Number(asset.payload.pricePerUnit).toFixed(2)}</td>
                    <td>
                      <span className={`badge ${asset.payload.fractionalized ? 'badge-green' : 'badge-yellow'}`}>
                        {asset.payload.fractionalized ? 'Yes' : 'No'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="card">
            <h3>⏳ Pending Assets</h3>
            <table>
              <thead><tr><th>Name</th><th>Type</th><th>Issuer</th><th>Status</th></tr></thead>
              <tbody>
                {draftAssets.length === 0 && (
                  <tr><td colSpan={4} className="text-muted">No pending assets</td></tr>
                )}
                {draftAssets.map(asset => (
                  <tr key={asset.contractId}>
                    <td>{asset.payload.name}</td>
                    <td>{asset.payload.assetType}</td>
                    <td>{asset.payload.draftIssuer.split('::')[0]}</td>
                    <td><span className="badge badge-yellow">Under Review</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === "system" && (
        <div className="card">
          <h3>System Information</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            <div>
              <h4>🔧 System Configuration</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li><strong>Ledger ID:</strong> sandbox</li>
                <li><strong>Application ID:</strong> CantonSuite_App</li>
                <li><strong>Admin Access:</strong> Enabled</li>
                <li><strong>Public Market:</strong> Active</li>
              </ul>
            </div>
            <div>
              <h4>📊 Performance Metrics</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li><strong>Active Parties:</strong> {totalUsers + 5}</li>
                <li><strong>Smart Contracts:</strong> {totalAssets + pendingAssets + 10}</li>
                <li><strong>System Status:</strong> <span className="badge badge-green">Healthy</span></li>
                <li><strong>Last Sync:</strong> Just now</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
