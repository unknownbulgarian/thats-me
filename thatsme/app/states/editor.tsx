'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface BooleanContextType {
  booleanState: boolean; 
  toggleBoolean: () => void; 
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

  const toggleBoolean = () => {
    setBooleanState((prev) => !prev); 
  };

  const value = {
    booleanState,
    toggleBoolean,
  };

  return <BooleanContext.Provider value={value}>{children}</BooleanContext.Provider>;
};
