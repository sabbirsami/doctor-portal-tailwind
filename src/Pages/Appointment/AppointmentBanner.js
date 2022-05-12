import React, { useState } from "react";
import heroImg from "../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const AppointmentBanner = ({ date, setDate }) => {
    return (
        <div>
            <div className="hero min-h-[50vh] ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src={heroImg}
                        className="max-w-lg rounded shadow-2xl"
                        alt=""
                    />
                    <div>
                        <DayPicker
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;
