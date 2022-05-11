import React from "react";

const InfoCard = ({ img, cardBody, cardTitle }) => {
    return (
        <div className="py-14 ">
            <div class="card lg:card-side bg-slate-800 shadow-xl py-5 text-white">
                <figure className="pl-14">
                    <img src={img} alt="Album" />
                </figure>
                <div class="card-body ">
                    <h2 class="card-title">{cardTitle}</h2>
                    <p>{cardBody}</p>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;
