import { Step } from '@/types';
import { cn } from '@/lib/utils';
import { AlertTriangle, PackageOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface StepCardProps {
  step: Step;
  isNoKitMode: boolean;
  onToggleNoKit: () => void;
}

export function StepCard({ step, isNoKitMode, onToggleNoKit }: StepCardProps) {
  return (
    <div className="bg-white rounded-[32px] overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-100 h-full flex flex-col">
      {/* Image Area */}
      <div className="relative h-64 bg-slate-50 flex items-center justify-center overflow-hidden">
        <img 
          src={step.image} 
          alt={step.title} 
          className="w-full h-full object-cover opacity-90"
        />
        {/* No Kit Toggle Overlay */}
        {step.noKitAlternative && (
          <button
            onClick={onToggleNoKit}
            className={cn(
              "absolute bottom-4 right-4 px-4 py-2 rounded-full text-xs font-bold shadow-lg transition-all flex items-center gap-2",
              isNoKitMode 
                ? "bg-orange-500 text-white hover:bg-orange-600" 
                : "bg-white text-slate-600 hover:bg-slate-50"
            )}
          >
            <PackageOpen className="w-4 h-4" />
            {isNoKitMode ? "No Kit Mode: ON" : "No Kit?"}
          </button>
        )}
      </div>

      {/* Content Area */}
      <div className="p-6 flex-1 flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-slate-900 leading-tight">
          {step.title}
        </h2>
        
        <p className="text-slate-600 text-lg leading-relaxed">
          {step.description}
        </p>

        {/* Warning Box */}
        {step.warning && (
          <div className="mt-auto bg-red-50 border border-red-100 rounded-2xl p-4 flex gap-3 items-start text-red-700 text-sm">
            <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" />
            <p>{step.warning}</p>
          </div>
        )}

        {/* No Kit Alternative Box */}
        <AnimatePresence>
          {isNoKitMode && step.noKitAlternative && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-orange-50 border border-orange-100 rounded-2xl p-4 flex gap-3 items-start text-orange-800 text-sm mt-2"
            >
              <PackageOpen className="w-5 h-5 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold block mb-1">No Medical Kit?</span>
                {step.noKitAlternative}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
