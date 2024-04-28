import React, { MouseEventHandler, ReactNode } from 'react'
import styles from './page.module.css'

import { FaCheck } from "react-icons/fa";

interface BoxCheckerProps {
    title: string;
    toggled: boolean;
    chroma?: boolean;
    onClick?: MouseEventHandler<HTMLDivElement>
    marginTop?: string;
}


export default function BoxChecker({ title, onClick, toggled, chroma, marginTop }: BoxCheckerProps) {
    return (
        <div className={styles.boxchecker} style={{marginTop: marginTop}}>
            <div onClick={onClick} className={styles.box}>
               <FaCheck  className={`${toggled ? styles.icon : styles.off}`} />
            </div>
            <p  className={`${chroma ? styles.chroma : styles.title}`}>{title}</p>
        </div>
    )
}
