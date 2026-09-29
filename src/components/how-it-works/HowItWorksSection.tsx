import { getWhatsAppUrl } from '../../lib/whatsapp';
import { ScrollReveal } from '../motion/ScrollReveal';
import { CTAButton } from '../ui/CTAButton';
import { SectionTitle } from '../ui/SectionTitle';

const steps = [
  {
    step: '01',
    title: 'Fale com a clínica',
    desc: 'Entre em contato pelo WhatsApp e conte o que você busca. Nossa equipe orienta o próximo passo.',
  },
  {
    step: '02',
    title: 'Agende sua avaliação',
    desc: 'Marcamos um horário para diagnóstico completo e entendimento do seu caso.',
  },
  {
    step: '03',
    title: 'Receba orientação personalizada',
    desc: 'Apresentamos um plano com etapas, cronograma e investimento para você decidir com tranquilidade.',
  },
];

export function HowItWorksSection() {
  return (
    <section style={{ background: '#ffffff', padding: '120px 40px' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <ScrollReveal>
          <SectionTitle
            align="center"
            label="Como funciona"
            title={
              <>
                Três passos para
                <em style={{ display: 'block', fontStyle: 'italic', fontWeight: 300 }}>
                  começar.
                </em>
              </>
            }
          />
        </ScrollReveal>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2px',
            marginTop: '72px',
            marginBottom: '64px',
          }}
          className="steps-grid"
        >
          {steps.map((s, i) => (
            <ScrollReveal key={s.step} delay={i * 0.1}>
              <div
                style={{
                  background: i === 1 ? '#f8f8f6' : '#f0f0ee',
                  padding: '48px 36px',
                  minHeight: '260px',
                }}
              >
                <div
                  style={{
                    fontFamily: 'Fraunces, serif',
                    fontSize: '48px',
                    fontWeight: 300,
                    color: 'rgba(0,0,0,0.08)',
                    lineHeight: 1,
                    marginBottom: '24px',
                  }}
                >
                  {s.step}
                </div>
                <h3
                  style={{
                    fontFamily: 'Fraunces, serif',
                    fontSize: '24px',
                    fontWeight: 400,
                    color: '#111111',
                    margin: '0 0 12px',
                  }}
                >
                  {s.title}
                </h3>
                <p
                  style={{
                    fontSize: '15px',
                    lineHeight: 1.7,
                    color: 'rgba(0,0,0,0.55)',
                    margin: 0,
                    fontWeight: 300,
                  }}
                >
                  {s.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div style={{ textAlign: 'center' }}>
            <CTAButton
              href={getWhatsAppUrl({ intent: 'evaluation' })}
              label="Agendar avaliação"
              variant="dark"
              trackingLabel="how-it-works"
            />
          </div>
        </ScrollReveal>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .steps-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
