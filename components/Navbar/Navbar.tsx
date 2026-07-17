"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import {  m  } from "framer-motion";
import { useLoading } from '@/components/LoadingContext';
import styles from './Navbar.module.css';

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showScroll, setShowScroll] = useState(false);
  const { isLoading } = useLoading();
  const pathname = usePathname();

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.scrollY > 400) {
        setShowScroll(true);
      } else if (showScroll && window.scrollY <= 400) {
        setShowScroll(false);
      }
    };
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScroll]);



  return (
    <>
      <header className={styles.header}>
        <nav className={styles.navbar}>
          <div className={styles.navInner}>
            <Link href="/" className={styles.logo} onClick={() => setIsOpen(false)}>
              {!isLoading && (
                <m.div layoutId="site-logo" className={styles.logoImageWrapper}>
                  <Image 
                    src="/logo.webp" 
                    alt="Redstone Driving School Logo" 
                    width={52} 
                    height={52}
                    style={{ objectFit: 'contain' }}
                  />
                </m.div>
              )}
              <div className={styles.logoPlaceholder}>
                Redstone Driving School
              </div>
            </Link>

            <button type="button" 
              className={styles.hamburger} 
              onClick={() => setIsOpen(!isOpen)} 
              aria-label="Toggle menu"
            >
              <span className={`${styles.bar} ${isOpen ? styles.open : ''}`}></span>
              <span className={`${styles.bar} ${isOpen ? styles.open : ''}`}></span>
              <span className={`${styles.bar} ${isOpen ? styles.open : ''}`}></span>
            </button>
            
            <ul className={`${styles.navLinks} ${isOpen ? styles.showMenu : ''}`}>
              <li><Link href="/" className={pathname === '/' ? styles.active : ''} onClick={() => setIsOpen(false)}>Home</Link></li>
              <li><Link href="/about" className={pathname === '/about' ? styles.active : ''} onClick={() => setIsOpen(false)}>About</Link></li>
              <li><Link href="/courses" className={pathname === '/courses' ? styles.active : ''} onClick={() => setIsOpen(false)}>Courses & Pricing</Link></li>
              <li><Link href="/reviews-faq" className={pathname === '/reviews-faq' ? styles.active : ''} onClick={() => setIsOpen(false)}>Reviews & FAQ</Link></li>
              <li><Link href="/contact" className={pathname === '/contact' ? styles.active : ''} onClick={() => setIsOpen(false)}>Contact</Link></li>
              <li>
                <Link href="/registration" className="btn-primary" onClick={() => setIsOpen(false)}>Registration</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <div className={styles.floatingContact}>
        {showScroll && (
          <button type="button" onClick={scrollToTop} className={styles.floatingIcon} aria-label="Scroll to Top" style={{ backgroundColor: '#000000' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
          </button>
        )}
        <a href="mailto:info@redstonedrivingschool.com" className={styles.floatingIcon} aria-label="Email Us">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
        </a>
        <a href="tel:403-763-9365" className={styles.floatingIcon} aria-label="Call Us">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
        </a>
      </div>
    </>
  );
}
