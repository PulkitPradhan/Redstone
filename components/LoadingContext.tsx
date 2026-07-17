"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { LayoutGroup } from 'framer-motion';

const LoadingContext = createContext({ 
  isLoading: true, 
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setIsLoading: (_value: boolean) => {} 
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

  const value = React.useMemo(() => ({ isLoading, setIsLoading }), [isLoading, setIsLoading]);

  return (
    <LoadingContext.Provider value={value}>
      <LayoutGroup>
        {children}
      </LayoutGroup>
    </LoadingContext.Provider>
  );
};
