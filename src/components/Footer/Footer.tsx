import styles from "./Footer.module.scss"
import MediaLink from "../MediaLink"
import { useLanguageContext } from "../../context/LanguageContext"
import { footerTranslations } from "../../locales/footer"

const Footer = () => {
    const { language } = useLanguageContext()
    const t = footerTranslations[language] ?? footerTranslations.en

    return (
        <footer className={styles.footer}>
            <div className={`wrapper ${styles.footer__wrapper}`}>
                <div className={styles.footer__top}>
                    <div className={styles.container50}>
                        <a href="/" className="logo" />
                        <p className={styles.text}>{t.about.line1}</p>
                        <p className={styles.text}>{t.about.line2}</p>
                    </div>

                    <div className={styles.container}>
                        <p className={styles.title}>{t.company.title}</p>
                        <p className={styles.container__text}>{t.company.home}</p>
                        <p className={styles.container__text}>{t.company.order}</p>
                        <p className={styles.container__text}>{t.company.faq}</p>
                        <p className={styles.container__text}>{t.company.contact}</p>
                    </div>

                    <div className={styles.container}>
                        <p className={styles.title}>{t.template.title}</p>
                        <p className={styles.container__text}>
                            <a href="https://www.google.com/" target="_blank">
                                {t.template.styleGuide}
                            </a>
                        </p>
                        <p className={styles.container__text}>
                            <a href="https://www.google.com/" target="_blank">
                                {t.template.changelog}
                            </a>
                        </p>
                        <p className={styles.container__text}>
                            <a href="https://www.google.com/" target="_blank">
                                {t.template.licence}
                            </a>
                        </p>
                        <p className={styles.container__text}>
                            <a href="https://www.google.com/" target="_blank">
                                {t.template.university}
                            </a>
                        </p>
                    </div>

                    <div className={styles.container}>
                        <p className={styles.title}>{t.flowbase.title}</p>
                        <p className={styles.container__text}>{t.flowbase.more}</p>
                    </div>
                </div>

                <div className={styles.footer__bottom}>
                    <div className={styles.bottom__container}>
                        <span className={styles.bottom_text}>{t.bottom.builtBy}</span>
                        <span className={`${styles.bottom_text} ${styles['bottom_text--active']}`}>
                            Flowbase
                        </span>
                        <span className={styles.bottom_text}> · {t.bottom.poweredBy}</span>
                        <span className={`${styles.bottom_text} ${styles['bottom_text--active']}`}>
                            Webflow
                        </span>
                    </div>

                    <div className={styles.mediaLinks}>
                        <MediaLink icon="./instagram-icon.svg" href="https://www.instagram.com/" />
                        <MediaLink icon="./twitter-icon.svg" href="https://x.com/" />
                        <MediaLink icon="./youtube-icon.svg" href="https://www.youtube.com/" />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
