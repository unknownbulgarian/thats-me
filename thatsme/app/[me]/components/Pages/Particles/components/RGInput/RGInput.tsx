import React, { FormEventHandler } from 'react'
import styles from './style.module.css'

interface RGInputProps {
    title: string;
    value?: number | string;
    onInput?: FormEventHandler<HTMLInputElement>;
    max?: number;
    min?: number;
    maxLength?: number;
    marginBottom?: string;
    inputWidth?: string;
    height?: string;
    type: string;
}

export default function RGInput({ title, value, onInput, max, min, maxLength, marginBottom, inputWidth, height, type }: RGInputProps) {
    return (
        <div style={{marginBottom: marginBottom}} className={styles.rg}>
            <div className={styles.main}>
                <p className={styles.title}>{title}</p>
                <input  spellCheck='false' autoComplete='off' 
                type={type === 'range' ? 'number' : 'text'} maxLength={maxLength} onInput={onInput} value={value} className={styles.boxinp}></input>
            </div>
            <input style={{width: inputWidth, height: height}} spellCheck='false' autoComplete='off' 
            max={max} min={min} className={styles.theinp} onInput={onInput} value={value} type={type}></input>
        </div>
    )
}
