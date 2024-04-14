import React from 'react'
import styles from './page.module.css'


export default function page({ params }: { params: { me: string } }) {
    return (
        <div className={styles.main}>



         <div className={styles.links}></div>
        </div>
    )
}
