import React from "react";
import InfoCard from "./InfoCard";
import clock from "../../assets/icons/clock.svg";
import phone from "../../assets/icons/phone.svg";
import marker from "../../assets/icons/marker.svg";

const Info = () => {
    return (
        <div className="container mx-auto py-6">
            <div className="lg:bg-green-100 rounded-2xl grid grid-cols-1 lg:grid-cols-3 gap-10 px-14 ">
                <InfoCard
                    cardBody="Simply text to listen on app."
                    cardTitle="Opening Hours"
                    img={clock}
                ></InfoCard>
                <InfoCard
                    cardBody="Brooklyn, NY 10036, United States"
                    cardTitle="Visit our location"
                    img={marker}
                ></InfoCard>
                <InfoCard
                    cardBody="+000 123 456789"
                    cardTitle="Contact us now"
                    img={phone}
                ></InfoCard>
            </div>
        </div>
    );
};

export default Info;
