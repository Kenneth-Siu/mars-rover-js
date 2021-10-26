import { useState } from "react";
import LoginForm from "../components/LoginForm";
import Header from "../components/Header"
import { setToken, getToken } from "../../../backend/jwtToken.js";
import "./Login.css";

const Login = (props) => {
    const [errorMessage, setErrorMessage] = useState("");
    const [isActive, setActive] = useState(false);

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
                    setActive(!setActive())
                    setErrorMessage("Incorrect login details, please try again.");
                    throw new Error();
                } else {
                    setActive(!setActive())
                    setErrorMessage("An error occurred, please try again.");
                    throw new Error();
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <>
            <title>Mars Rover App - Login</title>
            <Header />
            <main className="page-container--normal">
                <div className="login-form">
                    <div>
                        <LoginForm
                            login={handleLogin}
                            errorMessage={errorMessage}
                            isActive={isActive}
                        />
                    </div>
                    <div className="login-hero-section">
                        
                    </div>
                </div>
            </main>
        </>
    );
};

export default Login;
