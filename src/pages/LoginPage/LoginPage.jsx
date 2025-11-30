import styles from './LoginPage.module.scss';
import LoginForm from './components/LoginForm';

const LoginPage = () => {
    return (
        <main>
            <section className={styles.login}>
                <h1 className={styles.title}>Log in</h1>
                <LoginForm/>
            </section>
        </main>
    )
}

export default LoginPage;