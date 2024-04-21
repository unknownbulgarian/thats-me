'use client'

import React, { useState } from 'react'
import styles from './page.module.css'

import { useError } from '@/app/states/errorstate'
import { useEditor } from '@/app/states/editor'

import Toggle from './components/toggle/toggle'
import Option from './components/option/option'
import Feature from './components/feature/feature'

import { IoIosColorPalette } from "react-icons/io";
import { IoShareSocialSharp } from "react-icons/io5";
import { BsPersonFill } from "react-icons/bs";
import { MdAnalytics } from "react-icons/md";
import { MdMusicNote } from "react-icons/md";
import { FaRegSnowflake } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { FiCodepen } from "react-icons/fi";

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
                        {option === 1 && page === '' &&
                            <>
                                <Feature mainClick={() => { setPage('design') }}
                                    title='Design'>
                                    <IoIosColorPalette />
                                </Feature>

                                <Feature title='Connections' mainClick={() => { setPage('connections') }}>
                                    <IoShareSocialSharp />
                                </Feature>

                                <Feature mainClick={() => { setPage('profile') }} toggleClick={() => { showError("You can't disable this feature") }}
                                    title='Profile'>
                                    <BsPersonFill />
                                </Feature>

                                <Feature mainClick={() => { setPage('analytics') }} toggleClick={() => { showError("You can't disable this feature") }}
                                    title='Analytics'>
                                    <MdAnalytics />
                                </Feature>

                                <Feature mainClick={() => { setPage('music') }} title='Music'>
                                    <MdMusicNote />
                                </Feature>

                                <Feature mainClick={() => { setPage('particles') }} title='Particles'>
                                    <FaRegSnowflake />
                                </Feature>

                                <Feature mainClick={() => { setPage('function') }} title='Functionality'>
                                    <IoMdSettings />
                                </Feature>

                                <Feature mainClick={() => { setPage('animations') }} title='Animations'>
                                    <FiCodepen />
                                </Feature>

                            </>}
                        {option === 2 && page === '' &&
                            <>
                                <Feature mainClick={() => { setPage('design') }}
                                    title='Design'>
                                    <IoIosColorPalette />
                                </Feature>

                                <Feature mainClick={() => { setPage('music') }} title='Music'>
                                    <MdMusicNote />
                                </Feature>

                                <Feature mainClick={() => { setPage('particles') }} title='Particles'>
                                    <FaRegSnowflake />
                                </Feature>

                                <Feature mainClick={() => { setPage('function') }} title='Functionality'>
                                    <IoMdSettings />
                                </Feature>

                                <Feature mainClick={() => { setPage('animations') }} title='Animations'>
                                    <FiCodepen />
                                </Feature>
                            </>
                        }
                        {option === 3 && page === '' &&
                            <>
                                <Feature mainClick={() => { setPage('profile') }} toggleClick={() => { showError("You can't disable this feature") }}
                                    title='Profile'>
                                    <BsPersonFill />
                                </Feature>

                                <Feature mainClick={() => { setPage('analytics') }} toggleClick={() => { showError("You can't disable this feature") }}
                                    title='Analytics'>
                                    <MdAnalytics />
                                </Feature>
                            </>
                        }
                        {option === 4 && page === '' &&
                            <>
                                <Feature title='Connections' mainClick={() => { setPage('connections') }}>
                                    <IoShareSocialSharp />
                                </Feature>
                            </>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
