import { Home, BookOpen } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

export function BottomNav() {
  const location = useLocation();

  const navItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: BookOpen, label: 'Guides', path: '/guides' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-100 px-6 py-3 pb-6 z-50 flex items-center shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
      {navItems.map((item) => {
        const isActive = location.pathname === item.path;
        return (
          <Link 
            key={item.path} 
            to={item.path}
            className="flex flex-col items-center gap-1 flex-1"
          >
            <div className={cn(
              "p-2 rounded-full transition-colors",
              isActive ? "bg-blue-50 text-blue-600" : "text-slate-400"
            )}>
              <item.icon className={cn("w-6 h-6", isActive && "fill-current")} />
            </div>
            <span className={cn(
              "text-[10px] font-medium",
              isActive ? "text-blue-600" : "text-slate-400"
            )}>
              {item.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
