import React from 'react'
import styles from './page.module.css'

import SessionProfile from './components/session/session';
import InfoProfile from './components/info/info';

import { useApiUrl } from '../states/api';

import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaSteam } from "react-icons/fa6";
import { FaSpotify } from "react-icons/fa";
import { MdEdit } from "react-icons/md";

import Particles from './components/Pages/Particles/config/particles';



export default async function page({ params, searchParams }: any) {


    return (
        <>
            <Particles />
            <SessionProfile params={params} />
            <InfoProfile params={params} />
            <div className={styles.main}>

                <div className={styles.profile}>
                    <img className={styles.profileimg} src={searchParams.img_link}></img>
                    <h1 className={styles.username}>{searchParams.username}</h1>
                    <p className={styles.bio}>{searchParams.bio}</p>
                </div>


                <div className={styles.links}>
                    <FaInstagram className={styles.linkicon} />
                    <FaSteam className={styles.linkicon} />
                    <FaSpotify className={styles.linkicon} />
                    <FaFacebookF className={styles.linkicon} />
                </div>
            </div>
        </>
    )
}
