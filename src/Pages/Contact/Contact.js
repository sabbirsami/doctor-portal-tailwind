import React from "react";
import { MdLocationPin } from "react-icons/md";
import { IoMdCall } from "react-icons/io";

const Contact = () => {
    return (
        <div>
            <div className="container mx-auto">
                <div class="hero lg:min-h-[70vh]">
                    <div class="hero-content flex-col lg:flex-row-reverse">
                        <div class="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                            <div class="card-body">
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">
                                            Your email address
                                        </span>
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        class="input input-bordered"
                                    />
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">
                                            Your name/ company's name
                                        </span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        class="input input-bordered"
                                    />
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Message</span>
                                    </label>
                                    <textarea
                                        class="textarea textarea-bordered h-24"
                                        placeholder="Write your massage here..."
                                    ></textarea>
                                </div>

                                <div class="form-control mt-6">
                                    <button class="btn btn-primary">
                                        Send
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="text-center lg:text-left pr-22">
                            <h1 class="text-5xl pb-4">
                                Let's talk & make something amazing together.
                            </h1>
                            <h1 class="text-5xl py-8">
                                Start by{" "}
                                <span className="text-red-600 underline underline-offset-3">
                                    saying hi
                                </span>
                            </h1>
                            {/* <p class="pb-2 p-0">CONTACT</p>
                            <p className="">
                                <span>
                                    <MdLocationPin className="inline mr-2" />
                                    Dhaka, Bangladesh{" "}
                                </span>{" "}
                                <span>
                                    {" "}
                                    <IoMdCall></IoMdCall>
                                </span>
                            </p> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
