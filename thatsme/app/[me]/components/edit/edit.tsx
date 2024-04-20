'use client'

import React from 'react'
import styles from './page.module.css'

import Toggle from './components/toggle/toggle'
import Option from './components/option/option'

export default function EditProfile() {
    return (
        <>
            <div className={styles.edit}>
                <div className={styles.theedit}>
                    <h1 className={styles.title}><span className='purple'>ThatsMe</span> Settings</h1>
                    <div className={styles.options}>
                        <Option title='All' />
                        <Option title='General' />
                        <Option title='Account' />
                        <Option title='Connections' />
                    </div>

                    <div className={styles.theoptions}>

                    </div>
                </div>
            </div>
        </>
    )
}
