import React from "react";

const Review = ({ review }) => {
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl justify-between">
            <div className="card-body">
                <div className="flex items-center">
                    <div className="avatar">
                        <div className="w-16 rounded-full ring-2 ring-blue-500 ring-offset-base-100 mr-5">
                            <img src={review.img} alt="" />
                        </div>
                    </div>
                    <div>
                        <h4 className="text-xl">{review.name}</h4>
                        <p>{review.location}</p>
                    </div>
                </div>
                <p className="py-4">{review.review}</p>
            </div>
        </div>
    );
};

export default Review;
