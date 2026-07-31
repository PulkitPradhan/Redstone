"use client";

import { useEffect } from 'react';
import {  m, AnimatePresence, usePresence  } from "framer-motion";
import Image from 'next/image';
import { useLoading } from '@/components/LoadingContext';
import styles from './SiteLoader.module.css';

export default function SiteLoader() {
  const { isLoading, setIsLoading } = useLoading();

  useEffect(() => {
    // 1500ms: start fading out loader and transitioning logo
    const endTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => {
      clearTimeout(endTimer);
    };
  }, [setIsLoading]);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <m.div 
            className={styles.loaderBackground}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{ position: 'fixed', inset: 0, zIndex: 10000, pointerEvents: 'none' }}
          />
        )}
      </AnimatePresence>
    </>
  );
}
