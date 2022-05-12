import React from "react";
import appointmentBg from "../../assets/images/appointment.png";
import doctor from "../../assets/images/doctor.png";

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
                <div class="">
                    <div class="hero-content p-[0px] flex-col lg:flex-row">
                        <img className="mt-[-200px] w-[60%]" src={doctor} />
                        <div className="text-white">
                            <h5 class="text-xl font-bold text-primary">
                                Appointment
                            </h5>
                            <h1 class="text-5xl font-bold ">
                                Make an appointment Today
                            </h1>
                            <p class="py-6">
                                Provident cupiditate voluptatem et in. Quaerat
                                fugiat ut assumenda excepturi exercitationem
                                quasi. In deleniti eaque aut repudiandae et a id
                                nisi.
                            </p>
                            <button class="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Appointment;
