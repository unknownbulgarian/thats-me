'use client';

import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

interface UserConfigType {
   animation: string;
   setAnimation: Dispatch<SetStateAction<string>>
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

     const [animation, setAnimation] = useState<string>('slide-right')


    const value = {
      animation,
      setAnimation
    };

    return <UserConfigContext.Provider value={value}>{children}</UserConfigContext.Provider>;
};
