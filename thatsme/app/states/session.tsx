'use client'


import React, { createContext, useContext, useRef, ReactNode, MutableRefObject } from 'react';
import { useRouter } from 'next/navigation'
import { useError } from './errorstate';
import { useApiUrl } from './api';

interface FetchContextType {
    checkSession: () => Promise<any>;
    setSession: (value: boolean) => void;
    sessionUsername: MutableRefObject<string>;
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

    const router = useRouter()

    const { showSuccess } = useError()
    const apiUrl = useApiUrl()

    const sessionRef = useRef<boolean>(false);
    const sessionUsername = useRef<string>('')

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
                    getUsername()
                }
            } catch (error) {
                setSession(false);
                throw error;
            }
        }
    };

    const getUsername = async () => {
        try {
            const response = await fetch(apiUrl + '/getUsername', {
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
                sessionUsername.current = data.username
                setTimeout(() => {
                    router.push('/' + data.username)
                }, 1700);
            }
        } catch (error) {
           console.log(error)
        }
    };

    const value: FetchContextType = { checkSession, setSession, sessionUsername };

    return (
        <FetchContext.Provider value={value}>
            {children}
        </FetchContext.Provider>
    );
};
