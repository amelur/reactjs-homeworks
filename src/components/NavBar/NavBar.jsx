import styles from "./NavBar.module.scss";


const renderNavItems = (items) => {
    return items.map((item, index) => (
        <li key={index} className={styles.nav__item}>
            <a href="#" className={`${styles.nav__link} ${index === 1 ? styles['nav__link--active'] : ""}`}>{item}</a>
        </li>
    ));
}

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


