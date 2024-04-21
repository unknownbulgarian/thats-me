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

    const { toggleBoolean } = useEditor()
    const { showError } = useError()

    const [option, setOption] = useState<number>(1)

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
                        {option === 1 &&
                            <>
                                <Feature title='Design'>
                                    <IoIosColorPalette />
                                </Feature>

                                <Feature title='Connections'>
                                    <IoShareSocialSharp />
                                </Feature>

                                <Feature toggleClick={() => { showError("You can't disable this feature") }} title='Profile'>
                                    <BsPersonFill />
                                </Feature>

                                <Feature toggleClick={() => { showError("You can't disable this feature") }} title='Analytics'>
                                    <MdAnalytics />
                                </Feature>

                                <Feature title='Music'>
                                    <MdMusicNote />
                                </Feature>

                                <Feature title='Particles'>
                                    <FaRegSnowflake />
                                </Feature>

                                <Feature title='Functionality'>
                                    <IoMdSettings />
                                </Feature>
                                
                                <Feature title='Animations'>
                                    <FiCodepen />
                                </Feature>

                            </>}
                        {option === 2 &&
                            <>
                                <Feature title='Design'>
                                    <IoIosColorPalette />
                                </Feature>

                                <Feature title='Music'>
                                    <MdMusicNote />
                                </Feature>

                                <Feature title='Particles'>
                                    <FaRegSnowflake />
                                </Feature>

                                <Feature title='Functionality'>
                                    <IoMdSettings />
                                </Feature>

                                <Feature title='Animations'>
                                    <FiCodepen />
                                </Feature>
                            </>
                        }
                        {option === 3 &&
                            <>
                                <Feature toggleClick={() => { showError("You can't disable this feature") }} title='Profile'>
                                    <BsPersonFill />
                                </Feature>

                                <Feature toggleClick={() => { showError("You can't disable this feature") }} title='Analytics'>
                                    <MdAnalytics />
                                </Feature>
                            </>
                        }
                        {option === 4 &&
                            <>
                                <Feature title='Connections'>
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
