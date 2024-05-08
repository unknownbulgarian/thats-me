'use client'

import React, { useEffect } from 'react'

import { useApiUrl } from '@/app/states/api'

//features
import { useConfig } from '@/app/states/config/Main&&Design'

interface ConfigProps {
    params: { me: string };
}

interface settings {
    animationSettings: animations
    connectionSettings: connections
    designSettings: design
    particlesSettings: particles
    profileSettings: profile
}

interface animations {
    animation: string;
}

interface connections {
    facebook: {
        enabled: boolean,
        url: string,
    }
    instagram: {
        enabled: boolean,
        url: string
    }
    spotify: {
        enabled: boolean,
        url: string
    }
    steam: {
        enabled: boolean,
        url: string
    }
}

interface design {
    backgroundColor: {
        chroma: boolean,
        color: string
    }
    backgroundImage: {
        enabled: boolean,
        url: string
    }
}

interface particles {
    colors: {
        particlesColor: string
        linksColor: string
    }
    general: {
        imageShape: boolean
        imageShapeUrl: string
        links: boolean
        linksOpacity: number
        linksWidth: number
        maxSize: number
        minSize: number
        particlesNumber: number
        particlesOpacity: number
        particlesShape: string
        particlesSize: number
        randomShape: boolean
        randomSize: boolean
    }
    interactivity: {
        clickEvent: boolean
        clickMode: string
        hoverEvent: boolean
        hoverMode: string
    }
    movement: {
        direction: string
        move: boolean
        outMode: string
        randomSpeed: boolean
        speed: number
        straightLine: boolean
    }
}

interface profile {
    bio: {
        bio: string
    }

    profilePhoto: {
        url: string
    }
    username: {
        name: string
    }
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
                const settings: settings = data.settings

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