import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Toaster } from "react-hot-toast";

import About from "./Pages/About/About";
import MyReview from "./Pages/Dashboard/MyReview";
import Users from "./Pages/Dashboard/Users";
import RequireAuth from "./Pages/Login/RequireAuth";
import AppointmentPage from "./Pages/Appointment/AppointmentPage";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import SingUp from "./Pages/Login/SingUp";
import Footer from "./Pages/Shared/Footer";
import Navbar from "./Pages/Shared/Navbar";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyAppointments from "./Pages/Dashboard/MyAppointments";

function App() {
    return (
        <div>
            <Navbar></Navbar>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route
                    path="appointment"
                    element={
                        <RequireAuth>
                            <AppointmentPage />
                        </RequireAuth>
                    }
                />

                <Route
                    path="dashboard"
                    element={
                        <RequireAuth>
                            <Dashboard />
                        </RequireAuth>
                    }
                >
                    <Route
                        index
                        element={<MyAppointments></MyAppointments>}
                    ></Route>
                    <Route
                        path="review"
                        element={<MyReview></MyReview>}
                    ></Route>
                    <Route path="users" element={<Users></Users>}></Route>
                </Route>

                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SingUp />} />
            </Routes>
            <Footer></Footer>
            <Toaster position="top-center" reverseOrder={false} />
        </div>
    );
}

export default App;
