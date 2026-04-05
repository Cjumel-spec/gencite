import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { Scale, FileText, AlertCircle, Globe, Gavel } from 'lucide-react';

const terms = [
  { icon: Globe, color: '#3b82f6', titleFr: 'Utilisation du portail', titleEn: 'Portal Usage', contentFr: 'Le portail GenCite est mis a disposition des citoyens et residents de la commune. L\'utilisation est gratuite et soumise aux presentes conditions. Tout usage abusif ou frauduleux est interdit.', contentEn: 'The GenCite portal is made available to citizens and residents of the commune. Usage is free and subject to these terms. Any abusive or fraudulent use is prohibited.' },
  { icon: FileText, color: '#22c55e', titleFr: 'Contenu et propriete', titleEn: 'Content & Ownership', contentFr: 'Le contenu de ce portail est la propriete de la commune de GenCite. La reproduction est autorisee a des fins non commerciales avec mention de la source.', contentEn: 'The content of this portal is the property of the commune of GenCite. Reproduction is authorized for non-commercial purposes with source attribution.' },
  { icon: AlertCircle, color: '#f59e0b', titleFr: 'Responsabilite', titleEn: 'Liability', contentFr: 'La commune s\'efforce de fournir des informations exactes et a jour. Toutefois, elle ne garantit pas l\'exhaustivite ou l\'exactitude des contenus. Les demarches officielles restent soumises a verification.', contentEn: 'The commune strives to provide accurate and up-to-date information. However, it does not guarantee completeness or accuracy. Official procedures remain subject to verification.' },
  { icon: Gavel, color: '#a855f7', titleFr: 'Droit applicable', titleEn: 'Applicable Law', contentFr: 'Les presentes conditions sont soumises au droit suisse. Le for juridique est le tribunal competent du canton dans lequel se situe la commune.', contentEn: 'These terms are governed by Swiss law. Jurisdiction lies with the competent court of the canton in which the commune is located.' },
];

export default function Terms() {
  const { i18n } = useTranslation();
  const lang = i18n.language as 'fr' | 'en';

  return (
    <main id="main-content" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50">
          <Scale className="h-6 w-6 text-amber-600" />
        </div>
        <h1 className="mb-2 text-3xl font-bold text-heading">
          {lang === 'fr' ? 'Conditions d\'utilisation' : 'Terms of Use'}
        </h1>
        <p className="text-body">
          {lang === 'fr' ? 'Derniere mise a jour: avril 2026' : 'Last updated: April 2026'}
        </p>
      </motion.div>

      <div className="space-y-4">
        {terms.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div key={i} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
              className="rounded-xl border border-default bg-card p-6 shadow-card">
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg" style={{ backgroundColor: `${s.color}15` }}>
                  <Icon className="h-5 w-5" style={{ color: s.color }} />
                </div>
                <h2 className="text-base font-semibold text-heading">{lang === 'fr' ? s.titleFr : s.titleEn}</h2>
              </div>
              <p className="text-sm leading-relaxed text-body">{lang === 'fr' ? s.contentFr : s.contentEn}</p>
            </motion.div>
          );
        })}
      </div>
    </main>
  );
}
