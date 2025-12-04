import { useEffect, useRef } from 'react';
import { useToast } from '../context/ToastContext';

export function useStreamNotification(contracts: readonly any[], label: string, loading: boolean) {
  const { showToast } = useToast();
  const prevCount = useRef(contracts.length);
  const hasLoadedInitialData = useRef(false);

  useEffect(() => {
    // 1. If the stream is still connecting/loading, do nothing.
    if (loading) return;

    // 2. The first time loading finishes, we simply set the baseline.
    // We do NOT want to alert on the initial data fetch.
    if (!hasLoadedInitialData.current) {
      prevCount.current = contracts.length;
      hasLoadedInitialData.current = true;
      return;
    }

    // 3. Subsequent updates: If the list grows, it's a new event.
    if (contracts.length > prevCount.current) {
      const diff = contracts.length - prevCount.current;
      if (diff === 1) {
        showToast(`🔔 New ${label} Received`, "info");
      } else {
        showToast(`🔔 ${diff} New ${label}s Received`, "info");
      }
    }

    // Update reference for the next render cycle
    prevCount.current = contracts.length;
  }, [contracts, label, showToast, loading]);
}