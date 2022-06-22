import React from "react";
import teethImage from "../../assets/images/teeth-after.jpg";

const PerfectSmile = () => {
    return (
        <div className="lg:py-32 py-6">
            <div className="container mx-auto">
                <div class="hero">
                    <div class="hero-content justify-between flex-col lg:flex-row-reverse">
                        <div className="text-left">
                            <img
                                class="teeth-image lg:max-w-lg rounded-none"
                                src={teethImage}
                            />
                        </div>
                        <div>
                            <div className="pb-8">
                                <p class="text-4xl pb-2">Perfect Smile,</p>
                                <h1 class="text-6xl font-semibold pb-4">
                                    Excellence Defined
                                </h1>
                                <p>
                                    Teeth whitening is one of the quickest ways
                                    to improve your smile. Many patients are
                                    amazed that one trip to DentiCare can change
                                    their teeth dramatically.
                                </p>
                            </div>
                            <div className="lg:pr-16">
                                <div>
                                    <small>Success Rate</small>
                                    <progress
                                        class="progress progress-success w-100"
                                        value="94"
                                        max="100"
                                    ></progress>
                                </div>
                                <div>
                                    <small>Dental Satisfaction</small>
                                    <progress
                                        class="progress progress-success w-100"
                                        value="90"
                                        max="100"
                                    ></progress>
                                </div>
                                <div>
                                    <small>Travel Satisfaction</small>
                                    <progress
                                        class="progress progress-success w-100"
                                        value="96"
                                        max="100"
                                    ></progress>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PerfectSmile;
