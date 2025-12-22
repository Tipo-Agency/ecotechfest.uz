
import React, { useContext } from 'react';
import { Home, Building2, Zap } from 'lucide-react';
import { AppContext } from '../App';

export const Nominations: React.FC = () => {
  const ctx = useContext(AppContext);
  if (!ctx) return null;
  const { t } = ctx;

  const items = [
    {
      icon: <Home className="w-8 h-8 text-primary" />,
      title: t('nominations.n1'),
      desc: t('nominations.n1_desc'),
      criteria: [t('nominations.c_autonomy'), t('nominations.c_energy'), t('nominations.c_originality'), t('nominations.c_visual')],
      color: "from-green-500/10 to-transparent"
    },
    {
      icon: <Building2 className="w-8 h-8 text-primary" />,
      title: t('nominations.n2'),
      desc: t('nominations.n2_desc'),
      criteria: [t('nominations.c_concept'), t('nominations.c_ecology'), t('nominations.c_transport'), t('nominations.c_innovation')],
      color: "from-primary/20 to-transparent"
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: t('nominations.n3'),
      desc: t('nominations.n3_desc'),
      criteria: [t('nominations.c_practice'), t('nominations.c_novelty'), t('nominations.c_benefit'), t('nominations.c_tech')],
      color: "from-emerald-500/10 to-transparent"
    }
  ];

  return (
    <section id="nominations" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-primary font-black tracking-widest uppercase text-xs mb-4">{t('nominations.label')}</h2>
          <h3 className="text-4xl md:text-5xl font-black text-current">{t('nominations.title')}</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <div 
              key={i}
              className={`relative group p-8 rounded-[2.5rem] glass hover:border-primary/50 transition-all duration-500 overflow-hidden bg-gradient-to-b ${item.color} shadow-2xl`}
            >
              <div className="relative z-10">
                <div className="bg-white/10 dark:bg-dark/50 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 border border-current/5 shadow-xl group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h4 className="text-2xl font-black mb-4 leading-tight">{item.title}</h4>
                <p className="text-gray-500 dark:text-gray-400 mb-8 leading-relaxed font-medium">
                  {item.desc}
                </p>
                
                <div className="space-y-3">
                  <span className="text-[10px] font-black text-primary uppercase tracking-widest block mb-2">{t('nominations.criteria')}:</span>
                  <div className="flex flex-wrap gap-2">
                    {item.criteria.map((c, ci) => (
                      <span key={ci} className="text-[10px] font-bold bg-black/5 dark:bg-white/5 px-3 py-1 rounded-full whitespace-nowrap">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
