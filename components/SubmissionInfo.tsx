
import React, { useContext } from 'react';
import { Mail, FileText, CheckCircle, Image as ImageIcon, UserCheck, FileJson } from 'lucide-react';
import { AppContext } from '../App';

export const SubmissionInfo: React.FC = () => {
  const ctx = useContext(AppContext);
  if (!ctx) return null;
  const { t } = ctx;

  const docs = [
    { icon: <FileText className="w-4 h-4" />, text: t('apply.docs.desc') },
    { icon: <ImageIcon className="w-4 h-4" />, text: t('apply.docs.visuals') },
    { icon: <UserCheck className="w-4 h-4" />, text: t('apply.docs.contacts') },
    { icon: <FileJson className="w-4 h-4" />, text: t('apply.docs.pdf') }
  ];

  const mailRecipient = "contest@seda.uz";
  const mailSubject = "ECOTECH 2026 Submission";
  const mailLink = `mailto:${mailRecipient}?subject=${encodeURIComponent(mailSubject)}`;

  return (
    <section id="apply" className="py-32 relative overflow-hidden bg-gradient-to-b from-transparent to-primary/5">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-primary font-black tracking-[0.4em] uppercase text-[10px] mb-6">{t('apply.label')}</h2>
          <h3 className="text-5xl md:text-7xl font-black text-current uppercase tracking-tighter leading-none mb-4">{t('apply.title')}</h3>
          <p className="text-gray-500 font-medium">{t('apply.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-24">
          <div className="group glass p-12 rounded-[3.5rem] shadow-xl hover:-translate-y-2 transition-all border-current/5 bg-gradient-to-br from-transparent to-primary/[0.03]">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
              <FileText className="w-8 h-8 text-primary" />
            </div>
            <h4 className="text-2xl font-black mb-8 uppercase tracking-tighter">{t('apply.step1')}</h4>
            <div className="space-y-6">
              {docs.map((doc, i) => (
                <div key={i} className="flex gap-5 items-start group/item">
                  <div className="mt-1 p-2 rounded-xl bg-primary/10 text-primary group-hover/item:bg-primary group-hover/item:text-white transition-all shadow-lg">
                    {doc.icon}
                  </div>
                  <span className="text-sm font-semibold text-gray-500 dark:text-gray-400 group-hover/item:text-current transition-colors leading-snug">{doc.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="group glass p-12 rounded-[3.5rem] shadow-2xl border-primary/30 bg-primary/10 relative overflow-hidden scale-105 z-20 ring-1 ring-primary/20">
            <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:scale-125 transition-transform">
              <Mail className="w-32 h-32 text-primary" />
            </div>
            <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center mb-10 shadow-xl shadow-primary/30">
              <Mail className="w-8 h-8" />
            </div>
            <h4 className="text-2xl font-black mb-8 uppercase tracking-tighter">{t('apply.step2')}</h4>
            <div className="bg-white/20 dark:bg-black/40 p-8 rounded-[2rem] border border-primary/20 mb-8 backdrop-blur-md shadow-inner">
              <code className="text-primary font-black block text-center text-xl tracking-wider select-all">{mailRecipient}</code>
            </div>
            <p className="text-[10px] font-black uppercase text-gray-400 mb-6 tracking-widest leading-relaxed">
              {t('apply.email_note')} <br/>
              <span className="text-primary mt-2 block">HOUSE / CITY / TECH</span>
            </p>
          </div>

          <div className="group glass p-12 rounded-[3.5rem] shadow-xl hover:-translate-y-2 transition-all border-current/5">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
              <CheckCircle className="w-8 h-8 text-primary" />
            </div>
            <h4 className="text-2xl font-black mb-8 uppercase tracking-tighter">{t('apply.step3')}</h4>
            <p className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-12 leading-relaxed">
              {t('apply.step3_desc')}
            </p>
            <div className="inline-flex items-center gap-5 bg-red-500/10 text-red-500 px-8 py-5 rounded-2xl border border-red-500/20 shadow-xl">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </span>
              <span className="text-[12px] font-black uppercase tracking-[0.1em]">{t('apply.deadline')}</span>
            </div>
          </div>
        </div>

        <div className="text-center relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/20 blur-[120px] -z-10"></div>
          <a 
            href={mailLink}
            className="inline-flex items-center gap-8 px-20 py-7 bg-primary text-white hover:bg-green-700 rounded-3xl font-black text-lg uppercase tracking-widest transition-all shadow-[0_25px_60px_rgba(5,102,53,0.4)] hover:-translate-y-2 active:scale-95 group border-t border-white/20"
          >
            <Mail className="w-7 h-7 group-hover:rotate-12 transition-transform" />
            {t('apply.btn')}
          </a>
          <p className="mt-8 text-[10px] font-bold text-gray-500 uppercase tracking-[0.3em] opacity-60">{t('apply.footer_note')}</p>
        </div>
      </div>
    </section>
  );
};
