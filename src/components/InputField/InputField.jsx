import styles from './InputField.module.scss';

const InputField = ({label, type = "text", value, onChange, required = false, className = ''}) => {
    return (
        <div className={`${styles.input__wrapper} ${className}`}>
            <label className={styles.input__label}>{label}</label>
            <input className={styles.input}
                   type={type}
                   value={value}
                   onChange={onChange}
                   required={required}
            />
        </div>
    );
};

export default InputField;