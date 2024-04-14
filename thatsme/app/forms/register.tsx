'use client'


import React, { useState } from 'react'
import styles from '../page.module.css'


import ButtonIcon from '../global-components/button-icon/buttonicon'
import InputIcon from '../global-components/input-icon/InputIcon'
import Link from 'next/link'


import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { BiSolidMessageSquareError } from "react-icons/bi";

import { useError } from '../states/errorstate'


export default function RegisterForm() {

    const [email, setEmail] = useState('fwa')
    const [password, setPassword] = useState('fwa')

    const { showError, showSuccess } = useError()



    const handleSignUp = async () => {
        try {
           
        } catch (e) {
            console.error(e)
        }
    }


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
            >
                <FaUserAlt />
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
