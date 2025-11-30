import Header from "./components/Header";
import Footer from "./components/Footer/index.js";
import Home from "./pages/Home/Home";


function App() {

    return (
        <>
            <Header/>
            <Home phone={'+370-937-99-92'}/>
            <Footer/>
        </>
    )
}

export default App
