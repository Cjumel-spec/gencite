import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import {
  Building2, GraduationCap, Heart, Wrench, Music,
  Phone, Mail, Clock, ChevronDown, ChevronUp, Search,
} from 'lucide-react';
import { departments, faqs } from '@/data/contact';

const iconMap: Record<string, React.ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
  Building2, GraduationCap, Heart, Wrench, Music,
};

const deptNames: Record<string, { fr: string; en: string }> = {
  administration: { fr: 'Administration generale', en: 'General Administration' },
  education: { fr: 'Education et jeunesse', en: 'Education & Youth' },
  social: { fr: 'Affaires sociales', en: 'Social Services' },
  technical: { fr: 'Services techniques', en: 'Technical Services' },
  culture: { fr: 'Culture et loisirs', en: 'Culture & Leisure' },
};

const deptColors = ['#3b82f6', '#8b5cf6', '#22c55e', '#f59e0b', '#a855f7'];

export default function Contact() {
  const { t, i18n } = useTranslation();
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);
  const [faqSearch, setFaqSearch] = useState('');

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(faqSearch.toLowerCase()) ||
      faq.answer.toLowerCase().includes(faqSearch.toLowerCase())
  );

  return (
    <main id="main-content" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
        <h1 className="mb-2 text-3xl font-bold text-heading">{t('contact.title')}</h1>
        <p className="text-body">{t('contact.subtitle')}</p>
      </motion.div>

      <section className="mb-12">
        <h2 className="mb-6 text-xl font-semibold text-heading">{t('contact.departments')}</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {departments.map((dept, i) => {
            const Icon = iconMap[dept.icon] || Building2;
            const name = deptNames[dept.id]?.[i18n.language as 'fr' | 'en'] || dept.id;
            const color = deptColors[i % deptColors.length];
            return (
              <motion.div key={dept.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
                className="rounded-xl border border-default bg-card p-5 shadow-card transition-all hover-card">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg" style={{ backgroundColor: `${color}15` }}>
                    <Icon className="h-5 w-5" style={{ color }} />
                  </div>
                  <h3 className="text-sm font-semibold text-heading">{name}</h3>
                </div>
                <div className="space-y-2.5">
                  <a href={`tel:${dept.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 text-sm text-body no-underline hover:text-accent">
                    <Phone className="h-3.5 w-3.5 text-muted" /> {dept.phone}
                  </a>
                  <a href={`mailto:${dept.email}`} className="flex items-center gap-2 text-sm text-body no-underline hover:text-accent">
                    <Mail className="h-3.5 w-3.5 text-muted" /> {dept.email}
                  </a>
                  <div className="flex items-center gap-2 text-sm text-muted">
                    <Clock className="h-3.5 w-3.5" /> {dept.hours}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-xl font-semibold text-heading">{t('contact.faq')}</h2>
        <div className="relative mb-6">
          <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
          <input type="search" value={faqSearch} onChange={(e) => setFaqSearch(e.target.value)} placeholder={t('common.searchPlaceholder')}
            className="w-full rounded-xl border py-3 pl-11 pr-4 text-sm outline-none transition-colors focus:ring-2 focus:ring-civic-500/20 border-default bg-card text-heading"
            style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }} />
        </div>
        <div className="space-y-2">
          {filteredFaqs.map((faq, i) => {
            const isExpanded = expandedFaq === faq.id;
            return (
              <motion.div key={faq.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.03 }}
                className="rounded-xl border border-default bg-card shadow-card">
                <button onClick={() => setExpandedFaq(isExpanded ? null : faq.id)} className="flex w-full items-center justify-between px-5 py-4 text-left" aria-expanded={isExpanded}>
                  <span className="pr-4 text-sm font-medium text-heading">{faq.question}</span>
                  {isExpanded ? <ChevronUp className="h-4 w-4 shrink-0 text-muted" /> : <ChevronDown className="h-4 w-4 shrink-0 text-muted" />}
                </button>
                {isExpanded && (
                  <div className="border-t border-default px-5 pb-4 pt-3">
                    <p className="text-sm leading-relaxed text-body">{faq.answer}</p>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
