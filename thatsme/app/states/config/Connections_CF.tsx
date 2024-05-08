'use client';

import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

interface UserConfigType {
    instagram: boolean;
    toggleInstagram: () => void;
    steam: boolean;
    toggleSteam: () => void;
    spotify: boolean;
    toggleSpotify: () => void;
    facebook: boolean;
    toggleFacebook: () => void;

    setInstagram:  Dispatch<SetStateAction<boolean>>;
    setSteam: Dispatch<SetStateAction<boolean>>;
    setSpotify: Dispatch<SetStateAction<boolean>>;
    setFacebook: Dispatch<SetStateAction<boolean>>;

    //urls
    instagramUrl: string;
    setInstagramUrl: Dispatch<SetStateAction<string>>;

    steamUrl: string;
    setSteamUrl: Dispatch<SetStateAction<string>>;

    spotifyUrl: string;
    setSpotifyUrl: Dispatch<SetStateAction<string>>;

    facebookUrl: string;
    setFacebookUrl: Dispatch<SetStateAction<string>>;

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

    const [instagramUrl, setInstagramUrl] = useState<string>('')
    const [steamUrl, setSteamUrl] = useState<string>('')
    const [spotifyUrl, setSpotifyUrl] = useState<string>('')
    const [facebookUrl, setFacebookUrl] = useState<string>('')

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
        toggleFacebook,

        setInstagram,
        setSteam,
        setSpotify,
        setFacebook,

        //urls
        instagramUrl,
        setInstagramUrl,

        steamUrl,
        setSteamUrl,

        spotifyUrl,
        setSpotifyUrl,
        
        facebookUrl,
        setFacebookUrl
    };

    return <UserConfigContext.Provider value={value}>{children}</UserConfigContext.Provider>;
};
