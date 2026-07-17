'use client';

import { m, useScroll, useTransform } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface ScrollParallaxProps {
  children: ReactNode;
  offset?: number;
  className?: string;
  style?: React.CSSProperties;
}
const EMPTY_STYLE: React.CSSProperties = {};

export default function ScrollParallax({
  children,
  offset = 100,
  className = '',
  style = EMPTY_STYLE,
}: ScrollParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-offset, offset]);

  return (
    <div ref={ref} className={className} style={{ overflow: 'hidden', width: '100%', height: '100%', ...style }}>
      <m.div style={{ y, width: '100%', height: '100%', position: 'relative' }}>
        {children}
      </m.div>
    </div>
  );
}
