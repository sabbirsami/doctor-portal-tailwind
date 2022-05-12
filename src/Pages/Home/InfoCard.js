import React from "react";

const InfoCard = ({ img, cardBody, cardTitle }) => {
    return (
        <div className="py-14 ">
            <div className="card lg:card-side bg-slate-800 shadow-xl py-5 text-white">
                <figure className="pl-14">
                    <img src={img} alt="Album" />
                </figure>
                <div className="card-body ">
                    <h2 className="card-title">{cardTitle}</h2>
                    <p>{cardBody}</p>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;
