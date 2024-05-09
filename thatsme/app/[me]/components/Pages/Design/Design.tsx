'use client'

import React, { useState } from 'react'
import styles from './page.module.css'

import { useConfig } from '@/app/states/config/Main&&Design'
import { useError } from '@/app/states/errorstate'
import { useApiUrl } from '@/app/states/api'

import InputIcon from '@/app/global-components/input-icon/InputIcon'
import ButtonIcon from '@/app/global-components/button-icon/buttonicon'
import Toggler from '../components/toggler/toggler'
import BoxChecker from '../components/boxchecker/boxchecker'
import RGInput from '../Particles/components/RGInput/RGInput'

import { IoIosLink } from "react-icons/io";
import { FaSave } from "react-icons/fa";

export default function DesignPage() {

  const apiUrl = useApiUrl()

  const {
    customBackground, toggleCustomBackground,
    setCustomBackground,
    customUsernameColor, toggleUsernameCustomColor,
    backgroundChroma, toggleBackgroundChroma,
    usernameChroma, toggleUsernameChroma,
    usernameColor, toggleUsernameColor,
    customBioColor, toggleCustomBioColor,
    bioChroma, toggleBioChroma,
    bioColor, toggleBioColor,
    backgroundColor, setBackgroundColor,
    theCustomBackground, setTheCustomBackground,
    socialsDesign, setSocialsDesign,
    backgroundBlur, setBackgroundBlur,
    blurValue, setBlurValue,
    theUsernameColor, setTheUsernameColor,
    theBioColor, setTheBioColor,
  } = useConfig()
  const { showError, showSuccess } = useError()


  const saveBackgroundColor = async () => {
    try {
      const response = await fetch(apiUrl + '/changeBackgroundColor', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ chroma: backgroundChroma, staticColor: backgroundColor, token: localStorage.getItem('token') })
      });

      const data = await response.json();

      if (!data.error) {
        showSuccess('Saved successfully')
      } else {
        showError('Something went wrong')
      }

      return data;
    } catch (error) {
      console.error('Error fetching features:', error);
      throw error;
    }

  }

  const saveBackgroundImage = async () => {
    try {
      const response = await fetch(apiUrl + '/addCustomBackground', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ theCustomBackground, token: localStorage.getItem('token') })
      });

      const data = await response.json();

      if (!data.error) {
        showSuccess('Saved successfully')
      } else {
        showError('Something went wrong')
      }

      return data;
    } catch (error) {
      console.error('Error fetching features:', error);
      throw error;
    }

  }

  const toggleBackgroundImage = async () => {
    try {
      const response = await fetch(apiUrl + '/toggleCustomBackground', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token: localStorage.getItem('token') })
      });

      const data = await response.json();

      if (!data.error) {
        setCustomBackground(data.value)
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
    <div className={styles.design}>
      <div className={styles.option} >
        <Toggler toggled={customBackground ? true : false} onClick={() => { toggleBackgroundImage() }} title='Background Image' />
        {customBackground &&
          <>
            <InputIcon
              backColor="#262c50"
              borderRadius="0.5em"
              width="225px"
              height="25px"
              color="rgb(123, 63, 202)"
              title="URL (.jpg, .png ...)"
              titleColor="white"
              type="text"
              classN="home-inputs"
              value={theCustomBackground}
              onInput={(e) => { setTheCustomBackground(e.currentTarget.value) }}
            >
              <IoIosLink />
            </InputIcon>

            <BoxChecker marginTop='0.5em' toggled={backgroundBlur ? true : false} onClick={() => { setBackgroundBlur(p => !p) }} title='Blur' />
            {backgroundBlur &&
              <RGInput type='range' marginBottom='1.4em' value={blurValue} maxLength={4} min={1} max={300} inputWidth='150px' onInput={(e) => { setBlurValue(Number(e.currentTarget.value))}} title='Blur value' />}


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
              marginTop='0.2em'
              transform={false}
              buttonType='submit'
              onClick={() => { saveBackgroundImage() }}
            >
              <FaSave />
            </ButtonIcon>
          </>}

        <Toggler toggled={true} onClick={() => showError("You can't disable this feature")} title='Background Color' />
        {
          <>
            <BoxChecker chroma={true} toggled={backgroundChroma ? true : false} onClick={() => { toggleBackgroundChroma() }} title='Chroma' />
            <BoxChecker chroma={false} toggled={true} onClick={() => { showError("You can't disable this feature") }} title='Static Color' />

            <input value={backgroundColor} onInput={(e) => { setBackgroundColor(e.currentTarget.value) }} className={styles.rangeinput} type='color'></input>
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
              onClick={() => { saveBackgroundColor() }}
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
            <BoxChecker chroma={false} toggled={true} onClick={() => { showError("You can't disable this feature") }} title='Color' />
            <input className={styles.rangeinput} value={theUsernameColor} onInput={(e) => {setTheUsernameColor(e.currentTarget.value)}} type='color'></input>

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
                marginTop="0.8em"
                transform={false}
                buttonType="submit"
              >
                <FaSave />
              </ButtonIcon>

          </>}

        <Toggler toggled={customBioColor ? true : false} onClick={() => toggleCustomBioColor()} title='Bio Custom Color' />
        {customBioColor &&
          <>
            <BoxChecker chroma={true} toggled={bioChroma ? true : false} onClick={() => { toggleBioChroma() }} title='Chroma' />
            <BoxChecker chroma={false} toggled={true} onClick={() => { showError("You can't disable this feature") }} title='Color' />
            <input className={styles.rangeinput} value={theBioColor} onInput={(e) => {setTheBioColor(e.currentTarget.value)}} type='color'></input>

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
                marginTop="0.8em"
                transform={false}
                buttonType="submit"
              >
                <FaSave />
              </ButtonIcon>

          </>}

        <Toggler toggled={socialsDesign ? true : false} onClick={() => setSocialsDesign(p => !p)} title='Socials Design' />

        {socialsDesign &&
          <>

            <BoxChecker chroma={false} toggled={bioColor ? true : false} onClick={() => { toggleBioColor() }} title='Background Color' />
            <RGInput type='color' height='40px' marginBottom='1.4em' maxLength={4} min={1} max={300} inputWidth='150px' onInput={(e) => { }} title='Color' />
            <RGInput type='range' marginBottom='1.4em' maxLength={4} min={1} max={300} inputWidth='150px' onInput={(e) => { }} title='Background Width' />
            <RGInput type='range' marginBottom='1.4em' maxLength={4} min={1} max={300} inputWidth='150px' onInput={(e) => { }} title='Background Height' />
            <RGInput type='range' marginBottom='1.4em' maxLength={4} min={1} max={300} inputWidth='150px' onInput={(e) => { }} title='Padding' />
            <RGInput type='color' height='40px' marginBottom='1.4em' maxLength={4} min={1} max={300} inputWidth='150px' onInput={(e) => { }} title='Main Color' />

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
              marginTop="0.5em"
              transform={false}
              buttonType="submit"
            >
              <FaSave />
            </ButtonIcon>
          </>}

      </div>
    </div>
  )
}
