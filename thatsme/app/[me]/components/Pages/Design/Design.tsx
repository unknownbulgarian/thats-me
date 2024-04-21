'use client'

import React, { useState } from 'react'
import styles from './page.module.css'

import Toggler from '../components/toggler/toggler'

export default function DesignPage() {


  return (
    <div className={styles.design}>
      <Toggler toggled={true} title='Custom Background' />
    </div>
  )
}
