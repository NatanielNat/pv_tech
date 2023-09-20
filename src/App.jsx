import "./App.css"
import Nav from "./features/nav/Nav"
import Home from "./features/home/Home"
import Rep from "./features/reparatur/Rep"
import War from "./features/wartung/War"
import About from "./features/about/About"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"



const App = () => {
    return (

        <Router>
            <ul className="background">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <div className="app__container">
                <Nav />
                <div className="app__content">
                    <Routes>
                    <Route path="/" element={<Home />}/>  
                    <Route path="/about" element={<About />}/>
                    <Route path="/wartung" element={<War />}/>     
                    <Route path="/reparatur" element={<Rep />}/>                          
                    </Routes>
                </div>
            </div>
        </Router>

    )
}

export default App