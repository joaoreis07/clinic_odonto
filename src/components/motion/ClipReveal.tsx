import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

interface ClipRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'left' | 'right' | 'down';
  duration?: number;
}

const clipOrigin = {
  up: 'inset(100% 0% 0% 0%)',
  down: 'inset(0% 0% 100% 0%)',
  left: 'inset(0% 100% 0% 0%)',
  right: 'inset(0% 0% 0% 100%)',
};

export function ClipReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 1.1,
}: ClipRevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={`clip-reveal-wrap ${className}`.trim()}
      initial={{ clipPath: clipOrigin[direction], opacity: 0.6, scale: 1.04 }}
      whileInView={{ clipPath: 'inset(0% 0% 0% 0%)', opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-8% 0px -5% 0px' }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
