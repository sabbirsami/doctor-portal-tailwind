import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";

const AddDoctor = () => {
    const imageUploadKey = "4890ef86cb137afcf283d9e2b184076a";
    const { data: services, isLoading } = useQuery("services", () =>
        fetch("https://teeth-health.herokuapp.com/service").then((res) =>
            res.json()
        )
    );
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm();

    const onSubmit = async (data) => {
        const image = data.img[0];
        const formData = new FormData();
        formData.append("image", image);
        const url = `https://api.imgbb.com/1/upload?key=${imageUploadKey}`;
        fetch(url, {
            method: "POST",
            body: formData,
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.success) {
                    const img = result.data.url;
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        image: img,
                    };
                    //sent to your database
                    fetch("https://teeth-health.herokuapp.com/doctor", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            authorization: `Bearer ${localStorage.getItem(
                                "accessToken"
                            )}`,
                        },
                        body: JSON.stringify(doctor),
                    })
                        .then((res) => res.json())
                        .then((inserted) => {
                            if (inserted.insertedId) {
                                toast.success(`Successfully added`, {
                                    duration: 3000,
                                });
                                reset();
                            } else {
                                toast.error(`Fail to add`, {
                                    duration: 3000,
                                });
                            }
                        });
                }
            });
    };

    if (isLoading) {
        return <Loading></Loading>;
    }
    return (
        <div>
            <h2 className="text-2xl">Add Doctor</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="input input-bordered w-full max-w-xs"
                        {...register("name", {
                            required: {
                                value: true,
                                message: "Name is Required",
                            },
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === "required" && (
                            <span className="label-text-alt text-red-500">
                                {errors.name.message}
                            </span>
                        )}
                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="input input-bordered w-full max-w-xs"
                        {...register("email", {
                            required: {
                                value: true,
                                message: "Email is Required",
                            },
                            pattern: {
                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                message: "Provide a valid Email",
                            },
                        })}
                    />
                    <label className="label">
                        {errors.email?.type === "required" && (
                            <span className="label-text-alt text-red-500">
                                {errors.email.message}
                            </span>
                        )}
                        {errors.email?.type === "pattern" && (
                            <span className="label-text-alt text-red-500">
                                {errors.email.message}
                            </span>
                        )}
                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Specialty</span>
                    </label>
                    <select
                        {...register("specialty", {
                            required: {
                                value: true,
                                message: "Specialization is Required",
                            },
                        })}
                        className="select select-bordered w-full max-w-xs"
                    >
                        {services.map((service) => (
                            <option key={service._id} value={service.name}>
                                {service.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input
                        type="file"
                        placeholder="Your Name"
                        className="input input-bordered w-full max-w-xs"
                        {...register("img", {
                            required: {
                                value: true,
                                message: "Image is Required",
                            },
                        })}
                    />
                    <label className="label">
                        {errors.img?.type === "required" && (
                            <span className="label-text-alt text-red-500">
                                {errors.img.message}
                            </span>
                        )}
                    </label>
                </div>
                <input
                    className="btn  w-full max-w-xs"
                    type="submit"
                    value={"Add"}
                />
            </form>
        </div>
    );
};

export default AddDoctor;
