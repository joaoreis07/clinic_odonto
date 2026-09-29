import { Link, useNavigate } from 'react-router-dom';
import { Tooth3D } from '../components/Tooth3D';
import { HeroSection } from '../components/hero/HeroSection';
import { BeforeAfter } from '../components/BeforeAfter';
import { FAQ } from '../components/FAQ';
import { DoctorSection } from '../components/doctor/DoctorSection';
import { AuthoritySection } from '../components/doctor/AuthoritySection';
import { HowItWorksSection } from '../components/how-it-works/HowItWorksSection';
import { ScrollReveal } from '../components/motion/ScrollReveal';
import { ClipReveal } from '../components/motion/ClipReveal';
import { CTAButton } from '../components/ui/CTAButton';
import { SafeImage } from '../components/ui/SafeImage';
import { clinicImages, doctorImages, technologyFocus, technologyImages } from '../lib/data/images';
import { getFeaturedCases } from '../lib/data/cases';
import { homeFAQ } from '../lib/data/faq';
import { siteConfig } from '../lib/data/site';
import { ROUTES } from '../lib/constants';
import { getWhatsAppUrl } from '../lib/whatsapp';
import { usePageMeta } from '../hooks/usePageMeta';

const featuredCases = getFeaturedCases();

export function Home() {
  usePageMeta({
    title: `${siteConfig.fullName} | Odontologia de Precisão`,
    description: siteConfig.description,
  });

  return (
    <div className="page-enter">
      <HeroSection />
      <ResultsSection />
      <DoctorSection />
      <AuthoritySection />
      <TechnologySection />
      <ClinicSection />
      <HowItWorksSection />
      <FinalCTA />
      <FAQSection />
    </div>
  );
}

function ResultsSection() {
  const navigate = useNavigate();

  return (
    <section id="resultados" className="section-results">
      <div className="container-editorial">
        <div className="section-header-row">
          <ScrollReveal>
            <span className="section-label">Transformações reais</span>
            <h2 className="section-headline">
              Resultados que
              <em> falam por si.</em>
            </h2>
          </ScrollReveal>
        </div>

        <div className="results-row-3">
          {featuredCases.map((c, i) => (
            <div key={c.slug} className="results-row-3-item">
              <ScrollReveal delay={i * 0.08} direction="up">
                <div className="results-grid-card">
                  <BeforeAfter
                    beforeSrc={c.beforeImage}
                    afterSrc={c.afterImage}
                    stacked={c.stackedBeforeAfter}
                    objectPosition={c.imageFocus}
                    beforeObjectPosition={c.beforeObjectPosition}
                    afterObjectPosition={c.afterObjectPosition}
                    caseSlug={c.slug}
                    aspectRatio={c.mediaAspect ?? '4 / 3'}
                    className="ba-card"
                  />
                  <div className="results-grid-caption">
                    <span>{c.title}</span>
                    <button type="button" onClick={() => navigate(ROUTES.case(c.slug))}>
                      Ver caso →
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          ))}
        </div>

        <ScrollReveal delay={0.2}>
          <div className="results-cta-row">
            <Link to={ROUTES.results} className="results-more-btn">
              Mais resultados →
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function TechnologySection() {
  const items = [
    { src: technologyImages.tomography, focus: technologyFocus.tomography, alt: 'Tomografia digital' },
    { src: technologyImages.radiograph, focus: technologyFocus.radiograph, alt: 'Radiografia panorâmica' },
    { src: technologyImages.planning, focus: technologyFocus.planning, alt: 'Modelagem e planejamento' },
  ] as const;

  return (
    <section className="section-technology">
      <div className="container-editorial">
        <ScrollReveal>
          <span className="section-label">Tecnologia</span>
          <h2 className="section-headline">
            Precisão <em>em cada detalhe.</em>
          </h2>
        </ScrollReveal>

        <div className="tech-grid-uniform">
          {items.map((item, i) => (
            <ClipReveal key={item.src} delay={i * 0.08} direction="up">
              <div className="tech-grid-cell">
                <SafeImage
                  src={item.src}
                  alt={item.alt}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: item.focus,
                    display: 'block',
                    filter: 'brightness(0.82) contrast(1.04) saturate(0.9)',
                  }}
                />
              </div>
            </ClipReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ClinicSection() {
  return (
    <section id="clinica" className="section-clinic">
      <div className="container-editorial">
        <div className="clinic-editorial">
          <ClipReveal direction="left">
            <div className="clinic-photo-frame">
              <SafeImage
                src={clinicImages.ambient}
                alt="Ambiente Clinic+ Odonto"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center center',
                  display: 'block',
                  filter: 'brightness(0.85)',
                }}
              />
            </div>
          </ClipReveal>
          <ScrollReveal delay={0.1}>
            <span className="section-label section-label-light">A clínica</span>
            <h2 className="section-headline section-headline-light">
              Comece pelo
              <em> seu sorriso.</em>
            </h2>
            <p className="clinic-text">
              Ambiente pensado para acolher, diagnosticar com precisão e conduzir cada caso com clareza.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  return (
    <section id="contato" className="section-faq">
      <div className="container-editorial container-narrow">
        <ScrollReveal>
          <span className="section-label">Dúvidas</span>
          <h2 className="section-headline">
            Perguntas
            <em> frequentes.</em>
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <FAQ items={homeFAQ} />
        </ScrollReveal>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="section-final-cta">
      <div className="final-cta-grid container-editorial">
        <ClipReveal direction="left" className="final-cta-photo">
          <div className="final-cta-photo-frame">
            <SafeImage
              src={doctorImages.cta}
              alt={`${siteConfig.doctor.name}`}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center 25%',
                display: 'block',
                filter: 'brightness(0.75) contrast(1.05)',
              }}
            />
          </div>
        </ClipReveal>

        <ScrollReveal delay={0.15} className="final-cta-copy">
          <div className="final-cta-tooth" aria-hidden>
            <Tooth3D size={120} animate />
          </div>
          <span className="section-label section-label-light">Próximo passo</span>
          <h2 className="section-headline section-headline-light section-headline-large">
            Falar com
            <em> a clínica.</em>
          </h2>
          <p className="final-cta-text">
            Uma conversa no WhatsApp é o caminho mais rápido para entender seu caso.
          </p>
          <CTAButton
            href={getWhatsAppUrl({ intent: 'contact' })}
            label="Falar com a clínica"
            variant="primary"
            trackingLabel="final-cta"
          />
        </ScrollReveal>
      </div>
    </section>
  );
}
