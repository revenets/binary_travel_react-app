import React from "react";
import { useState } from "react";
import { getTomorrowDate, formatDateForInput } from "../../utils/assists";

const Modal = ({ trip, handleModalOpen }) => {
    const [guestsCount, setGuestsCount] = useState(1);
    const [departureDate, setDepartureDate] = useState(formatDateForInput(getTomorrowDate()));

    function handleGuestsAmountChange(event) {
        setGuestsCount(event.target.value)
    }

    function onModalSubmit(event) {
        event.preventDefault();
        handleModalOpen();
    }

    return (
        <div className="modal">
            <div className="trip-popup">
                <button className="trip-popup__close" onClick={handleModalOpen}>
                    ×
                </button>
                <form className="trip-popup__form" autoComplete="off" onSubmit={onModalSubmit}>
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
                    <label className="trip-popup__input input">
                        <span className="input__heading">Date</span>
                        <input name="date" type="date" value={departureDate} onChange={(event) => setDepartureDate(event.target.value)} required />
                    </label>
                    <label className="trip-popup__input input">
                        <span className="input__heading">Number of guests</span>
                        <input
                            onChange={handleGuestsAmountChange}
                            name="guests"
                            type="number"
                            min="1"
                            max="10"
                            value={guestsCount}
                            required
                        />
                    </label>
                    <span className="trip-popup__total">
                        Total:{" "}
                        <output className="trip-popup__total-value">
                            {trip.price * guestsCount}$
                        </output>
                    </span>
                    <button className="button" type="submit">
                        Book a trip
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Modal;
