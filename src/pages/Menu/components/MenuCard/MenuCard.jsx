import styles from './MenuCard.module.scss';
import {useState} from "react";
import Button from "../../../../components/Button/index.js";
import CardInput from "../CardInput/";
import {useDispatch} from "react-redux";
import {addToCart} from "../../../../store/cartSlice";

const MenuCard = ({id, img, meal, price, instructions}) => {
    const [cardValue, setCardValue] = useState(1);
    const dispatch = useDispatch();

    const shortText = instructions.length > 120
        ? instructions.slice(0, 120) + "..."
        : instructions;

    const handleAddToCart = () => {
        dispatch(addToCart({id, quantity: cardValue}));
        setCardValue(1);
    }

    return (
        <div className={styles.card} id={id}>
            <img src={img} alt={meal} className={styles.img}/>
            <div className={styles.description}>
                <div className={styles.desc__wrapper}>
                    <h4 className={styles.title}>{meal}</h4>
                    <p className={styles.price}>$ {price.toFixed(2)} USD</p>
                </div>
                <p className={styles.text}>{shortText}</p>
                <div className={styles.container}>
                    <CardInput value={cardValue} min={1} onChange={setCardValue}/>
                    <Button text="Add to cart" size="small" onClick={handleAddToCart}/>
                </div>
            </div>
        </div>
    )
}

export default MenuCard;