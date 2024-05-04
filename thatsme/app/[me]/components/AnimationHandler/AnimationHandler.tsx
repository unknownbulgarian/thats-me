'use client'

import React from 'react'
import '../../../animations.css'


import { useAnimationsConfig } from '@/app/states/config/Animations_CF'

interface AnimationHandlerProps {
    children: React.ReactNode
    gap?: string;
    display?: string;
    isSocials?: boolean;
}

export default function AnimationHandler({ children, gap, isSocials, display }: AnimationHandlerProps) {

    const { animation } = useAnimationsConfig()


    return (
        <>
            {animation === "slide-right" &&
                <div style={{gap: isSocials ? gap : '', display: isSocials ? 'flex' : ''}} className='slide-right'>
                    {children}
                </div>}

            {animation === "slide-left" &&
                <div style={{gap: isSocials ? gap : '', display: isSocials ? 'flex' : ''}}className='slide-left'>
                    {children}
                </div>}

                {animation === "slide-top" &&
                <div style={{gap: isSocials ? gap : '', display: isSocials ? 'flex' : ''}} className='slide-top'>
                    {children}
                </div>}
                {animation === "slide-bottom" &&
                <div style={{gap: isSocials ? gap : '', display: isSocials ? 'flex' : ''}} className='slide-bottom'>
                    {children}
                </div>}
        </>
    )
}
