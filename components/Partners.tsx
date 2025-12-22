
import React, { useContext } from 'react';
import { AppContext } from '../App';
import { ExternalLink, ShieldCheck, Zap, Users } from 'lucide-react';

export const Partners: React.FC = () => {
  const ctx = useContext(AppContext);
  if (!ctx) return null;
  const { t } = ctx;

  const partners = [
    { name: 'TTPU', link: 'https://polito.uz/ru/ru-2/', role: t('partners.support'), icon: <ShieldCheck className="w-5 h-5" /> },
    { name: 'SEDA', link: 'https://seda.uz/', role: t('partners.support'), icon: <Users className="w-5 h-5" /> }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-transparent to-current/[0.02]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="glass p-8 md:p-12 rounded-[3rem] border-primary/20 bg-primary/5 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
              <Zap className="w-24 h-24 text-primary" />
            </div>
            <div className="relative z-10">
              <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-4 block">{t('partners.organizer')}</span>
              <h3 className="text-2xl md:text-3xl font-black mb-6 text-current">{t('partners.tsa_title')}</h3>
              <p className="text-gray-500 dark:text-gray-400 font-medium leading-relaxed mb-8">
                {t('partners.tsa_desc')}
              </p>
              <a 
                href="https://turinstartup.uz/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-primary font-black text-xs uppercase tracking-widest hover:gap-5 transition-all"
              >
                Website <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {partners.map((p, i) => (
              <a 
                key={i}
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="glass p-8 rounded-[2.5rem] border-current/5 hover:border-primary/30 transition-all group flex flex-col justify-between"
              >
                <div className="w-12 h-12 rounded-2xl bg-current/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {p.icon}
                </div>
                <div>
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2 block">{p.role}</span>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-black text-current">{p.name}</span>
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
