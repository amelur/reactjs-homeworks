import styles from "./Button.module.scss";
import React from 'react'

type ButtonProps = {
    text: string
    secondary?: boolean
    size?: 'small' | 'medium' | 'large' | 'remove'
    onClick?: () => void
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({text, secondary, size, onClick}: ButtonProps) => {
    return (
        <button
            className={`${styles.btn} ${secondary ? styles['btn--secondary'] : ''} ${size ? styles[`btn--${size}`] : ''}`}
            onClick={onClick}
        >
            {text}
        </button>
    )
}

export default Button;