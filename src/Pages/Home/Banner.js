import React from "react";
import heroImg from "../../assets/images/chair.png";
import PrimaryButton from "../Shared/PrimaryButton";

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-[60vh] ">
                <div className="hero-content text-center flex-col lg:flex-row-reverse">
                    <div>
                        <h1 className="text-6xl font-bold">
                            Your New Smile Starts Here
                        </h1>
                        <p className="py-6 lg:px-48 text-xl">
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
