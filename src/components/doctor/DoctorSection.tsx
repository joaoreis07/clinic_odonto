import { doctorFocus, doctorImages } from '../../lib/data/images';
import { siteConfig } from '../../lib/data/site';
import { getWhatsAppUrl } from '../../lib/whatsapp';
import { ClipReveal } from '../motion/ClipReveal';
import { ScrollReveal } from '../motion/ScrollReveal';
import { CTAButton } from '../ui/CTAButton';
import { SafeImage } from '../ui/SafeImage';

export function DoctorSection() {
  const { doctor } = siteConfig;

  return (
    <section id="profissional" className="section-doctor">
      <div className="container-editorial">
        <div className="doctor-editorial">
          <ClipReveal direction="left" className="doctor-editorial-photo">
            <div className="doctor-photo-frame">
              <SafeImage
                src={doctorImages.portrait}
                alt={`${doctor.name} em atendimento`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: doctorFocus,
                  display: 'block',
                  filter: 'brightness(0.9) contrast(1.04)',
                }}
              />
            </div>
          </ClipReveal>

          <div className="doctor-editorial-copy">
            <ScrollReveal>
              <span className="section-label">Profissional</span>
              <h2 className="section-headline">
                {doctor.name}
              </h2>
              <p className="doctor-role">{doctor.role}</p>
              <p className="doctor-cro">{doctor.cro}</p>
              <p className="doctor-bio">{doctor.bio}</p>
              <CTAButton
                href={getWhatsAppUrl({ intent: 'contact' })}
                label="Falar com a clínica"
                variant="dark"
                trackingLabel="doctor-section"
              />
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
