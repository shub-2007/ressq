import React from 'react';
import { Link } from 'react-router-dom';
import { EmergencyGuide } from '@/types';
import { cn } from '@/lib/utils';

interface EmergencyCardProps {
  emergency: EmergencyGuide;
}

export const EmergencyCard: React.FC<EmergencyCardProps> = ({ emergency }) => {
  const Icon = emergency.icon;

  return (
    <Link 
      to={`/guide/${emergency.id}`}
      className="block group"
    >
      <div className={cn(
        "bg-white rounded-3xl p-6 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.05)] hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-transparent hover:border-blue-100 flex flex-col items-center gap-4 text-center h-full",
        emergency.color.replace('text-', 'hover:bg-opacity-10 ')
      )}>
        <div className={cn(
          "w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-2 transition-transform group-hover:scale-110",
          emergency.color
        )}>
          <Icon className="w-8 h-8" strokeWidth={1.5} />
        </div>
        <h3 className="font-bold text-slate-800 text-lg leading-tight">
          {emergency.title}
        </h3>
      </div>
    </Link>
  );
}
