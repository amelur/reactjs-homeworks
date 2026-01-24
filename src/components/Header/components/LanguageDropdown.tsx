import { useLanguageContext } from '../../../context/LanguageContext'
import { controlsTranslations } from '../../../locales/controls'
import styles from './LanguageDropdown.module.scss'

const LanguageDropdown = () => {
    const { language, setLanguage } = useLanguageContext()
    const t = controlsTranslations[language] ?? controlsTranslations.en

    return (
        <label className={styles.language}>
            <span className={styles.label}>{t.language.label}</span>

            <select
                className={styles.select}
                value={language}
                onChange={(e) =>
                    setLanguage(e.target.value as typeof language)
                }
                aria-label={t.language.label}
            >
                <option value="en">EN</option>
                <option value="de">DE</option>
                <option value="ru">RU</option>
            </select>
        </label>
    )
}

export default LanguageDropdown
