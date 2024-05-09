'use client'

import React, { useState } from 'react'
import styles from './page.module.css'

import { useAnimationsConfig } from '@/app/states/config/Animations_CF'


import Select from '../Particles/components/Select/Select'
import ButtonIcon from '@/app/global-components/button-icon/buttonicon'
import { useApiUrl } from '@/app/states/api'
import { useError } from '@/app/states/errorstate'

import { FaSave } from "react-icons/fa";

interface titleObject {
    title: string;
}

export default function AnimationsPage() {

    const apiUrl = useApiUrl()
    const { showError, showSuccess } = useError()

    const [animationExpand, setAnimationExpand] = useState<boolean>(false)

    const {
        animation, setAnimation
    } = useAnimationsConfig()

    const animations: Array<titleObject> = [
        { title: 'slide-right' },
        { title: 'slide-left' },
        { title: 'slide-top' },
        { title: 'slide-bottom' },
    ]

    const saveAnimation = async () => {
        try {
            const response = await fetch(apiUrl + '/saveAnimation', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ animation, token: localStorage.getItem('token') })
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
        <div className={styles.animations}>
            <Select height='85px' value={animation} titles={animations} setOption={setAnimation} title='Animation' expand={animationExpand ? true : false} setExpand={setAnimationExpand} onClick={() => { setAnimationExpand(true) }} />
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
                marginTop='0.8em'
                transform={false}
                buttonType='submit'
                onClick={() => { saveAnimation() }}
            >
                <FaSave />
            </ButtonIcon>
        </div>
    )
}
