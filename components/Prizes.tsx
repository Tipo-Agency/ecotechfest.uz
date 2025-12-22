
import React, { useContext } from 'react';
import { Trophy, Smartphone, Star } from 'lucide-react';
import { AppContext } from '../App';

export const Prizes: React.FC = () => {
  const ctx = useContext(AppContext);
  if (!ctx) return null;
  const { t } = ctx;

  return (
    <section id="prizes" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="glass p-8 md:p-20 rounded-[3rem] md:rounded-[5rem] relative overflow-hidden shadow-2xl border-current/5 transition-all">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass mb-10 border border-primary/20 bg-primary/5">
                <Trophy className="w-5 h-5 text-yellow-500 fill-yellow-500/20" />
                <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">{t('prizes.label')}</span>
              </div>
              
              <h3 className="text-5xl md:text-8xl font-black mb-8 leading-[0.9] uppercase tracking-tighter text-current">
                {t('prizes.title')} <br />
                <span className="text-primary">{t('prizes.subtitle')}</span>
              </h3>
              
              <p className="text-gray-500 dark:text-gray-400 text-lg md:text-xl mb-12 max-w-xl font-medium leading-relaxed">
                {t('prizes.desc')}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="group glass p-6 rounded-3xl border border-current/5 hover:border-primary/30 transition-all">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Smartphone className="w-7 h-7 text-primary" />
                  </div>
                  <div className="text-sm font-black uppercase tracking-widest text-current mb-2">{t('prizes.feature1')}</div>
                  <div className="text-[10px] text-gray-500 font-black uppercase tracking-widest">Premium Device</div>
                </div>
                
                <div className="group glass p-6 rounded-3xl border border-current/5 hover:border-primary/30 transition-all">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Star className="w-7 h-7 text-primary" />
                  </div>
                  <div className="text-sm font-black uppercase tracking-widest text-current mb-2">{t('prizes.feature2')}</div>
                  <div className="text-[10px] text-gray-500 font-black uppercase tracking-widest">Realize Your Vision</div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-5 relative">
              <div className="relative z-10 animate-float">
                <div className="aspect-[4/5] rounded-[3rem] overflow-hidden border border-primary/20 shadow-2xl relative group bg-transparent">
                  <img 
                    src="https://i.postimg.cc/T2b7hqg5/ai-fon-fest.png" 
                    alt="iPhone Reward" 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 rounded-[3rem] pointer-events-none"></div>
                </div>
                
                <div className="absolute -bottom-6 -right-6 px-8 py-5 rounded-[2rem] shadow-2xl bg-primary text-white border-4 border-white dark:border-dark animate-pulse z-20">
                  <div className="text-3xl font-black leading-none">WIN</div>
                  <div className="text-[9px] font-black uppercase tracking-[0.2em] opacity-80 mt-1">ECOTECH 2026</div>
                </div>
              </div>

              <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/20 rounded-full blur-[80px] pointer-events-none"></div>
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-primary/20 rounded-full blur-[60px] pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};
