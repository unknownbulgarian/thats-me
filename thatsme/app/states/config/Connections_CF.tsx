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

    socialsDesign: boolean;
    setSocialsDesign: Dispatch<SetStateAction<boolean>>;

    socialsBackground: boolean;
    setSocialsBackground:  Dispatch<SetStateAction<boolean>>;

    socialsBackgroundW: number;
    setSocialsBackgroundW:  Dispatch<SetStateAction<number>>;

    socialsBackgroundH: number;
    setSocialsBackgroundH:  Dispatch<SetStateAction<number>>;

    socialsPadding: number;
    setSocialsPadding:  Dispatch<SetStateAction<number>>;

    theSocialsBackgroundColor: string;
    setTheSocialsBackgroundColor:  Dispatch<SetStateAction<string>>;

    socialsColor: string;
    setSocialColor:  Dispatch<SetStateAction<string>>;

    socialsChroma: boolean;
    setSocialsChroma: Dispatch<SetStateAction<boolean>>;

    socialsBorderR: number;
    setSocialsBorderR: Dispatch<SetStateAction<number>>;

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

    const [socialsDesign, setSocialsDesign] = useState<boolean>(false)
    const [socialsBackground, setSocialsBackground] = useState<boolean>(false)
    const [socialsBackgroundW, setSocialsBackgroundW] = useState<number>(10)
    const [socialsBackgroundH, setSocialsBackgroundH] = useState<number>(10)
    const [socialsPadding, setSocialsPadding] = useState<number>(0.3)
    const [theSocialsBackgroundColor, setTheSocialsBackgroundColor] = useState<string>('#FF0000')
    const [socialsColor, setSocialColor] = useState<string>('#FFFFFF')
    const [socialsChroma, setSocialsChroma] = useState<boolean>(false)

    const [socialsBorderR, setSocialsBorderR] = useState<number>(10)

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
        setFacebookUrl,

        socialsDesign,
        setSocialsDesign,

        socialsBackground,
        setSocialsBackground,

        socialsBackgroundH,
        setSocialsBackgroundH,

        socialsBackgroundW,
        setSocialsBackgroundW,

        socialsPadding,
        setSocialsPadding,

        socialsColor,
        setSocialColor,

        theSocialsBackgroundColor,
        setTheSocialsBackgroundColor,

        socialsChroma,
        setSocialsChroma,

        socialsBorderR,
        setSocialsBorderR,
    };

    return <UserConfigContext.Provider value={value}>{children}</UserConfigContext.Provider>;
};
