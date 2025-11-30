import styles from "./Footer.module.scss";
import MediaLink from "../MediaLink/index.js";

const Footer = () => {

    return (
        <footer className={styles.footer}>
            <div className={`wrapper ${styles.footer__wrapper}`}>
                <div className={styles.footer__top}>
                    <div className={styles.container50}>
                        <a href="/" className='logo'></a>
                        <p className={styles.text}>Takeaway & Delivery template</p>
                        <p className={styles.text}>for small - medium businesses.</p>
                    </div>
                    <div className={styles.container}>
                        <p className={styles.title}>company</p>
                        <p className={styles.container__text}>Home</p>
                        <p className={styles.container__text}>Order</p>
                        <p className={styles.container__text}>FAQ</p>
                        <p className={styles.container__text}>Contact</p>
                    </div>
                    <div className={styles.container}>
                        <p className={styles.title}>TEMPLATE</p>
                        <p className={styles.container__text}><a href="https://www.google.com/" target="_blank">Style
                            Guide</a></p>
                        <p className={styles.container__text}><a href="https://www.google.com/"
                                                                 target="_blank">Changelog</a></p>
                        <p className={styles.container__text}><a href="https://www.google.com/"
                                                                 target="_blank">Licence</a></p>
                        <p className={styles.container__text}><a href="https://www.google.com/" target="_blank">Webflow
                            University</a>
                        </p>
                    </div>
                    <div className={styles.container}>
                        <p className={styles.title}>FLOWBASE</p>
                        <p className={styles.container__text}>More Cloneables</p>
                    </div>
                </div>
                <div className={styles.footer__bottom}>
                    <div className={styles.bottom__container}>
                        <span className={styles.bottom_text}>Built by</span>
                        <span className={`${styles.bottom_text} ${styles['bottom_text--active']}`}>Flowbase</span>
                        <span className={styles.bottom_text}>· Powered by</span>
                        <span className={`${styles.bottom_text} ${styles['bottom_text--active']}`}>Webflow</span>
                    </div>
                    <div className={styles.mediaLinks}>
                        <MediaLink icon="./instagram-icon.svg" href="https://www.instagram.com/"/>
                        <MediaLink icon="./twitter-icon.svg" href="https://x.com/"/>
                        <MediaLink icon="./youtube-icon.svg" href="https://www.youtube.com/"/>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;