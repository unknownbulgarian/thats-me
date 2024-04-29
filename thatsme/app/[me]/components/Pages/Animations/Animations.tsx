'use client'

import React, { useState } from 'react'
import styles from './page.module.css'

import { useAnimationsConfig } from '@/app/states/config/Animations_CF'

import Toggler from '../components/toggler/toggler'
import Select from '../Particles/components/Select/Select'
import BoxChecker from '../components/boxchecker/boxchecker'


interface titleObject {
    title: string;
}

export default function AnimationsPage() {

    const [animationExpand, setAnimationExpand] = useState<boolean>(false)

    const {
        animation, setAnimation
    } = useAnimationsConfig()

    const animations: Array<titleObject> = [
        { title: 'slide-right' },
        { title: 'slide-left' },
        { title: 'slide-top' },
        { title: 'slide-bottom' },
    ]





    return (
        <div className={styles.animations}>
            <Select height='85px' value={animation} titles={animations} setOption={setAnimation} title='Animation' expand={animationExpand ? true : false} setExpand={setAnimationExpand} onClick={() => { setAnimationExpand(true) }} />
        </div>
    )
}
