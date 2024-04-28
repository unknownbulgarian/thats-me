'use client';

import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

interface UserConfigType {
    particles: boolean;
    toggleParticles: () => void;

    //general settings
    shape: string;
    setShape: Dispatch<SetStateAction<string>>;

    randomShape: boolean;
    setRandomShape: Dispatch<SetStateAction<boolean>>;

    isImageShape: boolean;
    setIsImageShape: Dispatch<SetStateAction<boolean>>;

    particlesNumber: number;
    setParticlesNumber: Dispatch<SetStateAction<number>>;

    particlesSize: number;
    setParticlesSize: Dispatch<SetStateAction<number>>;

    randomSize: boolean;
    setRandomSize: Dispatch<SetStateAction<boolean>>;

    minSize: number;
    setMinSize: Dispatch<SetStateAction<number>>;

    maxSize: number;
    setMaxSize: Dispatch<SetStateAction<number>>;

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

    //colors
    particlesColor: string;
    setParticlesColor: Dispatch<SetStateAction<string>>;

    linksColor: string;
    setLinksColor: Dispatch<SetStateAction<string>>;

    linksWidth: number;
    setLinksWidth: Dispatch<SetStateAction<number>>;

    linksOpacity: number;
    setLinksOpacity: Dispatch<SetStateAction<number>>;


    //Interactivity
    click: boolean;
    setClick: Dispatch<SetStateAction<boolean>>;

    clickMode: string;
    setClickMode: Dispatch<SetStateAction<string>>;

    hover: boolean;
    setHover: Dispatch<SetStateAction<boolean>>;

    hoverMode: string;
    setHoverMode: Dispatch<SetStateAction<string>>;


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
    const [shape, setShape] = useState<string>('circle')
    const [randomShape, setRandomShape] = useState<boolean>(false)
    const [isImageShape, setIsImageShape] = useState<boolean>(false)
    const [particlesNumber, setParticlesNumber] = useState<number>(80)
    const [particlesSize, setParticlesSize] = useState<number>(4)
    const [randomSize, setRandomSize] = useState<boolean>(false)
    const [minSize, setMinSize] = useState<number>(1)
    const [maxSize, setMaxSize] = useState<number>(5)
    const [particlesOpacity, setParticlesOpacity] = useState<number>(0.5)
    const [links, setLinks] = useState<boolean>(true)
    const [linksWidth, setLinksWidth] = useState<number>(1)
    const [linksOpacity, setLinksOpacity] = useState<number>(0.5)

    //movement
    const [move, setMove] = useState<boolean>(true)
    const [randomSpeed, setRandomSpeed] = useState<boolean>(false)
    const [speed, setSpeed] = useState<number>(6)
    const [direction, setDirection] = useState<string>('none')
    const [outMode, setOutMode] = useState<string>('bounce')

    //colors
    const [particlesColor, setParticlesColor] = useState<string>('#ffffff')
    const [linksColor, setLinksColor] = useState<string>('#ffffff')

    const [click, setClick] = useState<boolean>(true)
    const [clickMode, setClickMode] = useState<string>('push')

    const [hover, setHover] = useState<boolean>(true)
    const [hoverMode, setHoverMode] = useState<string>('repulse')







    const value = {
        shape,
        setShape,

        randomShape,
        setRandomShape,

        isImageShape,
        setIsImageShape,

        particles,
        toggleParticles,

        //general settings
        particlesNumber,
        setParticlesNumber,

        particlesSize,
        setParticlesSize,

        randomSize,
        setRandomSize,

        minSize,
        setMinSize,
        maxSize,
        setMaxSize,

        particlesOpacity,
        setParticlesOpacity,

        links,
        setLinks,

        linksWidth,
        setLinksWidth,

        linksOpacity,
        setLinksOpacity,

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

        //colors
        particlesColor,
        setParticlesColor,

        linksColor,
        setLinksColor,

        //Interactivity
        click,
        setClick,

        clickMode,
        setClickMode,

        hover,
        setHover,

        hoverMode,
        setHoverMode,

    };

    return <UserConfigContext.Provider value={value}>{children}</UserConfigContext.Provider>;
};
