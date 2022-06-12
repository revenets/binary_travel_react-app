import React from "react";
import { useState } from "react";
import Booking from "./Booking";
import { bookings } from '../../data/bookings'

const Bookings = () => {
    const [allBookings, setAllBookings] = useState([...bookings]);

    const renderBookings = allBookings.map(booking => {
        return <Booking key={booking.id} {...booking} cancelBooking={() => cancelBooking(booking.id)} />
    })

    function cancelBooking (id) {
        setAllBookings(prevState => {
            const newState = prevState.filter(booking => booking.id !== id);
            return newState
        })
    }

    return (
        <main className="bookings-page">
            <h1 className="visually-hidden">Travel App</h1>
            <ul className="bookings__list">
                {renderBookings}
            </ul>
        </main>
    );
};

export default Bookings;
