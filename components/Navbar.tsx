
import React, { useContext, useState, useRef, useEffect } from 'react';
import { AppContext } from '../App';
import { Logo } from './Logo';
import { Moon, Sun, Globe, Menu, X, ArrowRight } from 'lucide-react';

export const Navbar: React.FC<{ activeSection: string }> = ({ activeSection }) => {
  const ctx = useContext(AppContext);
  const [isLangExpanded, setIsLangExpanded] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  if (!ctx) return null;
  const { lang, setLang, theme, toggleTheme, t } = ctx;

  const navLinks = [
    { id: 'home', key: 'home' },
    { id: 'nominations', key: 'nominations' },
    { id: 'stages', key: 'stages' },
    { id: 'prizes', key: 'prizes' },
    { id: 'apply', key: 'apply' },
  ];

  const languages = [
    { code: 'ru', label: 'RU' },
    { code: 'uz', label: 'UZ' },
    { code: 'en', label: 'EN' },
  ];

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setIsLangExpanded(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-[1000] p-4 lg:p-6 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex justify-between items-center glass rounded-3xl px-4 py-2.5 lg:px-8 lg:py-4 shadow-2xl border border-current/10 relative z-[1001] transition-all">
          {/* Logo - slightly smaller on mobile to preserve space */}
          <a href="#home" className="flex items-center gap-2 group shrink-0 scale-90 sm:scale-100 origin-left">
            <Logo className="group-hover:scale-105 transition-transform" />
          </a>
          
          {/* Desktop Nav - Always hidden on mobile/tablet */}
          <div className="hidden lg:flex gap-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`text-[10px] font-black uppercase tracking-[0.2em] transition-all hover:-translate-y-0.5 ${
                  activeSection === link.id ? 'text-primary' : 'text-gray-400 hover:text-primary'
                }`}
              >
                {t(`nav.${link.key}`)}
              </a>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2 lg:gap-3 shrink-0">
            
            {/* Language Selector: DESKTOP ONLY to prevent header jumping */}
            <div className="hidden lg:flex relative items-center h-11" ref={langRef}>
              <div className={`flex items-center glass rounded-2xl transition-all duration-300 border border-current/5 shadow-lg overflow-hidden h-full ${isLangExpanded ? 'pr-1.5' : 'pr-0'}`}>
                <button 
                  onClick={() => setIsLangExpanded(!isLangExpanded)}
                  className={`w-11 h-11 flex items-center justify-center rounded-2xl transition-all ${isLangExpanded ? 'text-primary' : 'text-gray-400 hover:text-primary'}`}
                >
                  <Globe className="w-5 h-5" />
                </button>
                
                {isLangExpanded && (
                  <div className="flex items-center gap-1 animate-slide-right">
                    {languages.map((l) => (
                      <button
                        key={l.code}
                        onClick={() => {
                          setLang(l.code as any);
                          setIsLangExpanded(false);
                        }}
                        className={`w-10 h-8 flex items-center justify-center rounded-xl text-[10px] font-black transition-all ${
                          lang === l.code ? 'text-primary bg-primary/10' : 'text-gray-400 hover:bg-current/5'
                        }`}
                      >
                        {l.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Theme Toggle - Visible on all devices */}
            <button 
              onClick={toggleTheme}
              className="w-10 h-10 lg:w-11 lg:h-11 flex items-center justify-center rounded-2xl glass hover:text-primary transition-all border border-current/5 shadow-lg active:scale-95"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 lg:w-5 lg:h-5" /> : <Moon className="w-4 h-4 lg:w-5 lg:h-5" />}
            </button>

            {/* Apply Button: Desktop only */}
            <a
              href="#apply"
              className="hidden lg:flex items-center justify-center bg-primary hover:bg-green-700 text-white px-8 h-11 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-primary/20 border-t border-white/20"
            >
              {t('nav.btn')}
            </a>

            {/* Mobile Toggle Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-2xl glass hover:text-primary transition-all border border-current/5 active:scale-95 shadow-lg relative z-[1002]"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Full-screen Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[999] lg:hidden transition-all duration-500 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-white/90 dark:bg-black/90 backdrop-blur-2xl"></div>
        
        <div className="relative h-full flex flex-col items-center justify-center p-8">
          <div className={`flex flex-col items-center gap-8 transition-all duration-500 transform ${isMobileMenuOpen ? 'translate-y-0 scale-100' : 'translate-y-10 scale-95'}`}>
            {/* Nav Links */}
            <div className="flex flex-col items-center gap-6">
              {navLinks.map((link, idx) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{ transitionDelay: `${idx * 50}ms` }}
                  className={`text-xl font-black uppercase tracking-[0.25em] transition-all hover:text-primary ${
                    activeSection === link.id ? 'text-primary' : 'text-gray-500 dark:text-gray-400'
                  }`}
                >
                  {t(`nav.${link.key}`)}
                </a>
              ))}
            </div>
            
            <div className="w-16 h-px bg-current/10 my-4"></div>

            {/* Language Selector in Menu - Mobile & Tablet UX focus */}
            <div className="flex flex-col items-center gap-4">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">{t('nav.lang_select') || 'Language'}</span>
              <div className="flex gap-3">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => {
                      setLang(l.code as any);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`w-14 h-12 flex items-center justify-center rounded-2xl font-black text-xs transition-all shadow-lg ${
                      lang === l.code 
                        ? 'bg-primary text-white shadow-primary/25 scale-110' 
                        : 'glass border border-current/10 text-gray-400 hover:text-primary'
                    }`}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            </div>

            <a
              href="#apply"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-6 flex items-center gap-4 bg-primary text-white px-10 py-5 rounded-[2rem] text-xs font-black uppercase tracking-[0.2em] shadow-2xl shadow-primary/30 border-t border-white/20 active:scale-95 transition-all"
            >
              {t('nav.btn')}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
