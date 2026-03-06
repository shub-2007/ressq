import { 
  HeartPulse, 
  Bone, 
  Droplets, 
  Waves, 
  Zap, 
  Flame, 
  ThermometerSun, 
  Activity, 
  AlertTriangle, 
  Stethoscope,
  AlertCircle
} from 'lucide-react';

export const EMERGENCY_ASSETS: Record<string, { icon: any, color: string }> = {
  'cpr': {
    icon: HeartPulse,
    color: 'bg-red-100 text-red-600'
  },
  'bleedingControl': {
    icon: Droplets,
    color: 'bg-rose-100 text-rose-600'
  },
  'choking': {
    icon: Stethoscope,
    color: 'bg-blue-100 text-blue-600'
  },
  'burn': {
    icon: Flame,
    color: 'bg-orange-100 text-orange-600'
  },
  'snakeBite': {
    icon: AlertTriangle,
    color: 'bg-green-100 text-green-700'
  },
  'fracture': {
    icon: Bone,
    color: 'bg-slate-100 text-slate-600'
  },
  'drowning': {
    icon: Waves,
    color: 'bg-cyan-100 text-cyan-600'
  },
  'electricShock': {
    icon: Zap,
    color: 'bg-yellow-100 text-yellow-700'
  },
  'heatstroke': {
    icon: ThermometerSun,
    color: 'bg-yellow-100 text-yellow-600'
  },
  'seizure': {
    icon: Activity,
    color: 'bg-purple-100 text-purple-600'
  }
};
