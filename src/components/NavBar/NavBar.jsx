import styles from "./NavBar.module.scss";
import {NavLink} from "react-router-dom";


const renderNavItems = (items) => {
    return items.map((item, index) => {
        const path = item.toLowerCase() === "home" ? "/" : `/${item.toLowerCase()}`;

        return (
            <li key={index} className={styles.nav__item}>
                <NavLink
                    to={path}
                    className={({isActive}) =>
                        `${styles.nav__link} ${isActive ? styles['nav__link--active'] : ""}`
                    }
                >
                    {item}
                </NavLink>
            </li>
        );
    });
};

const NavBar = () => {
    const navItems = ['Home', 'Menu', 'Company', 'Login']
    return (
        <nav className={styles.nav}>
            <ul className={styles.nav__list}>
                {renderNavItems(navItems)}
            </ul>
        </nav>
    );
}

export default NavBar;


