import React, { useState } from "react";
import heroImg from "../../assets/images/blue.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const AppointmentBanner = ({ date, setDate }) => {
    return (
        <div className="bg-green-200">
            <div className="container mx-auto">
                <div className="hero ">
                    <div className="hero-content lg:p-0  flex-col lg:flex-row-reverse">
                        <img
                            src={heroImg}
                            className="lg:max-w-lg sm:max-w-sm rounded-none shadow-2xl"
                            alt=""
                        />
                        <div className="lg:pr-8">
                            <DayPicker
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;
