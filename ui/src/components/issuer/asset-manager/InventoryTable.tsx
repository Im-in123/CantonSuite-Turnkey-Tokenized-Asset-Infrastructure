import React from "react";

export default function InventoryTable({ assets, assetStats, onAction }: any) {
  return (
    <div className="card">
      <h3>Institutional Registry</h3>
      <div style={{ overflowX: "auto" }}>
        <table style={{ minWidth: "900px" }}>
          <thead>
            <tr>
              <th>Ticker</th>
              <th>Fractions</th>
              <th>Treasury / Total</th>
              <th>Supply Health</th>
              <th style={{ textAlign: "right" }}>Operations</th>
            </tr>
          </thead>
          <tbody>
            {assets.map((a: any) => {
              const ticker = a.payload.instrument.id.unpack;
              const stats = assetStats[ticker] || { inTreasury: 0, totalSupply: 0 };
              const utilization = stats.totalSupply > 0 ? (stats.inTreasury / stats.totalSupply) * 100 : 0;
              return (
                <tr key={a.contractId}>
                  <td><b>{ticker}</b></td>
                  <td>
                    <button className="btn-outline" style={{padding: '2px 8px', fontSize: '0.65rem'}} onClick={() => onAction(a, "TOGGLE")}>
                      {a.payload.fractionalized ? "ON" : "OFF"}
                    </button>
                  </td>
                  <td>
                    <span style={{color: 'var(--primary)', fontWeight: 'bold'}}>{stats.inTreasury.toLocaleString()}</span>
                    <span className="text-muted"> / {stats.totalSupply.toLocaleString()}</span>
                  </td>
                  <td style={{ width: '150px' }}>
                    <div style={{ height: '6px', width: '100%', background: '#222', borderRadius: '3px' }}>
                      <div style={{ height: '100%', width: `${utilization}%`, background: 'var(--primary)' }} />
                    </div>
                  </td>
                  <td style={{ textAlign: "right" }}>
                    <div className="flex-gap" style={{ justifyContent: "flex-end" }}>
                      <button className="btn-primary" style={{background: 'var(--accent)'}} onClick={() => onAction(a, "PUBLISH")}>Publish</button>
                      <button className="btn-success" onClick={() => onAction(a, "MINT")}>Mint</button>
                      <button className="btn-outline" onClick={() => onAction(a, "BURN")}>Burn</button>
                      <button className="btn-danger" style={{ background: "transparent", color: "var(--danger)", border: "1px solid var(--danger)" }} onClick={() => onAction(a, "CLAWBACK")}>Clawback</button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}