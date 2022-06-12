import React from "react";
import { useState } from "react";

import TripCard from "./TripCard";
import Filter from "./Filter";

const Trips = ({ allTrips }) => {
    const [searchTitle, setSearchTitle] = useState("");
    const [searchDuration, setSearchDuration] = useState("");
    const [searchLevel, setSearchLevel] = useState("");

    const searchTitleHandler = (event) => {
        const value = event.target.value.toLowerCase();
        setSearchTitle(value);
    };

    const searchDurationHandler = (event) => {
        const value = event.target.value.toLowerCase().split('_x')[0];
        setSearchDuration(value);
    };

    const searchLevelHandler = (event) => {
        const value = event.target.value.toLowerCase();
        setSearchLevel(value);
    };

    const searchResults = allTrips
        .filter((trip) => {
            return searchTitle === ""
                ? trip
                : trip.title.toLowerCase().includes(searchTitle);
        })
        .filter((trip) => {
            return searchLevel === ""
                ? trip
                : trip.level.toLowerCase().includes(searchLevel);
        })
        .filter((trip) => {
            if (searchDuration === "0") {
                return trip.duration < 5 && trip;
            } else if (searchDuration === "5") {
                return trip.duration < 10 && trip;
            } else if (searchDuration === "10") {
                return trip.duration >= 10 && trip;
            } else {
                return trip
            }
        });

    const renderTrips = searchResults.map((trip) => {
        return <TripCard key={trip.id} {...trip} />;
    });

    return (
        <section className="trips">
            <h1 className="visually-hidden">Travel App</h1>
            <Filter
                searchTitleHandler={searchTitleHandler}
                searchDurationHandler={searchDurationHandler}
                searchLevelHandler={searchLevelHandler}
            />
            <h2 className="visually-hidden">Trips List</h2>
            <ul className="trip-list">{renderTrips}</ul>
        </section>
    );
};

export default Trips;
