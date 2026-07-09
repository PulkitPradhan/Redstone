"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { LayoutGroup } from 'framer-motion';

const LoadingContext = createContext({ 
  isLoading: true, 
  setIsLoading: (_: boolean) => {} 
});

export const useLoading = () => useContext(LoadingContext);

export const LoadingProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);
  
  // Optional safety fallback
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      <LayoutGroup>
        {children}
      </LayoutGroup>
    </LoadingContext.Provider>
  );
};
