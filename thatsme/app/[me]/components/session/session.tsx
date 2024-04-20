'use client'


import React, { useEffect } from 'react'

import { useFetchContext } from '@/app/states/session'
import { useApiUrl } from '@/app/states/api'
import { useError } from '@/app/states/errorstate'
import Page from '../../page'



export default function SessionProfile() {

    const { setSession, sessionUsername } = useFetchContext()
    const {showSuccess} = useError()
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
                showSuccess('Successfully connected to your account')
                setSession(true);
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (localStorage.getItem('token')) {
            checkSession()
        }
    }, [])


    return (
        <>
       
        </>
    )
}
