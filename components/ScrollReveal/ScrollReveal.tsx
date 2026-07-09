'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  yOffset?: number;
  duration?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function ScrollReveal({
  children,
  delay = 0,
  yOffset = 50,
  duration = 0.8,
  className = '',
  style = {},
}: ScrollRevealProps) {
  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
}
