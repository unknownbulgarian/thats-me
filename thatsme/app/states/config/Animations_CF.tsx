'use client';

import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

interface UserConfigType {
   profilePhoto: boolean;
   setProfilePhoto: Dispatch<SetStateAction<boolean>>
}
 
const UserConfigContext = createContext<UserConfigType | undefined>(undefined);

export const useAnimationsConfig = (): UserConfigType => {
    const context = useContext(UserConfigContext);
    if (!context) {
        throw new Error('useConfig must be used within an EditorProvider');
    }
    return context;
};

export const AnimationsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

    const [profilePhoto, setProfilePhoto] = useState<boolean>(false)


    const value = {
        profilePhoto,
        setProfilePhoto,
    };

    return <UserConfigContext.Provider value={value}>{children}</UserConfigContext.Provider>;
};
