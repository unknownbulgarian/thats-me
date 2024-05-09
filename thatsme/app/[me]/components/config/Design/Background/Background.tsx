'use client'

import React from 'react'
import styles from './page.module.css'

import { useConfig } from '@/app/states/config/Main&&Design'

export default function Background() {

  const {  theCustomBackground,customBackground, backgroundColor, backgroundChroma, blurValue, backgroundBlur } = useConfig()


  return (
    <>
      {!customBackground
        ?
        <div style={{ backgroundColor: backgroundColor }} className={`${backgroundChroma ? styles.chroma : styles.back}`}></div>
        :
        <div style={{backgroundImage: `url(${theCustomBackground})`, filter: backgroundBlur ? `blur(${blurValue}px)` : ''}} className={styles.image}></div>
      }
    </>
  )
}
