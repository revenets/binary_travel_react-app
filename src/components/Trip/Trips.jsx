import React from "react";
import TripCard from "./TripCard";
import Filter from "./Filter";

const Trips = () => {
    return (
        <section className="trips">
            <h1 className="visually-hidden">Travel App</h1>
            <Filter />
            <h2 className="visually-hidden">Trips List</h2>
            <ul className="trip-list">
                <TripCard id={1}/>
                <TripCard id={2}/>
                <TripCard id={3}/>
                <TripCard id={4}/>
            </ul>
        </section>
    );
};

export default Trips;
