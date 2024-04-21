'use client'

import React, { useState } from 'react'
import styles from './page.module.css'

import { useError } from '@/app/states/errorstate'
import { useEditor } from '@/app/states/editor'

import Option from './components/option/option'
import EditOptions from '../options/options'
import FeaturesPages from '../features/features'


import { IoMdClose } from "react-icons/io";

export default function EditProfile() {

    const { toggleBoolean, page, setPage, option, setOption } = useEditor()
    const { showError } = useError()


    return (
        <>
            <div className={styles.edit}>
                <div className={styles.theedit}>
                    <IoMdClose onClick={() => { toggleBoolean() }} className={styles.closeedit} />
                    <h1 className={styles.title}><span className='purple'>ThatsMe</span> Settings</h1>
                    <div className={styles.options}>
                        <Option onClick={() => { setOption(1) }} backColor={option === 1 ? 'rgb(165, 107, 240)' : ''} title='All' />
                        <Option onClick={() => { setOption(2) }} backColor={option === 2 ? 'rgb(165, 107, 240)' : ''} title='General' />
                        <Option onClick={() => { setOption(3) }} backColor={option === 3 ? 'rgb(165, 107, 240)' : ''} title='Account' />
                        <Option onClick={() => { setOption(4) }} backColor={option === 4 ? 'rgb(165, 107, 240)' : ''} title='Connections' />
                    </div>

                    <div className={styles.thefeatures}>
                        <FeaturesPages />
                        <EditOptions />
                    </div>
                </div>
            </div>
        </>
    )
}
