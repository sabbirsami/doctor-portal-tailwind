import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About";
import AppointmentPage from "./Pages/Appointment/AppointmentPage";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import SingUp from "./Pages/Login/SingUp";
import Footer from "./Pages/Shared/Footer";
import Navbar from "./Pages/Shared/Navbar";

function App() {
    return (
        <div>
            <Navbar></Navbar>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="appointment" element={<AppointmentPage />} />
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<SingUp />} />
            </Routes>
            <Footer></Footer>
        </div>
    );
}

export default App;
