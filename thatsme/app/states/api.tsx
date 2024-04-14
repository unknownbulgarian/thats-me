'use client'

import React, { createContext, useState, useContext, ReactNode } from 'react';

interface ApiUrlContextType {
  apiUrl: string;
}

const ApiUrlContext = createContext<ApiUrlContextType | undefined>(undefined);

export const useApiUrl = () => {
  const context = useContext(ApiUrlContext);
  if (!context) {
    throw new Error('useApiUrl must be used within an ApiUrlProvider');
  }
  return context.apiUrl;
};

interface ApiUrlProviderProps {
  children: ReactNode;
}

export const ApiUrlProvider: React.FC<ApiUrlProviderProps> = ({ children }) => {
  const [apiUrl, setApiUrl] = useState<string>('http://localhost:3560');

  const value = { apiUrl };

  return <ApiUrlContext.Provider value={value}>{children}</ApiUrlContext.Provider>;
};
