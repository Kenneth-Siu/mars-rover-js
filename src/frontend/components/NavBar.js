import React from "react";
const logo = "/mars-rover-logo3.png";
import "./NavBar.css";

export default function NavBar() {
    return (
        <>
            <ul>
                <li>
                    <div id="pic"></div>
                </li>
                <li>
                    <a className="navbar-brand" href="/">
                        <div className="logo-image">
                            <img src={logo} alt="logo" />
                        </div>
                    </a>
                </li>
                <li>
                    <a href="/">Home</a>
                </li>
                <li className="dropdown">
                    <a href="/photos" className="dropbtn">
                        Photos
                    </a>
                    <div className="dropdown-content">
                        <a href="#">Curiosity</a>
                        <a href="#">Opportunity</a>
                        <a href="#">Spirit</a>
                    </div>
                </li>
                <li style={{ float: "right" }}>
                    <a href="#account">Account</a>
                </li>
            </ul>
        </>
    );
}

