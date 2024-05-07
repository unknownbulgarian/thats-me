'use client'

import React, { useState } from 'react'
import styles from './page.module.css'

import { useConfig } from '@/app/states/config/Main&&Design'
import { useError } from '@/app/states/errorstate'

import InputIcon from '@/app/global-components/input-icon/InputIcon'
import ButtonIcon from '@/app/global-components/button-icon/buttonicon'
import Toggler from '../components/toggler/toggler'
import BoxChecker from '../components/boxchecker/boxchecker'

import { IoIosLink } from "react-icons/io";
import { FaSave } from "react-icons/fa";

export default function DesignPage() {

  const {
    customBackground, toggleCustomBackground,
    customUsernameColor, toggleUsernameCustomColor,
    backgroundChroma, toggleBackgroundChroma,
    usernameChroma, toggleUsernameChroma,
    usernameColor, toggleUsernameColor,
    customBioColor, toggleCustomBioColor,
    bioChroma, toggleBioChroma,
    bioColor, toggleBioColor,
    backgroundColor,setBackgroundColor,
    theCustomBackground,setTheCustomBackground,
  } = useConfig()
  const { showError, showSuccess } = useError()


  return (
    <div className={styles.design}>
      <div className={styles.option} >
        <Toggler toggled={customBackground ? true : false} onClick={() => { toggleCustomBackground() }} title='Background Image' />
        {customBackground &&
          <>
            <InputIcon
              backColor="#262c50"
              borderRadius="0.5em"
              width="280px"
              height="25px"
              color="rgb(123, 63, 202)"
              title="URL (.jpg, .png ...)"
              titleColor="white"
              type="text"
              classN="home-inputs"
              value={theCustomBackground}
              onInput={(e) => {setTheCustomBackground(e.currentTarget.value)}}
            >
              <IoIosLink />
            </InputIcon>

            <ButtonIcon
              background="linear-gradient(to right, #470c7e, #4e1187, #551690, #5d1b99, #6420a2, #6524a6, #6728ab, #682caf, #6330ae, #5f33ae, #5a35ad, #5638ac)"
              borderRadius="0.3em"
              width="80px"
              height="25px"
              color="white"
              title="Save"
              titleColor="white"
              iconFontSize="0.8rem"
              titleFontSize='0.8rem'
              marginTop='0.7em'
              transform={false}
              buttonType='submit'
            >
              <FaSave />
            </ButtonIcon>
          </>}

        <Toggler toggled={true} onClick={() => showError("You can't disable this feature")} title='Background Color' />
        {
          <>
            <BoxChecker chroma={true} toggled={backgroundChroma ? true : false} onClick={() => { toggleBackgroundChroma() }} title='Chroma' />
            <BoxChecker chroma={false} toggled={true} onClick={() => { showError("You can't disable this feature") }} title='Static Color' />

            <input value={backgroundColor} onInput={(e) => {setBackgroundColor(e.currentTarget.value)}} className={styles.rangeinput} type='color'></input>
            <ButtonIcon
              background="linear-gradient(to right, #470c7e, #4e1187, #551690, #5d1b99, #6420a2, #6524a6, #6728ab, #682caf, #6330ae, #5f33ae, #5a35ad, #5638ac)"
              borderRadius="0.3em"
              width="80px"
              height="25px"
              color="white"
              title="Save"
              titleColor="white"
              iconFontSize="0.8rem"
              titleFontSize='0.8rem'
              marginTop='0.7em'
              transform={false}
              buttonType='submit'
            >
              <FaSave />
            </ButtonIcon>


          </>}

      </div>


      <div className={styles.option}>

        <Toggler toggled={customUsernameColor ? true : false} onClick={() => toggleUsernameCustomColor()} title='Username Custom Color' />
        {customUsernameColor &&
          <>
            <BoxChecker chroma={true} toggled={usernameChroma ? true : false} onClick={() => { toggleUsernameChroma() }} title='Chroma' />
            <BoxChecker chroma={false} toggled={usernameColor ? true : false} onClick={() => { toggleUsernameColor() }} title='Color' />
            {usernameColor && <input className={styles.rangeinput} type='color'></input>}

            {(usernameColor || usernameChroma) && (
              <ButtonIcon
                background="linear-gradient(to right, #470c7e, #4e1187, #551690, #5d1b99, #6420a2, #6524a6, #6728ab, #682caf, #6330ae, #5f33ae, #5a35ad, #5638ac)"
                borderRadius="0.3em"
                width="80px"
                height="25px"
                color="white"
                title="Save"
                titleColor="white"
                iconFontSize="0.8rem"
                titleFontSize="0.8rem"
                marginTop="0.7em"
                transform={false}
                buttonType="submit"
              >
                <FaSave />
              </ButtonIcon>
            )}

          </>}

          <Toggler toggled={customBioColor ? true : false} onClick={() => toggleCustomBioColor()} title='Bio Custom Color' />
        {customBioColor &&
          <>
            <BoxChecker chroma={true} toggled={bioChroma ? true : false} onClick={() => { toggleBioChroma() }} title='Chroma' />
            <BoxChecker chroma={false} toggled={bioColor ? true : false} onClick={() => { toggleBioColor() }} title='Color' />
            {bioColor && <input className={styles.rangeinput} type='color'></input>}

            {(bioColor || bioChroma) && (
              <ButtonIcon
                background="linear-gradient(to right, #470c7e, #4e1187, #551690, #5d1b99, #6420a2, #6524a6, #6728ab, #682caf, #6330ae, #5f33ae, #5a35ad, #5638ac)"
                borderRadius="0.3em"
                width="80px"
                height="25px"
                color="white"
                title="Save"
                titleColor="white"
                iconFontSize="0.8rem"
                titleFontSize="0.8rem"
                marginTop="0.7em"
                transform={false}
                buttonType="submit"
              >
                <FaSave />
              </ButtonIcon>
            )}

          </>}

      </div>
    </div>
  )
}
