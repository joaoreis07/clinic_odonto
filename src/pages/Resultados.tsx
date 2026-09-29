import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BeforeAfter } from '../components/BeforeAfter';
import { ScrollReveal } from '../components/motion/ScrollReveal';
import { ROUTES } from '../lib/constants';
import { getPublishedCases, type ClinicalCase } from '../lib/data/cases';
import { getWhatsAppUrl } from '../lib/whatsapp';
import { usePageMeta } from '../hooks/usePageMeta';
import { siteConfig } from '../lib/data/site';

export function Resultados() {
  const navigate = useNavigate();
  const publishedCases = getPublishedCases();

  usePageMeta({
    title: `Resultados | ${siteConfig.fullName}`,
    description: 'Galeria de transformações reais documentadas na clínica.',
  });

  return (
    <div className="page-enter">
      <section className="results-page-hero">
        <div className="container-editorial">
          <div className="results-page-hero-copy">
            <span className="section-label section-label-light">Transformações reais</span>
            <h1 className="results-page-title">
              Resultados em
              <em> detalhes.</em>
            </h1>
            <p className="results-page-sub">
              Conheça algumas transformações documentadas na clínica.
            </p>
          </div>
        </div>
      </section>

      <section className="results-page-gallery">
        <div className="container-editorial">
          <div className="results-page-grid">
            {publishedCases.map((c, i) => (
              <div key={c.slug} className="results-page-grid-item">
                <ScrollReveal delay={i * 0.05} direction="up">
                  <CaseCardDetailed clinicalCase={c} onClick={() => navigate(ROUTES.case(c.slug))} />
                </ScrollReveal>
              </div>
            ))}
          </div>

          <ScrollReveal delay={0.15}>
            <div className="results-page-more">
              <Link to={ROUTES.home} className="results-more-btn results-more-btn-light">
                Voltar ao início →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="results-page-cta">
        <div className="container-editorial container-narrow results-page-cta-inner">
          <ScrollReveal>
            <h2 className="section-headline">
              Seu sorriso
              <em> começa aqui.</em>
            </h2>
            <a href={getWhatsAppUrl({ intent: 'evaluation' })} target="_blank" rel="noopener noreferrer" className="results-page-cta-btn">
              Agendar avaliação →
            </a>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

function CaseCardDetailed({ clinicalCase, onClick }: { clinicalCase: ClinicalCase; onClick: () => void }) {
  const [hov, setHov] = useState(false);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className={`results-portfolio-card${hov ? ' results-portfolio-card-hover' : ''}`}
    >
      <div className="results-portfolio-media">
        <BeforeAfter
          beforeSrc={clinicalCase.beforeImage}
          afterSrc={clinicalCase.afterImage}
          stacked={clinicalCase.stackedBeforeAfter}
          objectPosition={clinicalCase.imageFocus}
          beforeObjectPosition={clinicalCase.beforeObjectPosition}
          afterObjectPosition={clinicalCase.afterObjectPosition}
          caseSlug={clinicalCase.slug}
          aspectRatio={clinicalCase.mediaAspect ?? '4 / 3'}
          className="ba-card"
        />
      </div>
      <div className="results-portfolio-body">
        <span className="results-portfolio-tag">{clinicalCase.category}</span>
        <h3 className="results-portfolio-title">{clinicalCase.title}</h3>
        <span className={`results-portfolio-link${hov ? ' results-portfolio-link-active' : ''}`}>
          Ver caso →
        </span>
      </div>
    </div>
  );
}
