import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { Shield, Database, Lock, UserCheck, Clock, Mail } from 'lucide-react';

const sections = [
  { key: 'dataCollected', icon: Database, color: '#3b82f6' },
  { key: 'dataSecurity', icon: Lock, color: '#22c55e' },
  { key: 'yourRights', icon: UserCheck, color: '#a855f7' },
  { key: 'retention', icon: Clock, color: '#f59e0b' },
];

export default function Privacy() {
  const { t } = useTranslation();

  return (
    <main id="main-content" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-civic-50">
          <Shield className="h-6 w-6 text-civic-500" />
        </div>
        <h1 className="mb-2 text-3xl font-bold text-heading">
          {t('privacy.title')}
        </h1>
        <p className="text-body">
          {t('privacy.lastUpdated')}
        </p>
      </motion.div>

      <div className="mb-10 rounded-2xl border border-emerald-200 bg-emerald-50 p-6 sm:p-8">
        <p className="text-sm leading-relaxed text-emerald-800">
          {t('privacy.intro')}
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {sections.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div key={s.key} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
              className="rounded-xl border border-default bg-card p-6 shadow-card">
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg" style={{ backgroundColor: `${s.color}15` }}>
                  <Icon className="h-5 w-5" style={{ color: s.color }} />
                </div>
                <h2 className="text-base font-semibold text-heading">{t(`privacy.sections.${s.key}.title`)}</h2>
              </div>
              <p className="text-sm leading-relaxed text-body">{t(`privacy.sections.${s.key}.content`)}</p>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-8 rounded-xl border border-default bg-card p-6 shadow-card">
        <div className="flex items-center gap-3">
          <Mail className="h-5 w-5 text-civic-500" />
          <div>
            <h2 className="text-sm font-semibold text-heading">{t('privacy.dpoContact')}</h2>
            <p className="text-sm text-body">dpo@gencite.ch | +41 22 123 45 99</p>
          </div>
        </div>
      </div>
    </main>
  );
}
