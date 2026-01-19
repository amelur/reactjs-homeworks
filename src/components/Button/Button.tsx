import styles from "./Button.module.scss";
import React from 'react'

type ButtonProps = {
    text: string
    secondary?: boolean
    size?: 'small' | 'medium' | 'large' | 'remove'
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({text, secondary, size, ...rest}: ButtonProps) => {
    return (
        <button
            className={`${styles.btn} ${secondary ? styles['btn--secondary'] : ''} ${size ? styles[`btn--${size}`] : ''}`}
            {...rest}
        >
            {text}
        </button>
    )
}

export default Button;