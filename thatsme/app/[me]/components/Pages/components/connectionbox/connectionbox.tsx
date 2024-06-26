import React, { FormEventHandler } from 'react'
import styles from './page.module.css'

interface ConnectionBoxProps{
    title: string;
    placeholder?:string;
    onInput?: FormEventHandler<HTMLInputElement> | undefined
    value?: string | undefined
}


export default function ConnectionBox({title, placeholder, onInput, value} : ConnectionBoxProps) {
    return (
        <div className={styles.box}>
            <div className={styles.link}>
                <p className={styles.title}>{title}</p>
            </div>
            <input value={value} onInput={onInput} autoComplete='off' spellCheck='false' className={styles.theinput} placeholder={placeholder}></input>
        </div>
    )
}
