import React from 'react'
import styles from './page.module.css'

import SessionProfile from './components/session/session';
import InfoProfile from './components/info/info';
import AnimationHandler from './components/AnimationHandler/AnimationHandler';

import { useApiUrl } from '../states/api';

import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaSteam } from "react-icons/fa6";
import { FaSpotify } from "react-icons/fa";
import { MdEdit } from "react-icons/md";

import ParticlesCF from './components/Pages/Particles/config/particles';
import Config from './components/config/Config';



export default async function page({ params, searchParams }: any) {


    return (
        <>
            <ParticlesCF />
            <Config params={params} />
            <SessionProfile params={params} />
            <InfoProfile params={params} />
            <div className={styles.main}>
                <AnimationHandler>
                    <div className={styles.profile}>
                        <img className={styles.profileimg} src={searchParams.img_link}></img>
                        <h1 className={styles.username}>{searchParams.username}</h1>
                        <p className={styles.bio}>{searchParams.bio}</p>
                    </div>
                </AnimationHandler>



                <div className={styles.links}>
                    <AnimationHandler isSocials={true} gap='1em'>
                        <FaInstagram className={styles.linkicon} />
                        <FaSteam className={styles.linkicon} />
                        <FaSpotify className={styles.linkicon} />
                        <FaFacebookF className={styles.linkicon} />
                    </AnimationHandler>
                </div>

            </div>
        </>
    )
}
