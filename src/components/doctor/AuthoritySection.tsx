import { doctorImages } from '../../lib/data/images';
import { siteConfig } from '../../lib/data/site';
import { ClipReveal } from '../motion/ClipReveal';
import { ScrollReveal } from '../motion/ScrollReveal';
import { SafeImage } from '../ui/SafeImage';

export function AuthoritySection() {
  return (
    <section className="section-authority">
      <div className="container-editorial">
        <div className="authority-editorial">
          <ScrollReveal direction="left">
            <span className="section-label section-label-light">Experiência</span>
            <h2 className="section-headline section-headline-light">
              Por trás de cada sorriso,
              <em> existe cuidado.</em>
            </h2>
            <p className="authority-text">
              Precisão em cada detalhe — do diagnóstico ao resultado.
            </p>
          </ScrollReveal>

          <ClipReveal direction="right" delay={0.12} className="authority-photo">
            <div className="authority-photo-frame">
              <SafeImage
                src={doctorImages.action}
                alt={`${siteConfig.doctor.name} — atendimento clínico`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center 20%',
                  display: 'block',
                  filter: 'brightness(0.82) contrast(1.06)',
                }}
              />
            </div>
          </ClipReveal>
        </div>
      </div>
    </section>
  );
}
