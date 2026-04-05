import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import {
  PieChart, Pie, Cell, ResponsiveContainer, Tooltip,
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend,
} from 'recharts';
import {
  Users, Wallet, TreePine, ThumbsUp,
  CheckCircle2, XCircle, Clock, ChevronDown, ChevronUp,
} from 'lucide-react';
import { budgetCurrent, budgetPrevious, councilDecisions, metrics } from '@/data/transparency';

const metricCards = [
  { key: 'population', icon: Users, value: metrics.population.toLocaleString('fr-CH'), color: '#3b82f6' },
  { key: 'budgetPerCapita', icon: Wallet, value: `${metrics.budgetPerCapita.toLocaleString('fr-CH')} CHF`, color: '#22c55e' },
  { key: 'greenSpace', icon: TreePine, value: `${metrics.greenSpacePerResident} m²`, color: '#10b981' },
  { key: 'satisfaction', icon: ThumbsUp, value: `${metrics.satisfactionRate}%`, color: '#a855f7' },
];

const resultIcons = { approved: CheckCircle2, rejected: XCircle, pending: Clock };
const resultStyles = {
  approved: 'text-emerald-600 bg-emerald-50',
  rejected: 'text-red-600 bg-red-50',
  pending: 'text-amber-600 bg-amber-50',
};

const comparisonData = budgetCurrent.map((item, i) => ({
  category: item.category,
  current: item.amount / 1_000_000,
  previous: budgetPrevious[i].amount / 1_000_000,
}));

const totalBudget = budgetCurrent.reduce((sum, item) => sum + item.amount, 0);

export default function Transparency() {
  const { t } = useTranslation();
  const [expandedDecision, setExpandedDecision] = useState<string | null>(null);

  return (
    <main id="main-content" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
        <h1 className="mb-2 text-3xl font-bold text-heading">{t('transparency.title')}</h1>
        <p className="text-body">{t('transparency.subtitle')}</p>
      </motion.div>

      {/* Key Metrics */}
      <section className="mb-10">
        <h2 className="mb-4 text-lg font-semibold text-heading">{t('transparency.metrics.title')}</h2>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {metricCards.map((metric, i) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={metric.key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="rounded-xl border border-default bg-card p-5 shadow-card"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg" style={{ backgroundColor: `${metric.color}15` }}>
                  <Icon className="h-5 w-5" style={{ color: metric.color }} />
                </div>
                <p className="text-2xl font-bold text-heading">{metric.value}</p>
                <p className="text-xs text-muted">{t(`transparency.metrics.${metric.key}`)}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      <div className="mb-10 grid gap-8 lg:grid-cols-2">
        {/* Budget Donut */}
        <motion.section
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="rounded-xl border border-default bg-card p-6 shadow-card"
        >
          <h2 className="mb-4 text-lg font-semibold text-heading">{t('transparency.budget.title')}</h2>
          <div className="flex flex-col items-center">
            <div className="h-64 w-full">
              <ResponsiveContainer>
                <PieChart>
                  <Pie data={budgetCurrent} dataKey="amount" nameKey="category" cx="50%" cy="50%" innerRadius={65} outerRadius={100} paddingAngle={3} strokeWidth={0}>
                    {budgetCurrent.map((entry) => (<Cell key={entry.category} fill={entry.color} />))}
                  </Pie>
                  <Tooltip formatter={(value) => [`${(Number(value) / 1_000_000).toFixed(1)}M CHF`, '']} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <p className="mt-2 text-sm text-muted">Total: {(totalBudget / 1_000_000).toFixed(1)}M CHF</p>
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              {budgetCurrent.map((item) => (
                <div key={item.category} className="flex items-center gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="text-xs text-body">{item.category}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Year Comparison */}
        <motion.section
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="rounded-xl border border-default bg-card p-6 shadow-card"
        >
          <h2 className="mb-4 text-lg font-semibold text-heading">{t('transparency.budget.comparison')}</h2>
          <div className="h-72">
            <ResponsiveContainer>
              <BarChart data={comparisonData} barGap={4}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
                <XAxis dataKey="category" tick={{ fontSize: 11, fill: 'var(--text-muted)' }} />
                <YAxis tick={{ fontSize: 11, fill: 'var(--text-muted)' }} unit="M" />
                <Tooltip formatter={(value) => [`${Number(value).toFixed(1)}M CHF`, '']} />
                <Legend wrapperStyle={{ fontSize: '0.75rem' }} />
                <Bar dataKey="previous" name={t('transparency.budget.previous')} fill="#94a3b8" radius={[4, 4, 0, 0]} />
                <Bar dataKey="current" name={t('transparency.budget.current')} fill="#2c54b8" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.section>
      </div>

      {/* Council Decisions */}
      <section>
        <h2 className="mb-4 text-lg font-semibold text-heading">{t('transparency.council.title')}</h2>
        <div className="space-y-3">
          {councilDecisions.map((decision, i) => {
            const isExpanded = expandedDecision === decision.id;
            const ResultIcon = resultIcons[decision.result];
            return (
              <motion.div
                key={decision.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.04 }}
                className="rounded-xl border border-default bg-card shadow-card"
              >
                <button
                  onClick={() => setExpandedDecision(isExpanded ? null : decision.id)}
                  className="flex w-full items-center justify-between p-4 text-left"
                  aria-expanded={isExpanded}
                >
                  <div className="flex items-center gap-3">
                    <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${resultStyles[decision.result]}`}>
                      <ResultIcon className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-heading">{decision.title}</h3>
                      <time className="text-xs text-muted">{new Date(decision.date).toLocaleDateString('fr-CH')}</time>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${resultStyles[decision.result]}`}>
                      {t(`transparency.council.${decision.result}`)}
                    </span>
                    {isExpanded ? <ChevronUp className="h-4 w-4 text-muted" /> : <ChevronDown className="h-4 w-4 text-muted" />}
                  </div>
                </button>
                {isExpanded && (
                  <div className="border-t border-default px-4 pb-4 pt-3">
                    <p className="mb-3 text-sm text-body">{decision.summary}</p>
                    {decision.result !== 'pending' && (
                      <div className="flex gap-4 text-xs text-muted">
                        <span className="text-emerald-600">Pour: {decision.votesFor}</span>
                        <span className="text-red-500">Contre: {decision.votesAgainst}</span>
                        <span>Abstentions: {decision.abstentions}</span>
                      </div>
                    )}
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
