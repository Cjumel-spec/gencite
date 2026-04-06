import { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { Clock, MapPin, Calendar } from 'lucide-react';
import { events, news } from '@/data/events';
import type { EventCategory } from '@/lib/types';

const eventCategories: (EventCategory | 'all')[] = [
  'all', 'culture', 'sports', 'family', 'senior', 'community',
];

const categoryColors: Record<EventCategory, string> = {
  culture: '#a855f7',
  sports: '#3b82f6',
  family: '#22c55e',
  senior: '#f59e0b',
  community: '#e63946',
};

export default function Events() {
  const { t, i18n } = useTranslation();
  const [activeCategory, setActiveCategory] = useState<EventCategory | 'all'>('all');
  const dateLocale = i18n.language === 'fr' ? 'fr-CH' : 'en-CH';

  const filteredEvents = useMemo(() => {
    if (activeCategory === 'all') return events;
    return events.filter((e) => e.category === activeCategory);
  }, [activeCategory]);

  return (
    <main id="main-content" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
        <h1 className="mb-2 text-3xl font-bold text-heading">{t('events.title')}</h1>
        <p className="text-body">{t('events.subtitle')}</p>
      </motion.div>

      <section className="mb-14">
        <h2 className="mb-4 text-xl font-semibold text-heading">{t('events.upcoming')}</h2>
        <div className="mb-6 flex flex-wrap gap-2">
          {eventCategories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button key={cat} onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
                  isActive ? 'bg-civic-500 text-white shadow-sm' : 'border border-default bg-card text-body hover:border-hover'}`}>
                {t(`events.categories.${cat}`)}
              </button>
            );
          })}
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredEvents.map((event, i) => {
            const color = categoryColors[event.category];
            const date = new Date(event.date);
            return (
              <motion.article key={event.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
                className="group overflow-hidden rounded-xl border border-default bg-card shadow-card transition-all hover-card">
                <div className="h-1.5" style={{ backgroundColor: color }} />
                <div className="p-5">
                  <div className="mb-3 flex items-start gap-3">
                    <div className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-xl bg-tertiary">
                      <span className="text-xs font-semibold uppercase text-muted">{date.toLocaleDateString(dateLocale, { month: 'short' })}</span>
                      <span className="text-xl font-bold leading-tight text-heading">{date.getDate()}</span>
                    </div>
                    <div>
                      <span className="mb-1 inline-block rounded-full px-2 py-0.5 text-xs font-medium text-white" style={{ backgroundColor: color }}>
                        {t(`events.categories.${event.category}`)}
                      </span>
                      <h3 className="text-sm font-semibold text-heading">{t(`events.items.${event.id}.title`)}</h3>
                    </div>
                  </div>
                  <p className="mb-3 text-sm text-body">{t(`events.items.${event.id}.description`)}</p>
                  <div className="flex flex-wrap items-center gap-4 text-xs text-muted">
                    <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{event.time}</span>
                    <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" />{t(`events.items.${event.id}.location`)}</span>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-xl font-semibold text-heading">{t('events.news')}</h2>
        <div className="space-y-4">
          {news.map((article, i) => (
            <motion.article key={article.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 + i * 0.05 }}
              className="flex gap-4 rounded-xl border border-default bg-card p-5 shadow-card transition-all hover-card">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-light">
                <Calendar className="h-5 w-5 text-accent" />
              </div>
              <div>
                <div className="mb-1 flex items-center gap-3">
                  <span className="rounded-full bg-tertiary px-2.5 py-0.5 text-xs font-medium text-body">{t(`events.newsItems.${article.id}.category`)}</span>
                  <time className="text-xs text-muted">{new Date(article.date).toLocaleDateString(dateLocale)}</time>
                </div>
                <h3 className="mb-1 text-sm font-semibold text-heading">{t(`events.newsItems.${article.id}.title`)}</h3>
                <p className="text-sm text-body">{t(`events.newsItems.${article.id}.summary`)}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </main>
  );
}
