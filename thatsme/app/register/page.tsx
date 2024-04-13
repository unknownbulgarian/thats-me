import React from 'react'
import styles from '../page.module.css'

import RegisterForm from '../forms/register'

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
