import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { CheckCircle2, Eye, Keyboard, Monitor, Globe, Ear } from 'lucide-react';

const features = [
  { icon: Eye, color: '#3b82f6', titleFr: 'Contraste et lisibilite', titleEn: 'Contrast & Readability', descFr: 'Ratio de contraste minimum de 4.5:1 sur tous les textes. Mode sombre et clair disponibles.', descEn: 'Minimum 4.5:1 contrast ratio on all text. Dark and light modes available.' },
  { icon: Keyboard, color: '#22c55e', titleFr: 'Navigation au clavier', titleEn: 'Keyboard Navigation', descFr: 'Tous les elements interactifs sont accessibles au clavier avec des indicateurs de focus visibles.', descEn: 'All interactive elements are keyboard accessible with visible focus indicators.' },
  { icon: Monitor, color: '#a855f7', titleFr: 'Design responsive', titleEn: 'Responsive Design', descFr: 'Interface adaptee a tous les ecrans, du mobile au grand ecran. Zoom jusqu\'a 200% sans perte.', descEn: 'Interface adapted to all screens, from mobile to large displays. Zoom up to 200% without loss.' },
  { icon: Globe, color: '#f59e0b', titleFr: 'Multilingue', titleEn: 'Multilingual', descFr: 'Contenu disponible en francais et en anglais. Attribut lang mis a jour dynamiquement.', descEn: 'Content available in French and English. Lang attribute updated dynamically.' },
  { icon: Ear, color: '#e63946', titleFr: 'Lecteurs d\'ecran', titleEn: 'Screen Readers', descFr: 'HTML semantique, landmarks ARIA et attributs alt sur toutes les images.', descEn: 'Semantic HTML, ARIA landmarks and alt attributes on all images.' },
  { icon: CheckCircle2, color: '#10b981', titleFr: 'Mouvement reduit', titleEn: 'Reduced Motion', descFr: 'Respect de la preference prefers-reduced-motion. Animations desactivees automatiquement.', descEn: 'Respects prefers-reduced-motion preference. Animations automatically disabled.' },
];

export default function Accessibility() {
  const { i18n } = useTranslation();
  const lang = i18n.language as 'fr' | 'en';

  return (
    <main id="main-content" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
        <h1 className="mb-2 text-3xl font-bold text-heading">
          {lang === 'fr' ? 'Declaration d\'accessibilite' : 'Accessibility Statement'}
        </h1>
        <p className="text-body">
          {lang === 'fr'
            ? 'GenCite s\'engage a rendre ses services numeriques accessibles a tous les citoyens, conformement aux directives WCAG 2.1 niveau AA.'
            : 'GenCite is committed to making its digital services accessible to all citizens, in compliance with WCAG 2.1 Level AA guidelines.'}
        </p>
      </motion.div>

      <div className="mb-10 rounded-2xl border border-civic-200 bg-civic-50 p-6 sm:p-8">
        <h2 className="mb-2 text-lg font-semibold text-civic-800">
          {lang === 'fr' ? 'Notre engagement' : 'Our Commitment'}
        </h2>
        <p className="text-sm leading-relaxed text-civic-700">
          {lang === 'fr'
            ? 'En tant que portail de service public, nous croyons que l\'acces a l\'information et aux services municipaux est un droit fondamental. Nous travaillons continuellement a ameliorer l\'accessibilite de notre plateforme pour garantir que chaque citoyen, quelles que soient ses capacites, puisse utiliser nos services.'
            : 'As a public service portal, we believe that access to municipal information and services is a fundamental right. We continuously work to improve the accessibility of our platform to ensure every citizen, regardless of ability, can use our services.'}
        </p>
      </div>

      <h2 className="mb-6 text-xl font-semibold text-heading">
        {lang === 'fr' ? 'Fonctionnalites d\'accessibilite' : 'Accessibility Features'}
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f, i) => {
          const Icon = f.icon;
          return (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
              className="rounded-xl border border-default bg-card p-5 shadow-card">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg" style={{ backgroundColor: `${f.color}15` }}>
                <Icon className="h-5 w-5" style={{ color: f.color }} />
              </div>
              <h3 className="mb-1 text-sm font-semibold text-heading">{lang === 'fr' ? f.titleFr : f.titleEn}</h3>
              <p className="text-sm text-body">{lang === 'fr' ? f.descFr : f.descEn}</p>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-10 rounded-xl border border-default bg-card p-6 shadow-card">
        <h2 className="mb-2 text-lg font-semibold text-heading">
          {lang === 'fr' ? 'Signaler un probleme d\'accessibilite' : 'Report an Accessibility Issue'}
        </h2>
        <p className="text-sm text-body">
          {lang === 'fr'
            ? 'Si vous rencontrez un probleme d\'accessibilite sur notre plateforme, contactez-nous a accessibilite@gencite.ch. Nous nous engageons a repondre sous 5 jours ouvrables.'
            : 'If you encounter an accessibility issue on our platform, contact us at accessibilite@gencite.ch. We commit to responding within 5 business days.'}
        </p>
      </div>
    </main>
  );
}
