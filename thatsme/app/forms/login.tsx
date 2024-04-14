'use client'


import React, { useState } from 'react'
import styles from '../page.module.css'

import ButtonIcon from '../global-components/button-icon/buttonicon'
import InputIcon from '../global-components/input-icon/InputIcon'
import Link from 'next/link'

import { useError } from '../states/errorstate'

//icons
import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";

export default function Login() {

  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handleLogin = async () => {
    const userData = {
      username,
      password
    }

    try {
      const response = await fetch('http://localhost:3560/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      })

      const responseData = await response.json()

      if (responseData.error) {
        showError(responseData.error)
      }

      if (responseData.success) {
        showSuccess(responseData.success)
      }
    } catch (error: any) {
      showError(error)
    }
  }

  const { showError, showSuccess } = useError();

  return (
    <>
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
          title="Password"
          titleColor="white"
          type="password"
          classN="home-inputs"
          onInput={(e) => { setPassword(e.currentTarget.value) }}
        >
          <FaLock />
        </InputIcon>


        <div className={styles.noaccount}>
          <p className={styles.noaccounttxt}>Don't have an account? <Link className="no-decoration" href='/register'><span className={styles.signup}>Register</span></Link></p>
        </div>

        <ButtonIcon
          background="linear-gradient(to right, #470c7e, #4e1187, #551690, #5d1b99, #6420a2, #6524a6, #6728ab, #682caf, #6330ae, #5f33ae, #5a35ad, #5638ac)"
          borderRadius="0.3em"
          width="145px"
          height="35px"
          color="white"
          title="Log in"
          titleColor="white"
          iconFontSize="1.1rem"
          transform={false}
          buttonType='submit'
          onClick={() => { handleLogin() }}
        >
          <FiLogIn />
        </ButtonIcon>
      </div>
    </>
  )
}
