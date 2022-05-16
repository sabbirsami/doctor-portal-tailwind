import { format } from "date-fns";
import { useQuery } from "react-query";
import React, { useEffect, useState } from "react";
import AppointmentService from "./AppointmentService";
import BookingModal from "./BookingModal";
import Loading from "../Shared/Loading";

const AvailableAppointment = ({ date }) => {
    // const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);
    const formattedDate = format(date, "PP");
    const {
        isLoading,
        error,
        refetch,
        data: services,
    } = useQuery(["available", formattedDate], () =>
        fetch(`http://localhost:5000/available?date=${formattedDate}`).then(
            (res) => res.json()
        )
    );
    if (isLoading) {
        return <Loading></Loading>;
    }
    // useEffect(() => {
    //     fetch(`http://localhost:5000/available?date=${formattedDate}`)
    //         .then((res) => res.json())
    //         .then((data) => setServices(data));
    // }, [formattedDate]);
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
                        refetch={refetch}
                    ></BookingModal>
                )}
            </div>
        </div>
    );
};

export default AvailableAppointment;
