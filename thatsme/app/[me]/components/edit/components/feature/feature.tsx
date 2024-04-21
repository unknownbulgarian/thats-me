import React, { MouseEventHandler, ReactNode } from 'react'
import styles from './page.module.css'

import { IoMdSettings } from "react-icons/io";

interface FeatureProps {
    children?: ReactNode;
    title: string;
    toggledBackColor?: string;
    mainClick?: MouseEventHandler<HTMLDivElement>;
    toggleClick?: MouseEventHandler<HTMLDivElement>;
}

export default function Feature({ children, title, mainClick, toggleClick, toggledBackColor}: FeatureProps) {

    return (
        <div className={styles.feature}>
            <div onClick={mainClick} className={styles.main}>
                <span className={styles.icon}>{children}</span>
                <h2 className={styles.title}>{title}</h2>
            </div>
            <div className={styles.options}>
                <div onClick={mainClick} className={styles.option}>
                    <p>Options</p>
                </div>
                <div onClick={mainClick} className={styles.optionicon}><IoMdSettings /></div>
            </div>
            <div style={{backgroundColor: toggledBackColor}}  onClick={toggleClick} className={styles.toggle}>
                <p className={styles.toggletext}>Enabled</p>
            </div>
        </div>
    )
}
