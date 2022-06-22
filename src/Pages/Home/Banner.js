import React from "react";
import heroImg from "../../assets/images/chair.png";
import { IoIosArrowDropright } from "react-icons/io";
import PrimaryButton from "../Shared/PrimaryButton";

const Banner = () => {
    return (
        <div className="">
            <div className="container mx-auto">
                <div className="hero lg:min-h-[88vh] ">
                    <div className="hero-content text-center flex-col lg:flex-row-reverse">
                        <div>
                            <div className="mx-auto text-center">
                                {/* <div class="alert mx-auto border-solid border-2 p-2 border-sky-500 bg-white  shadow-lg w-96">
                                <div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="stroke-current flex-shrink-0 h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                    <span>
                                        Your purchase has been confirmed!
                                    </span>
                                </div>
                            </div> */}
                            </div>
                            <h1 className="lg:text-9xl lg:px-28 text-6xl font-bold">
                                Your New Smile Starts Here
                            </h1>
                            <p className="py-6 text-2xl">
                                Provident cupiditate voluptatem et in.
                                Recusandae, voluptates quo incidunt harum minus
                                mollitia! Quaerat assumenda excepturi
                                exercitationem quasi. In deleniti eaque aut
                                repudiandae et a id nisi.
                            </p>
                            <button className="btn btn-outline border-2 bg-blue-600 text-white mr-4 border-sky-200 px-8 rounded-full shadow-2xl">
                                Contact{" "}
                                {/* <IoIosArrowDropright className="text-xl ml-4"></IoIosArrowDropright> */}
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
