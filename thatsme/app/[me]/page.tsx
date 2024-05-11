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
import Bio from './components/config/Design/Bio/Bio';

import type { Metadata, ResolvingMetadata } from 'next'

type Props = {
    params: { me: string }
    searchParams: {
        bio: string,
        img_link: string,
    }
}

export async function generateMetadata(
    { params }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {

    const userInfo = await fetch(`https://painted-stack-trusted-appeared.trycloudflare.com/getUserInfo`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: params.me })
    }).then((res) =>  res.json())

    return {
        title: userInfo.username !== undefined ? 'ThatsME ' + userInfo.username : 'Profile not found',
        description: userInfo.bio,
        openGraph: {
            images: userInfo.img_link
        }
    }
}

export default async function page({ params, searchParams }: Props) {


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
                        <Bio bio={searchParams.bio} />
                    </div>
                </AnimationHandler>

                <Socials />

            </div>
        </>
    )
}
