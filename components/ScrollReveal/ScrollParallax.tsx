'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface ScrollParallaxProps {
  children: ReactNode;
  offset?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function ScrollParallax({
  children,
  offset = 100,
  className = '',
  style = {},
}: ScrollParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-offset, offset]);

  return (
    <div ref={ref} className={className} style={{ overflow: 'hidden', ...style }}>
      <motion.div style={{ y, width: '100%', height: '100%' }}>
        {children}
      </motion.div>
    </div>
  );
}
