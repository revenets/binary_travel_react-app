import React from "react";

import TripCard from "./TripCard";
import Filter from "./Filter";
import { trips } from "../../data/trips";

const Trips = () => {
    const allTrips = trips.map((trip) => {
        return (
            <TripCard
                key={trip.id}
                {...trip}
            />
        );
    });

    return (
        <section className="trips">
            <h1 className="visually-hidden">Travel App</h1>
            <Filter />
            <h2 className="visually-hidden">Trips List</h2>
            <ul className="trip-list">{allTrips}</ul>
        </section>
    );
};

export default Trips;
