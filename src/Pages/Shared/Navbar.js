import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const Navbar = () => {
    const [user] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
        localStorage.removeItem("accessToken");
    };
    const menuItems = (
        <>
            <li>
                <Link className="p-3 text-sm font-semibold" to="/">
                    HOME
                </Link>
            </li>
            <li>
                <Link className="p-3 text-sm font-semibold" to="/appointment">
                    APPOINTMENT
                </Link>
            </li>
            <li>
                <Link className="p-3 text-sm font-semibold" to="/review">
                    REVIEW
                </Link>
            </li>
            <li>
                <Link className="p-3 text-sm font-semibold" to="/contact">
                    CONTACT
                </Link>
            </li>
            <li>
                <Link className="p-3 text-sm font-semibold" to="/about">
                    ABOUT
                </Link>
            </li>
            {user && (
                <li>
                    <Link className="p-3 text-sm font-semibold" to="/dashboard">
                        DASHBOARD
                    </Link>
                </li>
            )}
            <li>
                {user ? (
                    <button className="btn btn-link" onClick={logout}>
                        Sign Out
                    </button>
                ) : (
                    <Link to="/login">Login</Link>
                )}
            </li>
        </>
    );
    return (
        <div className="container mx-auto">
            <div className="navbar bg-base-100 justify-center">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </label>
                        <ul
                            tabIndex="0"
                            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            {menuItems}
                        </ul>
                    </div>

                    <p className="btn btn-ghost normal-case text-xl">
                        Teeth Health
                    </p>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">{menuItems}</ul>
                </div>
                <div className="navbar-end lg:hidden">
                    <label
                        tabIndex="1"
                        htmlFor="my-drawer-2"
                        className="btn btn-ghost lg:hidden"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
