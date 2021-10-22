import React, { useState } from "react";

function LoginForm({ login, error }) {
    const [details, setDetails] = useState({ username: "", password: "" });

    const handleSubmit = (event) => {
        event.preventDefault();

        login(details);
    };

    return (
        <form onSubmit={handleSubmit} className="login-form">
            <div className="form-inner">
                <h2>Login</h2>

                <div className="form-group">
                    <label htmlFor="username">Username:</label>
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
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password:</label>
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
                    />
                </div>

                <input type="submit" value="Login" />
            </div>
        </form>
    );
}

export default LoginForm;
