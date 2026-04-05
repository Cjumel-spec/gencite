import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/lib/theme';
import {
  Menu,
  X,
  Sun,
  Moon,
  Globe,
  Landmark,
} from 'lucide-react';

const navItems = [
  { key: 'common.home', path: '/' },
  { key: 'common.services', path: '/services' },
  { key: 'common.transparency', path: '/transparency' },
  { key: 'common.report', path: '/report' },
  { key: 'common.events', path: '/events' },
  { key: 'common.contact', path: '/contact' },
];

export default function Header() {
  const { t, i18n } = useTranslation();
  const { resolvedTheme, setTheme } = useTheme();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'fr' ? 'en' : 'fr');
  };

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <header
      className="sticky top-0 z-50 backdrop-blur-md border-b border-default"
      style={{ backgroundColor: 'color-mix(in srgb, var(--bg) 92%, transparent)' }}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 no-underline">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-civic-500">
            <Landmark className="h-5 w-5 text-white" />
          </div>
          <span className="text-lg font-bold text-heading">GenCité</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          {navItems.map((item) => {
            const isActive =
              item.path === '/'
                ? location.pathname === '/'
                : location.pathname.startsWith(item.path);
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`rounded-lg px-3 py-2 text-sm font-medium no-underline transition-colors ${
                  isActive
                    ? 'bg-accent-light text-accent'
                    : 'text-body hover:text-heading hover:bg-tertiary'
                }`}
              >
                {t(item.key)}
              </Link>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-1">
          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 rounded-lg px-2.5 py-2 text-sm font-medium text-muted transition-colors hover:bg-tertiary hover:text-heading"
            aria-label={t('common.language')}
          >
            <Globe className="h-4 w-4" />
            <span className="text-xs font-semibold uppercase">
              {i18n.language === 'fr' ? 'EN' : 'FR'}
            </span>
          </button>

          <button
            onClick={toggleTheme}
            className="rounded-lg p-2 text-muted transition-colors hover:bg-tertiary hover:text-heading"
            aria-label={t('common.theme')}
          >
            {resolvedTheme === 'dark' ? (
              <Sun className="h-[18px] w-[18px]" />
            ) : (
              <Moon className="h-[18px] w-[18px]" />
            )}
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-lg p-2 text-muted transition-colors hover:bg-tertiary md:hidden"
            aria-label="Menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav
          className="border-t border-default bg-page px-4 pb-4 pt-2 md:hidden"
          aria-label="Mobile navigation"
        >
          {navItems.map((item) => {
            const isActive =
              item.path === '/'
                ? location.pathname === '/'
                : location.pathname.startsWith(item.path);
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={`block rounded-lg px-3 py-2.5 text-sm font-medium no-underline transition-colors ${
                  isActive
                    ? 'bg-accent-light text-accent'
                    : 'text-body hover:bg-tertiary'
                }`}
              >
                {t(item.key)}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}
