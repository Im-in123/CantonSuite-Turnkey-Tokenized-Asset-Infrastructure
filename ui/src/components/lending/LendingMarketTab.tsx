import React from "react";
import { LendingPool } from "@daml.js/CantonSuite-0.0.1/lib/Lending";

interface LendingMarketTabProps {
  pools: readonly any[];
  isIssuer: boolean;
  isParticipant: boolean;
  onDeposit: (pool: any) => void;
  onBorrow: (pool: any) => void;
}

export default function LendingMarketTab({ pools, isIssuer, isParticipant, onDeposit, onBorrow }: LendingMarketTabProps) {
  return (
    <div className="card">
      <h3>Lending Pools</h3>
      <table>
        <thead><tr><th>Asset</th><th>Liquidity</th><th>Borrowed</th><th>Rate</th><th>Status</th>{isParticipant && <th>Actions</th>}</tr></thead>
        <tbody>
          {pools.length === 0 && <tr><td colSpan={6} className="text-muted">No active pools found.</td></tr>}
          {/* LOGIC PRESERVED: Filter closed pools unless issuer */}
          {pools.filter(pool => isIssuer || pool.payload.status === "Open").map(pool => (
            <tr key={pool.contractId}>
              <td><span className="badge badge-blue">{pool.payload.assetId}</span></td>
              <td>${Number(pool.payload.totalLiquidity).toLocaleString()}</td>
              <td>${Number(pool.payload.totalBorrowed).toLocaleString()}</td>
              <td style={{color:'var(--success)', fontWeight:'bold'}}>{pool.payload.interestRate}%</td>
              <td><span className={`badge ${pool.payload.status === 'Open' ? 'badge-green' : 'badge-red'}`}>{pool.payload.status}</span></td>
              {isParticipant && (
                <td>
                  <div className="flex-gap">
                    <button className="btn-success" disabled={pool.payload.status !== "Open"} onClick={() => onDeposit(pool)}>Deposit</button>
                    {!isIssuer && <button className="btn-outline" disabled={pool.payload.status !== "Open"} onClick={() => onBorrow(pool)}>Borrow</button>}
                  </div>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}