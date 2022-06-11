import React from "react";
import { Link } from "react-router-dom";
import { TRIP_ROUTE } from "../utils/consts";

const TripCard = ({id}) => {
    return (
        <li className="trip-card">
            <img src="../images/iceland.jpg" alt="" />
            <div className="trip-card__content">
                <div className="trip-info">
                    <h3 className="trip-info__title">Island</h3>
                    <div className="trip-info__content">
                        <span className="trip-info__duration">
                            <strong>15</strong> days
                        </span>
                        <span className="trip-info__level">easy</span>
                    </div>
                </div>
                <div className="trip-price">
                    <span>Price</span>
                    <strong className="trip-price__value">7000 $</strong>
                </div>
            </div>
            <Link to={`${TRIP_ROUTE}${id}`} className="button">
                Discover a trip
            </Link>
        </li>
    );
};

export default TripCard;
