
import { EmergencyGuide } from '@/types';
import { emergencies } from '@/data/emergencies';

export const fetchEmergencies = async (): Promise<EmergencyGuide[]> => {
  // Use local data as primary source for offline-first experience
  return Promise.resolve(emergencies);
};

export const fetchEmergencyById = async (id: string): Promise<EmergencyGuide | null> => {
  const emergency = emergencies.find(e => e.id === id);
  return Promise.resolve(emergency || null);
};
