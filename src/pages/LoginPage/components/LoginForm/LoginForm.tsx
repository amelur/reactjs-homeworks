import styles from "./LoginForm.module.scss";
import {useState} from "react";
import {signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../../../../firebase";
import Button from "../../../../components/Button";
import InputField from "../../../../components/InputField";
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from '../../../../store/hooks'
import {setUserState} from "../../../../store/authSlice";

const LoginForm = () => {
    const [username, setUsername] = useState("UserName");
    const [password, setPassword] = useState("Password");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            const email = `${username}@example.com`;

            const userCredential = await signInWithEmailAndPassword(
                auth,
                email,
                password
            );

            const user = userCredential.user;

            dispatch(
                setUserState({
                    uid: user.uid,
                    email: user.email,
                    displayName: user.displayName,
                })
            );

            navigate("/order", {replace: true});
        } catch (err) {
            setError("Неверный username или пароль");
        } finally {
            setLoading(false);
        }
    };

    const handleCancel = () => {
        setUsername("");
        setPassword("");
        setError("");
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <div className={styles.inputs__wrapper}>
                <InputField
                    label="User name"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />

                <InputField
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>

            {error && <p className={styles.error}>{error}</p>}

            <div className={styles.btns__wrapper}>
                <Button
                    text={loading ? "Loading..." : "Submit"}
                    size="small"
                    type="submit"
                    disabled={loading}
                />

                <Button
                    text="Cancel"
                    size="small"
                    secondary
                    type="button"
                    onClick={handleCancel}
                    disabled={loading}
                />
            </div>
        </form>
    );
};

export default LoginForm;
