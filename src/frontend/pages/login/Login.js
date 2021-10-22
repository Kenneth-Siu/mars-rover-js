import { useState } from "react";
import LoginForm from "../components/LoginForm";

const Login = () => {
    const [user, setUser] = useState({ username: "", password: "" });
    const [error, setError] = useState("");

    const handleLogin = (details) => {

        console.log(`Username is: ${details.username}`);
        console.log(`Password is: ${details.password}`);
    };
    
    return (
        <>
            <title>Mars Rover App - Login</title>
            <main className="login-page page-container">
                <LoginForm login={handleLogin} error={error}/>
            </main>
        </>
    );
};

export default Login;
