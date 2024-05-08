'use client'

import React from 'react'

import styles from './page.module.css'

import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaSteam } from "react-icons/fa6";
import { FaSpotify } from "react-icons/fa";
import AnimationHandler from '../AnimationHandler/AnimationHandler';

import { useConnectionsConfig } from '@/app/states/config/Connections_CF';
import { useConfig } from '@/app/states/config/Main&&Design';


export default function Socials() {

    const { isConnections } = useConfig()

    const {
        instagram, steam, spotify, facebook,
        instagramUrl, steamUrl, spotifyUrl, facebookUrl

    } = useConnectionsConfig()

    const inURL = 'https://www.instagram.com/'
    const stURL = 'https://steamcommunity.com/'
    const spURL = 'https://open.spotify.com/'
    const fcURL = 'https://facebook.com/'

    const openConnection = (defaultUrl: string, name: string) => {
        window.open(defaultUrl + name, '_blank')
    }

    return (
        <>
            {isConnections &&
                <div className={styles.links}>
                    <AnimationHandler isSocials={true} gap='1em'>
                        {instagram && <FaInstagram className={styles.linkicon} onClick={() => { openConnection(inURL, instagramUrl) }} />}
                        {steam && <FaSteam className={styles.linkicon} onClick={() => { openConnection(stURL, steamUrl) }} />}
                        {spotify && <FaSpotify className={styles.linkicon} onClick={() => { openConnection(spURL, spotifyUrl) }} />}
                        {facebook && <FaFacebookF className={styles.linkicon} onClick={() => { openConnection(fcURL, facebookUrl) }} />}
                    </AnimationHandler>
                </div>
            }
        </>
    )
}
