import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Landmark } from 'lucide-react';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-default bg-secondary">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-3 flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-civic-500">
                <Landmark className="h-4 w-4 text-white" />
              </div>
              <span className="text-base font-bold text-heading">GenCité</span>
            </div>
            <p className="text-sm leading-relaxed text-muted">{t('footer.description')}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-3 text-sm font-semibold text-heading">{t('footer.quickLinks')}</h3>
            <ul className="list-none space-y-2 p-0">
              {[
                { label: 'common.services', path: '/services' },
                { label: 'common.transparency', path: '/transparency' },
                { label: 'common.report', path: '/report' },
                { label: 'common.events', path: '/events' },
                { label: 'common.contact', path: '/contact' },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-sm text-muted no-underline transition-colors hover:text-accent"
                  >
                    {t(item.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-3 text-sm font-semibold text-heading">{t('footer.legal')}</h3>
            <ul className="list-none space-y-2 p-0">
              <li><Link to="/accessibility" className="text-sm text-muted no-underline transition-colors hover:text-accent">{t('footer.accessibilityStatement')}</Link></li>
              <li><Link to="/privacy" className="text-sm text-muted no-underline transition-colors hover:text-accent">{t('footer.privacy')}</Link></li>
              <li><Link to="/terms" className="text-sm text-muted no-underline transition-colors hover:text-accent">{t('footer.terms')}</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-3 text-sm font-semibold text-heading">Contact</h3>
            <address className="space-y-2 not-italic text-sm text-muted">
              <p>Place de la Mairie 1</p>
              <p>1200 GenCité, Suisse</p>
              <p>+41 22 123 45 00</p>
              <p>info@gencite.ch</p>
            </address>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-default pt-6 sm:flex-row">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} GenCité. {t('footer.copyright')}
          </p>
          <p className="text-xs text-muted">
            {t('footer.designedBy')}{' '}
            <span className="font-medium text-body">Jumel Studio</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
