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
import { useConfig } from '@/app/states/config/Main&&Design';



export default function EditOptions() {

    const {
        isConnections, toggleConnections,
        isMusic, toggleMusic,
        isParticles, toggleParticles,
        isFunction, toggleFunction,
        isAnimations, toggleAnimations
    } = useConfig()

    const { toggleBoolean, page, setPage, option, setOption } = useEditor()
    const { showError } = useError()

    return (
        <>
            {option === 1 && page === '' &&
                <>
                    <Feature toggled={true} mainClick={() => { setPage('design') }} toggleClick={() => { showError("You can't disable this feature") }}
                        title='Design'>
                        <IoIosColorPalette />
                    </Feature>

                    <Feature toggled={isConnections ? true : false} title='Connections' toggleClick={() => { toggleConnections() }} mainClick={() => { setPage('connections') }}>
                        <IoShareSocialSharp />
                    </Feature>

                    <Feature toggled={true} mainClick={() => { setPage('profile') }} toggleClick={() => { showError("You can't disable this feature") }}
                        title='Profile'>
                        <BsPersonFill />
                    </Feature>

                    <Feature toggled={true} mainClick={() => { setPage('analytics') }} toggleClick={() => { showError("You can't disable this feature") }}
                        title='Analytics'>
                        <MdAnalytics />
                    </Feature>

                    <Feature toggled={isMusic ? true : false} toggleClick={() => {toggleMusic()}} mainClick={() => { setPage('music') }} title='Music'>
                        <MdMusicNote />
                    </Feature>

                    <Feature toggled={isParticles ? true : false} toggleClick={() => {toggleParticles()}} mainClick={() => { setPage('particles') }} title='Particles'>
                        <FaRegSnowflake />
                    </Feature>

                    <Feature toggled={isFunction ? true : false} toggleClick={() => {toggleFunction()}} mainClick={() => { setPage('functionality') }} title='Functionality'>
                        <IoMdSettings />
                    </Feature>

                    <Feature toggled={isAnimations ? true : false} toggleClick={() => {toggleAnimations()}} mainClick={() => { setPage('animations') }} title='Animations'>
                        <FiCodepen />
                    </Feature>

                </>}
            {option === 2 && page === '' &&
                <>
                    <Feature toggled={true} mainClick={() => { setPage('design') }} toggleClick={() => { showError("You can't disable this feature") }}
                        title='Design'>
                        <IoIosColorPalette />
                    </Feature>

                    <Feature  toggled={isMusic ? true : false} toggleClick={() => {toggleMusic()}}  mainClick={() => { setPage('music') }} title='Music'>
                        <MdMusicNote />
                    </Feature>

                    <Feature toggled={isParticles ? true : false} toggleClick={() => {toggleParticles()}} mainClick={() => { setPage('particles') }} title='Particles'>
                        <FaRegSnowflake />
                    </Feature>

                    <Feature toggled={isFunction ? true : false} toggleClick={() => {toggleFunction()}} mainClick={() => { setPage('functionality') }} title='Functionality'>
                        <IoMdSettings />
                    </Feature>

                    <Feature toggled={isAnimations ? true : false} toggleClick={() => {toggleAnimations()}} mainClick={() => { setPage('animations') }} title='Animations'>
                        <FiCodepen />
                    </Feature>
                </>
            }
            {option === 3 && page === '' &&
                <>
                    <Feature toggled={true} mainClick={() => { setPage('profile') }} toggleClick={() => { showError("You can't disable this feature") }}
                        title='Profile'>
                        <BsPersonFill />
                    </Feature>

                    <Feature toggled={true} mainClick={() => { setPage('analytics') }} toggleClick={() => { showError("You can't disable this feature") }}
                        title='Analytics'>
                        <MdAnalytics />
                    </Feature>
                </>
            }
            {option === 4 && page === '' &&
                <>
                    <Feature toggled={isConnections ? true : false} toggleClick={() => { toggleConnections() }} title='Connections' mainClick={() => { setPage('connections') }}>
                        <IoShareSocialSharp />
                    </Feature>
                </>
            }
        </>
    )
}
