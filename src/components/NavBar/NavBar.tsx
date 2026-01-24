import styles from "./NavBar.module.scss";
import { NavLink, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { clearUserState } from "../../store/authSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useLanguageContext } from "../../context/LanguageContext";
import { headerTranslations } from "../../locales/header";

const NavBar = () => {
    const user = useAppSelector((state) => state.auth.user);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const { language } = useLanguageContext();
    const t = headerTranslations[language] ?? headerTranslations.en;

    const handleSignOut = async () => {
        try {
            await signOut(auth);
            dispatch(clearUserState());
            navigate("/", { replace: true });
        } catch (error) {
            console.error("Error signing out:", error);
        }
    };

    return (
        <nav className={styles.nav}>
            <ul className={styles.nav__list}>
                <li className={styles.nav__item}>
                    <NavLink to="/" end className={styles.nav__link}>
                        {t.nav.home}
                    </NavLink>
                </li>

                <li className={styles.nav__item}>
                    <NavLink to="/menu" className={styles.nav__link}>
                        {t.nav.menu}
                    </NavLink>
                </li>

                <li className={styles.nav__item}>
                    <NavLink to="/order" className={styles.nav__link}>
                        {t.nav.order}
                    </NavLink>
                </li>

                <li className={styles.nav__item}>
                    {user ? (
                        <button
                            type="button"
                            className={styles.nav__link}
                            onClick={handleSignOut}
                        >
                            {user.displayName ?? user.email?.split('@')[0] ?? t.nav.login}
                        </button>
                    ) : (
                        <NavLink to="/login" className={styles.nav__link}>
                            {t.nav.login}
                        </NavLink>
                    )}
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
