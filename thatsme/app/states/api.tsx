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
  const [apiUrl, setApiUrl] = useState<string>('https://0f5b-77-64-210-32.ngrok-free.app');

  const value = { apiUrl };

  return <ApiUrlContext.Provider value={value}>{children}</ApiUrlContext.Provider>;
};
