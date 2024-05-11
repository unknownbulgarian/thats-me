import React from 'react'
import styles from '../page.module.css'
import type { Metadata } from 'next'

import RegisterForm from '../forms/register'

export const metadata: Metadata = {
    title: 'ThatsMe Register Page',
    description: 'Create an amazing showcase profile in no time!',
    openGraph: {
        images: 'https://i.ibb.co/7R0pQyK/Screenshot-2024-05-11-111814.png'
    }
  }

export default function page() {
    return (
        <>
            <div className={styles.home}>
                <div className={styles.logo}>
                    <img className={styles.thelogo} src="/logo/logo.png"></img>
                </div>
                <h1 className={styles.title}>Welcome to <span className="purple">ThatsMe</span></h1>
                <RegisterForm />
            </div>
        </>
    )
}
