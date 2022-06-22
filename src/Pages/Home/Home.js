import React from "react";
import ProgressSection from "../ProgressSection/ProgressSection";
import Info from "./Info";
import Service from "../Services/Service";
import Appointment from "./Appointment";
import Testimonial from "./Testimonial";
import Banner from "./Banner";
import PerfectSmile from "./PerfectSmile";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            {/* <ProgressSection></ProgressSection> */}
            <Service></Service>
            <Info></Info>
            <PerfectSmile></PerfectSmile>
            <Appointment></Appointment>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;
