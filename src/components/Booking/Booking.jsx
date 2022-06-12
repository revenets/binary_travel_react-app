import React from "react";
import { formatDate } from "../../utils/assists";

const Booking = ({guests, date, trip, totalPrice: price, cancelBooking}) => {


    return (
        <li className="booking">
            <h3 className="booking__title">{trip.title}</h3>
            <span className="booking__guests">{guests} guests</span>
            <span className="booking__date">{formatDate(date)}</span>
            <span className="booking__total">{price} $</span>
            <button className="booking__cancel" title="Cancel booking" onClick={cancelBooking}>
                <span className="visually-hidden">Cancel booking</span>×
            </button>
        </li>
    );
};

export default Booking;
