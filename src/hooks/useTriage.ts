import { useState, useEffect } from 'react';
import { triageFlowData, TriageFlow } from '@/data/triage';

export function useTriage() {
  const [triageFlow, setTriageFlow] = useState<TriageFlow | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulate async loading to mimic API call
    const timer = setTimeout(() => {
      try {
        setTriageFlow(triageFlowData);
        setLoading(false);
      } catch (err) {
        setError('Failed to load triage flow');
        setLoading(false);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return { triageFlow, loading, error };
}
