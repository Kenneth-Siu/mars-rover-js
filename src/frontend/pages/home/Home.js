import React, { useEffect, useState } from "react";
import * as QuotationsApi from "../../api/QuotationsApi";
import "./Home.css";
import NavigationBar from "../../Components/NavigationBar.js";

export default function Home() {
    const [quotation, setQuotation] = useState();
    useEffect(getQuotationOfTheDay, []);

    return (
        <>
            <title>Mars Rover App</title>
            <NavigationBar />
            <main className="home-page page-container">
                <h1>Mars Rover</h1>
                <h2>Quotation of the day</h2>
                <p className="quotation">{quotation?.text}</p>
                <p className="attribution">—{quotation?.attribution}</p>
            </main>
        </>
    );

    async function getQuotationOfTheDay() {
        try {
            const response = await QuotationsApi.getQuotationOfTheDay();
            setQuotation(response);
        } catch (e) {
            console.error(e);
        }
    }
}
