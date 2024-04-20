import React, { MouseEventHandler, ReactNode } from 'react'
import styles from './page.module.css'

import { IoMdSettings } from "react-icons/io";

interface FeatureProps {
    children?: ReactNode;
    title: string;
    toggledBackColor?: string;
    optionsClick?: MouseEventHandler<HTMLDivElement>;
    optionsClickIcon?: MouseEventHandler<SVGElement>;
    toggleClick?: MouseEventHandler<HTMLDivElement>;
}

export default function Feature({ children, title, optionsClick, optionsClickIcon, toggleClick, toggledBackColor}: FeatureProps) {

    return (
        <div className={styles.feature}>
            <div className={styles.main}>
                <span className={styles.icon}>{children}</span>
                <h2 className={styles.title}>{title}</h2>
            </div>
            <div className={styles.options}>
                <div onClick={optionsClick} className={styles.option}>
                    <p>Options</p>
                </div>
                <div className={styles.optionicon}><IoMdSettings onClick={optionsClickIcon} /></div>
            </div>
            <div style={{backgroundColor: toggledBackColor}}  onClick={toggleClick} className={styles.toggle}>
                <p className={styles.toggletext}>Enabled</p>
            </div>
        </div>
    )
}
