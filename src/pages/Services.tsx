import { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'motion/react';
import {
  Search, FileText, Building2, Car, GraduationCap, BookOpen, Palette,
  Heart, Users, Music, Home, Recycle, TreePine, Phone, Volume2,
  Clock, FileCheck, ExternalLink,
} from 'lucide-react';
import { services } from '@/data/services';
import type { ServiceCategory } from '@/lib/types';

const iconMap: Record<string, React.ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
  FileText, Building2, Car, GraduationCap, BookOpen, Palette,
  Heart, Users, Music, Home, Recycle, TreePine, Phone, Volume2,
};

const categories: (ServiceCategory | 'all')[] = [
  'all', 'administrative', 'education', 'social', 'culture', 'environment', 'safety',
];

const categoryColors: Record<ServiceCategory, string> = {
  administrative: '#3b82f6',
  education: '#8b5cf6',
  social: '#22c55e',
  culture: '#a855f7',
  environment: '#10b981',
  safety: '#e63946',
};

export default function Services() {
  const { t } = useTranslation();
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState<ServiceCategory | 'all'>('all');
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return services.filter((s) => {
      const matchesCategory = activeCategory === 'all' || s.category === activeCategory;
      const name = t(`services.categories.${s.category}`) + ' ' + s.id;
      const matchesSearch = name.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search, t]);

  const selected = selectedService ? services.find((s) => s.id === selectedService) : null;

  return (
    <main id="main-content" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
        <h1 className="mb-2 text-3xl font-bold text-heading">{t('services.title')}</h1>
        <p className="text-body">{t('services.subtitle')}</p>
      </motion.div>

      {/* Search */}
      <div className="relative mb-6">
        <Search className="absolute left-3.5 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-muted" />
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={t('common.searchPlaceholder')}
          className="w-full rounded-xl border border-default bg-card py-3 pl-11 pr-4 text-sm text-heading outline-none transition-colors focus:border-civic-500 focus:ring-2 focus:ring-civic-500/20"
          style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
        />
      </div>

      {/* Category Filter */}
      <div className="mb-8 flex flex-wrap gap-2" role="tablist">
        {categories.map((cat) => {
          const isActive = activeCategory === cat;
          const count = cat === 'all' ? services.length : services.filter((s) => s.category === cat).length;
          return (
            <button
              key={cat}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
                isActive
                  ? 'bg-civic-500 text-white shadow-sm'
                  : 'border border-default bg-card text-body hover:border-hover'
              }`}
            >
              {t(`services.categories.${cat}`)} ({count})
            </button>
          );
        })}
      </div>

      {/* Service Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((service) => {
            const Icon = iconMap[service.icon] || FileText;
            const color = categoryColors[service.category];
            const statusClass =
              service.status === 'online' ? 'bg-emerald-100 text-emerald-700'
              : service.status === 'inPerson' ? 'bg-amber-100 text-amber-700'
              : 'bg-blue-100 text-blue-700';
            return (
              <motion.button
                key={service.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                onClick={() => setSelectedService(service.id)}
                className="group flex items-start gap-4 rounded-xl border border-default bg-card p-5 text-left shadow-card transition-all hover-card"
              >
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg"
                  style={{ backgroundColor: `${color}15` }}
                >
                  <Icon className="h-5 w-5" style={{ color }} />
                </div>
                <div className="min-w-0">
                  <h3 className="mb-1 text-sm font-semibold text-heading">
                    {service.id.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${statusClass}`}>
                      {t(`services.status.${service.status}`)}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-muted">
                      <Clock className="h-3 w-3" /> {service.estimatedTime}
                    </span>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </AnimatePresence>
      </div>

      {filtered.length === 0 && (
        <p className="mt-8 text-center text-muted">{t('services.noResults')}</p>
      )}

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md rounded-2xl bg-card p-6 shadow-2xl"
            >
              {(() => {
                const Icon = iconMap[selected.icon] || FileText;
                const color = categoryColors[selected.category];
                const statusClass =
                  selected.status === 'online' ? 'bg-emerald-100 text-emerald-700'
                  : selected.status === 'inPerson' ? 'bg-amber-100 text-amber-700'
                  : 'bg-blue-100 text-blue-700';
                return (
                  <>
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl" style={{ backgroundColor: `${color}15` }}>
                        <Icon className="h-6 w-6" style={{ color }} />
                      </div>
                      <div>
                        <h2 className="text-lg font-bold text-heading">
                          {selected.id.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                        </h2>
                        <span className={`inline-block rounded-full px-2 py-0.5 text-xs font-medium ${statusClass}`}>
                          {t(`services.status.${selected.status}`)}
                        </span>
                      </div>
                    </div>
                    <div className="mb-4 flex items-center gap-2 text-sm text-body">
                      <Clock className="h-4 w-4" /> {t('services.estimatedTime')}: {selected.estimatedTime}
                    </div>
                    {selected.requiredDocs.length > 0 && (
                      <div className="mb-6">
                        <h3 className="mb-2 text-sm font-semibold text-heading">{t('services.requiredDocs')}</h3>
                        <ul className="space-y-1.5">
                          {selected.requiredDocs.map((doc, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm text-body">
                              <FileCheck className="h-3.5 w-3.5 text-civic-500" /> {doc}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    <div className="flex gap-3">
                      {selected.status !== 'inPerson' && (
                        <button className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-civic-500 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-civic-600">
                          <ExternalLink className="h-4 w-4" /> {t('common.learnMore')}
                        </button>
                      )}
                      <button
                        onClick={() => setSelectedService(null)}
                        className="flex-1 rounded-xl border border-default px-4 py-2.5 text-sm font-medium text-body transition-colors hover:bg-tertiary"
                      >
                        {t('common.close')}
                      </button>
                    </div>
                  </>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
