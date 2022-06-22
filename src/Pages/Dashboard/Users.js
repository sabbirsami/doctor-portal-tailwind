import React from "react";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";

const Users = () => {
    const {
        data: users,
        isLoading,
        refetch,
    } = useQuery("users", () =>
        fetch("https://teeth-health.herokuapp.com/user").then((res) =>
            res.json()
        )
    );
    if (isLoading) {
        return <Loading></Loading>;
    }

    const makeAdmin = (email) => {
        console.log(users);
        fetch(`https://teeth-health.herokuapp.com/user/admin/${email}`, {
            method: "PUT",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                refetch();
                toast.success(`Successfully made an admin`, {
                    duration: 3000,
                });
                console.log(data);
            });
    };

    return (
        <div>
            <h2>All Users {users.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>No:</th>
                            <th>Email</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((a, index) => (
                            <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{a.email}</td>
                                <td>
                                    {a.role !== "admin" && (
                                        <button
                                            onClick={() => makeAdmin(a.email)}
                                            className="btn btn-xs"
                                        >
                                            Make an Admin
                                        </button>
                                    )}
                                </td>

                                <td>
                                    <button className="btn btn-xs">
                                        Remove
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;
