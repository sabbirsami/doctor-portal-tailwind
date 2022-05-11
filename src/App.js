import { Route, Router } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import Navbar from "./Pages/Shared/Navbar";

function App() {
    return (
        <div>
            <Navbar></Navbar>
            <Router>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/" element={<About></About>}></Route>
            </Router>
        </div>
    );
}

export default App;
