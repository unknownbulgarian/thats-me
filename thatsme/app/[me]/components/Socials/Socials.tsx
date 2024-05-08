import React from 'react'

import styles from './page.module.css'

import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaSteam } from "react-icons/fa6";
import { FaSpotify } from "react-icons/fa";
import AnimationHandler from '../AnimationHandler/AnimationHandler';

export default function Socials() {
    return (
        <div className={styles.links}>
            <AnimationHandler isSocials={true} gap='1em'>
                <FaInstagram className={styles.linkicon} />
                <FaSteam className={styles.linkicon} />
                <FaSpotify className={styles.linkicon} />
                <FaFacebookF className={styles.linkicon} />
            </AnimationHandler>
        </div>
    )
}
