import styles from "./Header.module.scss";
import NavBar from "../NavBar/NavBar";
import CartBtn from "../CartBtn/CartBtn";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

export default function Header() {

    const cartItems = useSelector((state) => state.cart.items);
    const totalMeals = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    console.log(cartItems);

    return (
        <header>
            <div className={`wrapper ${styles.header__wrapper}`}>
                <Link to="/" className='logo'></Link>
                <div className={styles.container}>
                    <NavBar/>
                    <CartBtn totalMeals={totalMeals}/>
                </div>

            </div>
        </header>
    );
}