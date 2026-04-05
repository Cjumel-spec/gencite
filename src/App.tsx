import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Home from '@/pages/Home';
import Services from '@/pages/Services';
import Transparency from '@/pages/Transparency';
import Report from '@/pages/Report';
import Events from '@/pages/Events';
import Contact from '@/pages/Contact';
import Accessibility from '@/pages/Accessibility';
import Privacy from '@/pages/Privacy';
import Terms from '@/pages/Terms';

export default function App() {
  const { t } = useTranslation();

  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col">
        <a href="#main-content" className="skip-nav">
          {t('common.skipToContent')}
        </a>

        <Header />

        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/transparency" element={<Transparency />} />
            <Route path="/report" element={<Report />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/accessibility" element={<Accessibility />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
