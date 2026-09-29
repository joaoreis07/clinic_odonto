import { BrowserRouter, Navigate, Route, Routes, useLocation, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { Header } from './components/Header';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Resultados } from './pages/Resultados';
import { CasoClinico } from './pages/CasoClinico';
import { Tratamentos } from './pages/Tratamentos';
import { NotFound } from './pages/NotFound';

function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      return;
    }

    const id = decodeURIComponent(hash.replace(/^#/, ''));
    let attempts = 0;
    let timer = 0;

    const tryScroll = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
      if (attempts < 12) {
        attempts += 1;
        timer = window.setTimeout(tryScroll, 50);
      }
    };

    tryScroll();
    return () => window.clearTimeout(timer);
  }, [pathname, hash]);

  return null;
}

function Layout() {
  return (
    <>
      <ScrollManager />
      <Header />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tratamentos" element={<Tratamentos />} />
          <Route path="/resultados" element={<Resultados />} />
          <Route path="/resultados/:slug" element={<CasoClinico />} />
          <Route path="/resultado/:id" element={<LegacyCaseRedirect />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

/** Compatibilidade com links antigos /resultado/caso-1 */
function LegacyCaseRedirect() {
  const { id } = useParams<{ id: string }>();
  const legacyId = id ?? '';
  const slugMap: Record<string, string> = {
    'caso-1': 'reabilitacao-coroas',
    'caso-2': 'estetica-harmonizacao',
    'caso-3': 'implantes-reabilitacao',
  };
  const slug = slugMap[legacyId] ?? 'reabilitacao-coroas';
  return <Navigate to={`/resultados/${slug}`} replace />;
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}
