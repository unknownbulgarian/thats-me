import React, { MouseEventHandler, ReactNode } from 'react'
import styles from './page.module.css'

import { FaCheck } from "react-icons/fa";

interface BoxCheckerProps {
    title: string;
    toggled: boolean;
    chroma?: boolean;
    onClick?: MouseEventHandler<HTMLDivElement>
}


export default function BoxChecker({ title, onClick, toggled, chroma }: BoxCheckerProps) {
    return (
        <div className={styles.boxchecker}>
            <div onClick={onClick} className={styles.box}>
                {toggled && <FaCheck className={styles.icon} />}
            </div>
            <p  className={`${chroma ? styles.chroma : styles.title}`}>{title}</p>
        </div>
    )
}
