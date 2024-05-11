import React from 'react'
import styles from '../page.module.css'
import type { Metadata } from 'next'

import RegisterForm from '../forms/register'

export const metadata: Metadata = {
    title: 'ThatsMe Register Page',
    description: 'Create an amazing showcase profile in no time!',
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
