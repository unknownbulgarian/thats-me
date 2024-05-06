import React from 'react'
import styles from './style.module.css'

import InputIcon from '@/app/global-components/input-icon/InputIcon'
import ButtonIcon from '@/app/global-components/button-icon/buttonicon';


import { FaRegImage } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaSave } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";

export default function ProfilePage() {
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
                    value={''}
                    onInput={(e) => { }}
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
                    onClick={() => { }}
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
                    value={''}
                    onInput={(e) => { }}
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
                    onClick={() => { }}
                >
                    <FaSave />
                </ButtonIcon>
            </div>

            <div className={styles.option}>
                <textarea className={styles.bio}>

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
                    onClick={() => { }}
                >
                    <FaSave />
                </ButtonIcon>
            </div>
        </div>
    )
}
