import { useState } from "react";
import LoginForm from "../components/LoginForm";
import Header from "../components/Header";
import { setToken, getToken } from "../../../backend/jwtToken.js";
import { makeFetch } from "../../api/Api";
import "./Login.css";

const Login = (props) => {
    const [errorMessage, setErrorMessage] = useState("");
    const [isActive, setActive] = useState(false);

    const handleLogin = (details) => {
        const loginDetails = {
            username: details.username,
            password: details.password,
        };

        async function send(url, method, body, expectJsonResponse) {
            try {
                const response = await makeFetch(
                    url,
                    method,
                    body,
                    expectJsonResponse
                );
                setToken(response.token);
                props.history.push("/");
            } catch (errorStatus) {
                if (errorStatus === 401) {
                    setActive(!setActive());
                    setErrorMessage(
                        "Please enter a valid username or password."
                    );
                }
            }
        }

        send("/api/login", "POST", details, true);
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
                    <div className="login-hero-section"></div>
                </div>
            </main>
        </>
    );
};

export default Login;
