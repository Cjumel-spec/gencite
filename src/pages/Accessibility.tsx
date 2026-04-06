import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { CheckCircle2, Eye, Keyboard, Monitor, Globe, Ear } from 'lucide-react';

const features = [
  { key: 'contrast', icon: Eye, color: '#3b82f6' },
  { key: 'keyboard', icon: Keyboard, color: '#22c55e' },
  { key: 'responsive', icon: Monitor, color: '#a855f7' },
  { key: 'multilingual', icon: Globe, color: '#f59e0b' },
  { key: 'screenReaders', icon: Ear, color: '#e63946' },
  { key: 'reducedMotion', icon: CheckCircle2, color: '#10b981' },
];

export default function Accessibility() {
  const { t } = useTranslation();

  return (
    <main id="main-content" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
        <h1 className="mb-2 text-3xl font-bold text-heading">
          {t('accessibility.title')}
        </h1>
        <p className="text-body">
          {t('accessibility.intro')}
        </p>
      </motion.div>

      <div className="mb-10 rounded-2xl border border-civic-200 bg-civic-50 p-6 sm:p-8">
        <h2 className="mb-2 text-lg font-semibold text-civic-800">
          {t('accessibility.commitmentTitle')}
        </h2>
        <p className="text-sm leading-relaxed text-civic-700">
          {t('accessibility.commitmentText')}
        </p>
      </div>

      <h2 className="mb-6 text-xl font-semibold text-heading">
        {t('accessibility.featuresTitle')}
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f, i) => {
          const Icon = f.icon;
          return (
            <motion.div key={f.key} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
              className="rounded-xl border border-default bg-card p-5 shadow-card">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg" style={{ backgroundColor: `${f.color}15` }}>
                <Icon className="h-5 w-5" style={{ color: f.color }} />
              </div>
              <h3 className="mb-1 text-sm font-semibold text-heading">{t(`accessibility.features.${f.key}.title`)}</h3>
              <p className="text-sm text-body">{t(`accessibility.features.${f.key}.description`)}</p>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-10 rounded-xl border border-default bg-card p-6 shadow-card">
        <h2 className="mb-2 text-lg font-semibold text-heading">
          {t('accessibility.reportTitle')}
        </h2>
        <p className="text-sm text-body">
          {t('accessibility.reportText')}
        </p>
      </div>
    </main>
  );
}
