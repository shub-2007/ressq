import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { EmergencyGuide, Step } from '@/types';
import { fetchEmergencyById } from '@/services/emergencyService';
import { Layout } from '@/components/layout/Layout';
import { StepCard } from '@/components/StepCard';
import { FinalSafetyCheck } from '@/components/FinalSafetyCheck';
import { Button } from '@/components/ui/Button';
import { ChevronLeft, User, Baby, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Guide() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const [emergency, setEmergency] = useState<EmergencyGuide | null>(null);
  const [stepIndex, setStepIndex] = useState(0);
  const [isChild, setIsChild] = useState<boolean | null>(null);
  const [isNoKitMode, setIsNoKitMode] = useState(false);
  const [isSafetyCheck, setIsSafetyCheck] = useState(false);

  useEffect(() => {
    const loadEmergency = async () => {
      if (id) {
        const data = await fetchEmergencyById(id);
        setEmergency(data);
      }
    };
    loadEmergency();
  }, [id]);

  if (!emergency) return <div>Loading...</div>;

  // Initial Screen: Signs & Age Selection
  if (isChild === null) {
    return (
      <Layout showCallBar={true}>
        <div className="min-h-screen flex flex-col px-6 pt-12 pb-32">
          <button 
            onClick={() => navigate(-1)}
            className="mb-6 w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-400 hover:text-slate-600"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="mb-8">
            <h1 className="text-3xl font-bold text-slate-900 mb-2">
              {emergency.title}
            </h1>
            <div className="flex gap-2 mb-6">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${emergency.color.replace('text-', 'bg-').replace('100', '50')} ${emergency.color}`}>
                Emergency Protocol
              </span>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 mb-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-orange-500" />
                Signs & Symptoms
              </h3>
              <ul className="space-y-3">
                {emergency.signs.map((sign, index) => (
                  <li key={index} className="flex items-start gap-3 text-slate-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 shrink-0" />
                    <span>{sign}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-auto">
            <p className="text-slate-500 mb-4 text-center text-sm font-medium uppercase tracking-wider">Select Patient</p>
            
            {emergency.childSteps ? (
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => setIsChild(false)}
                  className="flex flex-col items-center gap-3 p-6 bg-white rounded-2xl shadow-sm border-2 border-transparent hover:border-blue-500 active:scale-95 transition-all"
                >
                  <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                    <User className="w-6 h-6" />
                  </div>
                  <span className="font-semibold text-slate-900">Adult</span>
                </button>

                <button
                  onClick={() => setIsChild(true)}
                  className="flex flex-col items-center gap-3 p-6 bg-white rounded-2xl shadow-sm border-2 border-transparent hover:border-cyan-500 active:scale-95 transition-all"
                >
                  <div className="w-12 h-12 rounded-full bg-cyan-50 text-cyan-600 flex items-center justify-center">
                    <Baby className="w-6 h-6" />
                  </div>
                  <span className="font-semibold text-slate-900">Child</span>
                </button>
              </div>
            ) : (
              <Button 
                onClick={() => setIsChild(false)}
                className="w-full py-4 text-lg"
              >
                Start Guide
              </Button>
            )}
          </div>
        </div>
      </Layout>
    );
  }

  const steps = isChild && emergency.childSteps ? emergency.childSteps : emergency.steps;
  const currentStep = steps[stepIndex];
  const progress = isSafetyCheck ? 100 : ((stepIndex + 1) / steps.length) * 100;

  const handleNext = () => {
    if (stepIndex < steps.length - 1) {
      setStepIndex(prev => prev + 1);
    } else {
      setIsSafetyCheck(true);
    }
  };

  const handlePrev = () => {
    if (isSafetyCheck) {
      setIsSafetyCheck(false);
    } else if (stepIndex > 0) {
      setStepIndex(prev => prev - 1);
    } else {
      // Always go back to the initial signs/selection screen
      setIsChild(null);
    }
  };

  const handleStable = () => {
    navigate('/');
  };

  const handleDanger = () => {
    window.location.href = 'tel:112';
  };

  return (
    <Layout showCallBar={true}>
      <div className="min-h-screen flex flex-col px-6 pt-8 pb-32">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <button 
            onClick={() => navigate(-1)}
            className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-400 hover:text-slate-600"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <div className="text-center">
            <h2 className="font-bold text-slate-900">{emergency.title}</h2>
            <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">
              {isSafetyCheck ? 'Final Check' : `Step ${stepIndex + 1} of ${steps.length}`}
            </p>
          </div>
          <div className="w-10" /> {/* Spacer */}
        </div>

        {/* Progress Bar */}
        <div className="h-2 bg-slate-200 rounded-full mb-8 overflow-hidden">
          <motion.div 
            className={`h-full ${isSafetyCheck ? 'bg-green-500' : 'bg-blue-500'} rounded-full`}
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Content Area */}
        <div className="flex-1 relative">
          <AnimatePresence mode="wait">
            {isSafetyCheck ? (
              <motion.div
                key="safety-check"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className="h-full"
              >
                <FinalSafetyCheck 
                  emergencyId={emergency.id}
                  onStable={handleStable}
                  onDanger={handleDanger}
                />
              </motion.div>
            ) : (
              <motion.div
                key={stepIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className="h-full"
              >
                <StepCard 
                  step={currentStep} 
                  isNoKitMode={isNoKitMode}
                  onToggleNoKit={() => setIsNoKitMode(!isNoKitMode)}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Navigation Buttons - Only show if NOT in safety check mode */}
        {!isSafetyCheck && (
          <div className="mt-8 grid grid-cols-2 gap-4">
            <Button 
              onClick={handlePrev}
              className="bg-slate-200 text-slate-700 hover:bg-slate-300 h-14 rounded-2xl text-lg"
            >
              Previous
            </Button>
            <Button 
              onClick={handleNext}
              className="bg-blue-600 hover:bg-blue-700 h-14 rounded-2xl text-lg shadow-lg shadow-blue-600/20"
            >
              {stepIndex === steps.length - 1 ? 'Finish' : 'Next Step'}
            </Button>
          </div>
        )}
        
        {/* Back button for safety check mode */}
        {isSafetyCheck && (
          <div className="mt-4">
            <Button 
              onClick={handlePrev}
              className="w-full bg-slate-100 text-slate-600 hover:bg-slate-200 h-12 rounded-xl"
            >
              Back to Steps
            </Button>
          </div>
        )}
      </div>
    </Layout>
  );
}
