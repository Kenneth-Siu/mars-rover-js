import React, { useState } from "react";

function LoginForm({ login, errorMessage, isActive }) {
    const [details, setDetails] = useState({ username: "", password: "" });

    const handleSubmit = (event) => {
        event.preventDefault();
        login(details);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Sign in to Mars Rover</h2>
            <p className="login-form-message">
                New here? <span className="highlight">Create an account</span>
            </p>

            <div className={` login-form-error ${!isActive ? "hidden" : null}`}>
                <p>{errorMessage}</p>
            </div>

            <div className="login-form-groups">
                <div>
                    <label htmlFor="username">Username*</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        onChange={(event) => {
                            return setDetails({
                                ...details,
                                username: event.target.value,
                            });
                        }}
                        value={details.username}
                        placeholder="Username"
                    />
                </div>

                <div>
                    <label htmlFor="password">Password*</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        onChange={(event) => {
                            return setDetails({
                                ...details,
                                password: event.target.value,
                            });
                        }}
                        value={details.password}
                        placeholder="Password"
                    />
                </div>
                <input type="submit" value="Login" className="btn btn-cta--emphasis" />
            </div>
        </form>
    );
}

export default LoginForm;
