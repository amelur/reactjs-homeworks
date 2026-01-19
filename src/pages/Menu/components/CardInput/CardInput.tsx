import styles from './CardInput.module.scss';

type CardInputProps = {
    value: number
    min?: number
    onChange: (value: number) => void
}


const CardInput = ({value = 1, min = 1, onChange}: CardInputProps) => {

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