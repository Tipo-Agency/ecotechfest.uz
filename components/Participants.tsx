
import React, { useContext } from 'react';
import { AppContext } from '../App';
import { User, Users, GraduationCap } from 'lucide-react';

export const Participants: React.FC = () => {
  const ctx = useContext(AppContext);
  if (!ctx) return null;
  const { t } = ctx;

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="glass p-10 md:p-16 rounded-[4rem] border-current/5 shadow-2xl relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[100px] pointer-events-none"></div>
          
          <div className="relative z-10 text-center max-w-3xl mx-auto mb-16">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 mx-auto">
              <GraduationCap className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-3xl md:text-5xl font-black mb-6 text-current uppercase tracking-tighter">
              {t('participants.title')}
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-lg font-medium leading-relaxed">
              {t('participants.desc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
            <div className="glass p-8 rounded-[3rem] border-primary/10 hover:border-primary/40 transition-all group flex items-center gap-6">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                <User className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="text-[10px] font-black text-primary uppercase tracking-widest mb-1">{t('participants.format')}</div>
                <div className="text-xl font-black text-current">{t('participants.individual')}</div>
              </div>
            </div>

            <div className="glass p-8 rounded-[3rem] border-primary/10 hover:border-primary/40 transition-all group flex items-center gap-6">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="text-[10px] font-black text-primary uppercase tracking-widest mb-1">{t('participants.format')}</div>
                <div className="text-xl font-black text-current">{t('participants.team')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
