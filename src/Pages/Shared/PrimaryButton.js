import React from "react";
import { IoIosArrowDropright } from "react-icons/io";
import arrow from "../../assets/icons/icons8-arrow-24.png";

const PrimaryButton = () => {
    return (
        <button className="btn btn-outline border-2 bg-emerald-500 border-sky-500 px-8 text-white border-sky-200 shadow-2xl">
            Get Started
            <IoIosArrowDropright className="text-xl ml-4"></IoIosArrowDropright>
        </button>
    );
};

export default PrimaryButton;
