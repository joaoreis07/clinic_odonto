import { motion, useScroll, useTransform } from 'framer-motion';
import { Logo } from '../layout/Logo';
import { CTAButton } from '../ui/CTAButton';
import { SafeImage } from '../ui/SafeImage';
import { doctorImages } from '../../lib/data/images';
import { siteConfig } from '../../lib/data/site';
import { ROUTES } from '../../lib/constants';
import { getWhatsAppUrl } from '../../lib/whatsapp';

const heroLines = [
  { text: 'Seu sorriso', style: 'display' as const },
  { text: 'merece', style: 'display' as const },
  { text: 'mais.', style: 'italic' as const },
];

export function HeroSection() {
  const { scrollY } = useScroll();
  const photoY = useTransform(scrollY, [0, 600], [0, 60]);
  const photoScale = useTransform(scrollY, [0, 600], [1, 1.06]);
  const contentY = useTransform(scrollY, [0, 600], [0, 30]);
  const waUrl = getWhatsAppUrl({ intent: 'evaluation' });

  return (
    <section className="hero-section hero-editorial">
      <div className="hero-editorial-bg" aria-hidden />
      <div className="hero-noise noise" />

      <motion.div className="hero-editorial-photo" style={{ y: photoY, scale: photoScale }}>
        <motion.div
          className="hero-editorial-photo-inner"
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <SafeImage
            src={doctorImages.hero}
            alt={`${siteConfig.doctor.name} em atendimento clínico`}
            loading="eager"
            fetchPriority="high"
            className="hero-editorial-img"
          />
        </motion.div>
        <div className="hero-editorial-photo-fade" aria-hidden />
        <div className="hero-editorial-photo-accent" aria-hidden />
      </motion.div>

      <motion.div className="hero-content-wrap hero-editorial-content" style={{ y: contentY }}>
        <div className="hero-editorial-grid">
          <div className="hero-editorial-copy">
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="hero-editorial-logo"
            >
              <Logo variant="full" size="lg" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="hero-eyebrow"
            >
              <span className="hero-eyebrow-line" />
              <span>{siteConfig.doctor.name}</span>
              <span className="hero-eyebrow-dot">·</span>
              <span>{siteConfig.doctor.cro}</span>
            </motion.div>

            <h1 className="hero-headline">
              {heroLines.map((line, i) => (
                <motion.span
                  key={line.text}
                  className={line.style === 'italic' ? 'hero-headline-italic' : 'hero-headline-main'}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.95, delay: 0.4 + i * 0.13, ease: [0.16, 1, 0.3, 1] }}
                >
                  {line.text}
                </motion.span>
              ))}
            </h1>

            <motion.p
              className="hero-sub hero-sub-short"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.9 }}
            >
              {siteConfig.fullName}
            </motion.p>

            <motion.div
              className="hero-ctas hero-ctas-single"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.15 }}
            >
              <CTAButton href={waUrl} label="Agendar avaliação" variant="primary" trackingLabel="hero-primary" />
              <CTAButton href={ROUTES.results} label="Ver resultados" variant="outline" trackingLabel="hero-secondary" />
            </motion.div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="hero-scroll-hint"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
      >
        <span>scroll</span>
        <div className="hero-scroll-line" />
      </motion.div>
    </section>
  );
}
