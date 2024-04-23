'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface UserConfigType {
    particles: boolean;
    toggleParticles: () => void;
}

const UserConfigContext = createContext<UserConfigType | undefined>(undefined);

export const useParticlesConfig = (): UserConfigType => {
    const context = useContext(UserConfigContext);
    if (!context) {
        throw new Error('useConfig must be used within an EditorProvider');
    }
    return context;
};

export const UserParticlesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

    const [particles, setParticles] = useState<boolean>(false)

    const toggleParticles = () => {
        setParticles(prevValue => !prevValue)
    }

    const value = {
      particles,
      toggleParticles
    };

    return <UserConfigContext.Provider value={value}>{children}</UserConfigContext.Provider>;
};
