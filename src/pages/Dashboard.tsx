import { useState, useEffect } from 'react';
import { Search, User, Stethoscope } from 'lucide-react';
import { EmergencyGuide } from '@/types';
import { fetchEmergencies } from '@/services/emergencyService';
import { EmergencyCard } from '@/components/EmergencyCard';
import { Layout } from '@/components/layout/Layout';
import { TriageModal } from '@/components/TriageModal';
import { Button } from '@/components/ui/Button';

export function Dashboard() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isTriageOpen, setIsTriageOpen] = useState(false);
  const [emergencies, setEmergencies] = useState<EmergencyGuide[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadEmergencies = async () => {
      try {
        const data = await fetchEmergencies();
        setEmergencies(data);
      } catch (error) {
        console.error('Failed to load emergencies', error);
      } finally {
        setLoading(false);
      }
    };

    loadEmergencies();
  }, []);

  const filteredEmergencies = emergencies.filter(e => 
    e.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Layout>
      <div className="px-6 pt-12 pb-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">ResQBuddy 🚑</h1>
            <p className="text-slate-500 text-sm">Offline-first assistance</p>
          </div>
          <div className="w-10 h-10 bg-white rounded-full shadow-sm flex items-center justify-center">
            <User className="w-5 h-5 text-slate-400" />
          </div>
        </div>

        {/* Smart Triage Button */}
        <div className="mb-8">
          <Button 
            onClick={() => setIsTriageOpen(true)}
            className="w-full h-16 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-2xl shadow-lg shadow-blue-500/20 flex items-center justify-between px-6"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Stethoscope className="w-6 h-6" />
              </div>
              <div className="text-left">
                <span className="block font-bold text-lg">Smart Triage</span>
                <span className="text-xs opacity-90">Not sure what to do? Start here.</span>
              </div>
            </div>
          </Button>
        </div>

        {/* Search */}
        <div className="relative mb-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search emergency guide..." 
            className="w-full h-12 pl-12 pr-4 rounded-2xl bg-white shadow-sm border-none focus:ring-2 focus:ring-blue-100 outline-none text-slate-700 placeholder:text-slate-400"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-4 pb-24">
          {filteredEmergencies.map((emergency) => (
            <EmergencyCard key={emergency.id} emergency={emergency} />
          ))}
        </div>

        <TriageModal isOpen={isTriageOpen} onClose={() => setIsTriageOpen(false)} />
      </div>
    </Layout>
  );
}
