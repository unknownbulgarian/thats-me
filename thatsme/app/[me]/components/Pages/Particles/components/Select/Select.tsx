import React from 'react'
import styles from './page.module.css'

interface TitleObject {
    title: string;
}

interface SelectProps {
    titles?: Array<TitleObject>
}


export default function Select({ titles }: SelectProps) {
    return (
        <div className={styles.select}>
            {titles?.map((item, index) => (
                <></>
            ))}
        </div>
    )
}
