
import React, { useContext } from 'react';
import { AppContext } from '../App';
import { Calendar, CheckCircle2, Circle } from 'lucide-react';

export const Timeline: React.FC = () => {
  const ctx = useContext(AppContext);
  if (!ctx) return null;
  const { t } = ctx;

  const steps = [
    { key: 's1', date: 'DEC 2025', status: 'completed' },
    { key: 's2', date: 'DEC 2025 - FEB 2026', status: 'active' },
    { key: 's3', date: '21 - 25 FEB 2026', status: 'upcoming' },
    { key: 's4', date: '26 - 27 FEB 2026', status: 'upcoming' },
    { key: 's5', date: '28 FEB 2026', status: 'upcoming' }
  ];

  return (
    <section id="stages" className="py-32 relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl text-left">
            <h2 className="text-primary font-black tracking-[0.3em] uppercase text-[10px] mb-4 flex items-center gap-3">
              <span className="w-12 h-px bg-primary"></span>
              {t('timeline.label')}
            </h2>
            <h3 className="text-5xl md:text-7xl font-black text-current leading-none uppercase tracking-tighter">
              {t('timeline.title')}
            </h3>
          </div>
          <div className="hidden md:block">
            <div className="glass px-6 py-3 rounded-2xl flex items-center gap-4 border border-primary/20 shadow-xl">
              <div className="flex -space-x-2">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white dark:border-dark bg-primary flex items-center justify-center text-[10px] font-bold text-white shadow-lg shadow-primary/20">0{i}</div>
                ))}
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest opacity-60 text-current">{t('timeline.steps_count')}</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 relative">
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-primary/10 -translate-y-1/2 z-0"></div>

          {steps.map((step, i) => (
            <div 
              key={i} 
              className={`relative group z-10 ${i % 2 === 0 ? 'lg:-translate-y-8' : 'lg:translate-y-8'}`}
            >
              <div className={`h-full glass p-8 rounded-[2.5rem] border border-current/5 transition-all duration-500 hover:border-primary/40 hover:bg-primary/5 flex flex-col shadow-2xl relative overflow-hidden ${step.status === 'active' ? 'border-primary/30 ring-1 ring-primary/20 scale-[1.02] bg-white/20 dark:bg-white/5' : ''}`}>
                <div className="absolute top-4 right-6 text-7xl font-black text-black/[0.05] dark:text-white/[0.05] select-none transition-colors group-hover:text-primary/10 z-0">
                  0{i + 1}
                </div>
                <div className="relative z-10 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-10">
                    <div className={`p-3 rounded-xl shadow-inner ${step.status === 'active' ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-black/5 dark:bg-white/5 text-gray-400'} transition-colors`}>
                      <Calendar className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="text-[10px] font-black text-primary uppercase tracking-widest mb-2 block">
                    {step.date}
                  </div>
                  <h4 className="text-lg font-black text-current mb-4 leading-tight group-hover:text-primary transition-colors">
                    {t(`timeline.${step.key}`)}
                  </h4>
                  <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed font-medium mb-12">
                    {t(`timeline.${step.key}_desc`)}
                  </p>
                  <div className="absolute bottom-6 right-8">
                    {step.status === 'completed' ? (
                      <div className="bg-primary/10 p-2 rounded-full border border-primary/20 backdrop-blur-sm shadow-lg">
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                      </div>
                    ) : step.status === 'active' ? (
                      <div className="flex items-center gap-2 bg-primary/10 px-3 py-1.5 rounded-full border border-primary/30 backdrop-blur-sm shadow-lg shadow-primary/10">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        <span className="text-[8px] font-black text-primary uppercase tracking-widest">LIVE</span>
                      </div>
                    ) : (
                      <div className="bg-black/5 dark:bg-white/5 p-2 rounded-full border border-current/10 backdrop-blur-sm opacity-50">
                        <Circle className="w-5 h-5 text-gray-400" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
              {i < steps.length - 1 && (
                <div className="lg:hidden flex justify-center py-4">
                  <div className="w-px h-8 bg-gradient-to-b from-primary to-transparent"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
