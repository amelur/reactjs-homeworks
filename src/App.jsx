import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {useState} from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import LoginPage from "./pages/LoginPage";
import OrderPage from "./pages/OrderPage";
import ProtectedRoute from "./routes/ProtectedRoute.jsx";
import Footer from "./components/Footer/index.js";

function App() {
    const [totalMeals, setTotalMeals] = useState(0);

    const handleAddToCart = (count) => {
        setTotalMeals((prev) => prev + count);
    };

    return (
        <Router>
            <Header totalMeals={totalMeals}/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/menu" element={<Menu onAddToCart={handleAddToCart}/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route
                    path="/order"
                    element={
                        <ProtectedRoute>
                            <OrderPage/>
                        </ProtectedRoute>
                    }
                />
            </Routes>
            <Footer/>
        </Router>
    );
}

export default App;