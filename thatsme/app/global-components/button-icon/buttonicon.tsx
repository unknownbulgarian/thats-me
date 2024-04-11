import React, { ReactNode } from 'react'
import styles from './page.module.css'

interface ButtonIconProps {
    backColor: string;
    width: string;
    height: string;
    borderRadius: string;
    children: ReactNode;
    color: string;
    fontSize?: string;
    iconBackColor?: string;
    iconBorderRadius?: string;
    title: string;
    titleColor: string;
    titleFontSize?: string;
    gap?: string;
}

export default function ButtonIcon({ backColor, width, height, borderRadius, color, children,
    iconBackColor, iconBorderRadius, title, titleColor, titleFontSize, gap }: ButtonIconProps) {
    return (
        <div className={styles.buttonicon} style={{
            backgroundColor: backColor,
            width: width,
            height: height,
            borderRadius: borderRadius,
            gap: gap
        }}>
            <span className={styles.icon} style={{
                backgroundColor: iconBackColor,
                borderRadius: iconBorderRadius,
                color: color
            }}>{children}</span>
            <p className={styles.title} style={{
                color: titleColor,
                fontSize: titleFontSize
            }}>{title}</p>
        </div>
    )
}
