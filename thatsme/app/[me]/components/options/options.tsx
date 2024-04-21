import React from 'react'
import Feature from '../edit/components/feature/feature'
import { useEditor } from '@/app/states/editor'
import { useError } from '@/app/states/errorstate'


import { IoIosColorPalette } from "react-icons/io";
import { IoShareSocialSharp } from "react-icons/io5";
import { BsPersonFill } from "react-icons/bs";
import { MdAnalytics } from "react-icons/md";
import { MdMusicNote } from "react-icons/md";
import { FaRegSnowflake } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { FiCodepen } from "react-icons/fi";

export default function EditOptions() {

    const { toggleBoolean, page, setPage, option, setOption } = useEditor()
    const { showError } = useError()

    return (
        <>
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
        </>
    )
}
