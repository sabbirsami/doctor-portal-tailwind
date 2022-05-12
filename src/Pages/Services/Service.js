import React from "react";
import arrow from "../../assets/icons/icons8-arrow-24.png";
import fluoride from "../../assets/images/fluoride.png";
import teeth from "../../assets/images/whitening.png";
import cavity from "../../assets/images/cavity.png";
import treatment from "../../assets/images/treatment.png";
import PrimaryButton from "../Shared/PrimaryButton";

const Service = () => {
    return (
        <>
            <div className="py-14">
                <div className="serviceTitle items-center text-center">
                    <h6 className="text-xl text-primary py-3">OUR SERVICES</h6>
                    <h2 className="text-5xl">Services We Provide</h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center text-center place-content-center px-14 py-10">
                    <div class="card  bg-base-100 shadow-xl">
                        <div>
                            <figure class="px-10 pt-10">
                                <img
                                    src={fluoride}
                                    alt="Shoes"
                                    class="rounded-xl"
                                />
                            </figure>
                            <div class="card-body items-center text-center">
                                <h2 class="card-title">Fluoride Treatment</h2>
                                <p>
                                    If a dog chews shoes whose shoes does he
                                    choose?
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="card bg-base-100 shadow-xl">
                        <div>
                            <figure class="px-10 pt-10">
                                <img
                                    src={cavity}
                                    alt="Shoes"
                                    class="rounded-xl"
                                />
                            </figure>
                            <div class="card-body items-center text-center">
                                <h2 class="card-title">Cavity Filling</h2>
                                <p>
                                    If a dog chews shoes whose shoes does he
                                    choose?
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="card bg-base-100 shadow-xl">
                        <div>
                            <figure class="px-10 pt-10">
                                <img
                                    src={teeth}
                                    alt="Cavity"
                                    class="rounded-xl"
                                />
                            </figure>
                            <div class="card-body items-center text-center">
                                <h2 class="card-title">Teeth Whitening</h2>
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
            <div>
                <div class="hero py-14">
                    <div class="hero-content flex-col lg:flex-row">
                        <img
                            src={treatment}
                            class="max-w-lg rounded-lg shadow-2xl"
                        />
                        <div className="lg:pl-14 pl-0">
                            <h1 class="text-5xl font-bold">Box Office News!</h1>
                            <p class="py-6 text-xl">
                                Provident cupiditate voluptatem et in. Quaerat
                                fugiat ut assumenda excepturi exercitationem
                                quasi. In deleniti eaque aut repudiandae et a id
                                nisi.
                            </p>
                            <PrimaryButton></PrimaryButton>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Service;
