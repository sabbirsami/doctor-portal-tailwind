import React from "react";
import Review from "../Home/Review";
import people1 from "../../assets/images/people1.png";
import people2 from "../../assets/images/people2.png";
import people3 from "../../assets/images/people3.png";

const ReviewSection = () => {
    const reviews = [
        {
            _id: 1,
            name: "Winson Herry",
            review: "Uniquely deploy cross-unit benefits with wireless testing procedures. Build full backward compatible relationships.",
            location: "California",
            img: people1,
        },
        {
            _id: 2,
            name: "Winson Herry",
            review: "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test clickthroughs from users.",
            location: "California",
            img: people2,
        },
        {
            _id: 3,
            name: "Winson Herry",
            review: "Holisticly predominate extensible testing procedures for reliable supply chains top line service cutting edge deliverables.",
            location: "California",
            img: people3,
        },
        {
            _id: 1,
            name: "Winson Herry",
            review: "Distinctively exploit optimal alignments for intuitive bandwidth. Quickly coordinate e-business applications.",
            location: "California",
            img: people1,
        },
        {
            _id: 2,
            name: "Kristin Yang",
            review: "Collaboratively administrate empowered markets via plug-and-play networks after installed base benefits.",
            location: "California",
            img: "http://denticare.bold-themes.com/oscar/wp-content/uploads/sites/15/2020/01/client-03-160x160.jpg",
        },
    ];
    return (
        <div className="container mx-auto py-16">
            <h1 className="text-xl lg:px-14 px-4 py-2">Reviews</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 place-content-center lg:px-14 px-4 mx-auto">
                {reviews.map((review) => (
                    <Review key={review._id} review={review}></Review>
                ))}
            </div>
        </div>
    );
};

export default ReviewSection;
