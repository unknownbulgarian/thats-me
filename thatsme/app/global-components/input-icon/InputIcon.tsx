import React, { ReactNode } from 'react'
import styles from './page.module.css'

interface componentStyles {
    backColor: string
    width: string
    height: string
    gap?: string
    borderRadius: string
    children: ReactNode
    fontSize?: string
    color: string
    iconBackColor?: string
    iconBorderRadius?: string
    title: string
    titleColor: string
    titleFontSize?: string
    type: string
}


export default function InputIcon({
    backColor, width, height, gap, borderRadius, children, color,
    fontSize, iconBackColor, iconBorderRadius, title, titleColor, titleFontSize, type }: componentStyles) {
    return (
        <div className={styles.inputicon}
            style={{
                backgroundColor: backColor,
                width: width,
                height: height,
                gap: gap,
                borderRadius: borderRadius
            }} >
            <span className={styles.icon}
                style={{
                    color: color,
                    fontSize: fontSize,
                    backgroundColor: iconBackColor,
                    borderRadius: iconBorderRadius
                }}>
                {children}
                <input className={styles.theinput}
                    type={type}
                    placeholder={title}
                    style={{
                        color: titleColor,
                        fontSize: titleFontSize
                    }}></input>
            </span>
        </div>
    )
}
