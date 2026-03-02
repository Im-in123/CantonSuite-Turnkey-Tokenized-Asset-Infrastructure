// ui/src/components/SyncStatus.tsx
import React, { useState, useEffect } from "react";
import { useStreamQueries } from "@daml/react";
import { MiningRoundReference } from "@daml.js/CantonSuite-0.1.0/lib/CantonCoin/MiningRoundSync";

export default function SyncStatus() {
  const { contracts, loading } = useStreamQueries(MiningRoundReference);
  const [timeLeft, setTimeLeft] = useState<number | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      if (contracts.length > 0) {
        const expiry = new Date(contracts[0].payload.expiresAt).getTime();
        const now = new Date().getTime();
        const diff = Math.max(0, Math.floor((expiry - now) / 1000));
        setTimeLeft(diff);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [contracts]);

  if (loading || !timeLeft) return <div className="text-muted" style={{fontSize: '0.7rem'}}>Connecting to Sync...</div>;

  const isLow = timeLeft < 120; // Warn if less than 2 mins

  return (
    <div className="flex-gap" style={{ 
      background: '#161b22', 
      padding: '4px 12px', 
      borderRadius: '20px', 
      border: `1px solid ${isLow ? 'var(--danger)' : 'var(--border)'}`,
      fontSize: '0.75rem'
    }}>
      <div style={{ 
        width: '8px', height: '8px', borderRadius: '50%', 
        backgroundColor: isLow ? 'var(--danger)' : 'var(--success)',
        boxShadow: isLow ? '0 0 8px var(--danger)' : 'none'
      }} />
      <span style={{ color: isLow ? 'var(--danger)' : 'var(--text-muted)' }}>
        Mining Round #{contracts[0].payload.roundNumber}: <b>{Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}</b>
      </span>
    </div>
  );
}