import styles from './Home.module.scss';
import Button from "../../components/Button";
import {useNavigate} from "react-router-dom";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "../../firebase";
import {useLanguageContext} from '../../context/LanguageContext'
import {homeTranslations} from '../../locales/home'

const Home = () => {
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    const {language} = useLanguageContext()

    const t = homeTranslations[language]


    const handlePlaceOrder = () => {
        if (user) {
            navigate("/order");
        } else {
            navigate("/login");
        }
    };


    return (
        <main>
            <section className={styles.home}>
                <div className={`${styles.home__wrapper} wrapper`}>
                    <div className={styles.content}>
                        <h1 className={styles.title}>
                            {t.title.before}
                            <span className='color--active'>{t.title.highlight}</span>
                            {t.title.after}
                        </h1>
                        <p className={styles.text}>{t.text}</p>
                        <Button text={t.button} size='large' onClick={handlePlaceOrder}/>
                        <div className={styles.review}>
                            <p className={styles.review__img}><span className={styles.star__img}></span>Trustpilot</p>
                            <p className={styles.review__text}><span
                                className="color--active">{t.reviews.score}</span>
                                {t.reviews.text}
                            </p>
                        </div>
                    </div>
                    <div className={styles['img-wrapper']}>
                        <img src="./home-img.png" alt="home image" className={styles.hero__img}/>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Home;