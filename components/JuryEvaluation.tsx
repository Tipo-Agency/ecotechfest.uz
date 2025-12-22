
import React, { useContext } from 'react';
import { AppContext } from '../App';
import { Award, Gavel, CheckCircle2 } from 'lucide-react';

export const JuryEvaluation: React.FC = () => {
  const ctx = useContext(AppContext);
  if (!ctx) return null;
  const { t } = ctx;

  const criteria = [
    t('jury.crit1'),
    t('jury.crit2'),
    t('jury.crit3'),
    t('jury.crit4'),
    t('jury.crit5')
  ];

  const jury = [
    t('jury.member1'),
    t('jury.member2'),
    t('jury.member3')
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Jury Section */}
          <div className="space-y-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Gavel className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-3xl font-black text-current uppercase tracking-tighter">{t('jury.title')}</h3>
            </div>
            <div className="space-y-4">
              {jury.map((member, i) => (
                <div key={i} className="glass p-6 rounded-2xl border-current/5 flex items-center gap-4 hover:border-primary/20 transition-all">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="font-bold text-gray-500 dark:text-gray-400">{member}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Evaluation Section */}
          <div className="glass p-10 rounded-[3.5rem] border-primary/20 bg-primary/5 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 opacity-5">
              <Award className="w-64 h-64 text-primary" />
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-black text-current uppercase tracking-tighter mb-4">{t('jury.eval_title')}</h3>
              <p className="text-sm text-gray-500 font-medium mb-8 max-w-md">{t('jury.eval_desc')}</p>
              
              <div className="space-y-4">
                {criteria.map((crit, i) => (
                  <div key={i} className="flex items-center justify-between p-4 glass rounded-xl border-current/5 bg-white/10 dark:bg-black/10">
                    <span className="text-sm font-black text-current flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      {crit}
                    </span>
                    <span className="text-xs font-black text-primary">0-5 pts</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-10 p-4 rounded-2xl bg-primary text-white text-center font-black text-xs uppercase tracking-widest shadow-xl shadow-primary/20">
                Max Score: 25 Points
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
