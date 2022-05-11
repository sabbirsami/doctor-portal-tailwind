import React from "react";

import heroImg from "../../assets/images/chair.png";
import arrow from "../../assets/icons/icons8-arrow-24.png";
import ProgressSection from "../ProgressSection/ProgressSection";
import Info from "./Info";
import Service from "../Services/Service";

const Home = () => {
    return (
        <div>
            <div className="hero min-h-[80vh] ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src={heroImg}
                        className="max-w-lg rounded shadow-2xl"
                    />
                    <div>
                        <h1 className="text-6xl font-bold">
                            Your New Smile Starts Here
                        </h1>
                        <p className="py-6 pr-8 text-xl">
                            Provident cupiditate voluptatem et in. Quaerat
                            fugiat ut assumenda excepturi exercitationem quasi.
                            In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className="btn btn-primary bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500 px-8 rounded-full text-white shadow-2xl">
                            Get Started{" "}
                            <img
                                className="pl-3 color-white"
                                src={arrow}
                                alt=""
                            />
                        </button>
                    </div>
                </div>
            </div>
            <ProgressSection></ProgressSection>
            <Info></Info>
            <Service></Service>
        </div>
    );
};

export default Home;
