import { EmergencyType } from './types';

export const keyMap: Record<string, EmergencyType> = {
  cpr: 'cardiac-arrest',
  bleedingControl: 'bleeding',
  choking: 'choking',
  burn: 'burns',
  snakeBite: 'snake-bite',
  fracture: 'fracture',
  drowning: 'drowning',
  electricShock: 'electric-shock',
  heatstroke: 'heatstroke',
  seizure: 'seizure',
  recoveryPosition: 'cardiac-arrest',
};
