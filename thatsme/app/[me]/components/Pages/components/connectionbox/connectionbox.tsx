import React from 'react'
import styles from './page.module.css'

interface ConnectionBoxProps{
    title: string;
    placeholder?:string;
}


export default function ConnectionBox({title, placeholder} : ConnectionBoxProps) {
    return (
        <div className={styles.box}>
            <div className={styles.link}>
                <p className={styles.title}>{title}</p>
            </div>
            <input autoComplete='off' spellCheck='false' className={styles.theinput} placeholder={placeholder}></input>
        </div>
    )
}
