export interface TriageNode {
  type: 'yesno' | 'options';
  question: string;
  yes?: string;
  no?: string;
  options?: Record<string, string>;
}

export interface TriageFlow {
  startNode: string;
  nodes: Record<string, TriageNode>;
}

export const triageFlowData: TriageFlow = {
  startNode: 'consciousness',
  nodes: {
    'consciousness': {
      type: 'yesno',
      question: 'Is the person conscious?',
      yes: 'breathing',
      no: 'check_breathing_unconscious'
    },
    'check_breathing_unconscious': {
      type: 'yesno',
      question: 'Is the person breathing normally?',
      yes: 'recovery_position', 
      no: 'cardiac_arrest'
    },
    'recovery_position': {
        type: 'options',
        question: 'The person is unconscious but breathing. What caused it?',
        options: {
            'drowning': 'drowning',
            'seizure': 'seizure',
            'unknown': 'call_emergency'
        }
    },
    'breathing': {
      type: 'yesno',
      question: 'Is the person having difficulty breathing?',
      yes: 'choking_check',
      no: 'bleeding_check'
    },
    'choking_check': {
      type: 'yesno',
      question: 'Is the person choking (unable to speak/cough)?',
      yes: 'choking',
      no: 'bleeding_check'
    },
    'bleeding_check': {
      type: 'yesno',
      question: 'Is there severe bleeding?',
      yes: 'bleeding',
      no: 'burn_check'
    },
    'burn_check': {
      type: 'yesno',
      question: 'Is there a burn injury?',
      yes: 'burns',
      no: 'trauma_check'
    },
    'trauma_check': {
      type: 'yesno',
      question: 'Was there a fall, collision, or heavy impact?',
      yes: 'fracture_check',
      no: 'environmental_check'
    },
    'fracture_check': {
      type: 'yesno',
      question: 'Is there a suspected broken bone or inability to move a limb?',
      yes: 'fracture',
      no: 'road_accident_check'
    },
    'road_accident_check': {
        type: 'yesno',
        question: 'Is this a road accident victim?',
        yes: 'road_accident',
        no: 'environmental_check'
    },
    'environmental_check': {
      type: 'options',
      question: 'What happened?',
      options: {
        'snake bite': 'snake_bite',
        'electric shock': 'electric_shock',
        'drowning': 'drowning',
        'seizure': 'seizure',
        'heat exposure': 'heatstroke',
        'other': 'call_emergency' 
      }
    }
  }
};
