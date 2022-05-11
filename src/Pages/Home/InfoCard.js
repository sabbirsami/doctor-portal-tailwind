import React from "react";

const InfoCard = ({ img }) => {
    return (
        <div className="py-14 ">
            <div class="card lg:card-side bg-slate-800 shadow-xl py-5 ">
                <figure className="p-5">
                    <img src={img} alt="Album" />
                </figure>
                <div class="card-body text-white">
                    <h2 class="card-title">New album is released!</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;
