import styles from "./Button.module.scss";

const Button = ({text, secondary, size}) => {
    return (
        <button
            className={`${styles.btn} ${secondary ? styles['btn--secondary'] : ''} ${size ? styles[`btn--${size}`] : ''}`}
        >
            {text}
        </button>
    )
}

export default Button;