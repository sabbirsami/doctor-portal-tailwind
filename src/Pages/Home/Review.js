import React from "react";

const Review = ({ review }) => {
    return (
        <div className="card lg:max-w-lg bg-zinc-100 rounded-none justify-between">
            <div className="card-body ">
                <div className="flex justify-between">
                    <div>
                        <h4 className="text-2xl text-green-500">
                            {review.name}
                        </h4>
                        <p>{review.location}</p>
                    </div>
                    <div className="avatar">
                        <div className="w-16 rounded-full ring-2 ring-green-200 ring-offset-base-100 mr-5">
                            <img src={review.img} alt="" />
                        </div>
                    </div>
                </div>
                <p className="py-4">{review.review}</p>
            </div>
        </div>
    );
};

export default Review;
