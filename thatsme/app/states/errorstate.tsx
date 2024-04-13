'use client'


import React, { useRef, createContext, useState, useContext, ReactNode } from 'react';

interface ErrorContextType {
  error: string | null;
  success: string | null;
  showError: (message: string) => void;
  hideError: () => void;
  showSuccess: (message: string) => void;
  hideSuccess: () => void;
}

const ErrorContext = createContext<ErrorContextType | undefined>(undefined);

export const useError = () => {
  const context = useContext(ErrorContext);
  if (!context) {
    throw new Error('useError must be used within an ErrorProvider');
  }
  return context;
};

interface ErrorProviderProps {
  children: ReactNode;
}

export const ErrorProvider: React.FC<ErrorProviderProps> = ({ children }) => {
  const [success, setSuccess] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null);

  const timeoutIdRef = useRef<NodeJS.Timeout | null>(null);
  const innerTimeoutIdRef = useRef<NodeJS.Timeout | null>(null);



  const showError = (message: string) => {

    hideSuccess()

    if (timeoutIdRef.current) clearTimeout(timeoutIdRef.current);
    if (innerTimeoutIdRef.current) clearTimeout(innerTimeoutIdRef.current);

    setError('');

    timeoutIdRef.current = setTimeout(() => {
      setError(message);

      innerTimeoutIdRef.current = setTimeout(() => {
        hideError();
      }, 2800);
    }, 300);
  };

  const hideError = () => setError(null);

  const showSuccess = (message: string) => {

    hideError()

    if (timeoutIdRef.current) clearTimeout(timeoutIdRef.current);
    if (innerTimeoutIdRef.current) clearTimeout(innerTimeoutIdRef.current);

    setSuccess('');

    timeoutIdRef.current = setTimeout(() => {
      setSuccess(message);

      innerTimeoutIdRef.current = setTimeout(() => {
        hideSuccess();
      }, 2800);
    }, 300);

  }

  const hideSuccess = () => setSuccess(null);




  const value = { error, showError, hideError, success, hideSuccess, showSuccess };

  return <ErrorContext.Provider value={value}>{children}</ErrorContext.Provider>;
};
