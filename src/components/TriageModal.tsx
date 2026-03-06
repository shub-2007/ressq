import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { X, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface TriageModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const questions = [
  {
    id: 'conscious',
    text: 'Is the person conscious?',
    yes: 'bleeding', // Next question or guide
    no: 'breathing'
  },
  {
    id: 'breathing',
    text: 'Is the person breathing?',
    yes: 'recovery', // Recovery position (Seizure guide has this)
    no: 'cardiac-arrest' // CPR
  },
  {
    id: 'bleeding',
    text: 'Is there severe bleeding?',
    yes: 'bleeding',
    no: 'fracture' // Just an example flow
  }
];

export function TriageModal({ isOpen, onClose }: TriageModalProps) {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // Simplified logic for demo
  const handleAnswer = (answer: boolean) => {
    if (currentQuestionIndex === 0) {
      if (!answer) {
        setCurrentQuestionIndex(1); // Check breathing
      } else {
        setCurrentQuestionIndex(2); // Check bleeding
      }
    } else if (currentQuestionIndex === 1) {
      if (!answer) {
        navigate('/guide/cardiac-arrest');
        onClose();
      } else {
        navigate('/guide/seizure'); // Recovery position
        onClose();
      }
    } else if (currentQuestionIndex === 2) {
      if (answer) {
        navigate('/guide/bleeding');
        onClose();
      } else {
        // Default to dashboard or another question
        onClose();
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-3xl p-6 w-full max-w-sm shadow-2xl relative"
          >
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex flex-col items-center text-center gap-6 py-4">
              <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center">
                <AlertCircle className="w-8 h-8" />
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900">
                {questions[currentQuestionIndex].text}
              </h3>

              <div className="grid grid-cols-2 gap-4 w-full">
                <Button 
                  onClick={() => handleAnswer(false)}
                  className="bg-slate-100 text-slate-700 hover:bg-slate-200 h-14 text-lg"
                >
                  No
                </Button>
                <Button 
                  onClick={() => handleAnswer(true)}
                  className="bg-blue-600 hover:bg-blue-700 h-14 text-lg"
                >
                  Yes
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
