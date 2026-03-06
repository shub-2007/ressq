import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { X, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTriage } from '@/hooks/useTriage';
import { keyMap } from '@/constants';

interface TriageModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function TriageModal({ isOpen, onClose }: TriageModalProps) {
  const navigate = useNavigate();
  const { triageFlow, loading, error } = useTriage();
  const [currentNodeId, setCurrentNodeId] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen && triageFlow) {
      setCurrentNodeId(triageFlow.startNode);
    }
  }, [isOpen, triageFlow]);

  const handleAnswer = (answer: boolean | string) => {
    if (!triageFlow || !currentNodeId) return;

    const currentNode = triageFlow.nodes[currentNodeId];
    let nextNodeId: string | undefined;

    if (currentNode.type === 'yesno' && typeof answer === 'boolean') {
      nextNodeId = answer ? currentNode.yes : currentNode.no;
    } else if (currentNode.type === 'options' && typeof answer === 'string') {
      nextNodeId = currentNode.options?.[answer];
    }

    if (nextNodeId) {
      if (triageFlow.nodes[nextNodeId]) {
        setCurrentNodeId(nextNodeId);
      } else {
        // It's a result (protocol key)
        const guideId = keyMap[nextNodeId];
        if (guideId) {
          navigate(`/guide/${guideId}`);
        } else {
          console.warn(`No guide found for key: ${nextNodeId}`);
          // Fallback or error handling
        }
        onClose();
      }
    }
  };

  if (!isOpen) return null;

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

            {loading ? (
              <div className="flex justify-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
              </div>
            ) : error ? (
              <div className="text-center text-red-500 py-8">
                {error}
              </div>
            ) : currentNodeId && triageFlow ? (
              <div className="flex flex-col items-center text-center gap-6 py-4">
                <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center">
                  <AlertCircle className="w-8 h-8" />
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900">
                  {triageFlow.nodes[currentNodeId].question}
                </h3>

                {triageFlow.nodes[currentNodeId].type === 'yesno' ? (
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
                ) : (
                  <div className="grid grid-cols-2 gap-3 w-full">
                    {Object.entries(triageFlow.nodes[currentNodeId].options || {}).map(([key, value]) => (
                      <Button
                        key={key}
                        onClick={() => handleAnswer(key)}
                        className="bg-slate-100 text-slate-700 hover:bg-slate-200 h-auto py-3 text-sm capitalize"
                      >
                        {key}
                      </Button>
                    ))}
                  </div>
                )}
              </div>
            ) : null}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
