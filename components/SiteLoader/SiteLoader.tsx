"use client";

import { useEffect } from 'react';
import {  m, AnimatePresence  } from "framer-motion";
import Image from 'next/image';
import { useLoading } from '@/components/LoadingContext';
import styles from './SiteLoader.module.css';

export default function SiteLoader() {
  const { isLoading, setIsLoading } = useLoading();

  useEffect(() => {
    // Sequence: 
    // 0ms: logo appears
    // 800ms: start fading out loader and transitioning logo
    const endTimer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => {
      clearTimeout(endTimer);
    };
  }, [setIsLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <m.div
          className={styles.loaderContainer}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <div className={styles.logoWrapper}>
            <m.div
              layoutId="site-logo"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Image 
                src="/logo.webp" 
                alt="Redstone Logo" 
                width={173} 
                height={173} 
                className={styles.logo}
                priority
              />
            </m.div>
          </div>
        </m.div>
      )}
    </AnimatePresence>
  );
}
