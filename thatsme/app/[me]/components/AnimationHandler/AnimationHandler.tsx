'use client'

import React from 'react'
import '../../../animations.css'


import { useAnimationsConfig } from '@/app/states/config/Animations_CF'
import { useConfig } from '@/app/states/config/Main&&Design'
import { wrap } from 'module'

interface AnimationHandlerProps {
    children: React.ReactNode
    gap?: string;
    display?: string;
    isSocials?: boolean;
}

export default function AnimationHandler({ children, gap, isSocials, display }: AnimationHandlerProps) {

    const { animation } = useAnimationsConfig()
    const { isAnimations } = useConfig()


    return (
        <>
            {animation === 'none' &&
                <div style={{ paddingLeft: '1em', paddingRight: '1em', gap: isSocials ? gap : '', display: isSocials ? 'flex' : '', flexWrap: 'wrap', justifyContent: 'center' }} className={isAnimations ? '' : ''}>
                    {children}
                </div>}
        

            {animation === "slide-right" &&
                <div style={{paddingLeft: '1em', paddingRight: '1em', gap: isSocials ? gap : '', display: isSocials ? 'flex' : '', flexWrap: 'wrap', justifyContent: 'center' }} className={isAnimations ? 'slide-right' : ''}>
                    {children}
                </div>}

            {animation === "slide-left" &&
                <div style={{paddingLeft: '1em', paddingRight: '1em', gap: isSocials ? gap : '', display: isSocials ? 'flex' : '', flexWrap: 'wrap', justifyContent: 'center' }} className={isAnimations ? 'slide-left' : ''}>
                    {children}
                </div>}

            {animation === "slide-top" &&
                <div style={{paddingLeft: '1em', paddingRight: '1em', gap: isSocials ? gap : '', display: isSocials ? 'flex' : '', flexWrap: 'wrap', justifyContent: 'center' }} className={isAnimations ? 'slide-top' : ''}>
                    {children}
                </div>}
            {animation === "slide-bottom" &&
                <div style={{paddingLeft: '1em', paddingRight: '1em', gap: isSocials ? gap : '', display: isSocials ? 'flex' : '', flexWrap: 'wrap', justifyContent: 'center' }} className={isAnimations ? 'slide-bottom' : ''}>
                    {children}
                </div>}
        </>
    )
}
