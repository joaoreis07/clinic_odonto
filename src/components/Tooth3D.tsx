import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { BrandToothMark } from './layout/Logo';

interface Tooth3DProps {
  size?: number;
  className?: string;
  animate?: boolean;
  /** Reage ao scroll da página quando dentro do Hero */
  parallax?: boolean;
}

export function Tooth3D({ size = 200, className = '', animate = true, parallax = false }: Tooth3DProps) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 80]);
  const rotateY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 24]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, reduceMotion ? 1 : 0.92]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, reduceMotion ? 1 : 0.4]);

  const shouldAnimate = animate && !reduceMotion;

  return (
    <motion.div
      ref={ref}
      className={`tooth-hero ${className}`}
      style={{
        width: size,
        height: size * 1.2,
        perspective: size * 5,
        flexShrink: 0,
        ...(parallax ? { y, rotateY, scale, opacity } : {}),
      }}
    >
      <div
        className={shouldAnimate ? 'tooth-hero-inner' : undefined}
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Glow ambiente */}
        <div
          style={{
            position: 'absolute',
            width: size * 1.4,
            height: size * 1.4,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <BrandToothMark
          size={size * 0.85}
          color="#ffffff"
          className={shouldAnimate ? 'tooth-mark-glow' : undefined}
        />
      </div>
    </motion.div>
  );
}

export function ToothMini({ size = 80, className = '' }: { size?: number; className?: string }) {
  const reduceMotion = useReducedMotion();

  return (
    <div
      className={`${className}${!reduceMotion ? ' tooth-mini-float' : ''}`}
      style={{
        width: size,
        height: size * 1.15,
        opacity: 0.12,
        flexShrink: 0,
      }}
    >
      <BrandToothMark size={size} color="#ffffff" />
    </div>
  );
}
