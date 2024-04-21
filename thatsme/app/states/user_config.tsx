'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface UserConfigType {
    isConnections: boolean;
    toggleConnections: () => void;
    isMusic: boolean;
    toggleMusic: () => void;
    isParticles: boolean;
    toggleParticles: () => void;
    isFunction: boolean;
    toggleFunction: () => void;
    isAnimations: boolean;
    toggleAnimations: () => void;

    customBackground : boolean;
    toggleCustomBackground: () => void;
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

    //main features
    const [isConnections, setConnections] = useState<boolean>(false)
    const [isMusic, setMusic] = useState<boolean>(false)
    const [isParticles, setParticles] = useState<boolean>(false)
    const [isFunction, setFunction] = useState<boolean>(false)
    const [isAnimations, setAnimations] = useState<boolean>(false)

    const [customBackground, setCustomBackground] = useState<boolean>(false)

    const toggleConnections = () => {
        setConnections(prevValue => !prevValue)
    }

    const toggleMusic = () => {
        setMusic(prevValue => !prevValue)
    }

    const toggleParticles = () => {
        setParticles(prevValue => !prevValue)
    }

    const toggleFunction = () => {
        setFunction(prevValue => !prevValue)
    }

    const toggleAnimations = () => {
        setAnimations(prevValue => !prevValue)
    }

    const toggleCustomBackground = () => {
        setCustomBackground(prevValue => !prevValue)
    }

    const value = {
        isConnections,
        toggleConnections,
        isMusic,
        toggleMusic,
        isParticles,
        toggleParticles,
        isFunction,
        toggleFunction,
        isAnimations,
        toggleAnimations,
        customBackground,
        toggleCustomBackground

    };

    return <UserConfigContext.Provider value={value}>{children}</UserConfigContext.Provider>;
};
