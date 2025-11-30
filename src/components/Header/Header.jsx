import styles from "./Header.module.scss";
import NavBar from "../NavBar/NavBar";
import CartBtn from "../CartBtn/CartBtn";

export default function Header({totalMeals}) {
    return (
        <header>
            <div className={`wrapper ${styles.header__wrapper}`}>
                <a href="/" className='logo'></a>
                <div className={styles.container}>
                    <NavBar/>
                    <CartBtn totalMeals={totalMeals}/>
                </div>

            </div>
        </header>
    );
}