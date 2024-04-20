'use client'

import React, { useEffect } from 'react'

import { useApiUrl } from '@/app/states/api'
import { useError } from '@/app/states/errorstate'
import { useRouter } from 'next/navigation';

interface InfoProfileProps {
    params: { me: string }
}


const InfoProfile: React.FC<InfoProfileProps> = ({ params }) => {
    const router = useRouter();

    const { showError } = useError()
    const apiUrl = useApiUrl()

    const getProfileInfo = async () => {
        try {
            const response = await fetch(apiUrl + '/getUserInfo', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username: params.me })
            });

            const data = await response.json()

            if (data.error) {
                showError("This user doesn't exist")
            }

            if (data.success) {
                const { username, bio, img_link } = data;
                const query = `?username=${username}&bio=${bio}&img_link=${img_link}`;
                router.push(`/${params.me}/${query}`);
            }

        } catch (error) {
            showError('Something went wrong')
        }
    }

    useEffect(() => {
        getProfileInfo()
    },[])


    return (
        <>
        </>
    )
}


export default InfoProfile