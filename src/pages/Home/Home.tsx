import styles from './Home.module.scss';
import Button from "../../components/Button";
import {useNavigate} from "react-router-dom";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "../../firebase";

const Home = () => {
    const navigate = useNavigate();
    const [user] = useAuthState(auth);

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
                            Beautiful food & takeaway, <span className='color--active'>delivered</span> to your door.
                        </h1>
                        <p className={styles.text}>Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.</p>
                        <Button text="Place an Order" size='large' onClick={handlePlaceOrder}/>
                        <div className={styles.review}>
                            <div className={styles.review__img}></div>
                            <p className={styles.review__text}><span className="color--active">4.8 out of 5</span> based
                                on 2000+ reviews</p>
                        </div>
                    </div>
                    <div className={styles['img-wrapper']}>
                        <img src="./home-img.png" alt="home image" className={styles.hero__img}/>
                        <span className={styles.img__title}></span>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Home;