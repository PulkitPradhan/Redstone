"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {  m, useScroll, useTransform  } from "framer-motion";
import styles from './Hero.module.css';

interface HeroProps {
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  imageUrl?: string;
  imageUrls?: string[];
}

export default function Hero({
  title,
  subtitle,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
  imageUrl,
  imageUrls,
}: HeroProps) {
  const images = imageUrls || (imageUrl ? [imageUrl] : []);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);

  useEffect(() => {
    if (images.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className={styles.hero}>
      <m.div 
        className={styles.parallaxContainer}
        style={{ y, scale: 1.15 }}
      >
        {images.map((url, idx) => (
          <div
            key={url}
            className={styles.bgSlide}
            style={{
              backgroundImage: `url(${url})`,
              opacity: idx === currentIndex ? 1 : 0
            }}
          />
        ))}
      </m.div>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        <div className={styles.actions}>
          {ctaText && ctaLink && (
            <Link href={ctaLink} className="btn-primary">
              {ctaText}
            </Link>
          )}
          {secondaryCtaText && secondaryCtaLink && (
            <Link href={secondaryCtaLink} className="btn-secondary">
              {secondaryCtaText}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
