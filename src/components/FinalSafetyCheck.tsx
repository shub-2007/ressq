import React from 'react';
import { Button } from '@/components/ui/Button';
import { Phone, CheckCircle, Stethoscope, AlertTriangle } from 'lucide-react';

interface SafetyCheckData {
  questions: string[];
  successCondition: string;
  failureCondition: string;
  successWarning?: boolean; // For "Even if YES" cases
}

const safetyChecks: Record<string, SafetyCheckData> = {
  'cardiac-arrest': {
    questions: [
      'Is the person breathing normally now?',
      'Has the person regained consciousness or started responding?',
      'Is the chest moving regularly while breathing?'
    ],
    successCondition: 'Keep the person in recovery position and monitor.',
    failureCondition: 'Continue CPR and call 112 immediately.'
  },
  'bleeding': {
    questions: [
      'Has the bleeding slowed down or stopped?',
      'Is the person conscious and able to talk normally?',
      'Is the cloth no longer getting soaked with blood?'
    ],
    successCondition: 'Keep pressure bandage and monitor.',
    failureCondition: 'Continue pressure and seek urgent medical help.'
  },
  'choking': {
    questions: [
      'Can the person breathe normally now?',
      'Can the person speak or cough without difficulty?',
      'Has the object been completely removed?'
    ],
    successCondition: 'Monitor the person and give water slowly.',
    failureCondition: 'Continue choking rescue and call 112.'
  },
  'burns': {
    questions: [
      'Is the person calm and breathing normally?',
      'Is the burn limited to a small area (smaller than the palm)?',
      'Is the pain manageable after cooling the burn?'
    ],
    successCondition: 'Cover the burn and monitor.',
    failureCondition: 'Seek medical help immediately.'
  },
  'snake-bite': {
    questions: [
      'Is the person conscious and alert?',
      'Is the swelling not spreading rapidly?',
      'Is the person not showing symptoms like vomiting or dizziness?'
    ],
    successCondition: 'The person must still go to a hospital immediately.',
    failureCondition: 'Call 112 urgently.',
    successWarning: true
  },
  'fracture': {
    questions: [
      'Is the injured limb immobilized properly?',
      'Is the person conscious and calm?',
      'Is there no heavy bleeding from the injury?'
    ],
    successCondition: 'Take the person to hospital safely.',
    failureCondition: 'Seek emergency medical help.'
  },
  'drowning': {
    questions: [
      'Is the person breathing normally now?',
      'Is the person conscious and responding?',
      'Is the person not coughing continuously or vomiting water?'
    ],
    successCondition: 'Medical evaluation is recommended.',
    failureCondition: 'Continue CPR and call 112.',
    successWarning: true
  },
  'electric-shock': {
    questions: [
      'Is the person conscious and able to respond?',
      'Is the person breathing normally?',
      'Are there no severe burns on the body?'
    ],
    successCondition: 'The person should still get medical checkup.',
    failureCondition: 'Call emergency services immediately.',
    successWarning: true
  },
  'heatstroke': {
    questions: [
      'Has the person cooled down and stopped feeling dizzy?',
      'Is the person able to drink water and talk normally?',
      'Is the person fully conscious?'
    ],
    successCondition: 'Continue cooling and rest.',
    failureCondition: 'Seek medical help immediately.'
  },
  'seizure': {
    questions: [
      'Has the seizure stopped completely?',
      'Is the person waking up or responding?',
      'Is the person breathing normally?'
    ],
    successCondition: 'Let the person rest and monitor.',
    failureCondition: 'Call 112 immediately.'
  },
  'road-accident': {
    questions: [
      'Is the victim breathing normally now?',
      'Is the victim conscious or responding when you talk to them?',
      'Has the heavy bleeding stopped or slowed down?'
    ],
    successCondition: 'The victim may be stable for now, but still wait for medical help.',
    failureCondition: 'Call 112 immediately and continue first aid.'
  }
};

interface FinalSafetyCheckProps {
  emergencyId: string;
  onStable: () => void;
  onDanger: () => void;
}

export function FinalSafetyCheck({ emergencyId, onStable, onDanger }: FinalSafetyCheckProps) {
  const data = safetyChecks[emergencyId];

  if (!data) return null;

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 h-full flex flex-col">
      <div className="flex items-center gap-2 mb-6">
        <Stethoscope className="w-6 h-6 text-blue-600" />
        <h3 className="text-xl font-bold text-slate-900">Final Safety Check</h3>
      </div>
      
      <div className="bg-slate-50 rounded-xl p-4 mb-6">
        <p className="text-slate-900 font-semibold mb-3">Answer these questions:</p>
        <ul className="space-y-3">
          {data.questions.map((q, i) => (
            <li key={i} className="flex items-start gap-3 text-slate-700">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
              <span>{q}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="grid gap-4 mt-auto">
        <Button 
          onClick={onStable}
          className={`${data.successWarning ? 'bg-yellow-50 text-yellow-800 hover:bg-yellow-100 border-yellow-200' : 'bg-green-50 text-green-800 hover:bg-green-100 border-green-200'} justify-start h-auto py-4 px-4 border`}
        >
          <div className="flex items-center gap-3 text-left w-full">
            <div className={`w-10 h-10 rounded-full ${data.successWarning ? 'bg-yellow-200' : 'bg-green-200'} flex items-center justify-center shrink-0`}>
              {data.successWarning ? <AlertTriangle className="w-5 h-5 text-yellow-700" /> : <CheckCircle className="w-5 h-5 text-green-700" />}
            </div>
            <div className="flex-1">
              <div className="font-bold text-lg">Patient is Stable</div>
              <div className="text-sm opacity-90 font-medium mt-1">{data.successCondition}</div>
            </div>
          </div>
        </Button>

        <Button 
          onClick={onDanger}
          className="bg-red-50 text-red-800 hover:bg-red-100 border-red-200 justify-start h-auto py-4 px-4 border"
        >
          <div className="flex items-center gap-3 text-left w-full">
            <div className="w-10 h-10 rounded-full bg-red-200 flex items-center justify-center shrink-0">
              <Phone className="w-5 h-5 text-red-700" />
            </div>
            <div className="flex-1">
              <div className="font-bold text-lg">Patient Still in Danger</div>
              <div className="text-sm opacity-90 font-medium mt-1">{data.failureCondition}</div>
            </div>
          </div>
        </Button>
      </div>
    </div>
  );
}
