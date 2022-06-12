import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Modal from "./Modal"

const TripDetail = ({ allTrips }) => {
    const { tripId } = useParams();
    const trip = [...allTrips].filter((trip) => trip.id === tripId)[0];

    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleModalOpen = () => {
        setIsModalOpen(!isModalOpen);
    }

    return (
        <main className="trip-page">
            <h1 className="visually-hidden">Travel App</h1>
            <div className="trip">
                <img src={trip.image} className="trip__img" alt="" />
                <div className="trip__content">
                    <div className="trip-info">
                        <h3 className="trip-info__title">{trip.title}</h3>
                        <div className="trip-info__content">
                            <span className="trip-info__duration">
                                <strong>{trip.duration}</strong> days
                            </span>
                            <span className="trip-info__level">
                                {trip.level}
                            </span>
                        </div>
                    </div>
                    <div className="trip__description">{trip.description}</div>
                    <div className="trip-price">
                        <span>Price</span>
                        <strong className="trip-price__value">
                            {trip.price} $
                        </strong>
                    </div>
                    <button className="trip__button button" onClick={handleModalOpen}>Book a trip</button>
                </div>
            </div>
            {isModalOpen && <Modal trip={trip} handleModalOpen={handleModalOpen}/>}
        </main>
    );
};

export default TripDetail;
