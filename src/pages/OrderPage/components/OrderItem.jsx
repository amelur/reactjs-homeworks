import {useDispatch} from "react-redux";
import {addToCart, removeFromCart} from "../../../store/cartSlice";
import CardInput from "../../Menu/components/CardInput";
import Button from "../../../components/Button";
import styles from "./OrderItem.module.scss";

const OrderItem = ({id, img, meal, price, quantity}) => {
    const dispatch = useDispatch();

    const handleQuantityChange = (newQuantity) => {
        if (newQuantity < 1) return;
        dispatch(addToCart({id, quantity: newQuantity - quantity}));
    };

    const handleRemove = () => {
        dispatch(removeFromCart(id));
    };

    return (
        <div className={styles.orderItem}>
            <div className={styles.details}>
                <img src={img} alt={meal} className={styles.imgItem}/>
                <h3 className={styles.title}>{meal}</h3>
            </div>
            <div className={styles.details}>
                <p className={styles.total}>$ {(price * quantity).toFixed(2)}</p>
                <CardInput value={quantity} min={1} onChange={handleQuantityChange}/>
                <Button text="x" size="remove" onClick={handleRemove}/>
            </div>
        </div>
    );
};

export default OrderItem;
