import React from 'react'
import styles from './page.module.css'

import Toggler from '../components/toggler/toggler'
import InputIcon from '@/app/global-components/input-icon/InputIcon'
import ButtonIcon from '@/app/global-components/button-icon/buttonicon'


export default function Connections() {
    return (
        <div className={styles.connections}>
            <div className={styles.connection}>
                <div className={styles.theconnection}>
                    <Toggler title='Instagram' toggled={false} />
                </div>
            </div>
            <div className={styles.connection}>
                <div className={styles.theconnection}>
                    <Toggler title='Steam' toggled={false} />
                </div>
            </div>
            <div className={styles.connection}>
                <div className={styles.theconnection}>
                    <Toggler title='Spotify' toggled={false} />
                </div>
            </div>
            <div className={styles.connection}>
                <div className={styles.theconnection}>
                    <Toggler title='Facebook' toggled={false} />
                </div>
            </div>
        </div>
    )
}
