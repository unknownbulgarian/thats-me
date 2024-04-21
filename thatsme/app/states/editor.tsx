'use client';

import React, { createContext, useContext, useState, ReactNode, MutableRefObject, useRef } from 'react';

interface BooleanContextType {
  booleanState: boolean;
  toggleBoolean: () => void;
  page: MutableRefObject<string>;
  setPage: (value: string) => void;
}

const BooleanContext = createContext<BooleanContextType | undefined>(undefined);

export const useEditor = (): BooleanContextType => {
  const context = useContext(BooleanContext);
  if (!context) {
    throw new Error('useEditor must be used within an EditorProvider');
  }
  return context;
};

export const EditorProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [booleanState, setBooleanState] = useState<boolean>(false);
  const page = useRef<string>('');

  const toggleBoolean = () => {
    setBooleanState((prev) => !prev);
  };

  const setPage = (value: string) => {
    page.current = value; 
  };

  const value = {
    booleanState,
    toggleBoolean,
    page,
    setPage,
  };

  return <BooleanContext.Provider value={value}>{children}</BooleanContext.Provider>;
};
