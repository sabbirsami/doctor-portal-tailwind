import React from "react";
import awards from "../../assets/images/footer-awards.png";

const Footer = () => {
    return (
        <footer className=" p-10 bg-base-200 ">
            <div className="container py-16 mx-auto footer text-base-content">
                <div>
                    <h1 className="text-4xl">Teeth Health</h1>
                    <p>
                        We’re a friendly team of dentists <br /> working
                        together to ensure that you receive <br /> the best
                        treatment that you require.
                    </p>
                </div>
                <div>
                    <span className="text-2xl">About Teeth Health</span>
                    <div className="flex justify-between w-100">
                        <div className="w-100">
                            <p className="">About us</p>
                            <p className="">Contact</p>
                            <p className="">Jobs</p>
                            <p className="">Press kit</p>
                        </div>
                    </div>
                </div>
                <div>
                    <span className="text-2xl">Our Awards</span>
                    <div className="pt-4">
                        <img className="w-64" src={awards} alt="" />
                    </div>
                </div>
                <div>
                    <span className="text-2xl">Newsletter</span>
                    <div className="form-control w-80">
                        <label className="label">
                            <span className="label-text">
                                Enter your email address
                            </span>
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="username@site.com"
                                className="input input-bordered w-full pr-16"
                            />
                            <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
