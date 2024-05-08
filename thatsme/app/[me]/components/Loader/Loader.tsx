'use client'

import React, { useEffect } from 'react'

import { useApiUrl } from '@/app/states/api'

//features
import { useConfig } from '@/app/states/config/Main&&Design'
import { useConnectionsConfig } from '@/app/states/config/Connections_CF'
import { useAnimationsConfig } from '@/app/states/config/Animations_CF'
import { useParticlesConfig } from '@/app/states/config/Particles_CF'

interface ConfigProps {
    params: { me: string };
}

interface settings {
    animationSettings: animations
    connectionsSettings: connections
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
        setTheCustomBackground, setCustomBackground

    } = useConfig()

    const {
        setFacebook, setSteam, setSpotify, setInstagram,
        setFacebookUrl, setSteamUrl, setSpotifyUrl, setInstagramUrl
    } = useConnectionsConfig()

    const {
        setAnimation
    } = useAnimationsConfig()

    const {
        setShape,
        setRandomShape,
        setIsImageShape,
        setImageShape,
        setImageW,
        setImageH,
        setParticlesNumber,
        setParticlesSize,
        setRandomSize,
        setMinSize,
        setMaxSize,
        setParticlesOpacity,
        setLinks,
        setLinksWidth,
        setLinksOpacity,
        setMove,
        setRandomSpeed,
        setSpeed,
        setDirection,
        setStraightLine,
        setOutMode,
        setParticlesColor,
        setLinksColor,
        setClick,
        setClickMode,
        setHover,
        setHoverMode,
    } = useParticlesConfig()


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
                const connections = settings.connectionsSettings
                const animations = settings.animationSettings
                const particles = settings.particlesSettings
                const profile = settings.profileSettings

                //Design
                setBackgroundChroma(design.backgroundColor.chroma)
                setBackgroundColor(design.backgroundColor.color)
                setCustomBackground(design.backgroundImage.enabled)
                setTheCustomBackground(design.backgroundImage.url)

                //Connections
                setInstagram(connections.instagram.enabled)
                setSteam(connections.steam.enabled)
                setSpotify(connections.spotify.enabled)
                setFacebook(connections.facebook.enabled)

                setInstagramUrl(connections.instagram.url)
                setSteamUrl(connections.steam.url)
                setSpotifyUrl(connections.spotify.url)
                setFacebookUrl(connections.facebook.url)

                //Animations
                setAnimation(animations.animation)

                //Particles colors
                setLinksColor(particles.colors.linksColor)
                setParticlesColor(particles.colors.particlesColor)

                //Particles general
                setIsImageShape(particles.general.imageShape)
                setImageShape(particles.general.imageShapeUrl)
                setLinks(particles.general.links)
                setLinksOpacity(particles.general.linksOpacity)
                setLinksWidth(particles.general.linksWidth)
                setMaxSize(particles.general.maxSize)
                setMinSize(particles.general.minSize)
                setParticlesNumber(particles.general.particlesNumber)
                setParticlesOpacity(particles.general.particlesOpacity)
                setShape(particles.general.particlesShape)
                setParticlesSize(particles.general.particlesSize)
                setRandomShape(particles.general.randomShape)
                setRandomSize(particles.general.randomSize)

                //Particles interactivity
                setClick(particles.interactivity.clickEvent)
                setClickMode(particles.interactivity.clickMode)
                setHover(particles.interactivity.hoverEvent)
                setHoverMode(particles.interactivity.hoverMode)

                //Particles movement
                setDirection(particles.movement.direction)
                setMove(particles.movement.move)
                setOutMode(particles.movement.outMode)
                setRandomSpeed(particles.movement.randomSpeed)
                setSpeed(particles.movement.speed)
                setStraightLine(particles.movement.straightLine)






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