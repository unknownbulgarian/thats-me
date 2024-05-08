'use client'

import React, { useEffect } from 'react'

import { useApiUrl } from '@/app/states/api'

//features
import { useConfig } from '@/app/states/config/Main&&Design'

interface ConfigProps {
    params: { me: string };
}


const LoaderConfig: React.FC<ConfigProps> = ({ params }) => {

    const apiUrl = useApiUrl()
    const {
        setBackgroundColor, setBackgroundChroma,
        
    } = useConfig()


    const loadSettings = async () => {
        try {
            const response = await fetch(apiUrl + '/loadSettings', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username: params.me })
            });

            const data = await response.json();

            if (!data.error) {
                console.log(data.settings)
                const settings = data.settings

                const design = settings.designSettings

                setBackgroundChroma(design.backgroundColor.chroma)
                setBackgroundColor(design.backgroundColor.color)

            } else {
                console.log(data.error)
            }

            return data;
        } catch (error) {
            console.error('Error fetching features:', error);
            throw error;
        }
    }

    useEffect(() => {
        loadSettings()
    }, [])


    return (
        <></>
    )
}


export default LoaderConfig