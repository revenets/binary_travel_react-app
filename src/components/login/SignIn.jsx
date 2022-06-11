import React from "react";
import { Link } from "react-router-dom";

import { SIGN_UP_ROUTE } from "../../utils/consts";

const SignIn = () => {

    const handleSubmit = (event) => {
        // validate password function
        const form = event.target.value;
        
    }

    return (
        <main className="sign-in-page">
            <form className="sign-in-form" autoComplete="off">
                <h2 className="sign-in-form__title">Sign In</h2>
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
                    Sign In
                </button>
            </form>
            <span>
                Don't have an account? {' '}
                <Link to={SIGN_UP_ROUTE} className="sign-in-form__link">Sign up</Link>
            </span>
        </main>
    );
};

export default SignIn;
