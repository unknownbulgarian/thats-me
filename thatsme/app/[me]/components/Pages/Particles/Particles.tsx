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

    const {showError} = useError() 

    const [directionExpand, setDirectionExpand] = useState<boolean>(false)
    const [outExpand, setOutExpand] = useState<boolean>(false)

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
        hover, setHover

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
                <BoxChecker title='Hover Event' toggled={hover ? true : false} onClick={() => { setHover(p => !p) }} />
                <BoxChecker title='Click Event' toggled={hover ? true : false} onClick={() => { setHover(p => !p) }} />
            </div>

            <div className={styles.options}>
                <h2 className={styles.title}>Movement</h2>
                <BoxChecker title='Move' toggled={move ? true : false} onClick={() => { setMove(p => !p) }} />
                <BoxChecker title='Random Speed' toggled={randomSpeed ? true : false} onClick={() => { setRandomSpeed(p => !p) }} />
                <RGInput type='range' marginBottom='1.4em' maxLength={3} min={0} max={150} value={speed} onInput={(e) => { setSpeed(Number(e.currentTarget.value)) }} title='Speed' />
                <Select setExpand={setDirectionExpand} setOption={setDirection} titles={directions} value={direction} expand={directionExpand ? true : false} onClick={() => { setDirectionExpand(p => !p) }}
                    height='190px' title='Direction' />

                <Select setExpand={setOutExpand} setOption={setOutMode} titles={outModes} value={outMode} expand={outExpand ? true : false} onClick={() => { setOutExpand(p => !p) }}
                    height='50px' title='outMode' />

                <h2 className={styles.title}>Colors</h2>
                <RGInput inputWidth='100%' height='35px' type='color' marginBottom='1.4em' maxLength={3} min={0} max={150} value={particlesColor} onInput={(e) => { setParticlesColor(e.currentTarget.value) }} title='Particles Color' />
                <RGInput inputWidth='100%' height='35px' type='color' marginBottom='1.4em' maxLength={3} min={0} max={150} value={linksColor} onInput={(e) => { setLinksColor(e.currentTarget.value) }} title='Particles Color' />
            </div>

        </div>
    )
}
