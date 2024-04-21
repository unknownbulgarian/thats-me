'use client'

import React, { useState } from 'react'
import styles from './page.module.css'

import { useConfig } from '@/app/states/user_config'

import Toggler from '../components/toggler/toggler'


export default function DesignPage() {

  const {customBackground, toggleCustomBackground} = useConfig()


  return (
    <div className={styles.design}>
      <Toggler toggled={customBackground ? true : false} onClick={() => {toggleCustomBackground()}} title='Custom Background' />
    </div>
  )
}
