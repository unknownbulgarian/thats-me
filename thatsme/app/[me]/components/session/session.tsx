'use client'


import React, { useEffect, useState } from 'react'
import styles from './page.module.css'

import EditProfile from '../edit/edit'

import { useFetchContext } from '@/app/states/session'
import { useApiUrl } from '@/app/states/api'
import { useError } from '@/app/states/errorstate'
import { MdEdit } from "react-icons/md";

interface SessionProfileProps {
    params: { me: string };
}

const SessionProfile: React.FC<SessionProfileProps> = ({ params }) => {

    const [edit, setEdit] = useState<boolean>(false)

    const { sessionRef, setSession, sessionUsername } = useFetchContext()
    const { showSuccess } = useError()
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
                if (data.username === params.me) {
                    showSuccess('Successfully connected to your account')
                    setSession(true);
                }
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
            {sessionRef.current && <MdEdit onClick={() => { setEdit(true) }} className={styles.editor} />}
            {edit && <EditProfile />}
        </>
    )
}

export default SessionProfile;