import React, { MouseEventHandler, ReactNode } from 'react'
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
    background?: string;
    buttonType: any;
    marginTop?: string;
    onClick?: MouseEventHandler<HTMLDivElement>
}

export default function ButtonIcon({ backColor, width, height, borderRadius, color, children,
    iconBackColor, iconBorderRadius, title, titleColor, titleFontSize, gap, iconFontSize, backgroundImage, transform, background, buttonType, marginTop, onClick }: ButtonIconProps) {
    return (
        <div className={styles.buttonicon} onClick={onClick} style={{
            backgroundColor: backColor,
            width: width,
            height: height,
            borderRadius: borderRadius,
            gap: gap,
            backgroundImage: backgroundImage,
            background: background,
            marginTop: marginTop
        }}>
            <button type={buttonType} className={styles.thebutton}>hey</button>
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
