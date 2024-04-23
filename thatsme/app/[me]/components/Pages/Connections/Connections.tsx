import React from 'react'
import styles from './page.module.css'

import Toggler from '../components/toggler/toggler'
import ButtonIcon from '@/app/global-components/button-icon/buttonicon'
import ConnectionBox from '../components/connectionbox/connectionbox'

import { FaSave } from "react-icons/fa";

export default function Connections() {
    return (
        <div className={styles.connections}>
            <div className={styles.con}>
                <div className={styles.connection}>
                    <Toggler title='Instagram' toggled={false} />
                    <ConnectionBox placeholder='username...' title='https://www.instagram.com/' />
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
                </div>
                <div className={styles.connection}>
                    <Toggler title='Steam' toggled={false} />
                    <ConnectionBox placeholder='profiles/7456...' title='https://steamcommunity.com/' />
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
                </div>
            </div>

            <div className={styles.con}>
                <div className={styles.connection}>
                    <Toggler title='Spotify' toggled={false} />
                    <ConnectionBox placeholder='user/31ld2z...' title='https://open.spotify.com/' />
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
                </div>
                <div className={styles.connection}>
                    <Toggler title='Facebook' toggled={false} />
                    <ConnectionBox placeholder='people/username/pf...' title='https://facebook.com/' />
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
                </div>
            </div>
        </div>
    )
}
