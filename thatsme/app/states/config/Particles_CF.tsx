'use client';

import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

interface UserConfigType {
    particles: boolean;
    toggleParticles: () => void;

    //general settings
    particlesNumber: number;
    setParticlesNumber: Dispatch<SetStateAction<number>>

    particlesOpacity: number;
    setParticlesOpacity: Dispatch<SetStateAction<number>>;

    hover: boolean;
    setHover: Dispatch<SetStateAction<boolean>>
    

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

    const [particles, setParticles] = useState<boolean>(true)

    const toggleParticles = () => {
        setParticles(prevValue => !prevValue)
    }


    //details config starts from here

    //general
    const [particlesNumber, setParticlesNumber] = useState<number>(80)
    const [particlesOpacity, setParticlesOpacity] = useState<number>(0.5)


    const [hover, setHover] = useState<boolean>(false)






    const value = {
        particles,
        toggleParticles,

        //general settings
        particlesNumber,
        setParticlesNumber,

        particlesOpacity,
        setParticlesOpacity,

        hover,
        setHover,
    };

    return <UserConfigContext.Provider value={value}>{children}</UserConfigContext.Provider>;
};
