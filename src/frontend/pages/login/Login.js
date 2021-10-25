import { useState } from "react";
import LoginForm from "../components/LoginForm";
import { setToken, getToken } from '../../../backend/jwtToken.js';

const Login = (props) => {
    const [user, setUser] = useState({ username: "", password: "" });
    const [error, setError] = useState("");

    const handleLogin = (details) => {
        const loginDetails = {
            username: details.username,
            password: details.password,
        };

        fetch("/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(loginDetails),
        })
            .then((response) => {
                if (response.status === 200) {
                    response.json().then((json) => {
                        setToken(json.token);
                        props.history.push("/");
                    });
                } else if (response.status === 401) {
                    throw new Error('Incorrect login details');
                } else {
                    throw new Error('Could not login');
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <>
            <title>Mars Rover App - Login</title>
            <main className="login-page page-container">
                <LoginForm login={handleLogin} error={error} />
            </main>
        </>
    );
};

export default Login;
