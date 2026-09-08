'use client';

import { m } from 'framer-motion';
import { ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  yOffset?: number;
  className?: string;
  style?: React.CSSProperties;
}
const EMPTY_STYLE: React.CSSProperties = {};

export default function ScrollReveal({
  children,
  delay = 0,
  yOffset = 50,
  className = '',
  style = EMPTY_STYLE,
}: ScrollRevealProps) {
  return (
    <m.div
      className={className}
      style={style}
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ 
        type: 'spring', 
        damping: 20, 
        stiffness: 80, 
        mass: 1, 
        delay 
      }}
    >
      {children}
    </m.div>
  );
}
