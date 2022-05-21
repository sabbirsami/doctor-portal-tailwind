import React from "react";

const AppointmentService = ({ service, setTreatment }) => {
    const { name, slots, price } = service;
    return (
        <div>
            <div className="card shadow-xl">
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-primary">{name}</h2>
                    <p>
                        {slots.length > 0 ? (
                            <span>{slots[0]}</span>
                        ) : (
                            <span className="text-red-500">
                                No Slot Available
                            </span>
                        )}
                    </p>
                    <p>
                        {slots.length} {slots.length > 1 ? "spaces" : "space"}{" "}
                        available
                    </p>
                    <p>
                        <small>Price ${price}</small>
                    </p>
                    <div className="card-actions justify-end">
                        <label
                            htmlFor="booking-modal"
                            onClick={() => setTreatment(service)}
                            disabled={slots.length === 0}
                            className="btn text-black bg-gradient-to-r from-cyan-400 to-blue-400 border-none"
                        >
                            Book Appointment
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentService;
