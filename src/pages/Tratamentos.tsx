import { useState } from 'react';
import { FAQ } from '../components/FAQ';
import { ScrollReveal } from '../components/motion/ScrollReveal';
import { SafeImage } from '../components/ui/SafeImage';
import { treatments } from '../lib/data/treatments';
import { treatmentsFAQ } from '../lib/data/faq';
import { getWhatsAppUrl } from '../lib/whatsapp';
import { usePageMeta } from '../hooks/usePageMeta';
import { siteConfig } from '../lib/data/site';
import { trackEvent } from '../lib/tracking';

export function Tratamentos() {
  usePageMeta({
    title: `Tratamentos | ${siteConfig.fullName}`,
    description: 'Implantes, estética dental, ortodontia, reabilitação oral e prevenção com planejamento individualizado.',
  });

  return (
    <div className="page-enter">
      <section style={{ background: '#080808', padding: '140px 40px 100px', overflow: 'hidden' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'end' }} className="treatments-hero">
            <div>
              <span style={{ display: 'block', fontSize: '11px', letterSpacing: '0.22em', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', marginBottom: '24px' }}>Serviços</span>
              <h1 style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(44px, 5.5vw, 72px)', fontWeight: 400, color: '#ffffff', lineHeight: 1.05, margin: '0 0 24px' }}>
                Tratamentos para cada fase
                <em style={{ display: 'block', fontStyle: 'italic', fontWeight: 300 }}>do seu sorriso.</em>
              </h1>
            </div>
            <div>
              <p style={{ fontSize: '17px', lineHeight: 1.75, color: 'rgba(255,255,255,0.45)', margin: '0 0 32px', fontWeight: 300 }}>
                Cada tratamento é abordado com planejamento individualizado, tecnologia de precisão e acompanhamento dedicado.
              </p>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                {treatments.map((t) => (
                  <a key={t.id} href={`#${t.id}`} style={{ textDecoration: 'none', fontSize: '12px', color: 'rgba(255,255,255,0.4)', padding: '7px 14px', border: '1px solid rgba(255,255,255,0.12)' }}>
                    {t.title}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <style>{`@media (max-width: 900px) { .treatments-hero { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      {treatments.map((t, i) => (
        <TreatmentSection key={t.id} treatment={t} reverse={i % 2 === 1} />
      ))}

      <section style={{ background: '#ffffff', padding: '100px 40px' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <ScrollReveal>
            <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 400, color: '#111111', margin: '0 0 56px' }}>
              Perguntas sobre
              <em style={{ display: 'block', fontStyle: 'italic', fontWeight: 300 }}>tratamentos.</em>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <FAQ items={treatmentsFAQ} />
          </ScrollReveal>
        </div>
      </section>

      <section style={{ background: '#000000', padding: '120px 40px', textAlign: 'center' }}>
        <ScrollReveal>
          <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 700, color: '#ffffff', margin: '0 0 20px', lineHeight: 1 }}>
            Qual tratamento
            <em style={{ display: 'block', fontStyle: 'italic', fontWeight: 300 }}>é o ideal para você?</em>
          </h2>
          <a
            href={getWhatsAppUrl({ intent: 'treatment', treatment: 'tratamentos odontológicos' })}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent('whatsapp_click', { location: 'treatments-cta' })}
            style={{ display: 'inline-flex', textDecoration: 'none', background: '#ffffff', color: '#080808', padding: '16px 32px', fontSize: '13px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}
          >
            Falar no WhatsApp →
          </a>
        </ScrollReveal>
      </section>
    </div>
  );
}

function TreatmentSection({ treatment, reverse }: { treatment: (typeof treatments)[0]; reverse: boolean }) {
  const [hov, setHov] = useState(false);
  const isDark = treatment.id === 'implantes' || treatment.id === 'ortodontia' || treatment.id === 'prevencao';
  const bg = isDark ? '#080808' : treatment.id === 'estetica' ? '#f0f0ee' : '#f8f8f6';
  const textColor = isDark || treatment.id === 'prevencao' ? '#ffffff' : '#111111';

  return (
    <section id={treatment.id} style={{ background: bg, scrollMarginTop: '80px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: 'clamp(480px, 60vh, 640px)' }} className="treatment-section-grid">
        <div style={{ padding: '80px 64px', display: 'flex', flexDirection: 'column', justifyContent: 'center', order: reverse ? 2 : 1 }} className="treatment-text-pad">
          <ScrollReveal direction={reverse ? 'right' : 'left'}>
            <span style={{ fontSize: '11px', letterSpacing: '0.22em', color: textColor === '#ffffff' ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.3)', textTransform: 'uppercase', display: 'block', marginBottom: '16px' }}>
              {treatment.number}
            </span>
            <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(36px, 3.5vw, 52px)', fontWeight: 400, color: textColor, margin: '0 0 8px', lineHeight: 1.1 }}>
              {treatment.title}
            </h2>
            <p style={{ fontFamily: 'Fraunces, serif', fontStyle: 'italic', fontWeight: 300, fontSize: '22px', color: textColor === '#ffffff' ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.4)', margin: '0 0 28px' }}>
              {treatment.tagline}
            </p>
            <p style={{ fontSize: '15px', lineHeight: 1.8, color: textColor === '#ffffff' ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.55)', margin: '0 0 32px', fontWeight: 300, maxWidth: '440px' }}>
              {treatment.description}
            </p>
            <ul style={{ listStyle: 'none', margin: '0 0 36px', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {treatment.benefits.map((b) => (
                <li key={b} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '14px', color: textColor === '#ffffff' ? 'rgba(255,255,255,0.55)' : 'rgba(0,0,0,0.55)' }}>
                  <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: textColor === '#ffffff' ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.3)', flexShrink: 0 }} />
                  {b}
                </li>
              ))}
            </ul>
            <a
              href={getWhatsAppUrl({ intent: 'treatment', treatment: treatment.title })}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHov(true)}
              onMouseLeave={() => setHov(false)}
              onClick={() => trackEvent('whatsapp_click', { location: 'treatment-section', treatment: treatment.title })}
              style={{
                display: 'inline-flex',
                textDecoration: 'none',
                padding: '13px 24px',
                fontSize: '12px',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                alignSelf: 'flex-start',
                ...(textColor === '#ffffff'
                  ? { background: hov ? 'rgba(255,255,255,0.1)' : 'transparent', border: '1px solid rgba(255,255,255,0.25)', color: '#ffffff' }
                  : { background: '#111111', color: '#ffffff' }),
              }}
            >
              Saber mais →
            </a>
          </ScrollReveal>
        </div>
        <div style={{ overflow: 'hidden', order: reverse ? 1 : 2 }}>
          <SafeImage
            src={treatment.image}
            alt={treatment.title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: treatment.imageFocus ?? 'center center',
              filter: 'brightness(0.75) contrast(1.05)',
              minHeight: '360px',
            }}
          />
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .treatment-section-grid { grid-template-columns: 1fr !important; }
          .treatment-section-grid > div { order: unset !important; }
          .treatment-text-pad { padding: 48px 32px !important; }
        }
      `}</style>
    </section>
  );
}
