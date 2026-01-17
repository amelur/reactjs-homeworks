import {useAppDispatch} from '../../../store/hooks'
import {addToCart, removeFromCart} from "../../../store/cartSlice";
import CardInput from "../../Menu/components/CardInput";
import Button from "../../../components/Button";
import styles from "./OrderItem.module.scss";

type OrderItemProps = {
    id: string
    img: string
    meal: string
    price: number
    quantity: number
}

const OrderItem = ({id, img, meal, price, quantity}: OrderItemProps) => {
    const dispatch = useAppDispatch();

    const handleQuantityChange = (newQuantity: number) => {
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
