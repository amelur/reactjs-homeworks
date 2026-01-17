import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useAppDispatch } from "./store/hooks";
import { onAuthStateChanged } from "firebase/auth";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import LoginPage from "./pages/LoginPage";
import OrderPage from "./pages/OrderPage";
import ProtectedRoute from "./routes/ProtectedRoute";
import { auth } from "./firebase";
import { setUserState, clearUserState } from "./store/authSlice";

function App() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        return onAuthStateChanged(auth, (user) => {
            if (user) {
                dispatch(
                    setUserState({
                        uid: user.uid,
                        email: user.email,
                        displayName: user.displayName,
                    })
                )
            } else {
                dispatch(clearUserState())
            }
        })
    }, [dispatch])


    return (
        <Router>
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/login" element={<LoginPage />} />

                <Route element={<ProtectedRoute />}>
                    <Route path="/order" element={<OrderPage />} />
                </Route>
            </Routes>

            <Footer />
        </Router>
    );
}

export default App;
