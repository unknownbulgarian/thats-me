import React, { MouseEventHandler } from 'react'
import styles from './page.module.css'

interface OptionProps {
    title: string;
    backColor?: string;
    onClick: MouseEventHandler<HTMLDivElement>;
}

export default function Option({ title, backColor, onClick }: OptionProps) {
    return (
        <div onClick={onClick} style={{background: backColor}} className={styles.option}>
            <p className={styles.title}>{title}</p>
        </div>
    )
}
