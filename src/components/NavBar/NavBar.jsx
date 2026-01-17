import styles from "./NavBar.module.scss";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";

const NavBar = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const handleSignOut = async () => {
        try {
            await signOut(auth);
            navigate("/", { replace: true });
        } catch (error) {
            console.error("Error signing out:", error);
        }
    };

    const navItems = ["Home", "Menu", "Company"];

    return (
        <nav className={styles.nav}>
            <ul className={styles.nav__list}>
                {navItems.map((item) => {
                    const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;

                    return (
                        <li key={item} className={styles.nav__item}>
                            <NavLink to={path} className={styles.nav__link} end={item === "Home"}>
                                {item}
                            </NavLink>
                        </li>
                    );
                })}

                <li className={styles.nav__item}>
                    {user ? (
                        <button
                            type="button"
                            className={`${styles.nav__link}`}
                            onClick={handleSignOut}
                            title="Log out"
                        >
                            {user.displayName || "User"}
                        </button>
                    ) : (
                        <NavLink to="/login" className={styles.nav__link}>
                            Login
                        </NavLink>
                    )}
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
