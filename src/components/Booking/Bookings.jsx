import React from "react";
import Booking from "./Booking";

const Bookings = () => {
    return (
        <main className="bookings-page">
            <h1 className="visually-hidden">Travel App</h1>
            <ul className="bookings__list">
                <Booking />
                <Booking />
                <Booking />
            </ul>
        </main>
    );
};

export default Bookings;
