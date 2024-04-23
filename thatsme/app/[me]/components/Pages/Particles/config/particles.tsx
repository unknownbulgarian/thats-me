'use client'


import React, { useEffect, useRef, useState } from 'react'
import styles from './page.module.css'

import { useParticlesConfig } from '@/app/states/config/Particles_CF'

export default function Particles() {


    const { particles } = useParticlesConfig()


    return (
        <>
            {particles &&
                <div className={styles.particles}>



                </div>
            }
        </>
    )
}
