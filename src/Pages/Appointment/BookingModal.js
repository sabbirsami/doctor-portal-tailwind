import { format } from "date-fns";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import auth from "../../firebase.init";

const BookingModal = ({ date, treatment, setTreatment, refetch }) => {
    const [user] = useAuthState(auth);
    const { _id, name, slots, price } = treatment;
    const formattedDate = format(date, "PP");
    const handleBooking = (event) => {
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(_id, name, slot);

        const booking = {
            treatmentId: _id,
            treatment: name,
            date: formattedDate,
            price,
            slot,
            patient: user.email,
            patientName: user.displayName,
            phone: event.target.phone.value,
        };

        fetch("https://teeth-health.herokuapp.com/booking", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(booking),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.success) {
                    console.log(data);
                    toast.success(
                        `Appointment is set, ${formattedDate} at ${slot}`,
                        {
                            duration: 3000,
                        }
                    );
                } else {
                    console.log(data);
                    toast.error(
                        `Already have and appointment on ${data.booking?.date} at ${data.booking?.slot}`,
                        {
                            duration: 3000,
                        }
                    );
                }
                refetch();
                // TO CLOSE THE MODAL
                setTreatment(null);
            });
    };

    return (
        <div>
            <input
                type="checkbox"
                id="booking-modal"
                className="modal-toggle"
            />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label
                        htmlFor="booking-modal"
                        className="btn btn-sm btn-circle absolute right-2 top-2"
                    >
                        ✕
                    </label>
                    <h3 className="font-bold text-lg">{treatment.name}</h3>
                    <form
                        onSubmit={handleBooking}
                        className="grid grid-cols-1 gap-3 justify-items-center mt-2"
                    >
                        <input
                            type="text"
                            disabled
                            value={format(date, "PP")}
                            className="input input-bordered w-full max-w-xs"
                        />
                        <select
                            name="slot"
                            className="select select-bordered w-full max-w-xs"
                        >
                            {slots.map((slot, index) => (
                                <option key={index} value={slot}>
                                    {slot}
                                </option>
                            ))}
                        </select>
                        <input
                            type="text"
                            name="name"
                            value={user.displayName}
                            disabled
                            className="input input-bordered w-full max-w-xs"
                        />
                        <input
                            type="email"
                            name="email"
                            value={user.email}
                            className="input input-bordered w-full max-w-xs"
                        />
                        <input
                            type="text"
                            name="phone"
                            placeholder="Phone Number"
                            className="input input-bordered w-full max-w-xs"
                        />
                        <input
                            type="submit"
                            value="Submit"
                            className="btn btn-secondary w-full max-w-xs"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;
