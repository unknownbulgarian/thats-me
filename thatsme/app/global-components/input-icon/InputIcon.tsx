import React, { ReactNode } from 'react';
import styles from './page.module.css'; // Assuming you have defined styles for your component
import './page.module.css'; // This line seems unnecessary

interface InputIconProps {
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
    type: string;
}

export default function InputIcon({
    backColor, width, height, borderRadius, children, color,
    fontSize, iconBackColor, iconBorderRadius, title, titleColor, titleFontSize, type
}: InputIconProps) {
    return (
        <div className={styles.inputicon}
            style={{
                backgroundColor: backColor,
                width: width,
                height: height,
                borderRadius: borderRadius
            }}>
            <span className={styles.icon}
                style={{
                    color: color,
                    backgroundColor: iconBackColor,
                    borderRadius: iconBorderRadius
                }}>
                {children}
            </span>
            <input className={styles.theinput}
                type={type}
                placeholder={title}
                style={{
                    color: titleColor,
                    fontSize: fontSize,
                }} />
        </div>
    );
}
