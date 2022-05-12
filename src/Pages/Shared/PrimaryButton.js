import React from "react";
import arrow from "../../assets/icons/icons8-arrow-24.png";

const PrimaryButton = () => {
    return (
        <button className="btn btn-primary bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500 px-8 rounded-full text-white shadow-2xl">
            Get Started <img className="pl-3 color-white" src={arrow} alt="" />
        </button>
    );
};

export default PrimaryButton;
