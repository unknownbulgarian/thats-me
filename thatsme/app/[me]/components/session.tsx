'use client'


import React, { useEffect } from 'react'

import { useFetchContext } from '@/app/states/session'
import { useApiUrl } from '@/app/states/api'



export default function SessionProfile() {

    const { setSession, sessionUsername } = useFetchContext()
    const apiUrl = useApiUrl()

    const checkSession = async () => {
        try {
            const response = await fetch(apiUrl + '/getUsername', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ token: localStorage.getItem('token') })
            });
            const data = await response.json();

            if (data.error) {
                setSession(false);
            }
            if (data.success) {
                sessionUsername.current = data.username
                setSession(true);
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        checkSession()
    }, [])


    return (
        <>
        </>
    )
}
