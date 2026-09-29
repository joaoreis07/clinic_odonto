import { testimonials } from '../../lib/data/testimonials';
import { ScrollReveal } from '../motion/ScrollReveal';
import { SectionTitle } from '../ui/SectionTitle';

export function TestimonialSection() {
  return (
    <section style={{ background: '#111111', padding: '120px 40px' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <ScrollReveal>
          <SectionTitle
            dark
            label="Depoimentos"
            title={
              <>
                O que dizem
                <em style={{ display: 'block', fontStyle: 'italic', fontWeight: 300 }}>
                  nossos pacientes.
                </em>
              </>
            }
            subtitle="Conteúdo demonstrativo. Depoimentos reais serão inseridos após autorização."
          />
        </ScrollReveal>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2px',
            marginTop: '64px',
          }}
          className="testimonials-grid"
        >
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.id} delay={i * 0.08}>
              <blockquote
                style={{
                  background: '#1a1a1a',
                  padding: '40px 32px',
                  margin: 0,
                  minHeight: '280px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  border: t.isPlaceholder ? '1px dashed rgba(255,255,255,0.08)' : undefined,
                }}
              >
                <p
                  style={{
                    fontFamily: 'Fraunces, serif',
                    fontSize: '18px',
                    fontStyle: 'italic',
                    fontWeight: 300,
                    color: t.isPlaceholder ? 'rgba(255,255,255,0.35)' : 'rgba(255,255,255,0.75)',
                    lineHeight: 1.65,
                    margin: '0 0 24px',
                  }}
                >
                  "{t.text}"
                </p>
                <footer>
                  <cite
                    style={{
                      fontSize: '13px',
                      color: 'rgba(255,255,255,0.5)',
                      fontStyle: 'normal',
                      display: 'block',
                      marginBottom: '4px',
                    }}
                  >
                    — {t.name}
                  </cite>
                  {t.treatment && (
                    <span
                      style={{
                        fontSize: '11px',
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: 'rgba(255,255,255,0.25)',
                      }}
                    >
                      {t.treatment}
                    </span>
                  )}
                </footer>
              </blockquote>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .testimonials-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
