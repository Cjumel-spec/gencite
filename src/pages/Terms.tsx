import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { Scale, FileText, AlertCircle, Globe, Gavel } from 'lucide-react';

const termSections = [
  { key: 'portalUsage', icon: Globe, color: '#3b82f6' },
  { key: 'contentOwnership', icon: FileText, color: '#22c55e' },
  { key: 'liability', icon: AlertCircle, color: '#f59e0b' },
  { key: 'applicableLaw', icon: Gavel, color: '#a855f7' },
];

export default function Terms() {
  const { t } = useTranslation();

  return (
    <main id="main-content" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50">
          <Scale className="h-6 w-6 text-amber-600" />
        </div>
        <h1 className="mb-2 text-3xl font-bold text-heading">
          {t('terms.title')}
        </h1>
        <p className="text-body">
          {t('terms.lastUpdated')}
        </p>
      </motion.div>

      <div className="space-y-4">
        {termSections.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div key={s.key} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
              className="rounded-xl border border-default bg-card p-6 shadow-card">
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg" style={{ backgroundColor: `${s.color}15` }}>
                  <Icon className="h-5 w-5" style={{ color: s.color }} />
                </div>
                <h2 className="text-base font-semibold text-heading">{t(`terms.sections.${s.key}.title`)}</h2>
              </div>
              <p className="text-sm leading-relaxed text-body">{t(`terms.sections.${s.key}.content`)}</p>
            </motion.div>
          );
        })}
      </div>
    </main>
  );
}
