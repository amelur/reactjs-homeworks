import styles from "./OrderPage.module.scss";
import {useAppDispatch, useAppSelector} from '../../store/hooks'
import {useEffect} from "react";
import OrderItem from "./components/OrderItem";
import InputField from "../../components/InputField";
import Button from "../../components/Button";
import {clearCart} from "../../store/cartSlice";
import {getMealsData, type Meal} from "../../store/mealsSlice";

export type DetailedCartItem = {
    id: string
    quantity: number
} & Pick<Meal, "meal" | "price" | "img">

const OrderPage = () => {
    const dispatch = useAppDispatch();
    const cartItems = useAppSelector(state => state.cart.items);

    const {data: menuData, loading, error} = useAppSelector(
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

    const detailedCart: DetailedCartItem[] = cartItems
        .map(item => {
            const meal = menuData.find(m => m.id === item.id)
            if (!meal) return null

            return {
                id: item.id,
                quantity: item.quantity,
                meal: meal.meal,
                price: meal.price,
                img: meal.img,
            }
        })
        .filter((item): item is DetailedCartItem => item !== null)


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
