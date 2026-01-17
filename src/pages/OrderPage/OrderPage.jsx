import styles from "./OrderPage.module.scss";
import {useDispatch, useSelector} from "react-redux";
import { useEffect } from "react";
import OrderItem from "./components/OrderItem";
import InputField from "../../components/InputField/index.js";
import Button from "../../components/Button/index.js";
import {clearCart} from "../../store/cartSlice.js";
import {getMealsData} from "../../store/mealsSlice.js";


const OrderPage = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);

    const { data: menuData, loading, error } = useSelector(
        (state) => state.meals
    );

    useEffect(() => {
        if (!menuData) {
            dispatch(getMealsData());
        }
    }, [dispatch, menuData]);

    const handleOrder = () => {
        dispatch(clearCart());
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error fetching meals</p>;
    if (!menuData) return <p>Loading menu...</p>;

    const detailedCart = cartItems
        .map(item => {
            const meal = menuData.find(m => m.id === item.id);
            if (!meal) return null;
            return {...item, meal: meal.meal, price: meal.price, img: meal.img};
        })
        .filter(Boolean);


    return (
        <section className={styles.order}>
            <div className={`wrapper ${styles.order__wrapper}`}>
                <h1 className={styles.title}>Finish your order</h1>

                <div className={styles.orderItems}>
                    {cartItems.length > 0 ? (
                        <>
                            {detailedCart.map(item => (
                                <OrderItem
                                    key={item.id}
                                    id={item.id}
                                    img={item.img}
                                    meal={item.meal}
                                    price={item.price}
                                    quantity={item.quantity}
                                />
                            ))}
                            <div className={styles.input__wrapper}>
                                <InputField label='Street' required={true} className={styles.orderInput}/>
                                <InputField label='House' required={true} className={styles.orderInput}/>
                            </div>
                            <Button text='Order' onClick={handleOrder} size='small'/>
                        </>

                    ) : (
                        <p>Your cart is empty</p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default OrderPage;
