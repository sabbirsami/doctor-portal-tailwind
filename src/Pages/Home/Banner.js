import React from "react";
import heroImg from "../../assets/images/chair.png";
import PrimaryButton from "../Shared/PrimaryButton";

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-[80vh] ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src={heroImg}
                        className="max-w-lg rounded shadow-2xl"
                        alt=""
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
                        <PrimaryButton></PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
