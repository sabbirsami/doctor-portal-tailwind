import React from "react";

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
                                        <span class="label-text">Email</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="email"
                                        class="input input-bordered"
                                    />
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Email</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="email"
                                        class="input input-bordered"
                                    />
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Message</span>
                                    </label>
                                    <textarea
                                        class="textarea textarea-bordered h-24"
                                        placeholder="Bio"
                                    ></textarea>
                                </div>

                                <div class="form-control mt-6">
                                    <button class="btn btn-primary">
                                        Login
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
                                <span className="text-red-600 underline-offset-8">
                                    saying hi
                                </span>
                            </h1>
                            <p class="py-6">CONTACT</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
