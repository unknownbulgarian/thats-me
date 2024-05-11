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
        instagramUrl, steamUrl, spotifyUrl, facebookUrl,
        socialsBackground,    socialsBorderR,
        socialsBackgroundW, socialsBackgroundH,
        theSocialsBackgroundColor, socialsColor,
        socialsDesign, socialsPadding, socialsChroma, 
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
                    <AnimationHandler isSocials={true} gap='0.3em'>
                        {instagram && <FaInstagram
                            style={{
                                backgroundColor: socialsDesign ? socialsBackground ? theSocialsBackgroundColor : '' : '',
                                width: socialsDesign ? socialsBackground ? socialsBackgroundW : '' : '',
                                height: socialsDesign ? socialsBackground ? socialsBackgroundH : '' : '',
                                color: socialsDesign ? socialsColor : '',
                                padding: socialsDesign ? socialsPadding : '',
                                borderRadius: socialsDesign ? socialsBackground ? socialsBorderR : '' : '',
                            }}
                            className={`${socialsChroma ? styles.linkicon2 : styles.linkicon}`} onClick={() => { openConnection(inURL, instagramUrl) }} />}

                        {steam && <FaSteam style={{
                            backgroundColor: socialsDesign ? socialsBackground ? theSocialsBackgroundColor : '' : '',
                            width: socialsDesign ? socialsBackground ? socialsBackgroundW : '' : '',
                            height: socialsDesign ? socialsBackground ? socialsBackgroundH : '' : '',
                            color: socialsDesign ? socialsColor : '',
                            padding: socialsDesign ? socialsPadding : '',
                            borderRadius: socialsDesign ? socialsBackground ? socialsBorderR : '' : '',
                        }} className={`${socialsChroma ? styles.linkicon2 : styles.linkicon}`}onClick={() => { openConnection(stURL, steamUrl) }} />}

                        {spotify && <FaSpotify style={{
                            backgroundColor: socialsDesign ? socialsBackground ? theSocialsBackgroundColor : '' : '',
                            width: socialsDesign ? socialsBackground ? socialsBackgroundW : '' : '',
                            height: socialsDesign ? socialsBackground ? socialsBackgroundH : '' : '',
                            color: socialsDesign ? socialsColor : '',
                            padding: socialsDesign ? socialsPadding : '',
                            borderRadius: socialsDesign ? socialsBackground ? socialsBorderR : '' : '',
                        }} className={`${socialsChroma ? styles.linkicon2 : styles.linkicon}`} onClick={() => { openConnection(spURL, spotifyUrl) }} />}

                        {facebook && <FaFacebookF style={{
                            backgroundColor: socialsDesign ? socialsBackground ? theSocialsBackgroundColor : '' : '',
                            width: socialsDesign ? socialsBackground ? socialsBackgroundW : '' : '',
                            height: socialsDesign ? socialsBackground ? socialsBackgroundH : '' : '',
                            color: socialsDesign ? socialsColor : '',
                            padding: socialsDesign ? socialsPadding : '',
                            borderRadius: socialsDesign ? socialsBackground ? socialsBorderR : '' : '',
                        }} className={`${socialsChroma ? styles.linkicon2 : styles.linkicon}`} onClick={() => { openConnection(fcURL, facebookUrl) }} />}

                    </AnimationHandler>
                </div>
            }
        </>
    )
}
