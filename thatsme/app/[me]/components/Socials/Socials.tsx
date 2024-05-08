'use client'

import React from 'react'

import styles from './page.module.css'

import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaSteam } from "react-icons/fa6";
import { FaSpotify } from "react-icons/fa";
import AnimationHandler from '../AnimationHandler/AnimationHandler';

import { useConnectionsConfig } from '@/app/states/config/Connections_CF';



export default function Socials() {

    const { instagram, steam, spotify, facebook } = useConnectionsConfig()

    return (
        <div className={styles.links}>
            <AnimationHandler isSocials={true} gap='1em'>
                {instagram && <FaInstagram className={styles.linkicon} />}
                {steam && <FaSteam className={styles.linkicon} />}
                {spotify && <FaSpotify className={styles.linkicon} />}
                {facebook && <FaFacebookF className={styles.linkicon} />}
            </AnimationHandler>
        </div>
    )
}
