import styles from "./InputField.module.scss";

const InputField = ({
                        label,
                        className = "",
                        ...inputProps
                    }) => {
    return (
        <div className={`${styles.input__wrapper} ${className}`}>
            {label && (
                <label className={styles.input__label}>
                    {label}
                </label>
            )}

            <input
                className={styles.input}
                {...inputProps}
            />
        </div>
    );
};

export default InputField;
