'use client'


import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useEditor } from '@/app/states/editor'
import styles from './style.module.css'


import InputIcon from '@/app/global-components/input-icon/InputIcon'
import ButtonIcon from '@/app/global-components/button-icon/buttonicon';

import { useError } from '@/app/states/errorstate';
import { useApiUrl } from '@/app/states/api';
import { useConfig } from '@/app/states/config/Main&&Design';

import { FaRegImage } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaSave } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";



export default function ProfilePage() {

    const {toggleBoolean, setPage} = useEditor()

    const refreshEditor = () => {
        toggleBoolean()
        setPage('')
    }

    const router = useRouter()

    const {
        photoUrl, setPhotoUrl,
        username, setUsername,
        bio, setBio,

    } = useConfig()



    const { showError, showSuccess } = useError()
    const apiUrl = useApiUrl()

    const updatePhoto = async () => {
        try {
            const response = await fetch(apiUrl + '/changeProfilePhoto', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ url: photoUrl, token: localStorage.getItem('token') })
            });

            const data = await response.json();

            if (!data.error) {
                showSuccess('Saved successfully')
                setTimeout(() => {
                    router.push('/')
                    refreshEditor()
                }, 2300);
            } else {
                showError('Something went wrong')
            }

            return data;
        } catch (error) {
            console.error('Error fetching features:', error);
            throw error;
        }


    }

    const updateUsername = async () => {
        try {
            const response = await fetch(apiUrl + '/changeUsername', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name: username, token: localStorage.getItem('token') })
            });

            const data = await response.json();

            if (!data.error) {
                showSuccess('Saved successfully')
                setTimeout(() => {
                    router.push('/')
                    refreshEditor()
                }, 2300);
            } else {
                showError('Something went wrong')
            }

            return data;
        } catch (error) {
            console.error('Error fetching features:', error);
            throw error;
        }


    }

    const updateBio = async () => {
        try {
            const response = await fetch(apiUrl + '/changeBio', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ bio, token: localStorage.getItem('token') })
            });

            const data = await response.json();

            if (!data.error) {
                showSuccess('Saved successfully')
                setTimeout(() => {
                    router.push('/')
                    refreshEditor()
                }, 2300);
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
        <div className={styles.profile}>
            <div className={styles.option}>
                <InputIcon
                    backColor="#262c50"
                    borderRadius="0.3em"
                    width="280px"
                    height="30px"
                    color="rgb(123, 63, 202)"
                    title="Profile Photo (url .jpg, .png ...)"
                    titleColor="white"
                    type="text"
                    classN="home-inputs"
                    value={photoUrl}
                    onInput={(e) => { setPhotoUrl(e.currentTarget.value) }}
                >
                    <FaRegImage />
                </InputIcon>
                <ButtonIcon
                    background="linear-gradient(to right, #470c7e, #4e1187, #551690, #5d1b99, #6420a2, #6524a6, #6728ab, #682caf, #6330ae, #5f33ae, #5a35ad, #5638ac)"
                    borderRadius="0.3em"
                    width="95px"
                    height="30px"
                    color="white"
                    fontSize='0.9rem'
                    title="Save"
                    titleColor="white"
                    iconFontSize="0.9rem"
                    transform={false}
                    buttonType='submit'
                    onClick={() => { updatePhoto() }}
                >
                    <FaSave />
                </ButtonIcon>
            </div>

            <div className={styles.option}>
                <InputIcon
                    backColor="#262c50"
                    borderRadius="0.3em"
                    width="280px"
                    height="30px"
                    color="rgb(123, 63, 202)"
                    title="Username"
                    titleColor="white"
                    type="text"
                    classN="home-inputs"
                    value={username}
                    onInput={(e) => { setUsername(e.currentTarget.value) }}
                >
                    <FaUser />
                </InputIcon>
                <ButtonIcon
                    background="linear-gradient(to right, #470c7e, #4e1187, #551690, #5d1b99, #6420a2, #6524a6, #6728ab, #682caf, #6330ae, #5f33ae, #5a35ad, #5638ac)"
                    borderRadius="0.3em"
                    width="95px"
                    height="30px"
                    color="white"
                    fontSize='0.9rem'
                    title="Save"
                    titleColor="white"
                    iconFontSize="0.9rem"
                    transform={false}
                    buttonType='submit'
                    onClick={() => { updateUsername() }}
                >
                    <FaSave />
                </ButtonIcon>
            </div>

            <div className={styles.option}>
                <textarea spellCheck={false} value={bio} onInput={(e) => { setBio(e.currentTarget.value) }} className={styles.bio}>

                </textarea>
                <ButtonIcon
                    background="linear-gradient(to right, #470c7e, #4e1187, #551690, #5d1b99, #6420a2, #6524a6, #6728ab, #682caf, #6330ae, #5f33ae, #5a35ad, #5638ac)"
                    borderRadius="0.3em"
                    width="95px"
                    height="30px"
                    color="white"
                    fontSize='0.9rem'
                    title="Save"
                    titleColor="white"
                    iconFontSize="0.9rem"
                    transform={false}
                    buttonType='submit'
                    onClick={() => { updateBio() }}
                >
                    <FaSave />
                </ButtonIcon>
            </div>
        </div>
    )
}
