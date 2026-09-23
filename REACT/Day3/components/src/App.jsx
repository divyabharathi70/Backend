import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./components/Home"
import Navbar from "./components/Navbar"

const App = () =>{
    return (
        <>
        <div>
            <Header/>
            <Navbar/>
            <Home/>
            <Contact/>
            <Footer/>
        </div>
        
        </>
    )
}

export default App