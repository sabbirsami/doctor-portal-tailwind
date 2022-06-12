import React from "react";
import appointmentBg from "../../assets/images/appointment.png";
import doctor from "../../assets/images/doctor.png";
import PrimaryButton from "../Shared/PrimaryButton";

const Appointment = () => {
    return (
        <div className="bg-sky-200">
            <section>
                <div className="py-24 lg:pl-24">
                    <div className="hero-content p-[0px] flex-col lg:flex-row">
                        <div className="text-dark">
                            <h5 className="text-xl font-bold text-sky-900 py-2">
                                Appointment
                            </h5>
                            <h1 className="text-5xl font-bold ">
                                Make an appointment Today
                            </h1>
                            <p className="py-6">
                                Provident cupiditate voluptatem et in. Quaerat
                                fugiat ut assumenda excepturi exercitationem
                                quasi. In deleniti eaque aut repudiandae et a id
                                nisi.
                            </p>
                            <PrimaryButton></PrimaryButton>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Appointment;
