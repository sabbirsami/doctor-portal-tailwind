import React from "react";
import quote from "../../assets/icons/quote.svg";
import people1 from "../../assets/images/people1.png";
import people2 from "../../assets/images/people2.png";
import people3 from "../../assets/images/people3.png";
import Review from "./Review";

const Testimonial = () => {
    const reviews = [
        {
            _id: 1,
            name: "Winson Herry",
            review: "",
            location: "California",
            img: people1,
        },
        {
            _id: 2,
            name: "Winson Herry",
            review: "",
            location: "California",
            img: people2,
        },
        {
            _id: 3,
            name: "Winson Herry",
            review: "",
            location: "California",
            img: people3,
        },
    ];
    return (
        <section className="my-28 container mx-auto">
            <div className="flex justify-between lg:px-14 px-4">
                <div>
                    <h4 className="text-xl font-bold text-primary py-2">
                        Testimonial
                    </h4>
                    <h2 className="text-5xl ">What Our Patients Says</h2>
                </div>
                <div className="">
                    <img src={quote} className="w-24 lg:w-48 " alt="" />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 place-content-center lg:px-14 px-4 mx-auto">
                {reviews.map((review) => (
                    <Review key={review._id} review={review}></Review>
                ))}
            </div>
        </section>
    );
};

export default Testimonial;
