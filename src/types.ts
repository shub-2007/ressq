export type EmergencyType = 'cardiac-arrest' | 'fracture' | 'bleeding' | 'drowning' | 'electric-shock' | 'burns' | 'heatstroke' | 'snake-bite' | 'seizure' | 'choking';

export interface Step {
  id: string;
  title?: string;
  description: string; // mapped from instruction or description
  instruction?: string; // from backend
  image?: string;
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

export interface Protocol {
  key: string;
  title: string;
  severity: string;
  ageAware: boolean;
  noKitModeSupported?: boolean;
  signs?: string[];
  steps?: Step[];
  adult?: { steps: Step[] };
  child?: { steps: Step[] };
  version?: string;
  reviewedBy?: string;
}
