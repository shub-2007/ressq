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
  AlertCircle,
  Ambulance
} from 'lucide-react';
import { EmergencyGuide } from '@/types';

export const emergencies: EmergencyGuide[] = [
  {
    id: 'road-accident',
    title: 'Road Accident',
    icon: Ambulance,
    color: 'bg-slate-800 text-slate-100',
    signs: [
      'Collision or impact',
      'Visible injuries or bleeding',
      'Unconsciousness or confusion'
    ],
    steps: [
      {
        id: 'accident-1',
        title: 'Ensure Safety',
        description: 'Ensure the accident scene is safe before approaching the victim (check for traffic, fire, or fuel leaks).',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Ensure+Safety',
      },
      {
        id: 'accident-2',
        title: 'Call Emergency',
        description: 'Call emergency services immediately 108 or 112.',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Call+Emergency',
      },
      {
        id: 'accident-3',
        title: 'Check Consciousness',
        description: 'Check if the victim is conscious and breathing.',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Check+Consciousness',
      },
      {
        id: 'accident-4',
        title: 'CPR if Needed',
        description: 'If the victim is not breathing, begin CPR immediately.',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=CPR+if+Needed',
      },
      {
        id: 'accident-5',
        title: 'Stop Bleeding',
        description: 'If there is heavy bleeding, apply firm pressure using cloth or bandage.',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Stop+Bleeding',
      },
      {
        id: 'accident-6',
        title: 'Do Not Move',
        description: 'Do NOT move the victim unnecessarily, especially if neck or spine injury is suspected.',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Do+Not+Move',
        warning: 'Moving a person with spinal injury can cause permanent paralysis.'
      },
      {
        id: 'accident-7',
        title: 'Keep Calm',
        description: 'If the victim is conscious, keep them calm and still.',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Keep+Calm',
      },
      {
        id: 'accident-8',
        title: 'Recovery Position',
        description: 'If vomiting or unconscious but breathing, place them in recovery position.',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Recovery+Position',
      },
      {
        id: 'accident-9',
        title: 'Keep Warm',
        description: 'Keep the victim warm using cloth or blanket.',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Keep+Warm',
      },
      {
        id: 'accident-10',
        title: 'Wait for Help',
        description: 'Wait with the victim until medical professionals arrive.',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Wait+for+Help',
      }
    ]
  },
  {
    id: 'cardiac-arrest',
    title: 'Cardiac Arrest',
    icon: HeartPulse,
    color: 'bg-red-100 text-red-600',
    signs: [
      'Person collapses suddenly',
      'Not breathing or breathing abnormally',
      'No response when you shout or shake'
    ],
    steps: [
      {
        id: 'cpr-1',
        title: 'Check Response',
        description: 'Check if the person responds by tapping and shouting.',
        image: '/Image/1.png',
      },
      {
        id: 'cpr-2',
        title: 'Call Emergency',
        description: 'Call emergency services immediately or ask someone nearby to call.',
        image: '/Image/2.png',
        noKitAlternative: 'Use phone speaker mode to follow instructions while doing compressions.'
      },
      {
        id: 'cpr-3',
        title: 'Position Person',
        description: 'Place the person flat on their back on a hard surface.',
        image: '/Image/3.png',
        noKitAlternative: 'Use a hard floor or table for effective chest compressions.'
      },
      {
        id: 'cpr-4',
        title: 'Check Breathing',
        description: 'Check breathing for no more than 10 seconds.',
        image: '/Image/4.png',
      },
      {
        id: 'cpr-5',
        title: 'Start Compressions',
        description: 'Start chest compressions in the center of the chest.',
        image: '/Image/5.png',
      },
      {
        id: 'cpr-6',
        title: 'Compression Technique',
        description: 'Push hard and fast (100–120 compressions per minute).',
        image: '/Image/6.png',
      },
      {
        id: 'cpr-7',
        title: 'Compression Depth',
        description: 'Press about 5–6 cm deep each time.',
        image: '/Image/7.png',
      },
      {
        id: 'cpr-8',
        title: 'Allow Recoil',
        description: 'Allow chest to fully rise after each compression.',
        image: '/Image/8.png',
      },
      {
        id: 'cpr-9',
        title: 'Continue CPR',
        description: 'Continue compressions until help arrives.',
        image: '/Image/9.png',
      },
      {
        id: 'cpr-10',
        title: 'Use AED',
        description: 'Use an AED if available.',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Use+AED',
      }
    ],
    childSteps: [
      {
        id: 'child-cpr-1',
        title: 'Check Response',
        description: 'Check if the child responds by tapping and calling their name.',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Check+Child+Response',
      },
      {
        id: 'child-cpr-2',
        title: 'Call Emergency',
        description: 'Call emergency services immediately.',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Call+Emergency',
      },
      {
        id: 'child-cpr-3',
        title: 'Position Child',
        description: 'Place the child flat on their back.',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Flat+on+Back',
      },
      {
        id: 'child-cpr-4',
        title: 'Check Breathing',
        description: 'Check breathing quickly for 10 seconds.',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Check+Breathing',
      },
      {
        id: 'child-cpr-5',
        title: 'One Hand Compression',
        description: 'Use one hand for chest compressions.',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=One+Hand+Compression',
      },
      {
        id: 'child-cpr-6',
        title: 'Compression Depth',
        description: 'Push about one-third the depth of the chest.',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=1/3+Depth',
      },
      {
        id: 'child-cpr-7',
        title: 'Compression Rate',
        description: 'Compress at a rate of 100–120 per minute.',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=100-120+BPM',
      },
      {
        id: 'child-cpr-8',
        title: 'Rescue Breaths',
        description: 'Give rescue breaths if trained (30 compressions : 2 breaths).',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Rescue+Breaths',
        noKitAlternative: 'Use a clean cloth to cover mouth if giving rescue breaths.'
      },
      {
        id: 'child-cpr-9',
        title: 'Continue CPR',
        description: 'Continue CPR until help arrives.',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Continue+CPR',
      }
    ]
  },
  {
    id: 'bleeding',
    title: 'Severe Bleeding',
    icon: Droplets,
    color: 'bg-rose-100 text-rose-600',
    signs: [
      'Blood flowing continuously',
      'Blood soaking clothes quickly',
      'Person becoming pale or dizzy'
    ],
    steps: [
      {
        id: 'bleed-1',
        title: 'Call Emergency',
        description: 'Call emergency services immediately.',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Call+Emergency',
      },
      {
        id: 'bleed-2',
        title: 'Lie Down',
        description: 'Ask the person to lie down.',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Lie+Down',
      },
      {
        id: 'bleed-3',
        title: 'Direct Pressure',
        description: 'Apply direct pressure on the wound with cloth.',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Direct+Pressure',
        noKitAlternative: 'Use a clean towel, handkerchief, or clean T-shirt as a pressure bandage.'
      },
      {
        id: 'bleed-4',
        title: 'Firm Pressure',
        description: 'Press firmly using both hands.',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Firm+Pressure',
      },
      {
        id: 'bleed-5',
        title: 'Elevate Limb',
        description: 'Raise the injured limb above heart level if possible.',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Elevate+Limb',
      },
      {
        id: 'bleed-6',
        title: 'Do Not Remove Cloth',
        description: 'Do not remove cloth if it becomes soaked.',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Keep+Cloth',
      },
      {
        id: 'bleed-7',
        title: 'Add More Cloth',
        description: 'Add more cloth on top and continue pressing.',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Add+More+Cloth',
        noKitAlternative: 'Use a dupatta or scarf to wrap around the wound.'
      },
      {
        id: 'bleed-8',
        title: 'Maintain Pressure',
        description: 'Maintain pressure until bleeding stops or help arrives.',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Maintain+Pressure',
        noKitAlternative: 'Use a plastic bag + cloth to reduce contamination.'
      }
    ],
    childSteps: [
      {
        id: 'child-bleed-1',
        title: 'Call Emergency',
        description: 'Stay calm and call emergency services.',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Call+Emergency',
      },
      {
        id: 'child-bleed-2',
        title: 'Lie Down',
        description: 'Make the child lie down.',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Lie+Down',
      },
      {
        id: 'child-bleed-3',
        title: 'Gentle Pressure',
        description: 'Press the wound gently but firmly with cloth.',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Gentle+Pressure',
      },
      {
        id: 'child-bleed-4',
        title: 'Elevate',
        description: 'Keep the injured area elevated.',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Elevate',
      },
      {
        id: 'child-bleed-5',
        title: 'Comfort',
        description: 'Comfort the child and keep them still.',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Comfort+Child',
      },
      {
        id: 'child-bleed-6',
        title: 'Continue Pressure',
        description: 'Continue pressure until bleeding stops.',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Continue+Pressure',
      }
    ]
  },
  {
    id: 'choking',
    title: 'Choking',
    icon: Stethoscope,
    color: 'bg-blue-100 text-blue-600',
    signs: [
      'Person cannot speak or breathe',
      'Clutching throat',
      'Weak cough or no sound'
    ],
    steps: [
      {
        id: 'choke-1',
        title: 'Ask',
        description: 'Ask if the person is choking.',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Ask+if+Choking',
      },
      {
        id: 'choke-2',
        title: 'Encourage Coughing',
        description: 'Encourage them to cough strongly.',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Cough+Strongly',
      },
      {
        id: 'choke-3',
        title: 'Position',
        description: 'Stand behind the person.',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Stand+Behind',
      },
      {
        id: 'choke-4',
        title: 'Wrap Arms',
        description: 'Wrap your arms around their waist.',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Wrap+Arms',
      },
      {
        id: 'choke-5',
        title: 'Make Fist',
        description: 'Make a fist above the navel.',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Make+Fist',
      },
      {
        id: 'choke-6',
        title: 'Heimlich Maneuver',
        description: 'Pull inward and upward quickly (Heimlich maneuver).',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Heimlich+Maneuver',
        noKitAlternative: 'Use a chair back to lean and push abdomen against if alone.'
      },
      {
        id: 'choke-7',
        title: 'Repeat',
        description: 'Repeat until object comes out.',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Repeat',
      },
      {
        id: 'choke-8',
        title: 'Call Emergency',
        description: 'Call emergency services if choking continues.',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Call+Emergency',
      }
    ],
    childSteps: [
      {
        id: 'child-choke-1',
        title: 'Check Cough',
        description: 'Check if the child can cough.',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Check+Cough',
      },
      {
        id: 'child-choke-2',
        title: 'Encourage Coughing',
        description: 'Encourage coughing if they can breathe.',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Encourage+Coughing',
      },
      {
        id: 'child-choke-3',
        title: 'Back Blows',
        description: 'Give 5 firm back blows between shoulder blades.',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Back+Blows',
        noKitAlternative: 'Use the heel of your hand.'
      },
      {
        id: 'child-choke-4',
        title: 'Abdominal Thrusts',
        description: 'If object remains, give abdominal thrusts carefully.',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Abdominal+Thrusts',
        noKitAlternative: 'Use floor support for stability during thrusts.'
      },
      {
        id: 'child-choke-5',
        title: 'Repeat',
        description: 'Repeat until object comes out.',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Repeat',
      },
      {
        id: 'child-choke-6',
        title: 'Call Emergency',
        description: 'Call emergency services if choking persists.',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Call+Emergency',
      }
    ]
  },
  {
    id: 'burns',
    title: 'Burn Injury',
    icon: Flame,
    color: 'bg-orange-100 text-orange-600',
    signs: [
      'Red skin or blisters',
      'Severe pain',
      'Skin peeling or charred'
    ],
    steps: [
      {
        id: 'burn-1',
        title: 'Move Away',
        description: 'Move the person away from the heat source.',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Move+Away',
      },
      {
        id: 'burn-2',
        title: 'Cool Burn',
        description: 'Cool the burn under running water for 20 minutes.',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Cool+with+Water',
        noKitAlternative: 'Use running tap water as the best cooling method.'
      },
      {
        id: 'burn-3',
        title: 'Remove Items',
        description: 'Remove tight clothing or jewelry near burn.',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Remove+Items',
      },
      {
        id: 'burn-4',
        title: 'Do Not Break Blisters',
        description: 'Do not break blisters.',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Dont+Break+Blisters',
      },
      {
        id: 'burn-5',
        title: 'Cover Burn',
        description: 'Cover the burn with clean cloth.',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Cover+Burn',
        noKitAlternative: 'Use clean cotton cloth, plastic wrap, or a clean bedsheet (for large burns).'
      },
      {
        id: 'burn-6',
        title: 'Seek Help',
        description: 'Seek medical help for large burns.',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Seek+Help',
        warning: 'Do NOT use toothpaste, butter, or oil.'
      }
    ],
    childSteps: [
      {
        id: 'child-burn-1',
        title: 'Move Away',
        description: 'Move the child away from heat immediately.',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Move+Away',
      },
      {
        id: 'child-burn-2',
        title: 'Cool Burn',
        description: 'Cool the burn with running water for 20 minutes.',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Cool+with+Water',
      },
      {
        id: 'child-burn-3',
        title: 'Remove Clothes',
        description: 'Remove tight clothes around the burn.',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Remove+Clothes',
      },
      {
        id: 'child-burn-4',
        title: 'Cover Burn',
        description: 'Cover burn with clean cloth or gauze.',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Cover+Burn',
      },
      {
        id: 'child-burn-5',
        title: 'Comfort & Seek Help',
        description: 'Comfort the child and seek medical care.',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Comfort+Child',
      }
    ]
  },
  {
    id: 'snake-bite',
    title: 'Snake Bite',
    icon: AlertTriangle,
    color: 'bg-green-100 text-green-700',
    signs: [
      'Two puncture marks',
      'Swelling and pain',
      'Nausea or dizziness'
    ],
    steps: [
      {
        id: 'snake-1',
        title: 'Keep Calm',
        description: 'Keep the person calm and still.',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Keep+Calm',
      },
      {
        id: 'snake-2',
        title: 'Call Emergency',
        description: 'Call emergency services immediately.',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Call+Emergency',
      },
      {
        id: 'snake-3',
        title: 'Lay Down',
        description: 'Lay the person down.',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Lay+Down',
      },
      {
        id: 'snake-4',
        title: 'Limb Position',
        description: 'Keep bitten limb below heart level.',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Limb+Below+Heart',
      },
      {
        id: 'snake-5',
        title: 'Remove Items',
        description: 'Remove tight jewelry or clothing.',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Remove+Items',
      },
      {
        id: 'snake-6',
        title: 'Immobilize',
        description: 'Immobilize the limb with splint.',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Immobilize',
        noKitAlternative: 'Use a wooden stick, ruler, or rolled magazine as a splint. Use cloth/dupatta to immobilize.'
      },
      {
        id: 'snake-7',
        title: 'Do Not Cut/Suck',
        description: 'Do not cut or suck the wound.',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Dont+Cut+or+Suck',
        warning: 'Do NOT apply tourniquet.'
      }
    ],
    childSteps: [
      {
        id: 'child-snake-1',
        title: 'Calm Child',
        description: 'Calm the child and keep them still.',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Calm+Child',
      },
      {
        id: 'child-snake-2',
        title: 'Call Emergency',
        description: 'Call emergency services immediately.',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Call+Emergency',
      },
      {
        id: 'child-snake-3',
        title: 'Keep Still',
        description: 'Keep the bitten limb still.',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Keep+Still',
      },
      {
        id: 'child-snake-4',
        title: 'Limb Position',
        description: 'Keep limb lower than heart level.',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Limb+Lower+Than+Heart',
        noKitAlternative: 'Use a pillow or folded blanket for limb support.'
      },
      {
        id: 'child-snake-5',
        title: 'Transport',
        description: 'Transport to hospital urgently.',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Transport+Urgently',
      }
    ]
  },
  {
    id: 'fracture',
    title: 'Fracture',
    icon: Bone,
    color: 'bg-slate-100 text-slate-600',
    signs: [
      'Severe pain',
      'Swelling or deformity',
      'Unable to move limb'
    ],
    steps: [
      {
        id: 'frac-1',
        title: 'Keep Still',
        description: 'Keep the injured person still.',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Keep+Still',
      },
      {
        id: 'frac-2',
        title: 'Support Limb',
        description: 'Support the injured limb.',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Support+Limb',
      },
      {
        id: 'frac-3',
        title: 'Cold Compress',
        description: 'Apply cold compress to reduce swelling.',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Cold+Compress',
        noKitAlternative: 'Use ice wrapped in cloth.'
      },
      {
        id: 'frac-4',
        title: 'Immobilize',
        description: 'Immobilize the limb using splint.',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Immobilize',
        noKitAlternative: 'Use a wooden stick, magazine, or cardboard as a splint. Use scarf/dupatta as a sling.'
      },
      {
        id: 'frac-5',
        title: 'Seek Care',
        description: 'Seek medical care immediately.',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Seek+Care',
      }
    ],
    childSteps: [
      {
        id: 'child-frac-1',
        title: 'Calm & Stop Movement',
        description: 'Calm the child and stop movement.',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Calm+Child',
      },
      {
        id: 'child-frac-2',
        title: 'Support Gently',
        description: 'Support the injured area gently.',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Support+Gently',
      },
      {
        id: 'child-frac-3',
        title: 'Cold Compress',
        description: 'Apply cold compress for swelling.',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Cold+Compress',
      },
      {
        id: 'child-frac-4',
        title: 'Immobilize',
        description: 'Immobilize limb with splint.',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Immobilize',
      },
      {
        id: 'child-frac-5',
        title: 'Hospital',
        description: 'Take child to hospital.',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Go+to+Hospital',
      }
    ]
  },
  {
    id: 'drowning',
    title: 'Drowning',
    icon: Waves,
    color: 'bg-cyan-100 text-cyan-600',
    signs: [
      'Person pulled from water unconscious',
      'Not breathing',
      'Weak pulse'
    ],
    steps: [
      {
        id: 'drown-1',
        title: 'Remove from Water',
        description: 'Remove person safely from water.',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Remove+from+Water',
      },
      {
        id: 'drown-2',
        title: 'Call Emergency',
        description: 'Call emergency services immediately.',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Call+Emergency',
      },
      {
        id: 'drown-3',
        title: 'Check Vitals',
        description: 'Check breathing and pulse.',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Check+Vitals',
      },
      {
        id: 'drown-4',
        title: 'Start CPR',
        description: 'Start CPR if not breathing.',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Start+CPR',
        noKitAlternative: 'Use flat ground as CPR surface.'
      },
      {
        id: 'drown-5',
        title: 'Recovery Position',
        description: 'Place person on side if breathing returns.',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Recovery+Position',
      },
      {
        id: 'drown-6',
        title: 'Keep Warm',
        description: 'Keep person warm.',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Keep+Warm',
        noKitAlternative: 'Use blanket, towel, or dry clothes to prevent hypothermia.'
      }
    ],
    childSteps: [
      {
        id: 'child-drown-1',
        title: 'Remove from Water',
        description: 'Remove child from water immediately.',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Remove+from+Water',
      },
      {
        id: 'child-drown-2',
        title: 'Call Emergency',
        description: 'Call emergency services.',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Call+Emergency',
      },
      {
        id: 'child-drown-3',
        title: 'Check Breathing',
        description: 'Check breathing quickly.',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Check+Breathing',
      },
      {
        id: 'child-drown-4',
        title: 'Start CPR',
        description: 'Start CPR if necessary.',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Start+CPR',
      },
      {
        id: 'child-drown-5',
        title: 'Keep Warm',
        description: 'Keep child warm and calm.',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Keep+Warm',
      }
    ]
  },
  {
    id: 'electric-shock',
    title: 'Electric Shock',
    icon: Zap,
    color: 'bg-yellow-100 text-yellow-700',
    signs: [
      'Person stuck to electric source',
      'Burns on skin',
      'Unconsciousness'
    ],
    steps: [
      {
        id: 'shock-1',
        title: 'Turn Off Power',
        description: 'Turn off electricity immediately.',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Turn+Off+Power',
      },
      {
        id: 'shock-2',
        title: 'Do Not Touch',
        description: 'Do not touch person directly if current is active.',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Dont+Touch',
      },
      {
        id: 'shock-3',
        title: 'Separate from Source',
        description: 'Use wooden object to separate person from source.',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Separate+from+Source',
        noKitAlternative: 'Use a wooden stick or broom to move person away. Use dry cloth or rubber item for insulation.'
      },
      {
        id: 'shock-4',
        title: 'Call Emergency',
        description: 'Call emergency services.',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Call+Emergency',
      },
      {
        id: 'shock-5',
        title: 'Check Vitals',
        description: 'Check breathing and pulse.',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Check+Vitals',
      },
      {
        id: 'shock-6',
        title: 'Start CPR',
        description: 'Start CPR if necessary.',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Start+CPR',
        noKitAlternative: 'Use a blanket to keep person warm.'
      }
    ],
    childSteps: [
      {
        id: 'child-shock-1',
        title: 'Turn Off Power',
        description: 'Turn off the power source immediately.',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Turn+Off+Power',
      },
      {
        id: 'child-shock-2',
        title: 'Move Away',
        description: 'Move child away using non-conductive object.',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Move+Away',
      },
      {
        id: 'child-shock-3',
        title: 'Check Breathing',
        description: 'Check breathing and responsiveness.',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Check+Breathing',
      },
      {
        id: 'child-shock-4',
        title: 'Call Emergency',
        description: 'Call emergency services.',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Call+Emergency',
      },
      {
        id: 'child-shock-5',
        title: 'Seek Help',
        description: 'Seek medical help urgently.',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Seek+Help',
      }
    ]
  },
  {
    id: 'heatstroke',
    title: 'Heatstroke',
    icon: ThermometerSun,
    color: 'bg-yellow-100 text-yellow-600',
    signs: [
      'Very high body temperature',
      'Confusion or dizziness',
      'Hot, dry skin'
    ],
    steps: [
      {
        id: 'heat-1',
        title: 'Move to Shade',
        description: 'Move the person to shade or cool place.',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Move+to+Shade',
      },
      {
        id: 'heat-2',
        title: 'Call Emergency',
        description: 'Call emergency services.',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Call+Emergency',
      },
      {
        id: 'heat-3',
        title: 'Remove Clothing',
        description: 'Remove excess clothing.',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Remove+Clothing',
      },
      {
        id: 'heat-4',
        title: 'Cool Body',
        description: 'Cool body using wet cloths.',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Cool+Body',
        noKitAlternative: 'Use wet towel to cool body.'
      },
      {
        id: 'heat-5',
        title: 'Fan Person',
        description: 'Fan the person continuously.',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Fan+Person',
        noKitAlternative: 'Use a fan or newspaper for air circulation.'
      },
      {
        id: 'heat-6',
        title: 'Hydrate',
        description: 'Give small sips of water if conscious.',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Hydrate',
        noKitAlternative: 'Use water bottle for hydration.'
      }
    ],
    childSteps: [
      {
        id: 'child-heat-1',
        title: 'Move to Cool Place',
        description: 'Move child to cool place.',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Move+to+Cool',
      },
      {
        id: 'child-heat-2',
        title: 'Remove Clothing',
        description: 'Remove extra clothing.',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Remove+Clothing',
      },
      {
        id: 'child-heat-3',
        title: 'Cool Body',
        description: 'Cool body using wet cloths.',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Cool+Body',
      },
      {
        id: 'child-heat-4',
        title: 'Offer Water',
        description: 'Offer small sips of water.',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Offer+Water',
      },
      {
        id: 'child-heat-5',
        title: 'Seek Help',
        description: 'Seek medical help.',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Seek+Help',
      }
    ]
  },
  {
    id: 'seizure',
    title: 'Seizure',
    icon: Activity,
    color: 'bg-purple-100 text-purple-600',
    signs: [
      'Sudden shaking movements',
      'Loss of awareness',
      'Foaming from mouth'
    ],
    steps: [
      {
        id: 'seize-1',
        title: 'Stay Calm',
        description: 'Stay calm and note the time.',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Stay+Calm',
        noKitAlternative: 'Use timer on phone to track seizure duration.'
      },
      {
        id: 'seize-2',
        title: 'Lay Down',
        description: 'Gently lay person on the ground.',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Lay+Down',
      },
      {
        id: 'seize-3',
        title: 'Turn on Side',
        description: 'Turn them on their side.',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Turn+on+Side',
      },
      {
        id: 'seize-4',
        title: 'Remove Objects',
        description: 'Remove nearby dangerous objects.',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Remove+Objects',
      },
      {
        id: 'seize-5',
        title: 'Cushion Head',
        description: 'Cushion the head.',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Cushion+Head',
        noKitAlternative: 'Use pillow or folded clothes for head protection.'
      },
      {
        id: 'seize-6',
        title: 'Do Not Restrain',
        description: 'Do not restrain movements.',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Dont+Restrain',
      },
      {
        id: 'seize-7',
        title: 'Mouth Safety',
        description: 'Do not put anything in mouth.',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Nothing+in+Mouth',
      },
      {
        id: 'seize-8',
        title: 'Call Emergency',
        description: 'Call emergency services if seizure lasts more than 5 minutes.',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Call+Emergency',
        noKitAlternative: 'Use blanket for comfort after seizure.'
      }
    ],
    childSteps: [
      {
        id: 'child-seize-1',
        title: 'Lay Safely',
        description: 'Lay the child safely on ground.',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Lay+Safely',
      },
      {
        id: 'child-seize-2',
        title: 'Turn on Side',
        description: 'Turn child on their side.',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Turn+on+Side',
      },
      {
        id: 'child-seize-3',
        title: 'Cushion Head',
        description: 'Cushion the head with cloth.',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Cushion+Head',
      },
      {
        id: 'child-seize-4',
        title: 'Move Objects',
        description: 'Move objects away.',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Move+Objects',
      },
      {
        id: 'child-seize-5',
        title: 'Stay with Child',
        description: 'Stay with child until seizure stops.',
        image: 'https://placehold.co/600x400/e2e8f0/1e293b?text=Stay+with+Child',
      }
    ]
  }
];
