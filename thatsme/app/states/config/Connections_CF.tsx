'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface UserConfigType {
    instagram: boolean;
    toggleInstagram: () => void;
    steam: boolean;
    toggleSteam: () => void;
    spotify: boolean;
    toggleSpotify: () => void;
    facebook: boolean;
    toggleFacebook: () => void;
}
 
const UserConfigContext = createContext<UserConfigType | undefined>(undefined);

export const useConnectionsConfig = (): UserConfigType => {
    const context = useContext(UserConfigContext);
    if (!context) {
        throw new Error('useConfig must be used within an EditorProvider');
    }
    return context;
};

export const UserConnectionsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

    const [instagram, setInstagram] = useState<boolean>(false)
    const [steam, setSteam] = useState<boolean>(false)
    const [spotify, setSpotify] = useState<boolean>(false)
    const [facebook, setFacebook] = useState<boolean>(false)

    const toggleInstagram = () => {
        setInstagram(prevValue => !prevValue)
    }

    const toggleSteam = () => {
        setSteam(prevValue => !prevValue)
    }

    const toggleSpotify = () => {
        setSpotify(prevValue => !prevValue)
    }

    const toggleFacebook = () => {
        setFacebook(prevValue => !prevValue)
    }


    const value = {
        instagram,
        toggleInstagram,
        steam,
        toggleSteam,
        spotify,
        toggleSpotify,
        facebook,
        toggleFacebook
    };

    return <UserConfigContext.Provider value={value}>{children}</UserConfigContext.Provider>;
};
