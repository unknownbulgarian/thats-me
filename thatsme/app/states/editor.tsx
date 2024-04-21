'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface BooleanContextType {
  booleanState: boolean;
  toggleBoolean: () => void;
  option: number;
  setOption: (value: number) => void;
  page: string;
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
  const [option, setOption] = useState<number>(1)
  const [page, setPage] = useState<string>('');

  const toggleBoolean = () => {
    setBooleanState((prev) => !prev);
  };

  const value = {
    booleanState,
    toggleBoolean,
    option,
    setOption,
    page,
    setPage,
  };

  return <BooleanContext.Provider value={value}>{children}</BooleanContext.Provider>;
};
