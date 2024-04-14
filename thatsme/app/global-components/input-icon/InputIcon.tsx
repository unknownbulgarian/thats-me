import React, { ReactNode, forwardRef, Ref, FormEventHandler } from 'react';
import styles from './page.module.css';

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
    classN?: string;
    onInput?: FormEventHandler<HTMLInputElement>
    value?: string
}

const InputIcon = forwardRef<HTMLInputElement, InputIconProps>(({
    backColor, width, height, borderRadius, children, color,
    fontSize, iconBackColor, iconBorderRadius, title, titleColor, titleFontSize, type, classN, onInput, value
}: InputIconProps, ref: Ref<HTMLInputElement>) => {
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
            <input spellCheck='false' autoComplete='off' className={`${styles.theinput} ${classN}`}
                ref={ref}
                type={type}
                onInput={onInput}
                placeholder={title}
                value={value}
                style={{
                    color: titleColor,
                    fontSize: fontSize,
                }} />
        </div>
    );
});

export default InputIcon;
