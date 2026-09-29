import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'left' | 'right' | 'scale';
  duration?: number;
}

const variants = {
  up: { y: 32, x: 0, scale: 0.98 },
  left: { y: 0, x: -32, scale: 0.98 },
  right: { y: 0, x: 32, scale: 0.98 },
  scale: { y: 16, x: 0, scale: 0.94 },
};

export function ScrollReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 0.9,
}: ScrollRevealProps) {
  const offset = variants[direction];

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: offset.x, y: offset.y, scale: offset.scale }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2, margin: '0px 0px -48px 0px' }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
