
import React from 'react';
import { Leaf } from 'lucide-react';

export const Logo: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div className={`flex items-center gap-2 select-none group ${className}`}>
    <div className="relative flex items-center justify-center">
      <div className="absolute inset-0 bg-primary/20 blur-lg rounded-full group-hover:bg-primary/30 transition-all"></div>
      <div className="relative w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20 rotate-3 group-hover:rotate-0 transition-transform duration-500">
        <Leaf className="w-6 h-6 text-white" />
      </div>
    </div>
    
    <div className="flex flex-col -space-y-1">
      <div className="flex items-baseline gap-1">
        <span className="text-xl font-black tracking-tighter text-current uppercase">ECO</span>
        <span className="text-xl font-black tracking-tighter text-primary uppercase">TECH</span>
      </div>
      <div className="flex items-center gap-1.5">
        <div className="h-[1px] w-4 bg-primary/30"></div>
        <span className="text-[9px] font-black text-gray-500 dark:text-gray-400 tracking-[0.3em] uppercase">FEST 2026</span>
      </div>
    </div>
  </div>
);
