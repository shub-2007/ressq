import { useState, useEffect } from 'react';
import { fetchProtocols } from '../services/triageService';
import { EmergencyGuide, Step, Protocol } from '../types';
import { EMERGENCY_ASSETS } from '../constants/emergencyAssets';
import { keyMap } from '../constants';

export const useEmergencies = () => {
  const [emergencies, setEmergencies] = useState<EmergencyGuide[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const protocols = await fetchProtocols();
        
        const mappedEmergencies: EmergencyGuide[] = protocols.map(protocol => {
          const emergencyId = keyMap[protocol.key];
          const assets = EMERGENCY_ASSETS[protocol.key] || { icon: null, color: 'bg-gray-100 text-gray-600' };

          // Helper to map steps
          const mapSteps = (steps: any[]): Step[] => {
            return steps.map((step, index) => ({
              id: step.id || `${emergencyId}-${index}`,
              title: step.title || `Step ${index + 1}`,
              description: step.description || step.instruction || '',
              image: step.image || 'https://placehold.co/600x400/e2e8f0/1e293b?text=Step+Image',
              warning: step.warning,
              noKitAlternative: step.noKitAlternative
            }));
          };

          let steps: Step[] = [];
          let childSteps: Step[] | undefined = undefined;

          if (protocol.adult?.steps) {
            steps = mapSteps(protocol.adult.steps);
          } else if (protocol.steps) {
            steps = mapSteps(protocol.steps);
          }

          if (protocol.child?.steps) {
            childSteps = mapSteps(protocol.child.steps);
          }

          return {
            id: emergencyId,
            title: protocol.title,
            icon: assets.icon,
            color: assets.color,
            signs: protocol.signs || [],
            steps: steps,
            childSteps: childSteps
          };
        }).filter(e => e.id); // Filter out any that didn't match a keyMap

        setEmergencies(mappedEmergencies);
      } catch (err) {
        console.error("Failed to load protocols:", err);
        setError("Failed to load protocols");
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return { emergencies, loading, error };
};
