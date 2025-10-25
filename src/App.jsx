import Header from "./components/Header";
import Footer from "./components/Footer/index.js";
import Menu from "./pages/Menu/index.js";
import {useState} from "react";

function App() {

    const [totalMeals, setTotalMeals] = useState(0);

    const handleAddToCart = (count) => {
        setTotalMeals((prev) => prev + count);
    };


    return (
        <>
            <Header totalMeals={totalMeals}/>
            <Menu onAddToCart={handleAddToCart}/>
            <Footer/>
        </>
    )
}

export default App
