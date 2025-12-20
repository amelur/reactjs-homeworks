import styles from "./NavBar.module.scss";
import {NavLink, useNavigate} from "react-router-dom";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "../../firebase";
import {signOut} from "firebase/auth";

const NavBar = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const handleSignOut = async () => {
        try {
            await signOut(auth);
            navigate("/");
        } catch (error) {
            console.error("Error signing out:", error);
        }
    };

    const navItems = ['Home', 'Menu', 'Company'];

    return (
        <nav className={styles.nav}>
            <ul className={styles.nav__list}>
                {navItems.map((item, index) => {
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
                })}

                <li className={styles.nav__item}>
                    {user ? (
                        <span
                            className={`${styles.nav__link} ${styles.userName}`}
                            onClick={handleSignOut}
                            style={{cursor: "pointer"}}
                            title="Click to log out"
                        >
                            {user.displayName || 'User'}
                        </span>
                    ) : (
                        <NavLink
                            to="/login"
                            className={({isActive}) =>
                                `${styles.nav__link} ${isActive ? styles['nav__link--active'] : ""}`
                            }
                        >
                            Login
                        </NavLink>
                    )}
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
