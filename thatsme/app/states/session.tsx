import React, { createContext, useContext, useRef, ReactNode } from 'react';

interface FetchContextType {
    fetchData: (url: string, options?: RequestInit) => Promise<any>;
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

    const sessionRef = useRef<boolean>(false);

    const setSession = (value: boolean) => {
        sessionRef.current = value;
    }

    const fetchData = async (url: string, options?: RequestInit) => {
        try {
            const response = await fetch(url, options);
            const data = await response.json();
            return data;
        } catch (error) {
            throw error;
        }
    };

    const value: FetchContextType = { fetchData, setSession };

    return (
        <FetchContext.Provider value={value}>
            {children}
        </FetchContext.Provider>
    );
};
