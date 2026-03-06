import { useState, useEffect } from 'react';
import { fetchTriageFlow } from '../services/triageService';

export interface TriageNode {
  question: string;
  type: 'yesno' | 'options';
  yes?: string;
  no?: string;
  options?: Record<string, string>;
}

export interface TriageFlow {
  version: string;
  startNode: string;
  nodes: Record<string, TriageNode>;
}

export const useTriage = () => {
  const [triageFlow, setTriageFlow] = useState<TriageFlow | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchTriageFlow();
        setTriageFlow(data);
      } catch (err) {
        console.error("Failed to load triage flow:", err);
        setError("Failed to load triage flow");
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return { triageFlow, loading, error };
};
