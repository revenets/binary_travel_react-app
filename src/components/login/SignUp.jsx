import React from "react";
import { Link } from "react-router-dom";

import { SIGN_IN_ROUTE } from "../../utils/consts";

const SignUp = () => {
    return (
        <main className="sign-up-page">
            <form className="sign-up-form" autoComplete="off">
                <h2 className="sign-up-form__title">Sign Up</h2>
                <label className="trip-popup__input input">
                    <span className="input__heading">Full name</span>
                    <input name="full-name" type="text" required />
                </label>
                <label className="trip-popup__input input">
                    <span className="input__heading">Email</span>
                    <input name="email" type="email" required />
                </label>
                <label className="trip-popup__input input">
                    <span className="input__heading">Password</span>
                    <input
                        name="password"
                        type="password"
                        autoComplete="new-password"
                        required
                    />
                </label>
                <button className="button" type="submit">
                    Sign Up
                </button>
            </form>
            <span>
                Already have an account? {' '}
                <Link to={SIGN_IN_ROUTE} className="sign-up-form__link">
                    Sign In
                </Link>
            </span>
        </main>
    );
};

export default SignUp;
