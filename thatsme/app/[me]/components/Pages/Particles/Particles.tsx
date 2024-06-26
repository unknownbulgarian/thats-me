import React, { useState } from 'react'
import styles from './page.module.css'

import { useParticlesConfig } from '@/app/states/config/Particles_CF'
import { useError } from '@/app/states/errorstate'
import { useApiUrl } from '@/app/states/api'

import InputIcon from '@/app/global-components/input-icon/InputIcon'
import ButtonIcon from '@/app/global-components/button-icon/buttonicon'
import BoxChecker from '../components/boxchecker/boxchecker'
import RGInput from './components/RGInput/RGInput'

import Select from './components/Select/Select'

import { FaImage } from "react-icons/fa";
import { FaSave } from "react-icons/fa";

interface TitleObject {
    title: string;
}

export default function ParticlesPage() {

    const { showError, showSuccess } = useError()
    const apiUrl = useApiUrl()

    const [shapeExpand, setShapeExpand] = useState<boolean>(false)

    const [directionExpand, setDirectionExpand] = useState<boolean>(false)
    const [outExpand, setOutExpand] = useState<boolean>(false)

    const [clickModeExpand, setClickModeExpand] = useState<boolean>(false)
    const [hoverModeExpand, setHoverModeExpand] = useState<boolean>(false)

    const shapes: Array<TitleObject> = [
        { title: 'circle' },
        { title: 'edge' },
        { title: 'triangle' },
        { title: 'polygon' },
        { title: 'star' },

    ]

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
        { title: 'push' },
        { title: 'remove' },
        { title: 'bubble' },
        { title: 'repulse' },
    ]

    const hoverModes: Array<TitleObject> = [
        { title: 'grab' },
        { title: 'bubble' },
        { title: 'repulse' },
    ]

    const {
        //general
        shape,
        setShape,

        randomShape,
        setRandomShape,

        isImageShape,
        setIsImageShape,

        imageShape,
        setImageShape,

        imageW,
        setImageW,

        imageH,
        setImageH,

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

        linksWidth,
        setLinksWidth,

        linksOpacity,
        setLinksOpacity,


        //movement
        move,
        setMove,

        randomSpeed,
        setRandomSpeed,

        speed,
        setSpeed,

        direction,
        setDirection,

        straightLine,
        setStraightLine,

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

    const saveParticles = async () => {

        const particles = {
            shape,
            randomShape,
            isImageShape,
            imageShape,
            imageW,
            imageH,
            particlesNumber,
            particlesSize,
            randomSize,
            minSize,
            maxSize,
            particlesOpacity,
            links,
            linksWidth,
            linksOpacity,

            //movement
            move,
            randomSpeed,
            speed,
            direction,
            straightLine,
            outMode,

            //colors
            particlesColor,
            linksColor,

            //Interactivity
            hover,
            click,

            clickMode,
            hoverMode,
        }

        try {
            const response = await fetch(apiUrl + '/saveParticles', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ particles, token: localStorage.getItem('token') })
            });

            const data = await response.json();

            if (!data.error) {
                showSuccess('Saved successfully')
            } else {
                showError('Something went wrong')
            }

            return data;
        } catch (error) {
            console.error('Error fetching features:', error);
            throw error;
        }

    }

    return (
        <div className={styles.particlespage}>

            <div className={styles.options}>



                <h2 className={styles.title}>General</h2>
                <Select marginBottom='0.6em' setExpand={setShapeExpand} setOption={setShape} titles={shapes} value={shape} expand={shapeExpand ? true : false} onClick={() => { setShapeExpand(p => !p) }}
                    height='105px' title='Particles Shape' />
                <BoxChecker title='Random Shape' toggled={randomShape ? true : false} onClick={(() => { setRandomShape(p => !p) })}></BoxChecker>
                <BoxChecker title='Image Shape' toggled={isImageShape ? true : false} onClick={(() => { setIsImageShape(p => !p) })}></BoxChecker>
                {isImageShape &&
                    <>
                        <InputIcon
                            backColor="#262c50"
                            borderRadius="0.3em"
                            width="170px"
                            height="25px"
                            color="rgb(123, 63, 202)"
                            title="URL"
                            titleColor="white"
                            type="text"
                            classN="home-inputs"
                            marginBottom='0.8em'
                            value={imageShape}
                            onInput={(e) => { setImageShape(e.currentTarget.value) }}
                        >
                            <FaImage />
                        </InputIcon>
                        <RGInput type='range' marginBottom='1.4em' maxLength={4} min={1} max={300} value={imageW} onInput={(e) => { setImageW(Number(e.currentTarget.value)) }} title='Image Width' />
                        <RGInput type='range' marginBottom='1.4em' maxLength={4} min={1} max={300} value={imageH} onInput={(e) => { setImageH(Number(e.currentTarget.value)) }} title='Image Height' />
                    </>
                }
                <RGInput type='range' marginBottom='1.4em' maxLength={3} min={0} max={430} value={particlesNumber} onInput={(e) => { setParticlesNumber(Number(e.currentTarget.value)) }} title='Particles Number' />
                <RGInput type='range' marginBottom='1.4em' maxLength={3} min={0} max={130} value={particlesSize} onInput={(e) => { setParticlesSize(Number(e.currentTarget.value)) }} title='Particles Size' />
                <BoxChecker title='Random Size' toggled={randomSize ? true : false} onClick={() => { setRandomSize(p => !p) }} />
                {randomSize &&
                    <>
                        <RGInput type='range' marginBottom='1.4em' maxLength={3} min={1} max={100} value={minSize} onInput={(e) => { setMinSize(Number(e.currentTarget.value)) }} title='Min-Size' />
                        <RGInput type='range' marginBottom='1.4em' maxLength={3} min={1} max={100} value={maxSize} onInput={(e) => { setMaxSize(Number(e.currentTarget.value)) }} title='Max-Size' />
                    </>
                }
                <RGInput type='range' marginBottom='1.4em' maxLength={2} min={0} max={100} value={particlesOpacity} onInput={(e) => { setParticlesOpacity(Number(e.currentTarget.value)) }} title='Particles Opacity' />
                <BoxChecker title='Links' toggled={links ? true : false} onClick={() => { setLinks(p => !p) }} />
                {links && <>
                    <RGInput type='range' marginBottom='1.4em' maxLength={3} min={0} max={400}
                        value={linksWidth} onInput={(e) => { setLinksWidth(Number(e.currentTarget.value)) }} title='Links Width' />
                    <RGInput type='range' marginBottom='1.4em' maxLength={2} min={0} max={5}
                        value={linksOpacity} onInput={(e) => { setLinksOpacity(Number(e.currentTarget.value)) }} title='Links Opacity' />
                </>}

                <h2 className={styles.title}>Interactivity</h2>
                <BoxChecker marginTop='0' title='Hover Event' toggled={hover ? true : false} onClick={() => { setHover(p => !p) }} />
                {hover &&
                    <Select marginBottom='0.6em' setExpand={setHoverModeExpand} setOption={setHoverMode} titles={hoverModes}
                        value={hoverMode} expand={hoverModeExpand ? true : false} onClick={() => { setHoverModeExpand(p => !p) }}
                        height='65px' title='Hover Mode' />
                }
                <BoxChecker marginTop='0' title='Click Event' toggled={click ? true : false} onClick={() => { setClick(p => !p) }} />
                {click &&
                    <Select setExpand={setClickModeExpand} setOption={setClickMode} titles={clickModes}
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

                <BoxChecker marginTop='0' title='Straight Line' toggled={straightLine ? true : false} onClick={() => { setStraightLine(p => !p) }} />


                <Select setExpand={setOutExpand} setOption={setOutMode} titles={outModes} value={outMode} expand={outExpand ? true : false} onClick={() => { setOutExpand(p => !p) }}
                    height='50px' title='outMode' />

                <h2 className={styles.title}>Colors</h2>
                <RGInput inputWidth='100%' height='35px' type='color' marginBottom='1.4em' maxLength={3} min={0} max={150} value={particlesColor} onInput={(e) => { setParticlesColor(e.currentTarget.value) }} title='Particles Color' />
                <RGInput inputWidth='100%' height='35px' type='color' marginBottom='1.4em' maxLength={3} min={0} max={150} value={linksColor} onInput={(e) => { setLinksColor(e.currentTarget.value) }} title='Links Color' />

                <ButtonIcon
                    background="linear-gradient(to right, #470c7e, #4e1187, #551690, #5d1b99, #6420a2, #6524a6, #6728ab, #682caf, #6330ae, #5f33ae, #5a35ad, #5638ac)"
                    borderRadius="0.3em"
                    width="80px"
                    height="25px"
                    color="white"
                    title="Save"
                    titleColor="white"
                    iconFontSize="0.8rem"
                    titleFontSize='0.8rem'
                    marginTop='0.7em'
                    transform={false}
                    buttonType='submit'
                    onClick={() => { saveParticles() }}
                >
                    <FaSave />
                </ButtonIcon>
            </div>

        </div>
    )
}
