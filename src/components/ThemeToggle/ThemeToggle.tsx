import {useThemeContext} from '../../context/ThemeContext'
import styles from './ThemeToggle.module.scss'
import { useLanguageContext } from '../../context/LanguageContext'
import { controlsTranslations } from '../../locales/controls'

const ThemeToggle = () => {
    const {theme, setTheme} = useThemeContext()
    const { language } = useLanguageContext()

    const t = controlsTranslations[language] ?? controlsTranslations.en

    return (
        <label className={styles.themeToggle}>
            <span className={styles.label}>{t.theme.label}</span>

            <select
                value={theme}
                onChange={(e) => setTheme(e.target.value as 'light' | 'dark')}
                className={styles.select}
                aria-label="Theme selector"
            >
                <option value="light">{t.theme.light}</option>
                <option value="dark">{t.theme.dark}</option>
            </select>
        </label>
    )
}

export default ThemeToggle
