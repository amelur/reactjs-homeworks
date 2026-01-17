import styles from "./Header.module.scss";
import NavBar from "../NavBar/NavBar";
import CartBtn from "../CartBtn/CartBtn";
import {Link} from "react-router-dom";
import {useAppSelector} from "../../store/hooks";
import {totalMealsSelector} from "../../store/cartSelectors";

export default function Header() {
    const totalMeals = useAppSelector(totalMealsSelector);

    return (
        <header>
            <div className={`wrapper ${styles.header__wrapper}`}>
                <Link to="/" className="logo"/>

                <div className={styles.container}>
                    <NavBar/>
                    <CartBtn totalMeals={totalMeals}/>
                </div>
            </div>
        </header>
    );
}
