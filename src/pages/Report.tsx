import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'motion/react';
import {
  Construction, Trash2, ShieldAlert, Volume2, TreePine, HelpCircle,
  MapPin, Send, CheckCircle2, Camera, ThumbsUp,
  Clock, Eye, Wrench, CircleCheck,
} from 'lucide-react';
import { reports } from '@/data/reports';
import type { ReportCategory, ReportStatus } from '@/lib/types';

const categoryOptions: { key: ReportCategory; icon: React.ComponentType<{ className?: string }> }[] = [
  { key: 'infrastructure', icon: Construction },
  { key: 'cleanliness', icon: Trash2 },
  { key: 'safety', icon: ShieldAlert },
  { key: 'noise', icon: Volume2 },
  { key: 'greenSpaces', icon: TreePine },
  { key: 'other', icon: HelpCircle },
];

const statusSteps: { key: ReportStatus; icon: React.ComponentType<{ className?: string }> }[] = [
  { key: 'received', icon: Clock },
  { key: 'underReview', icon: Eye },
  { key: 'inProgress', icon: Wrench },
  { key: 'resolved', icon: CircleCheck },
];

const statusIndex: Record<ReportStatus, number> = {
  received: 0, underReview: 1, inProgress: 2, resolved: 3,
};

const inputClass = "w-full rounded-xl border py-2.5 px-4 text-sm outline-none transition-colors focus:ring-2 focus:ring-civic-500/20" as const;

export default function Report() {
  const { t } = useTranslation();
  const [category, setCategory] = useState<ReportCategory | null>(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setCategory(null);
      setTitle('');
      setDescription('');
      setLocation('');
    }, 3000);
  };

  return (
    <main id="main-content" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
        <h1 className="mb-2 text-3xl font-bold text-heading">{t('report.title')}</h1>
        <p className="text-body">{t('report.subtitle')}</p>
      </motion.div>

      <div className="grid gap-10 lg:grid-cols-5">
        {/* Form */}
        <motion.section initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="lg:col-span-3">
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div key="success" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                className="flex flex-col items-center gap-4 rounded-2xl border border-emerald-200 bg-emerald-50 p-10 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
                  <CheckCircle2 className="h-8 w-8 text-emerald-600" />
                </div>
                <p className="text-lg font-semibold text-emerald-800">{t('report.successMessage')}</p>
                <div className="mt-4 flex w-full max-w-md items-center justify-between">
                  {statusSteps.map((step, i) => {
                    const StepIcon = step.icon;
                    const active = i === 0;
                    return (
                      <div key={step.key} className="flex flex-col items-center gap-1.5">
                        <div className={`flex h-10 w-10 items-center justify-center rounded-full ${active ? 'bg-emerald-500 text-white' : 'bg-gray-100 text-gray-400'}`}>
                          <StepIcon className="h-5 w-5" />
                        </div>
                        <span className={`text-xs font-medium ${active ? 'text-emerald-600' : 'text-gray-400'}`}>{t(`report.status.${step.key}`)}</span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ) : (
              <motion.form key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                onSubmit={handleSubmit} className="rounded-2xl border border-default bg-card p-6 shadow-card">
                <label className="mb-2 block text-sm font-semibold text-heading">{t('report.form.category')}</label>
                <div className="mb-5 grid grid-cols-3 gap-2 sm:grid-cols-6">
                  {categoryOptions.map((opt) => {
                    const Icon = opt.icon;
                    const isActive = category === opt.key;
                    return (
                      <button key={opt.key} type="button" onClick={() => setCategory(opt.key)}
                        className={`flex flex-col items-center gap-1.5 rounded-xl p-3 text-xs font-medium transition-all ${
                          isActive ? 'border-2 border-civic-500 bg-civic-50 text-civic-600' : 'border border-default text-body hover:border-hover'}`}>
                        <Icon className="h-5 w-5" />
                        {t(`report.categories.${opt.key}`)}
                      </button>
                    );
                  })}
                </div>
                <label className="mb-1.5 block text-sm font-semibold text-heading">{t('report.form.title')}</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder={t('report.form.titlePlaceholder')} required
                  className={`${inputClass} mb-4 border-default bg-page text-heading`} style={{ backgroundColor: 'var(--bg)', borderColor: 'var(--border-color)' }} />
                <label className="mb-1.5 block text-sm font-semibold text-heading">{t('report.form.location')}</label>
                <div className="relative mb-4">
                  <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
                  <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder={t('report.form.locationPlaceholder')} required
                    className={`${inputClass} pl-10 border-default bg-page text-heading`} style={{ backgroundColor: 'var(--bg)', borderColor: 'var(--border-color)' }} />
                </div>
                <label className="mb-1.5 block text-sm font-semibold text-heading">{t('report.form.description')}</label>
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder={t('report.form.descriptionPlaceholder')} required rows={4}
                  className={`${inputClass} mb-4 resize-none border-default bg-page text-heading`} style={{ backgroundColor: 'var(--bg)', borderColor: 'var(--border-color)' }} />
                <button type="button" className="mb-6 flex w-full items-center justify-center gap-2 rounded-xl border-2 border-dashed border-default px-4 py-8 text-sm text-muted transition-colors hover:border-civic-500 hover:text-civic-500">
                  <Camera className="h-5 w-5" /> {t('report.form.photo')}
                </button>
                <button type="submit" disabled={!category || !title || !location || !description}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-civic-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-civic-600 disabled:cursor-not-allowed disabled:opacity-50">
                  <Send className="h-4 w-4" /> {t('report.form.submit')}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.section>

        {/* Recent Reports */}
        <motion.section initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="lg:col-span-2">
          <h2 className="mb-4 text-lg font-semibold text-heading">{t('report.recentReports')}</h2>
          <div className="space-y-3">
            {reports.map((report) => {
              const stepIdx = statusIndex[report.status];
              return (
                <article key={report.id} className="rounded-xl border border-default bg-card p-4 shadow-card">
                  <div className="mb-2 flex items-start justify-between">
                    <h3 className="text-sm font-semibold text-heading">{t(`report.reports.${report.id}.title`)}</h3>
                    <span className="flex items-center gap-1 text-xs text-muted"><ThumbsUp className="h-3 w-3" />{report.votes}</span>
                  </div>
                  <p className="mb-3 text-xs text-muted"><MapPin className="mr-1 inline h-3 w-3" />{report.location}</p>
                  <div className="flex items-center gap-1">
                    {statusSteps.map((step, i) => (
                      <div key={step.key} className="flex items-center">
                        <div className={`h-2 w-2 rounded-full ${i <= stepIdx ? (report.status === 'resolved' ? 'bg-emerald-500' : 'bg-civic-500') : 'bg-gray-200'}`} />
                        {i < statusSteps.length - 1 && (<div className={`h-0.5 w-4 ${i < stepIdx ? (report.status === 'resolved' ? 'bg-emerald-500' : 'bg-civic-500') : 'bg-gray-200'}`} />)}
                      </div>
                    ))}
                    <span className="ml-2 text-xs text-muted">{t(`report.status.${report.status}`)}</span>
                  </div>
                </article>
              );
            })}
          </div>
        </motion.section>
      </div>
    </main>
  );
}
