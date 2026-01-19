import styles from "./InputField.module.scss";
import React from 'react'

type InputFieldProps = {
    label?: string
    className?: string
} & React.InputHTMLAttributes<HTMLInputElement>

const InputField = ({
                        label,
                        className = "",
                        ...inputProps
                    }: InputFieldProps) => {
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
