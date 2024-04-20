'use client'

import React, { useState } from 'react'
import styles from './page.module.css'

import Toggle from './components/toggle/toggle'
import Option from './components/option/option'

export default function EditProfile() {

    const [option, setOption] = useState<number>(1)

    return (
        <>
            <div className={styles.edit}>
                <div className={styles.theedit}>
                    <h1 className={styles.title}><span className='purple'>ThatsMe</span> Settings</h1>
                    <div className={styles.options}>
                        <Option onClick={() => { setOption(1) }} backColor={option === 1 ? 'rgb(165, 107, 240)' : ''} title='All' />
                        <Option onClick={() => { setOption(2) }} backColor={option === 2 ? 'rgb(165, 107, 240)' : ''} title='General' />
                        <Option onClick={() => { setOption(3) }} backColor={option === 3 ? 'rgb(165, 107, 240)' : ''} title='Account' />
                        <Option onClick={() => { setOption(4) }} backColor={option === 4 ? 'rgb(165, 107, 240)' : ''} title='Connections' />
                    </div>

                    <div className={styles.theoptions}>

                    </div>
                </div>
            </div>
        </>
    )
}
