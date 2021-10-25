import React from "react";

function NavigationBar() {
    return (
        <header>
            <div>
                <h1>Hello World</h1>
            </div>
            <nav>
                <ul>
                    <li><a href="http://localhost:3000/">Home</a></li>
                    <li><a href="http://localhost:3000/login">Login</a></li>
                    <li><a href="http://localhost:3000/photos">Photos</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default NavigationBar;
