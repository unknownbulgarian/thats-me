import React, { ReactNode } from 'react'
import styles from './page.module.css'


interface ButtonIconProps {
    backColor?: string;
    width: string;
    height: string;
    borderRadius: string;
    children: ReactNode;
    color: string;
    fontSize?: string;
    iconBackColor?: string;
    iconBorderRadius?: string;
    iconFontSize: string;
    title: string;
    titleColor: string;
    titleFontSize?: string;
    gap?: string;
    backgroundImage?: string;
    transform?: boolean;
}

export default function ButtonIcon({ backColor, width, height, borderRadius, color, children,
    iconBackColor, iconBorderRadius, title, titleColor, titleFontSize, gap, iconFontSize, backgroundImage, transform }: ButtonIconProps) {
    return (
        <div className={styles.buttonicon} style={{
            backgroundColor: backColor,
            width: width,
            height: height,
            borderRadius: borderRadius,
            gap: gap,
            backgroundImage: backgroundImage,
        }}>
            <span className={styles.icon} style={{
                backgroundColor: iconBackColor,
                borderRadius: iconBorderRadius,
                color: color,
                fontSize: iconFontSize
            }}>{children}</span>
            <p className={styles.title} style={{
                color: titleColor,
                fontSize: titleFontSize,
                textTransform: transform ? 'uppercase' : 'none'
            }}>{title}</p>
        </div>
    )
}
