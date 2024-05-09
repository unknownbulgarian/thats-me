'use client'


import React from 'react'
import styles from './page.module.css'

import { useConfig } from '@/app/states/config/Main&&Design';



interface UsernameProps {
    params: { me: string };
}


export default function Username({ params }: UsernameProps) {

    const { customUsernameColor, theUsernameColor, usernameChroma } = useConfig()


    return (
        <>
            {customUsernameColor
                ?
                <h1 style={{color: usernameChroma ? '' : theUsernameColor}} className={`${usernameChroma ? styles.username2 : styles.username}`}>{params.me}</h1>
                :
                <h1 className={styles.username}>{params.me}</h1>
            }
        </>
    )
}
