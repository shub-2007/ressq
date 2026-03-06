import * as React from 'react';
import { BottomNav } from './BottomNav';
import { EmergencyCallBar } from './EmergencyCallBar';

interface LayoutProps {
  children: React.ReactNode;
  showCallBar?: boolean;
}

export function Layout({ children, showCallBar = true }: LayoutProps) {
  return (
    <div className="min-h-screen bg-[#E6EEF3] font-sans text-slate-900 pb-36">
      <main className="max-w-md mx-auto min-h-screen bg-[#E6EEF3] relative overflow-hidden shadow-2xl">
        {children}
        {showCallBar && <EmergencyCallBar />}
        <BottomNav />
      </main>
    </div>
  );
}
