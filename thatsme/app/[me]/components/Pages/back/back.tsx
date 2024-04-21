import React from 'react'
import styles from './page.module.css'

import { useEditor } from '@/app/states/editor'

import { IoChevronBack } from "react-icons/io5";
export default function BackComponent() {

    const { page, setPage } = useEditor()

    return (
        <IoChevronBack onClick={() => {setPage('')}} className={styles.backicon} />
    )
}
