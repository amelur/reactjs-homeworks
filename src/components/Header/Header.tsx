import styles from "./Header.module.scss";
import NavBar from "../NavBar/NavBar";
import CartBtn from "../CartBtn/CartBtn";
import {Link, useLocation} from "react-router-dom";
import {useAppSelector} from "../../store/hooks";
import {totalMealsSelector} from "../../store/cartSelectors";
import ThemeToggle from '../ThemeToggle/ThemeToggle'
import LanguageDropdown from './components/LanguageDropdown'


export default function Header() {
    const totalMeals = useAppSelector(totalMealsSelector);
    const location = useLocation();

    return (
        <header>
            <div className={`wrapper ${styles.header__wrapper}`}>
                <Link to="/" className="logo"/>

                <div className={styles.container}>
                    <NavBar/>
                    <LanguageDropdown/>
                    <ThemeToggle/>
                    <CartBtn totalMeals={totalMeals}/>
                </div>
            </div>
        </header>
    );
}
