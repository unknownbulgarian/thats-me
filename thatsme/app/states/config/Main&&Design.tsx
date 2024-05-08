'use client';

import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';
import { useApiUrl } from '../api';
import { useError } from '../errorstate';

interface UserConfigType {
    //Main features
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

    //Design page
    customBackground: boolean;
    toggleCustomBackground: () => void;
    theCustomBackground: string;
    setTheCustomBackground: Dispatch<SetStateAction<string>>;
    backgroundColor: string;
    setBackgroundColor: Dispatch<SetStateAction<string>>;


    customUsernameColor: boolean;
    toggleUsernameCustomColor: () => void;
    usernameColor: boolean;
    toggleUsernameColor: () => void;
    customBioColor: boolean;
    toggleCustomBioColor: () => void;
    bioChroma: boolean;
    toggleBioChroma: () => void;
    bioColor: boolean;
    toggleBioColor: () => void;
    backgroundChroma: boolean;
    toggleBackgroundChroma: () => void;
    usernameChroma: boolean;
    toggleUsernameChroma: () => void;

    //main functions
    getFeatures: (user: string) => Promise<any>;
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

    const apiUr = useApiUrl()
    const { showSuccess, showError } = useError()

    //main features
    const [isConnections, setConnections] = useState<boolean>(false)
    const [isMusic, setMusic] = useState<boolean>(false)
    const [isParticles, setParticles] = useState<boolean>(false)
    const [isFunction, setFunction] = useState<boolean>(false)
    const [isAnimations, setAnimations] = useState<boolean>(false)

    //Design Page
    const [backgroundColor, setBackgroundColor] = useState<string>('rgb(0,0,0)')

    //Main Features
    const [customBackground, setCustomBackground] = useState<boolean>(false)
    const [theCustomBackground, setTheCustomBackground] = useState<string>('https://wallpapercave.com/wp/wp7932952.jpg')
    const [customUsernameColor, setUsernameCustomColor] = useState<boolean>(false)
    const [customBioColor, setBioCustomColor] = useState<boolean>(false)

    //Small Details
    const [backgroundChroma, setBackgroundChroma] = useState<boolean>(false)


    const [usernameChroma, setUsernameChroma] = useState<boolean>(false)
    const [usernameColor, setUsernameColor] = useState<boolean>(false)

    const [bioChroma, setBioChroma] = useState<boolean>(false)
    const [bioColor, setBioColor] = useState<boolean>(false)


    const getFeatures = async (user: string) => {
        try {
            const response = await fetch(apiUr + '/features', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ user })
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.status} - ${response.statusText}`);
            }

            const data = await response.json();
            const features = data.features

            setMusic(features.music)
            setParticles(features.particles)
            setFunction(features.functionality)
            setAnimations(features.animations)
            setConnections(features.connections)

            return data;
        } catch (error) {
            console.error('Error fetching features:', error);
            throw error;
        }
    };


    const toggleConnections = async () => {
        try {
            const response = await fetch(apiUr + '/toggleConnections', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ token: localStorage.getItem('token') })
            });

            const data = await response.json();

            if (!data.error) {
                setConnections(data.connections)
            } else {
                showError('Something went wrong')
            }

            return data;
        } catch (error) {
            console.error('Error fetching features:', error);
            throw error;
        }
    }

    const toggleMusic = () => {
        setMusic(prevValue => !prevValue)
    }

    const toggleParticles = async () => {
        try {
            const response = await fetch(apiUr + '/toggleParticles', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ token: localStorage.getItem('token') })
            });

            const data = await response.json();

            if (!data.error) {
                setParticles(data.particles)
            } else {
                showError('Something went wrong')
            }

            return data;
        } catch (error) {
            console.error('Error fetching features:', error);
            throw error;
        }

    }

    const toggleFunction = () => {
        setFunction(prevValue => !prevValue)
    }

    const toggleAnimations = async () => {
        try {
            const response = await fetch(apiUr + '/toggleAnimations', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ token: localStorage.getItem('token') })
            });

            const data = await response.json();

            if (!data.error) {
                setAnimations(data.animations)
            } else {
                showError('Something went wrong')
            }

            return data;
        } catch (error) {
            console.error('Error fetching features:', error);
            throw error;
        }
    }

    const toggleCustomBackground = () => {
        setCustomBackground(prevValue => !prevValue)
    }

    const toggleUsernameCustomColor = () => {
        setUsernameCustomColor(prevValue => !prevValue)
    }

    const toggleUsernameColor = () => {
        setUsernameColor(prevValue => !prevValue)
    }

    const toggleCustomBioColor = () => {
        setBioCustomColor(prevValue => !prevValue)
    }

    const toggleBioChroma = () => {
        setBioChroma(prevValue => !prevValue)
    }

    const toggleBioColor = () => {
        setBioColor(prevValue => !prevValue)
    }

    const toggleBackgroundChroma = () => {
        setBackgroundChroma(prevValue => !prevValue)
    }


    const toggleUsernameChroma = () => {
        setUsernameChroma(prevValue => !prevValue)
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
        toggleCustomBackground,

        theCustomBackground,
        setTheCustomBackground,

        backgroundColor,
        setBackgroundColor,

        customUsernameColor,
        toggleUsernameCustomColor,
        usernameColor,
        toggleUsernameColor,
        backgroundChroma,
        toggleBackgroundChroma,
        usernameChroma,
        toggleUsernameChroma,
        customBioColor,
        toggleCustomBioColor,
        bioChroma,
        toggleBioChroma,
        bioColor,
        toggleBioColor,

        //main functions
        getFeatures

    };

    return <UserConfigContext.Provider value={value}>{children}</UserConfigContext.Provider>;
};
