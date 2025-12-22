
import React, { useState, useEffect, useMemo } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Nominations } from './components/Nominations';
import { Timeline } from './components/Timeline';
import { Prizes } from './components/Prizes';
import { SubmissionInfo } from './components/SubmissionInfo';
import { Footer } from './components/Footer';
import { Partners } from './components/Partners';
import { Participants } from './components/Participants';
import { JuryEvaluation } from './components/JuryEvaluation';
import { translations, Language } from './translations';

export const AppContext = React.createContext<{
  lang: Language;
  setLang: (l: Language) => void;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  t: (key: string) => any;
} | null>(null);

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('ru');
  
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const saved = localStorage.getItem('ecotech-theme') as 'light' | 'dark' | null;
    if (saved) return saved;
    // Default to light as per request
    return 'light';
  });

  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const html = document.documentElement;
    html.className = theme;
    localStorage.setItem('ecotech-theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');

  const t = (path: string) => {
    const keys = path.split('.');
    let result: any = translations[lang];
    if (!result) return path;
    
    for (const key of keys) {
      if (result && result[key] !== undefined) {
        result = result[key];
      } else {
        return path;
      }
    }
    return result;
  };

  const contextValue = useMemo(() => ({ lang, setLang, theme, toggleTheme, t }), [lang, theme]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'nominations', 'stages', 'prizes', 'apply'];
      const scrollPosition = window.scrollY + 100;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AppContext.Provider value={contextValue}>
      <div className={`min-h-screen font-sans selection:bg-primary selection:text-white transition-colors duration-300`}>
        <Navbar activeSection={activeSection} />
        {/* Wrap content with a key to trigger fade animation on language switch */}
        <div key={lang} className="animate-fade-in">
          <main>
            <Hero />
            <Partners />
            <Participants />
            <Nominations />
            <Timeline />
            <JuryEvaluation />
            <Prizes />
            <SubmissionInfo />
          </main>
          <Footer />
        </div>
      </div>
    </AppContext.Provider>
  );
};

export default App;
