import React from 'react'
import styles from './page.module.css'

import { useParticlesConfig } from '@/app/states/config/Particles_CF'

import BoxChecker from '../components/boxchecker/boxchecker'
import RGInput from './components/RGInput'

export default function ParticlesPage() {

    const {
        //general
        particlesNumber, setParticlesNumber,
        particlesOpacity, setParticlesOpacity,

        hover, setHover

    } = useParticlesConfig()

    return (
        <div className={styles.particlespage}>

            <div className={styles.options}>

                <h2 className={styles.title}>General</h2>
                <RGInput marginBottom='1.4em' maxLength={3} min={1} max={430} value={particlesNumber} onInput={(e) => { setParticlesNumber(Number(e.currentTarget.value)) }} title='Particles Number' />
                <RGInput marginBottom='1.4em' maxLength={2} min={0} max={100} value={particlesOpacity} onInput={(e) => { setParticlesOpacity(Number(e.currentTarget.value)) }} title='Opacity' />
                <h2 className={styles.title}>Interactivity</h2>
                <BoxChecker title='Hover Event' toggled={hover ? true : false} onClick={() => { setHover(p => !p) }} />
                <BoxChecker title='Click Event' toggled={hover ? true : false} onClick={() => { setHover(p => !p) }} />
            </div>

            <div className={styles.options}>
                <h2 className={styles.title}>Interactivity</h2>
                <BoxChecker title='Hover Animation' toggled={hover ? true : false} onClick={() => { setHover(p => !p) }} />
            </div>

        </div>
    )
}
