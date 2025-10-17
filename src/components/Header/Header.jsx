import styles from "./Header.module.scss";
import NavBar from "../NavBar/NavBar";
import CartBtn from "../CartBtn/CartBtn";

export default function Header() {
    return (
        <header>
            <div className={`wrapper ${styles.header__wrapper}`}>
                <a href="/" className='logo'></a>
                <div className={styles.container}>
                    <NavBar/>
                    <CartBtn count={0}/>
                </div>

            </div>
        </header>
    );
}