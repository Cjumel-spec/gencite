import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { Shield, Database, Lock, UserCheck, Clock, Mail } from 'lucide-react';

const sections = [
  { icon: Database, color: '#3b82f6', titleFr: 'Donnees collectees', titleEn: 'Data Collected', contentFr: 'Nous collectons uniquement les donnees necessaires au bon fonctionnement des services municipaux: noms, adresses, coordonnees. Aucune donnee n\'est vendue a des tiers.', contentEn: 'We only collect data necessary for municipal services: names, addresses, contact details. No data is sold to third parties.' },
  { icon: Lock, color: '#22c55e', titleFr: 'Securite des donnees', titleEn: 'Data Security', contentFr: 'Vos donnees sont chiffrees en transit (TLS 1.3) et au repos. Nos serveurs sont heberges en Suisse, conformement a la LPD.', contentEn: 'Your data is encrypted in transit (TLS 1.3) and at rest. Our servers are hosted in Switzerland, in compliance with the FADP.' },
  { icon: UserCheck, color: '#a855f7', titleFr: 'Vos droits', titleEn: 'Your Rights', contentFr: 'Vous avez le droit d\'acceder, de rectifier et de supprimer vos donnees personnelles. Contactez notre DPO a dpo@gencite.ch.', contentEn: 'You have the right to access, rectify and delete your personal data. Contact our DPO at dpo@gencite.ch.' },
  { icon: Clock, color: '#f59e0b', titleFr: 'Conservation', titleEn: 'Retention', contentFr: 'Les donnees sont conservees pour la duree necessaire aux finalites pour lesquelles elles ont ete collectees, puis supprimees de maniere securisee.', contentEn: 'Data is retained for the duration necessary for the purposes for which it was collected, then securely deleted.' },
];

export default function Privacy() {
  const { i18n } = useTranslation();
  const lang = i18n.language as 'fr' | 'en';

  return (
    <main id="main-content" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-civic-50">
          <Shield className="h-6 w-6 text-civic-500" />
        </div>
        <h1 className="mb-2 text-3xl font-bold text-heading">
          {lang === 'fr' ? 'Politique de confidentialite' : 'Privacy Policy'}
        </h1>
        <p className="text-body">
          {lang === 'fr' ? 'Derniere mise a jour: avril 2026' : 'Last updated: April 2026'}
        </p>
      </motion.div>

      <div className="mb-10 rounded-2xl border border-emerald-200 bg-emerald-50 p-6 sm:p-8">
        <p className="text-sm leading-relaxed text-emerald-800">
          {lang === 'fr'
            ? 'GenCite respecte votre vie privee et s\'engage a proteger vos donnees personnelles conformement a la Loi federale sur la protection des donnees (LPD) et au Reglement general sur la protection des donnees (RGPD).'
            : 'GenCite respects your privacy and is committed to protecting your personal data in accordance with the Swiss Federal Act on Data Protection (FADP) and the General Data Protection Regulation (GDPR).'}
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {sections.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
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

      <div className="mt-8 rounded-xl border border-default bg-card p-6 shadow-card">
        <div className="flex items-center gap-3">
          <Mail className="h-5 w-5 text-civic-500" />
          <div>
            <h2 className="text-sm font-semibold text-heading">{lang === 'fr' ? 'Contact DPO' : 'DPO Contact'}</h2>
            <p className="text-sm text-body">dpo@gencite.ch | +41 22 123 45 99</p>
          </div>
        </div>
      </div>
    </main>
  );
}
