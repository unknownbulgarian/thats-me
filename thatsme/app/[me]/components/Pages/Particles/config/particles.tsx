'use client'


import React, { useEffect, useRef, useState } from 'react'
import styles from './page.module.css'

import { useParticlesConfig } from '@/app/states/config/Particles_CF'

export default function Particles() {

    const { particles } = useParticlesConfig()

    const [particlesNum, setParticlesNum] = useState<Array<number>>([]);

    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const removeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    const generateParticle = () => {
        const randomNumber = Math.floor(Math.random() * 1000000);
        setParticlesNum((prevArray) => [...prevArray, randomNumber]);
        removeFirstParticle()
    };

    const removeFirstParticle = () => {
        setParticlesNum((prevArray) => {
            if (prevArray.length > 10) {
                return prevArray.slice(5);
            } else {
                return prevArray;
            }
        });
    };

    useEffect(() => {
        intervalRef.current = setInterval(generateParticle, 1000);


        return () => {

            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, []);



    return (
        <>
            {particles &&
                <div className={styles.particles}>
                    {particlesNum.map((index) => (
                        <div
                            key={index}
                            className={styles.particle}>

                        </div>
                    ))}
                </div>
            }
        </>
    )
}
