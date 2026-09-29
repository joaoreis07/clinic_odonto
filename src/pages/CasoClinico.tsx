import { Link, Navigate, useParams } from 'react-router-dom';
import { BeforeAfter } from '../components/BeforeAfter';
import { ScrollReveal } from '../components/motion/ScrollReveal';
import { ClipReveal } from '../components/motion/ClipReveal';
import { SafeImage } from '../components/ui/SafeImage';
import { getCaseBySlug } from '../lib/data/cases';
import { ROUTES } from '../lib/constants';
import { getWhatsAppUrl } from '../lib/whatsapp';
import { usePageMeta } from '../hooks/usePageMeta';
import { trackEvent } from '../lib/tracking';
import { siteConfig } from '../lib/data/site';

export function CasoClinico() {
  const { slug } = useParams<{ slug: string }>();
  const clinicalCase = slug ? getCaseBySlug(slug) : undefined;

  usePageMeta({
    title: clinicalCase
      ? `${clinicalCase.title} | ${siteConfig.fullName}`
      : `Caso não encontrado | ${siteConfig.fullName}`,
    description: clinicalCase?.summary,
  });

  if (!clinicalCase) {
    return <Navigate to="/404" replace />;
  }

  trackEvent('case_view', { slug: clinicalCase.slug, label: clinicalCase.title });

  const waUrl = getWhatsAppUrl({
    intent: 'case',
    caseTitle: clinicalCase.title,
  });

  return (
    <div className="page-enter">
      <section className="case-hero">
        <SafeImage
          src={clinicalCase.heroImage}
          alt={clinicalCase.title}
          className="case-hero-img"
          style={{
            objectPosition: clinicalCase.heroObjectPosition ?? 'center 42%',
            objectFit: clinicalCase.heroObjectFit ?? 'cover',
          }}
        />
        <div className="case-hero-overlay" />
        <div className="case-hero-content container-editorial">
          <Link to={ROUTES.results} className="case-back-link">
            ← Todos os resultados
          </Link>
          <span className="case-tag">{clinicalCase.category}</span>
          <h1 className="case-title">{clinicalCase.title}</h1>
          <p className="case-subtitle">Conheça a transformação deste caso.</p>
        </div>
      </section>

      <section className="case-section case-section-light">
        <div className="container-editorial case-content-grid">
          <ClipReveal direction="left">
            <div
              className="case-image-frame"
              style={
                clinicalCase.mediaAspect
                  ? { aspectRatio: clinicalCase.mediaAspect, height: 'auto', position: 'relative' }
                  : undefined
              }
            >
              <SafeImage
                src={clinicalCase.beforeImage}
                alt="Situação inicial"
                style={{
                  width: '100%',
                  height: clinicalCase.stackedBeforeAfter ? '200%' : '100%',
                  objectFit: 'cover',
                  objectPosition: clinicalCase.stackedBeforeAfter
                    ? 'center top'
                    : (clinicalCase.beforeObjectPosition ?? clinicalCase.imageFocus ?? 'center 42%'),
                  filter: 'brightness(0.88) saturate(0.9)',
                  ...(clinicalCase.mediaAspect
                    ? { position: 'absolute', inset: 0 }
                    : null),
                }}
              />
            </div>
          </ClipReveal>
          <ScrollReveal delay={0.15}>
            <span className="section-label">Situação inicial</span>
            <h2 className="section-headline case-section-title">
              O ponto de partida.
            </h2>
            <p className="case-text">{clinicalCase.initialDescription}</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="case-section case-section-dark">
        <div className="container-editorial">
          <ScrollReveal>
            <div className="case-ba-header">
              <h2 className="section-headline section-headline-light">
                Antes &amp; Depois
              </h2>
              <span className="case-ba-hint">Arraste para comparar</span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <BeforeAfter
              beforeSrc={clinicalCase.beforeImage}
              afterSrc={clinicalCase.afterImage}
              stacked={clinicalCase.stackedBeforeAfter}
              objectPosition={clinicalCase.imageFocus}
              beforeObjectPosition={clinicalCase.beforeObjectPosition}
              afterObjectPosition={clinicalCase.afterObjectPosition}
              caseSlug={clinicalCase.slug}
              aspectRatio={clinicalCase.mediaAspect ?? '16 / 10'}
              className={
                clinicalCase.mediaAspect === '3 / 4' || clinicalCase.mediaAspect === '3 / 5'
                  ? 'ba-portrait'
                  : clinicalCase.mediaAspect
                    ? 'ba-natural'
                    : 'ba-compact'
              }
            />
          </ScrollReveal>
        </div>
      </section>

      <section className="case-section case-section-light">
        <div className="container-editorial">
          <ScrollReveal>
            <span className="section-label">Resultado</span>
            <h2 className="section-headline case-section-title">
              A transformação.
            </h2>
            <p className="case-text case-text-wide">{clinicalCase.resultDescription}</p>
          </ScrollReveal>

          <div className="case-gallery">
            {clinicalCase.gallery.map((img, i) => (
              <ClipReveal key={img} delay={i * 0.08} direction={i % 2 === 0 ? 'up' : 'left'}>
                <div
                  className="case-gallery-item"
                  style={
                    clinicalCase.mediaAspect
                      ? { aspectRatio: clinicalCase.mediaAspect, height: 'auto', position: 'relative' }
                      : undefined
                  }
                >
                  <SafeImage
                    src={img}
                    alt={`Documentação ${i + 1}`}
                    style={{
                      width: '100%',
                      height: '100%',
                      ...(clinicalCase.mediaAspect
                        ? { position: 'absolute', inset: 0 }
                        : null),
                      objectFit: 'cover',
                      objectPosition: clinicalCase.imageFocus ?? 'center 42%',
                    }}
                  />
                </div>
              </ClipReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="case-cta">
        <div className="container-editorial container-narrow case-cta-inner">
          <ScrollReveal>
            <h2 className="section-headline section-headline-light">
              Quero conversar
              <em> sobre meu caso.</em>
            </h2>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('whatsapp_click', { location: 'case-cta', slug: clinicalCase.slug })}
              className="case-cta-btn"
            >
              Quero conversar sobre meu caso →
            </a>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
