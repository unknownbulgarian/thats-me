import React, { Dispatch, MouseEventHandler, SetStateAction } from 'react'
import styles from './page.module.css'

interface TitleObject {
    title: string;
}

interface SelectProps {
    titles?: Array<TitleObject>
    title: string;
    expand: boolean;
    height?: string;
    onClick: MouseEventHandler<HTMLDivElement>
    noClick?: MouseEventHandler<HTMLDivElement>
    setExpand: Dispatch<SetStateAction<boolean>>;  
    setOption: Dispatch<SetStateAction<string>>;  
    value?: string;
}


export default function Select({ titles, title, expand, onClick, height, value, noClick, setOption, setExpand }: SelectProps) {



    return (
        <>
            <p className={styles.title}>{title}</p>
            <div onClick={!expand ? onClick : noClick} className={styles.select}
                style={{
                    height: expand ? height : '25px',
                    overflow: expand ? 'auto' : 'hidden'
                }}
            >
                {!expand && <p className={styles.value}>{value}</p>}
                {expand && titles?.map((item, index) => (
                    <p onClick={() => {setExpand(false); setOption(item.title) }} className={styles.option}>{item.title}</p>
                ))}
            </div>
        </>
    )
}
