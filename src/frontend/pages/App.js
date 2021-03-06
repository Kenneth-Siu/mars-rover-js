import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./home/Home";
import "./cssreset.css";
import "./App.css";

export default function App() {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
        </Switch>
    );
}
