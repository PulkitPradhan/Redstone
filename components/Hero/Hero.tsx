import Link from 'next/link';
import styles from './Hero.module.css';

interface HeroProps {
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  imageUrl?: string;
}

export default function Hero({
  title,
  subtitle,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
  imageUrl,
}: HeroProps) {
  return (
    <section className={styles.hero} style={imageUrl ? { backgroundImage: `url(${imageUrl})` } : {}}>
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
