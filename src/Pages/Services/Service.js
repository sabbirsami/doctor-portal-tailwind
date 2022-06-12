import React from "react";
import fluoride from "../../assets/images/fluoride.png";
import teeth from "../../assets/images/whitening.png";
import cavity from "../../assets/images/cavity.png";
import treatment from "../../assets/images/treatment.png";
import PrimaryButton from "../Shared/PrimaryButton";

const Service = () => {
    return (
        <div className="container mx-auto">
            <div className="py-14">
                <div className="serviceTitle items-center text-center">
                    <h6 className="text-xl text-primary py-3">OUR SERVICES</h6>
                    <h2 className="text-5xl">Services We Provide</h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center text-center place-content-center px-14 py-10">
                    <div className="card  bg-base-100 shadow-xl">
                        <div>
                            <figure className="px-10 pt-10">
                                <img
                                    src={fluoride}
                                    alt="Shoes"
                                    className="rounded-xl"
                                />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">
                                    Fluoride Treatment
                                </h2>
                                <p>
                                    If a dog chews shoes whose shoes does he
                                    choose?
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-xl">
                        <div>
                            <figure className="px-10 pt-10">
                                <img
                                    src={cavity}
                                    alt="Shoes"
                                    className="rounded-xl"
                                />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Cavity Filling</h2>
                                <p>
                                    If a dog chews shoes whose shoes does he
                                    choose?
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-xl">
                        <div>
                            <figure className="px-10 pt-10">
                                <img
                                    src={teeth}
                                    alt="Cavity"
                                    className="rounded-xl"
                                />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Teeth Whitening</h2>
                                <p>
                                    If a dog chews shoes whose shoes does he
                                    choose?
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* SERVICE SECTION PART 02 */}
        </div>
    );
};

export default Service;
