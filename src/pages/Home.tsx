import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  FileText,
  AlertTriangle,
  CreditCard,
  CalendarDays,
  MessageCircle,
  FolderOpen,
  ArrowRight,
  X,
  MapPin,
  Clock,
  ChevronRight,
} from 'lucide-react';
import { useState } from 'react';
import { news, events } from '@/data/events';

const quickAccessItems = [
  { key: 'register', icon: FileText, path: '/services', color: '#3b82f6' },
  { key: 'report', icon: AlertTriangle, path: '/report', color: '#e63946' },
  { key: 'pay', icon: CreditCard, path: '/services', color: '#22c55e' },
  { key: 'events', icon: CalendarDays, path: '/events', color: '#a855f7' },
  { key: 'contact', icon: MessageCircle, path: '/contact', color: '#f59e0b' },
  { key: 'documents', icon: FolderOpen, path: '/services', color: '#64748b' },
];

export default function Home() {
  const { t } = useTranslation();
  const [alertVisible, setAlertVisible] = useState(true);

  const upcomingEvents = events.slice(0, 3);
  const latestNews = news.slice(0, 3);

  return (
    <main id="main-content" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Alert Banner */}
      {alertVisible && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 flex items-center justify-between gap-4 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3"
          style={{ borderColor: 'rgb(253 230 138)', backgroundColor: 'rgb(255 251 235)' }}
        >
          <div className="flex items-center gap-3">
            <AlertTriangle className="h-5 w-5 shrink-0 text-amber-600" />
            <p className="text-sm font-medium text-amber-800">
              Collecte de dechets electroniques — Samedi 19 avril, 9h-16h, Parking Salle Communale
            </p>
          </div>
          <button
            onClick={() => setAlertVisible(false)}
            className="shrink-0 rounded-lg p-1 text-amber-600 transition-colors hover:bg-amber-100"
            aria-label={t('home.alert.dismiss')}
          >
            <X className="h-4 w-4" />
          </button>
        </motion.div>
      )}

      {/* Hero */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 rounded-2xl bg-tertiary px-6 py-16 text-center sm:px-12"
      >
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-heading sm:text-5xl lg:text-6xl">
          {t('home.hero.title')}
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-body leading-relaxed">
          {t('home.hero.subtitle')}
        </p>
        <Link
          to="/services"
          className="inline-flex items-center gap-2 rounded-xl bg-civic-500 px-7 py-3.5 text-sm font-semibold text-white no-underline shadow-lg transition-all hover:bg-civic-600 hover:shadow-xl active:scale-[0.98]"
        >
          {t('home.hero.cta')}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </motion.section>

      {/* Quick Access */}
      <section className="mb-14" aria-labelledby="quick-access-title">
        <h2 id="quick-access-title" className="mb-6 text-xl font-semibold text-heading">
          {t('home.quickAccess.title')}
        </h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {quickAccessItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  to={item.path}
                  className="group flex flex-col items-center gap-3 rounded-xl border border-default bg-card p-5 no-underline shadow-card transition-all hover-card"
                >
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-xl transition-transform group-hover:scale-110"
                    style={{ backgroundColor: `${item.color}15` }}
                  >
                    <Icon className="h-6 w-6" style={{ color: item.color }} />
                  </div>
                  <span className="text-center text-sm font-medium text-heading">
                    {t(`home.quickAccess.${item.key}`)}
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      <div className="grid gap-10 lg:grid-cols-5">
        {/* News */}
        <section className="lg:col-span-3" aria-labelledby="news-title">
          <div className="mb-6 flex items-center justify-between">
            <h2 id="news-title" className="text-xl font-semibold text-heading">
              {t('home.news.title')}
            </h2>
            <Link
              to="/events"
              className="flex items-center gap-1 text-sm font-medium text-accent no-underline hover:underline"
            >
              {t('common.viewAll')}
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="space-y-4">
            {latestNews.map((article, i) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + i * 0.05 }}
                className="rounded-xl border border-default bg-card p-5 shadow-card transition-all hover-card"
              >
                <div className="mb-2 flex items-center gap-3">
                  <span className="rounded-full bg-accent-light px-2.5 py-0.5 text-xs font-medium text-accent">
                    {article.category}
                  </span>
                  <time className="text-xs text-muted">
                    {new Date(article.date).toLocaleDateString('fr-CH')}
                  </time>
                </div>
                <h3 className="mb-1.5 text-base font-semibold text-heading">{article.title}</h3>
                <p className="text-sm leading-relaxed text-body">{article.summary}</p>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="lg:col-span-2" aria-labelledby="upcoming-title">
          <div className="mb-6 flex items-center justify-between">
            <h2 id="upcoming-title" className="text-xl font-semibold text-heading">
              {t('home.upcomingEvents.title')}
            </h2>
            <Link
              to="/events"
              className="flex items-center gap-1 text-sm font-medium text-accent no-underline hover:underline"
            >
              {t('common.viewAll')}
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="space-y-4">
            {upcomingEvents.map((event, i) => (
              <motion.article
                key={event.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 + i * 0.05 }}
                className="rounded-xl border border-default bg-card p-4 shadow-card transition-all hover-card"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-12 w-12 shrink-0 flex-col items-center justify-center rounded-lg bg-accent-light">
                    <span className="text-xs font-medium text-accent">
                      {new Date(event.date).toLocaleDateString('fr-CH', { month: 'short' }).toUpperCase()}
                    </span>
                    <span className="text-lg font-bold leading-tight text-accent">
                      {new Date(event.date).getDate()}
                    </span>
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm font-semibold text-heading">{event.title}</h3>
                    <div className="mt-1 flex flex-wrap items-center gap-3 text-xs text-muted">
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" /> {event.time}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" /> {event.location}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
