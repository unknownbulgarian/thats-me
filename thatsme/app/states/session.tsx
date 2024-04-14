'use client'


import React, { createContext, useContext, useRef, ReactNode } from 'react';
import { useError } from './errorstate';
import { useApiUrl } from './api';

interface FetchContextType {
    checkSession: () => Promise<any>;
    setSession: (value: boolean) => void;
}

const FetchContext = createContext<FetchContextType | undefined>(undefined);

export const useFetchContext = (): FetchContextType => {
    const context = useContext(FetchContext);
    if (!context) {
        throw new Error('useFetchContext must be used within a FetchProvider');
    }
    return context;
};

interface FetchProviderProps {
    children: ReactNode;
}

export const FetchProvider: React.FC<FetchProviderProps> = ({ children }) => {

    const { showSuccess } = useError()
    const apiUrl = useApiUrl()

    const sessionRef = useRef<boolean>(false);

    const setSession = (value: boolean) => {
        sessionRef.current = value;
    }
    const checkSession = async () => {
        if (localStorage.getItem('token')) {
            try {
                const response = await fetch(apiUrl + '/checkSession', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ token: localStorage.getItem('token') })
                });
                const data = await response.json();

                if (data.error) {
                    setSession(false);
                }
                if (data.success) {
                    showSuccess(data.success);
                    setSession(true);
                }
            } catch (error) {
                setSession(false);
                throw error;
            }
        }
    };

    const value: FetchContextType = { checkSession, setSession };

    return (
        <FetchContext.Provider value={value}>
            {children}
        </FetchContext.Provider>
    );
};
