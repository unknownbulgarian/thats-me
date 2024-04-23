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

    links: boolean;
    setLinks: Dispatch<SetStateAction<boolean>>;

    //movement
    move: boolean;
    setMove: Dispatch<SetStateAction<boolean>>;

    randomSpeed: boolean;
    setRandomSpeed: Dispatch<SetStateAction<boolean>>;
    
    speed: number;
    setSpeed: Dispatch<SetStateAction<number>>;

    direction: any,
    setDirection: Dispatch<SetStateAction<string>>; 

    outMode: any,
    setOutMode: Dispatch<SetStateAction<string>>;


    //Interactivity
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
    const [particlesSize, setParticlesSize] = useState<number>()
    const [particlesOpacity, setParticlesOpacity] = useState<number>(0.5)
    const [links, setLinks] = useState<boolean>(true)

    //movement
    const [move, setMove] = useState<boolean>(true)
    const [randomSpeed, setRandomSpeed] = useState<boolean>(false)
    const [speed, setSpeed] = useState<number>(6)
    const [direction, setDirection] = useState<string>('none')
    const [outMode, setOutMode] = useState<string>('bounce')


    const [hover, setHover] = useState<boolean>(false)






    const value = {
        particles,
        toggleParticles,

        //general settings
        particlesNumber,
        setParticlesNumber,

        particlesOpacity,
        setParticlesOpacity,

        links,
        setLinks,

        //movement
        move,
        setMove,

        randomSpeed,
        setRandomSpeed,

        speed,
        setSpeed,

        direction,
        setDirection,

        outMode,
        setOutMode,


        //Interactivity
        hover,
        setHover,
        
    };

    return <UserConfigContext.Provider value={value}>{children}</UserConfigContext.Provider>;
};
