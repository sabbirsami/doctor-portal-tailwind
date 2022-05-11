import React from "react";
import InfoCard from "./InfoCard";
import clock from "../../assets/icons/clock.svg";
import phone from "../../assets/icons/phone.svg";
import marker from "../../assets/icons/marker.svg";

const Info = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 px-14 ">
            <InfoCard img={clock}></InfoCard>
            <InfoCard img={marker}></InfoCard>
            <InfoCard img={phone}></InfoCard>
        </div>
    );
};

export default Info;
