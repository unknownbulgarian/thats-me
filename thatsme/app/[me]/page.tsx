import React from 'react'
import styles from './page.module.css'

import SessionProfile from './components/session/session';
import InfoProfile from './components/info/info';
import AnimationHandler from './components/AnimationHandler/AnimationHandler';
import LoaderConfig from './components/Loader/Loader';

import ParticlesCF from './components/Pages/Particles/config/particles';
import Config from './components/config/Config';
import Background from './components/config/Design/Background/Background';

import Socials from './components/Socials/Socials';

import Username from './components/config/Design/Username/Username';



export default async function page({ params, searchParams }: any) {


    return (
        <>
            <LoaderConfig params={params} />
            <Background />
            <ParticlesCF />
            <Config params={params} />
            <SessionProfile params={params} />
            <InfoProfile params={params} />
            <div className={styles.main}>
                <AnimationHandler>
                    <div className={styles.profile}>
                        <img className={styles.profileimg} src={searchParams.img_link}></img>
                        <Username params={params} />
                        <p className={styles.bio}>{searchParams.bio}</p>
                    </div>
                </AnimationHandler>

                <Socials />

            </div>
        </>
    )
}
