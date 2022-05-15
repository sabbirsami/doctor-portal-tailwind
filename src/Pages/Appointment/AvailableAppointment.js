import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import AppointmentService from "./AppointmentService";
import BookingModal from "./BookingModal";

const AvailableAppointment = ({ date }) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);
    useEffect(() => {
        fetch("http://localhost:5000/service")
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, []);
    return (
        <div>
            <h5 className="text-xl text-primary text-center ">
                Available Appointment on {format(date, "PP")}
            </h5>
            <div className="py-14">
                <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-14">
                    {services.map((service) => (
                        <AppointmentService
                            key={service._id}
                            service={service}
                            setTreatment={setTreatment}
                        ></AppointmentService>
                    ))}
                </div>
                {treatment && (
                    <BookingModal
                        date={date}
                        treatment={treatment}
                        setTreatment={setTreatment}
                    ></BookingModal>
                )}
            </div>
        </div>
    );
};

export default AvailableAppointment;
