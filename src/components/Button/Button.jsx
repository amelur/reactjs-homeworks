import styles from "./Button.module.scss";

const Button = ({text, secondary, size, onClick}) => {
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