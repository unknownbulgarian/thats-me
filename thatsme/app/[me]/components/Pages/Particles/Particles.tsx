import React, { useState } from 'react'
import styles from './page.module.css'

import { useParticlesConfig } from '@/app/states/config/Particles_CF'
import { useError } from '@/app/states/errorstate'

import BoxChecker from '../components/boxchecker/boxchecker'
import RGInput from './components/RGInput/RGInput'

import Select from './components/Select/Select'

interface TitleObject {
    title: string;
}

export default function ParticlesPage() {

    const { showError } = useError()

    const [directionExpand, setDirectionExpand] = useState<boolean>(false)
    const [outExpand, setOutExpand] = useState<boolean>(false)

    const [clickModeExpand, setClickModeExpand] = useState<boolean>(false)
    const [hoverModeExpand, setHoverModeExpand] = useState<boolean>(false)

    const directions: Array<TitleObject> = [
        { title: 'none' },
        { title: 'top' },
        { title: 'top-right' },
        { title: 'right' },
        { title: 'bottom-right' },
        { title: 'bottom' },
        { title: 'bottom-left' },
        { title: 'left' },
        { title: 'top-left' },
    ]

    const outModes: Array<TitleObject> = [
        { title: 'out' },
        { title: 'bounce' }
    ]

    const clickModes: Array<TitleObject> = [
        {title: 'push'},
        {title: 'remove'},
        {title: 'bubble'},
        {title: 'repulse'},
    ]

    const hoverModes: Array<TitleObject> = [
        {title: 'grab'},
        {title: 'bubble'},
        {title: 'repulse'},
    ]

    const {
        //general
        particlesNumber,
        setParticlesNumber,

        particlesSize,
        setParticlesSize,

        randomSize,
        setRandomSize,

        minSize,
        setMinSize,
        maxSize,
        setMaxSize,

        particlesOpacity,
        setParticlesOpacity,

        links,
        setLinks,


        //movement
        move,
        setMove,

        randomSpeed,
        setRandomSpeed,

        speed,
        setSpeed,

        direction,
        setDirection,

        outMode,
        setOutMode,

        //colors
        particlesColor,
        setParticlesColor,

        linksColor,
        setLinksColor,

        //Interactivity
        click, setClick,

        clickMode, setClickMode,

        hover, setHover,

        hoverMode, setHoverMode,

    } = useParticlesConfig()

    return (
        <div className={styles.particlespage}>

            <div className={styles.options}>

                <h2 className={styles.title}>General</h2>
                <RGInput type='range' marginBottom='1.4em' maxLength={3} min={0} max={430} value={particlesNumber} onInput={(e) => { setParticlesNumber(Number(e.currentTarget.value)) }} title='Particles Number' />
                <RGInput type='range' marginBottom='1.4em' maxLength={3} min={0} max={130} value={particlesSize} onInput={(e) => { setParticlesSize(Number(e.currentTarget.value)) }} title='Size' />
                <BoxChecker title='Random Size' toggled={randomSize ? true : false} onClick={() => { setRandomSize(p => !p) }} />
                {randomSize &&
                    <>
                        <RGInput type='range' marginBottom='1.4em' maxLength={3} min={1} max={100} value={minSize} onInput={(e) => { setMinSize(Number(e.currentTarget.value)) }} title='Min-Size' />
                        <RGInput type='range' marginBottom='1.4em' maxLength={3} min={1} max={100} value={maxSize} onInput={(e) => { setMaxSize(Number(e.currentTarget.value)) }} title='Max-Size' />
                    </>
                }
                <RGInput type='range' marginBottom='1.4em' maxLength={2} min={0} max={100} value={particlesOpacity} onInput={(e) => { setParticlesOpacity(Number(e.currentTarget.value)) }} title='Opacity' />
                <BoxChecker title='Links' toggled={links ? true : false} onClick={() => { setLinks(p => !p) }} />
                <h2 className={styles.title}>Interactivity</h2>
                <BoxChecker marginTop='0' title='Hover Event' toggled={hover ? true : false} onClick={() => { setHover(p => !p) }} />
                {hover &&
                    <Select marginBottom='0.6em' setExpand={setHoverModeExpand} setOption={setHoverMode} titles={hoverModes}
                        value={hoverMode} expand={hoverModeExpand ? true : false} onClick={() => { setHoverModeExpand(p => !p) }}
                        height='90px' title='Hover Mode' />
                }
                <BoxChecker marginTop='0' title='Click Event' toggled={click ? true : false} onClick={() => { setClick(p => !p) }} />
                {click &&
                    <Select   setExpand={setClickModeExpand} setOption={setClickMode} titles={clickModes}
                        value={clickMode} expand={clickModeExpand ? true : false} onClick={() => { setClickModeExpand(p => !p) }}
                        height='90px' title='Click Mode' />
                }
            </div>

            <div className={styles.options}>
                <h2 className={styles.title}>Movement</h2>
                <BoxChecker title='Move' toggled={move ? true : false} onClick={() => { setMove(p => !p) }} />
                <BoxChecker title='Random Speed' toggled={randomSpeed ? true : false} onClick={() => { setRandomSpeed(p => !p) }} />
                <RGInput type='range' marginBottom='1.4em' maxLength={3} min={0} max={150} value={speed} onInput={(e) => { setSpeed(Number(e.currentTarget.value)) }} title='Speed' />
                <Select marginBottom='0.6em' setExpand={setDirectionExpand} setOption={setDirection} titles={directions} value={direction} expand={directionExpand ? true : false} onClick={() => { setDirectionExpand(p => !p) }}
                    height='190px' title='Direction' />

                <Select setExpand={setOutExpand} setOption={setOutMode} titles={outModes} value={outMode} expand={outExpand ? true : false} onClick={() => { setOutExpand(p => !p) }}
                    height='50px' title='outMode' />

                <h2 className={styles.title}>Colors</h2>
                <RGInput inputWidth='100%' height='35px' type='color' marginBottom='1.4em' maxLength={3} min={0} max={150} value={particlesColor} onInput={(e) => { setParticlesColor(e.currentTarget.value) }} title='Particles Color' />
                <RGInput inputWidth='100%' height='35px' type='color' marginBottom='1.4em' maxLength={3} min={0} max={150} value={linksColor} onInput={(e) => { setLinksColor(e.currentTarget.value) }} title='Links Color' />
            </div>

        </div>
    )
}
