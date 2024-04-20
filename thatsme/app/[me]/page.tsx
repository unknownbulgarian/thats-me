import React from 'react'
import styles from './page.module.css'

import SessionProfile from './components/session/session';

import { useApiUrl } from '../states/api';

import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaSteam } from "react-icons/fa6";
import { FaSpotify } from "react-icons/fa";
import { MdEdit } from "react-icons/md";



export default async function page({ params }: { params: { me: string } }) {


    return (
        <>
            <SessionProfile />
            <div className={styles.main}>

                <div className={styles.profile}>
                    <img className={styles.profileimg} src='https://wallpapercave.com/wp/wp12706151.jpg'></img>
                    <h1 className={styles.username}>{params.me}</h1>
                    <p className={styles.bio}>Thats my bio bro I feel so good haha :D :D :D</p>
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
