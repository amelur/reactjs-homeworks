import {useThemeContext} from '../../context/ThemeContext'
import styles from './ThemeToggle.module.scss'

const ThemeToggle = () => {
    const {theme, setTheme} = useThemeContext()

    return (
        <label className={styles.themeToggle}>
            <span className={styles.label}>Theme</span>

            <select
                value={theme}
                onChange={(e) => setTheme(e.target.value as 'light' | 'dark')}
                className={styles.select}
                aria-label="Theme selector"
            >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
            </select>
        </label>
    )
}

export default ThemeToggle
