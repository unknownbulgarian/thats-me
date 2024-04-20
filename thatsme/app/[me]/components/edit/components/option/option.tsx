import React from 'react'
import styles from './page.module.css'

interface OptionProps {
    title: string;
}

export default function Option({ title, }: OptionProps) {
    return (
        <div className={styles.option}>
            <p className={styles.title}>{title}</p>
        </div>
    )
}
