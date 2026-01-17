import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import LoginPage from "./pages/LoginPage";
import OrderPage from "./pages/OrderPage";

import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
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
