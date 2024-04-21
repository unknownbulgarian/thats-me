'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface UserConfigType {
  
}

const UserConfigContext = createContext<UserConfigType | undefined>(undefined);

export const useConfig = (): UserConfigType => {
  const context = useContext(UserConfigContext);
  if (!context) {
    throw new Error('useConfig must be used within an EditorProvider');
  }
  return context;
};

export const UserConfigProvider: React.FC<{ children: ReactNode }> = ({ children }) => {




  const value = {
    
  };

  return <UserConfigContext.Provider value={value}>{children}</UserConfigContext.Provider>;
};
