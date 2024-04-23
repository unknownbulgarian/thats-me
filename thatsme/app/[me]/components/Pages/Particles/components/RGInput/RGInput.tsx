import React, { FormEventHandler } from 'react'
import styles from './style.module.css'

interface RGInputProps {
    title: string;
    value?: number;
    onInput?: FormEventHandler<HTMLInputElement>;
    max: number;
    min: number;
    maxLength: number;
    marginBottom?: string;
}

export default function RGInput({ title, value, onInput, max, min, maxLength, marginBottom }: RGInputProps) {
    return (
        <div style={{marginBottom: marginBottom}} className={styles.rg}>
            <div className={styles.main}>
                <p className={styles.title}>{title}</p>
                <input spellCheck='false' autoComplete='off' 
                type='number' maxLength={maxLength} onInput={onInput} value={value} className={styles.boxinp}></input>
            </div>
            <input spellCheck='false' autoComplete='off' 
            max={max} min={min} className={styles.theinp} onInput={onInput} value={value} type='range'></input>
        </div>
    )
}
