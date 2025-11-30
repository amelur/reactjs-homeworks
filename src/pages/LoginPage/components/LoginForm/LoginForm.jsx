import styles from "./LoginForm.module.scss"
import {useState} from "react";
import {signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../../../../firebase";
import Button from "../../../../components/Button/index.js";
import InputField from "../../../../components/InputField/index.js";
import {useNavigate} from "react-router-dom";

const LoginForm = () => {
    const [username, setUsername] = useState("UserName");
    const [password, setPassword] = useState("Password");
    const [error, setError] = useState("");
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const email = `${username}@example.com`;
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/order");
        } catch (err) {
            setError("Неверный username или пароль");
        }
    };

    const handleCancel = () => {
        setUsername("");
        setPassword("");
        setError("");
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.inputs__wrapper}>
                <InputField label='User name' value={username} onChange={(e) => setUsername(e.target.value)}/>
                <InputField label='Password' type='password' value={password}
                            onChange={(e) => setPassword(e.target.value)}/>
            </div>
            {error && <p style={{color: "red"}}>{error}</p>}
            <div className={styles.btns__wrapper}>
                <Button text={'Submit'} size={'small'} type="submit"/>
                <Button text={'Cancel'} size={'small'} secondary onClick={handleCancel}/>
            </div>
        </form>
    )
}

export default LoginForm;