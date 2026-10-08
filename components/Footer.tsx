import './tipa-credit.css';

import React, { useContext } from 'react';
import { Logo } from './Logo';
import { AppContext } from '../App';
import { Mail, Phone, Instagram, Send, MapPin, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  const ctx = useContext(AppContext);
  if (!ctx) return null;
  const { t } = ctx;

  const quickLinks = [
    { id: 'home', key: 'home' },
    { id: 'nominations', key: 'nominations' },
    { id: 'stages', key: 'stages' },
    { id: 'prizes', key: 'prizes' },
    { id: 'apply', key: 'apply' },
  ];

  return (
    <footer className="relative pt-32 pb-16 overflow-hidden border-t border-white/5 bg-gradient-to-b from-transparent to-primary/10">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          {/* Brand Column */}
          <div className="space-y-8">
            <Logo />
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed font-medium max-w-xs">
              {t('footer.desc')}
            </p>
            <div className="flex gap-5">
              <a href="https://instagram.com/turinstartupaccelerator" target="_blank" rel="noopener" className="p-3 rounded-2xl glass hover:text-primary transition-all hover:scale-110 shadow-xl border border-white/5">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://t.me/turinstartup" target="_blank" rel="noopener" className="p-3 rounded-2xl glass hover:text-primary transition-all hover:scale-110 shadow-xl border border-white/5">
                <Send className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-10">{t('footer.nav_label')}</h4>
            <ul className="space-y-5">
              {quickLinks.map(link => (
                <li key={link.id}>
                  <a href={`#${link.id}`} className="text-xs font-black text-gray-500 dark:text-gray-400 hover:text-primary transition-all flex items-center gap-4 group uppercase tracking-widest">
                    <span className="w-2 h-2 rounded-full border border-primary/30 group-hover:bg-primary transition-all shadow-lg"></span>
                    {t(`nav.${link.key}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-10">{t('footer.contact_label')}</h4>
            <ul className="space-y-6">
              <li className="flex items-center gap-4 text-xs font-black text-gray-500 dark:text-gray-400 group uppercase tracking-widest">
                <div className="p-3 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-lg">
                  <Mail className="w-4 h-4" />
                </div>
                <a href="mailto:ecotechfest@lovin.eco" className="hover:text-primary transition-colors">ecotechfest@lovin.eco</a>
              </li>
              <li className="flex items-center gap-4 text-xs font-black text-gray-500 dark:text-gray-400 group uppercase tracking-widest">
                <div className="p-3 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-lg">
                  <Phone className="w-4 h-4" />
                </div>
                <span>+998 (71) 246-70-82</span>
              </li>
              <li className="flex items-start gap-4 text-xs font-black text-gray-500 dark:text-gray-400 group uppercase tracking-widest leading-relaxed">
                <div className="p-3 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-lg shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>Tashkent, Kichik Halka Yo'li, 17</span>
              </li>
            </ul>
          </div>

          {/* Organizers */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-10">{t('footer.org_label')}</h4>
            <ul className="space-y-5">
              <li>
                <a href="https://turinstartup.uz" target="_blank" rel="noopener" className="flex items-center justify-between p-5 rounded-2xl glass hover:border-primary/40 transition-all group shadow-xl">
                  <div className="flex flex-col">
                    <span className="text-[8px] font-black opacity-40 uppercase tracking-tighter">{t('footer.role_org')}</span>
                    <span className="text-[11px] font-black text-primary uppercase">TSA Accelerator</span>
                  </div>
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all text-primary" />
                </a>
              </li>
              <li>
                <a href="https://polito.uz" target="_blank" rel="noopener" className="flex items-center justify-between p-5 rounded-2xl glass hover:border-primary/40 transition-all group shadow-xl">
                  <div className="flex flex-col">
                    <span className="text-[8px] font-black opacity-40 uppercase tracking-tighter">{t('footer.role_uni')}</span>
                    <span className="text-[11px] font-black uppercase">TTPU polito.uz</span>
                  </div>
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Developer */}
        <div className="pt-12 border-t border-current/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[9px] font-black uppercase tracking-[0.4em] text-gray-400 dark:text-gray-500 text-center md:text-left">
            {t('footer.rights')}
          </p>
          
          <a className="tipa-credit" href="https://tipa.uz/ru" target="_blank" rel="nofollow noopener noreferrer" aria-label="Сайт разработан агентством TIPA">
              <span>Сделано</span>
              <img src="/media/tipa-agency-animated.svg" alt="TIPA" width={64} height={42} />
            </a>
        </div>
      </div>
    </footer>
  );
};
