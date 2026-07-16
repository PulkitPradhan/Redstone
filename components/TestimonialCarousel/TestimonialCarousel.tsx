"use client";

import React, { useRef, useState, useEffect } from 'react';
import styles from './TestimonialCarousel.module.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  text: string;
  author: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

export default function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10); // 10px buffer
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = direction === 'left' ? -clientWidth : clientWidth;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.carouselWrapper}>
      <div 
        className={styles.carouselContainer} 
        ref={scrollRef} 
        onScroll={checkScroll}
      >
        {testimonials.map((testi, i) => (
          <div key={i} className={styles.carouselSlide}>
            <div className={styles.testiCard}>
              <div className={styles.quoteIcon}>"</div>
              <p className={styles.testiText}>{testi.text}</p>
              <div className={styles.testiAuthor}>- {testi.author}</div>
            </div>
          </div>
        ))}
      </div>
      
      <div className={styles.controls}>
        <button 
          onClick={() => scroll('left')} 
          disabled={!canScrollLeft}
          className={styles.controlBtn}
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={() => scroll('right')} 
          disabled={!canScrollRight}
          className={styles.controlBtn}
          aria-label="Next testimonial"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}
