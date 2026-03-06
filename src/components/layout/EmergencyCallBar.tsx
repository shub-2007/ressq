import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function EmergencyCallBar() {
  const handleCall = () => {
    window.location.href = 'tel:112';
  };

  return (
    <div className="fixed bottom-20 left-4 right-4 z-50">
      <Button 
        onClick={handleCall}
        className="w-full h-14 bg-red-600 hover:bg-red-700 text-white rounded-2xl shadow-lg shadow-red-600/30 flex items-center justify-center gap-3 text-lg font-bold animate-pulse"
      >
        <Phone className="w-6 h-6 fill-current" />
        CALL 112
      </Button>
    </div>
  );
}
