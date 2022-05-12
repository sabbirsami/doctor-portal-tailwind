import React from "react";
import appointmentBg from "../../assets/images/appointment.png";
import doctor from "../../assets/images/doctor.png";
import PrimaryButton from "../Shared/PrimaryButton";

const Appointment = () => {
    return (
        <div
            style={{
                background: `url(${appointmentBg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            className="my-14"
        >
            <section>
                <div className="">
                    <div className="hero-content p-[0px] flex-col lg:flex-row">
                        <img className="mt-[-200px] w-[60%]" src={doctor} />
                        <div className="text-white">
                            <h5 className="text-xl font-bold text-primary py-2">
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
