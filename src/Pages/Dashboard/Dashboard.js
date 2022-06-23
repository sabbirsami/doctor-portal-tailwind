import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";
import Loading from "../Shared/Loading";

const Dashboard = () => {
    const [user, loading, error] = useAuthState(auth);
    const [admin] = useAdmin(user);
    if (loading) {
        return <Loading></Loading>;
    }

    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <div className="flex justify-between align-middle">
                    <h2 className="pb-4 text-3xl font-bold text-secondary">
                        Dashboard
                    </h2>
                    <div>
                        <h2 className="text-2xl pr-8 underline">
                            Hi! {user?.displayName}
                        </h2>
                        <small>{user?.email}</small>
                    </div>
                </div>

                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li>
                        <Link to="/dashboard">Appointment</Link>
                    </li>
                    <li>
                        <Link to="/dashboard/review">Review</Link>
                    </li>

                    {admin && (
                        <>
                            <li>
                                <Link to="/dashboard/users">Users</Link>
                            </li>
                            <li>
                                <Link to="/dashboard/addDoctor">
                                    Add Doctor
                                </Link>
                            </li>
                            <li>
                                <Link to="/dashboard/manageDoctor">
                                    Manage Doctor
                                </Link>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;
