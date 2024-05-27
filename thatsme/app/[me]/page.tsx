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

export const fetchCache = 'force-no-store';

import type { Metadata, ResolvingMetadata } from 'next'
import { userInfo } from 'os';

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

    const userInfo = await fetch(`https://thats-me-server.onrender.com/getUserInfo`, {
        cache: 'no-store',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache'

        },
        body: JSON.stringify({ username: params.me })
    }).then((res) => res.json())

    return {
        title: userInfo.username !== undefined ? 'ThatsME ' + userInfo.username : 'Profile not found',
        description: userInfo.bio,
        openGraph: {
            images: userInfo.img_link
        }
    }
}


interface userData {
    username: string;
    bio: string;
    img_link: string;
}


async function getUserInfo(username: string) {
    const response = await fetch('https://thats-me-server.onrender.com/getCategoryGames', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username }),
    });


    if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
    }

    return response.json();
}



export default async function page({ params, searchParams }: Props) {

    const user : userData = await getUserInfo(params.me)


    return (
        <>
            <LoaderConfig params={params} />
            <Background />
            <ParticlesCF />
            <Config params={params} />
            <SessionProfile params={params} />
            <InfoProfile params={params} />
            <div className={styles.main}>
                    <div className={styles.profile}>
                        <img className={styles.profileimg} src={user.img_link}></img>
                        <Username params={params} />
                        <Bio bio={user.bio} />
                    </div>
                <Socials />

            </div>
        </>
    )
}
