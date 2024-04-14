'use client'


import React, { useEffect, useState } from 'react'
import styles from '../page.module.css'


import ButtonIcon from '../global-components/button-icon/buttonicon'
import InputIcon from '../global-components/input-icon/InputIcon'
import Link from 'next/link'

import { useApiUrl } from '../states/api'
import { useFetchContext } from '../states/session'

import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { BiSolidMessageSquareError } from "react-icons/bi";
import { MdEmail } from "react-icons/md";

import { useError } from '../states/errorstate'


export default function RegisterForm() {

    const { checkSession } = useFetchContext()

    const [username, setUsername] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [confirmPassword, setConfirmPassword] = useState<string>('')
    const [age, setAge] = useState<string>('')

    const apiUrl = useApiUrl()

    const { showError, showSuccess } = useError()

    useEffect(() => {
        checkSession()
      },[])

    const clearValues = () => {
        setUsername('')
        setEmail('')
        setPassword('')
        setConfirmPassword('')
        setAge('')
    }

    const handleSignUp = async () => {
        const userData = {
            username,
            email,
            password,
            confirmPassword,
            age
        };

        try {
            const response = await fetch(apiUrl + '/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            });

            const responseData = await response.json();

            if (responseData.error) {
                showError(responseData.error)
            }
            if (responseData.success) {
                clearValues()
                showSuccess(responseData.success)
                localStorage.setItem('token', responseData.token)
            }

        } catch (error: any) {
            showError(error)
        }
    };



    return (
        <div className={styles.maininputs}>
            <InputIcon
                backColor="#262c50"
                borderRadius="0.3em"
                width="360px"
                height="35px"
                color="rgb(123, 63, 202)"
                title="Username"
                titleColor="white"
                type="text"
                classN="home-inputs"
                value={username}
                onInput={(e) => { setUsername(e.currentTarget.value) }}
            >
                <FaUserAlt />
            </InputIcon>

            <InputIcon
                backColor="#262c50"
                borderRadius="0.3em"
                width="360px"
                height="35px"
                color="rgb(123, 63, 202)"
                title="Email"
                titleColor="white"
                type="text"
                classN="home-inputs"
                value={email}
                onInput={(e) => { setEmail(e.currentTarget.value) }}
            >
                <MdEmail />
            </InputIcon>

            <InputIcon
                backColor="#262c50"
                borderRadius="0.3em"
                width="360px"
                height="35px"
                color="rgb(123, 63, 202)"
                title="Password"
                titleColor="white"
                type="password"
                classN="home-inputs"
                value={password}
                onInput={(e) => { setPassword(e.currentTarget.value) }}
            >
                <FaLock />
            </InputIcon>

            <InputIcon
                backColor="#262c50"
                borderRadius="0.3em"
                width="360px"
                height="35px"
                color="rgb(123, 63, 202)"
                title="Confirm password"
                titleColor="white"
                type="password"
                classN="home-inputs"
                value={confirmPassword}
                onInput={(e) => { setConfirmPassword(e.currentTarget.value) }}
            >
                <FaLock />
            </InputIcon>

            <InputIcon
                backColor="#262c50"
                borderRadius="0.3em"
                width="360px"
                height="35px"
                color="rgb(123, 63, 202)"
                title="Age"
                titleColor="white"
                type="text"
                classN="home-inputs"
                value={age}
                onInput={(e) => { setAge(e.currentTarget.value) }}
            >
                <BiSolidMessageSquareError />
            </InputIcon>

            <div className={styles.noaccount}>
                <p className={styles.noaccounttxt}>Already have an account? <Link className='no-decoration' href='/'><span className={styles.signup}>Log in</span></Link></p>
            </div>

            <ButtonIcon
                background="linear-gradient(to right, #470c7e, #4e1187, #551690, #5d1b99, #6420a2, #6524a6, #6728ab, #682caf, #6330ae, #5f33ae, #5a35ad, #5638ac)"
                borderRadius="0.3em"
                width="145px"
                height="35px"
                color="white"
                title="Register"
                titleColor="white"
                iconFontSize="1.1rem"
                transform={false}
                buttonType='submit'
                onClick={() => { handleSignUp() }}
            >
                <FiLogIn />
            </ButtonIcon>
        </div>
    )
}
