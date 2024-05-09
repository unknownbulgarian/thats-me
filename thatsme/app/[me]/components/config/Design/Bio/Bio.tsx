'use client'

import React from 'react'
import styles from './page.module.css'

import { useConfig } from '@/app/states/config/Main&&Design'

interface BioProps {
    bio: string
}

export default function Bio({ bio }: BioProps) {

    const { customBioColor, bioChroma, theBioColor } = useConfig()


    return (
        <>
            {customBioColor
                ?
                <p style={{color: bioChroma ? '' : theBioColor}} className={`${bioChroma ? styles.bio2 : styles.bio}`}>{bio}</p>
                :
                <p className={styles.bio}>{bio}</p>}

        </>
    )
}
