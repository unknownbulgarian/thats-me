'use client'

import React, { useState } from 'react'
import styles from './page.module.css'

import { useError } from '@/app/states/errorstate'
import { useEditor } from '@/app/states/editor'

import BackComponent from '../Pages/back/back'

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
                        <Option onClick={() => { setOption(1); setPage('') }} backColor={option === 1 ? 'rgb(165, 107, 240)' : ''} title='All' />
                        <Option onClick={() => { setOption(2); setPage('') }} backColor={option === 2 ? 'rgb(165, 107, 240)' : ''} title='General' />
                        <Option onClick={() => { setOption(3); setPage('') }} backColor={option === 3 ? 'rgb(165, 107, 240)' : ''} title='Account' />
                        <Option onClick={() => { setOption(4); setPage('') }} backColor={option === 4 ? 'rgb(165, 107, 240)' : ''} title='Connections' />
                    </div>

                    <div style={{display: page === '' ? '' : 'none'}} className={styles.thefeatures}>
                        <EditOptions />
                    </div>

                    <div style={{display: page === '' ? 'none' : ''}} className={styles.featurepages}>
                        {page !== '' &&
                            <div className={styles.back}>
                                <BackComponent />
                                <h2 className={styles.pagetitle}>{page} Settings</h2>
                            </div>
                        }
                        <FeaturesPages />
                    </div>
                </div>
            </div>
        </>
    )
}
