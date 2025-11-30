import styles from "./Header.module.scss";
import NavBar from "../NavBar/NavBar";
import CartBtn from "../CartBtn/CartBtn";
import {Link} from "react-router-dom";

export default function Header({totalMeals}) {
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