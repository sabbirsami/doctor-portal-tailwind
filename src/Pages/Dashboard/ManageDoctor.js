import React from "react";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";

const ManageDoctor = () => {
    const {
        data: doctors,
        isLoading,
        refetch,
    } = useQuery("users", () =>
        fetch("http://localhost:5000/doctor").then((res) => res.json())
    );

    if (isLoading) {
        return <Loading></Loading>;
    }
    // const { email } = doctors;
    // console.log(doctors);
    const handleDelete = (email) => {
        fetch(`http://localhost:5000/doctor/${email}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                if (data) {
                    console.log(data);
                    toast.success(`Successfully doctor: ${data.name} deleted`, {
                        duration: 3000,
                    });
                    refetch();
                }
            });
    };
    return (
        <div>
            <h2 className="text-2xl">Manage Doctor {doctors.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {doctors.map((doctor, index) => (
                            <tr key={index}>
                                <th>{index + 1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="w-16 rounded">
                                            <img
                                                src={doctor.image}
                                                alt="Tailwind-CSS-Avatar-component"
                                            />
                                        </div>
                                    </div>
                                </td>
                                <td>{doctor.name}</td>
                                <td>{doctor.specialty}</td>
                                <td>
                                    <button
                                        onClick={() =>
                                            handleDelete(doctor.email)
                                        }
                                        className="btn btn-error btn-xs"
                                    >
                                        Delete
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

export default ManageDoctor;
