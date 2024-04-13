'use client'

import React, { useEffect } from 'react'
import styles from './page.module.css'

import { useError } from '@/app/states/errorstate'
import { IoCloseOutline } from "react-icons/io5";



export default function ErrorComp() {

  const { error, hideError, success, hideSuccess } = useError();

  return (
    <>
      {error &&
        <div style={{ padding: error ? '' : '0px' }} className={styles.error}>
          <p className={styles.theerror}>{error}</p>
          <IoCloseOutline onClick={() => { hideError(); }} className={styles.close} />
          <div className={styles.progress}></div>
        </div>
        }

      {success &&
        <div style={{ padding: success ? '' : '0px' }} className={styles.success}>
          <p className={styles.theerror}>{success}</p>
          <IoCloseOutline onClick={() => { hideSuccess(); }} className={styles.successclose} />
          <div className={styles.successprogress}></div>
        </div>
        }

    </>
  )
}
