'use client'

import React, { useEffect } from 'react'

import { useConfig } from '@/app/states/config/Main&&Design'


interface ConfigProps {
    params: { me: string };
}

const Config: React.FC<ConfigProps> = ({ params }) => {

    const { getFeatures } = useConfig()

    useEffect(() => {
        getFeatures(params.me)
    }, [])


    return (
        <>
        </>
    )
}


export default Config;