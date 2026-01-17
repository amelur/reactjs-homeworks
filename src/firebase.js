import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD7ufCX_eOqUHDhpzaDnTEgSgwaNDnjP_g",
    authDomain: "reacthw-942ae.firebaseapp.com",
    projectId: "reacthw-942ae",
    storageBucket: "reacthw-942ae.firebasestorage.app",
    messagingSenderId: "966850970860",
    appId: "1:966850970860:web:d2484bed97fcb171fed1c9"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);