export type EmergencyType = 'cardiac-arrest' | 'fracture' | 'bleeding' | 'drowning' | 'electric-shock' | 'burns' | 'heatstroke' | 'snake-bite' | 'seizure' | 'choking' | 'road-accident';

export interface Step {
  id: string;
  title: string;
  description: string;
  image: string;
  warning?: string;
  noKitAlternative?: string;
}

export interface EmergencyGuide {
  id: EmergencyType;
  title: string;
  icon: any; // Lucide icon component
  color: string;
  signs: string[];
  steps: Step[];
  childSteps?: Step[];
}
