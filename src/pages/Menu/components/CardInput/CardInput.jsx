import styles from './CardInput.module.scss';

const CardInput = ({value = 1, min = 1, onChange}) => {


    return (
        <input
            type="number"
            value={value}
            min={min}
            className={styles.input}
            onChange={(e) => onChange(Number(e.target.value))}
        />
    );
};

export default CardInput;