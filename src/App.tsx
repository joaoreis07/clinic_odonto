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

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

function Layout() {
  return (
    <>
      <ScrollToTop />
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
