import React from "react";
import ProgressSection from "../ProgressSection/ProgressSection";
import Info from "./Info";
import Service from "../Services/Service";
import Appointment from "./Appointment";
import Testimonial from "./Testimonial";
import Banner from "./Banner";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ProgressSection></ProgressSection>
            <Info></Info>
            <Service></Service>
            <Appointment></Appointment>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;
