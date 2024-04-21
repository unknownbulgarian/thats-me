import React, { MouseEventHandler } from 'react'
import styles from './page.module.css'

interface TogglerProps {
    title: string,
    toggled: boolean;
    onClick?: MouseEventHandler<HTMLDivElement>
}

export default function Toggler({ title, toggled, onClick }: TogglerProps) {

    return (
        <div onClick={onClick} className={styles.toggleoption}>
            <div className={styles.toggler}>
                <div  className={`${toggled ? styles.toggle : styles.toggleoff}`}>
                    <p>{toggled ? 'ON' : 'OFF'}</p>
                </div>
            </div>
            <p>{title}</p>
        </div>
    )
}
