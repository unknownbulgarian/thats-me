import React from 'react'
import styles from './page.module.css'

interface UsernameProps {
    params: { me: string };
}


export default function Username({params} : UsernameProps) {
  return (
    <h1 className={styles.username}>{params.me}</h1>
  )
}
