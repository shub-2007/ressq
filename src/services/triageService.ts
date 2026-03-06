import { Protocol } from '../types';

const API_BASE_URL = '/api/triage';

export const fetchProtocols = async (): Promise<Protocol[]> => {
  const response = await fetch(`${API_BASE_URL}/protocols`);
  if (!response.ok) {
    throw new Error('Failed to fetch protocols');
  }
  return response.json();
};

export const fetchTriageFlow = async () => {
  const response = await fetch(`${API_BASE_URL}/triage-flow`);
  if (!response.ok) {
    throw new Error('Failed to fetch triage flow');
  }
  return response.json();
};

export const fetchTriageVersion = async () => {
  const response = await fetch(`${API_BASE_URL}/triage-version`);
  if (!response.ok) {
    throw new Error('Failed to fetch triage version');
  }
  return response.json();
};
