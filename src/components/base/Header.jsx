import React from "react";
import { Link } from "react-router-dom";
import { BOOKINGS_ROUTE, MAIN_ROUTE, SIGN_IN_ROUTE } from "../../utils/consts";

const Header = ({ isLoggedIn, handleLogIn }) => {
    return (
        <header className="header">
            <div className="header__inner">
                {isLoggedIn ?
                (<Link to={MAIN_ROUTE} className="header__logo">
                    Travel App
                </Link>) :
                    (<h1 className="header__logo">Travel App</h1>)
                }

                {(isLoggedIn && <nav className="header__nav">
                    <ul className="nav-header__list">
                        <li className="nav-header__item" title="Bookings">
                            <Link
                                to={BOOKINGS_ROUTE}
                                className="nav-header__inner"
                            >
                                <span className="visually-hidden">
                                    Bookings
                                </span>
                                <img src="../images/briefcase.svg" alt="icon" />
                            </Link>
                        </li>
                        <li className="nav-header__item" title="Profile">
                            <div
                                className="nav-header__inner profile-nav"
                                tabIndex="0"
                            >
                                <span className="visually-hidden">Profile</span>
                                <img
                                    src="../images/user.svg"
                                    alt="profile icon"
                                />
                                <ul className="profile-nav__list">
                                    <li className="profile-nav__item profile-nav__username">
                                        John Doe
                                    </li>
                                    <li className="profile-nav__item">
                                        <Link
                                            to={SIGN_IN_ROUTE}
                                            className="profile-nav__sign-out button"
                                            onClick={handleLogIn}
                                        >
                                            Sign Out
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </nav>)}
            </div>
        </header>
    );
};

export default Header;
