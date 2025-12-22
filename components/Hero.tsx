
import React, { useContext } from 'react';
import { AppContext } from '../App';
import { Lightbulb, Cpu, Globe2, Sparkles, ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const ctx = useContext(AppContext);
  if (!ctx) return null;
  const { t } = ctx;

  const steps = [
    // Items pulled closer to center
    { icon: <Lightbulb className="w-6 h-6" />, label: t('hero.step1'), desc: t('hero.step1_sub'), pos: "top-[15%] left-1/2 -translate-x-1/2" },
    { icon: <Cpu className="w-6 h-6" />, label: t('hero.step2'), desc: t('hero.step2_sub'), pos: "bottom-[20%] left-[15%]" },
    { icon: <Globe2 className="w-6 h-6" />, label: t('hero.step3'), desc: t('hero.step3_sub'), pos: "bottom-[20%] right-[15%]" }
  ];

  return (
    <section id="home" className="relative min-h-[85vh] flex flex-col justify-center pt-36 md:pt-48 lg:pt-24 pb-12 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[140px] pointer-events-none opacity-60"></div>
      <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[140px] pointer-events-none opacity-40"></div>
      
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        {/* Main Grid: items-center ensures vertical alignment of both containers */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Container: Badge + Title + Desc + Buttons */}
          <div className="lg:col-span-7 flex flex-col items-start animate-fade-in">
            {/* Tag / Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-primary text-[9px] font-black uppercase tracking-[0.3em] mb-6 border border-primary/20 shadow-xl">
              <Sparkles className="w-3 h-3 animate-pulse" />
              {t('hero.badge')}
            </div>
            
            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-6 leading-[1.1] md:leading-[0.95] uppercase">
              <span className="block text-current mb-3">{t('hero.title1')}</span>
              <span className="block gradient-text">{t('hero.title2')}</span>
            </h1>
            
            {/* Description */}
            <p className="max-w-xl text-gray-500 dark:text-gray-400 text-base md:text-lg leading-relaxed font-medium mb-10">
              {t('hero.desc')}
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <a 
                href="#apply"
                className="w-full sm:w-auto px-10 py-4 bg-primary hover:bg-green-700 text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] transition-all shadow-xl shadow-primary/25 hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-3 border-t border-white/20"
              >
                {t('hero.cta1')}
                <ArrowRight className="w-4 h-4" />
              </a>
              
              <a 
                href="#nominations"
                className="w-full sm:w-auto px-10 py-4 glass hover:bg-black/5 dark:hover:bg-white/10 rounded-2xl font-black text-xs uppercase tracking-[0.2em] transition-all hover:-translate-y-1 active:scale-95 border border-current/10 flex items-center justify-center"
              >
                {t('hero.cta2')}
              </a>
            </div>
          </div>

          {/* Right Container: Compact Infographic */}
          <div className="lg:col-span-5 relative h-[380px] md:h-[420px] lg:h-[450px] flex items-center justify-center mt-8 lg:mt-0">
            <div className="relative w-full h-full max-w-[400px]">
              {/* Orbits */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse-soft"></div>
                <div className="absolute inset-0 border border-primary/10 rounded-full animate-orbit"></div>
                <div className="absolute inset-6 border border-primary/5 rounded-full animate-orbit [animation-direction:reverse]"></div>
              </div>
              
              {/* Floating Cards */}
              {steps.map((step, idx) => (
                <div key={idx} className={`absolute ${step.pos} group z-20 transition-all duration-700`}>
                  <div className="relative flex flex-col items-center animate-float-slow" style={{ animationDelay: `${idx * 1.5}s` }}>
                    <div className="w-22 h-22 sm:w-24 sm:h-24 rounded-[2rem] glass bg-gradient-to-br from-white/10 to-transparent dark:from-white/5 border border-current/10 flex flex-col items-center justify-center shadow-xl transition-all group-hover:scale-110 group-hover:border-primary/50 group-hover:-translate-y-2">
                      <div className="text-primary mb-1 group-hover:scale-110 transition-transform duration-500">
                        {step.icon}
                      </div>
                      <div className="text-[9px] font-black uppercase tracking-widest text-current">{step.label}</div>
                      
                      {/* Compact Tooltip */}
                      <div className="absolute -bottom-10 w-32 glass rounded-lg p-2 border border-primary/20 opacity-0 group-hover:opacity-100 transition-all text-[8px] font-bold text-gray-500 dark:text-gray-400 text-center leading-tight uppercase tracking-widest shadow-lg pointer-events-none">
                        {step.desc}
                      </div>
                    </div>
                    
                    <div className="absolute -top-2 -right-2 w-7 h-7 rounded-lg glass border border-primary/30 flex items-center justify-center text-[9px] font-black text-primary shadow-md group-hover:bg-primary group-hover:text-white transition-all">
                      0{idx + 1}
                    </div>
                  </div>
                </div>
              ))}

              {/* Core System */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 glass rounded-full flex items-center justify-center border border-primary/30 shadow-[0_0_40px_rgba(5,102,53,0.3)] z-30">
                <div className="w-12 h-12 bg-primary/20 rounded-full animate-ping absolute opacity-30"></div>
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/40">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
