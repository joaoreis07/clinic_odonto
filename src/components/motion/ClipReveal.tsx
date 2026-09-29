import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface ClipRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'left' | 'right' | 'down';
  duration?: number;
}

export function ClipReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 1.1,
}: ClipRevealProps) {
  const shift = {
    up: { y: 36, x: 0 },
    down: { y: -36, x: 0 },
    left: { y: 0, x: -36 },
    right: { y: 0, x: 36 },
  }[direction];

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: shift.x, y: shift.y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.2, margin: '0px 0px -48px 0px' }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
