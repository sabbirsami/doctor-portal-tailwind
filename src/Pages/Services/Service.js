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
                    <div className="mx-auto bg-base-100 shadow-xl">
                        <div>
                            <figure className="px-10 pt-10">
                                <img
                                    src={fluoride}
                                    alt="Shoes"
                                    className="rounded-xl w-1/6"
                                />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    Fluoride Treatment
                                </h2>
                                <p className="text-left pb-4">
                                    <span className="text-5xl font-bold">
                                        $199
                                    </span>
                                    / Per Visit
                                </p>
                                <p className="pb-3">
                                    If a dog chews shoes whose shoes does he
                                    choose?
                                </p>
                                <div class="alert bg-white text-left px-0 py-1">
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
                                        <span>Lorem Ipsum Dolor Sit</span>
                                    </div>
                                </div>
                                <div class="alert bg-white text-left px-0 py-1">
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
                                        <span>Cubitur Sollicitudin Fentum</span>
                                    </div>
                                </div>
                                <div class="alert bg-white text-left px-0 py-1">
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
                                                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                        <span>Nullam Interdum Enim</span>
                                    </div>
                                </div>
                                <div class="alert bg-white text-left px-0 py-1">
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
                                                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                        <span>Donec Ultricies Metus</span>
                                    </div>
                                </div>
                                <div class="alert bg-white text-left px-0 py-1">
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
                                                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                        <span>Pellentesque Eget Nibh</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mx-auto bg-base-100 shadow-xl">
                        <div>
                            <figure className="px-10 pt-10">
                                <img
                                    src={cavity}
                                    alt="Shoes"
                                    className="rounded-xl  w-1/6"
                                />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">Cavity Filling</h2>
                                <p className="text-left pb-4">
                                    <span className="text-5xl font-bold">
                                        $289
                                    </span>
                                    / Per Visit
                                </p>
                                <p className="pb-3">
                                    If a dog chews shoes whose shoes does he
                                    choose?
                                </p>
                                <div class="alert bg-white text-left px-0 py-1">
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
                                        <span>Lorem Ipsum Dolor Sit</span>
                                    </div>
                                </div>
                                <div class="alert bg-white text-left px-0 py-1">
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
                                        <span>Cubitur Sollicitudin Fentum</span>
                                    </div>
                                </div>
                                <div class="alert bg-white text-left px-0 py-1">
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
                                        <span>Nullam Interdum Enim</span>
                                    </div>
                                </div>
                                <div class="alert bg-white text-left px-0 py-1">
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
                                                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                        <span>Donec Ultricies Metus</span>
                                    </div>
                                </div>
                                <div class="alert bg-white text-left px-0 py-1">
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
                                                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                        <span>Pellentesque Eget Nibh</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mx-auto bg-base-100 shadow-xl">
                        <div>
                            <figure className="px-10 pt-10">
                                <img
                                    src={teeth}
                                    alt="Cavity"
                                    className="rounded-xl  w-1/6"
                                />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">Teeth Whitening</h2>
                                <p className="text-left pb-4">
                                    <span className="text-5xl font-bold">
                                        $399
                                    </span>
                                    / Per Visit
                                </p>
                                <p className="pb-3">
                                    If a dog chews shoes whose shoes does he
                                    choose?
                                </p>
                                <div class="alert bg-white text-left px-0 py-1">
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
                                        <span>Lorem Ipsum Dolor Sit</span>
                                    </div>
                                </div>
                                <div class="alert bg-white text-left px-0 py-1">
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
                                        <span>Cubitur Sollicitudin Fentum</span>
                                    </div>
                                </div>
                                <div class="alert bg-white text-left px-0 py-1">
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
                                        <span>Nullam Interdum Enim</span>
                                    </div>
                                </div>
                                <div class="alert bg-white text-left px-0 py-1">
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
                                        <span>Donec Ultricies Metus</span>
                                    </div>
                                </div>
                                <div class="alert bg-white text-left px-0 py-1">
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
                                        <span>Pellentesque Eget Nibh</span>
                                    </div>
                                </div>
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
