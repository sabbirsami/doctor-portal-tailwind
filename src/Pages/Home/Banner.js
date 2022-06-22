import React from "react";
import heroImg from "../../assets/images/chair.png";
import { IoIosArrowDropright } from "react-icons/io";
import PrimaryButton from "../Shared/PrimaryButton";

const Banner = () => {
    return (
        <div className="banner-bg">
            <div className="container mx-auto">
                <div className="hero lg:min-h-[100vh] text-white">
                    <div className="hero-content mr-auto">
                        <div className="text-left"></div>
                        <div className="pb-44">
                            <p className=" text-2xl">Creating</p>
                            <h1 className="pb-8 lg:text-8xl text-6xl font-bold">
                                Brighter Smiles
                            </h1>
                            <button className="btn btn-outline border-2 bg-emerald-500 text-white mr-4 border-sky-200 px-8 rounded-0 shadow-2xl">
                                Contact{" "}
                            </button>
                            <PrimaryButton></PrimaryButton>{" "}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
