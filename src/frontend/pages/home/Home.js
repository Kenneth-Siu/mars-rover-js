import React, { useEffect, useState } from "react";
import * as QuotationsApi from "../../api/QuotationsApi";
import Header from "../components/Header";
import "./Home.css";

export default function Home() {
    const [quotation, setQuotation] = useState();
    useEffect(getQuotationOfTheDay, []);
    return (
        <>
            <title>Mars Rover App</title>
            <main className="home-page page-container">
                <h1>Mars Rover</h1>
                <h2>Quotation of the day</h2>
                <p className="quotation">{quotation?.text}</p>
                <p className="attribution">—{quotation?.attribution}</p>
                <h2>What is Curiosity (MSL)</h2>
                <div className="CuriosityPic">
                    <img
                        src="\NASA's Curiosity (MSL).jpg"
                        alt="Curosity picture"
                    />
                </div>
                <p>
                    NASA's Curiosity is the largest and most advanced rover ever
                    sent to Mars. The car-sized rover is part of NASA's Mars
                    Science Laboratory (MSL). Curiosity's ongoing mission is to
                    study the ancient habitability and the potential for life on
                    Mars.
                </p>
                <h2>What is Opportunity?</h2>
                <div className="OpportunityPic">
                    <img src="\opportunity pic.jpg" alt="Opportunity picture" />
                </div>
                <p>
                    Opportunity was the second of the two rovers launched in
                    2003 to land on Mars and begin traversing the Red Planet in
                    search of signs of ancient water.
                </p>
                <h2> What was Spirit?</h2>
                <div className="SpiritPic">
                    <img src="\Spirit.jpg" alt="Spirit picture" />
                </div>
                <p>
                    NASA's Spirit rover—and it's twin Opportunity—studied the
                    history of climate and water at sites on Mars where
                    conditions may once have been favorable to life.
                </p>
                <ul>
                    Spirit uncovered strong evidence that Mars was once much
                    wetter than it is now. Described as a "wonderful
                    workhorse"—Spirit operated for 6 years, 2 months, and 19
                    days, more than 25 times its original intended lifetime. The
                    rover traveled 4.8 miles (7.73 kilometers) across the
                    Martian plains. On May 25, 2011, NASA ended efforts to
                    contact the marooned rover and declared its mission
                    complete. The rover had been silent since March 2010.
                </ul>
            </main>
        </>
    );
    async function getQuotationOfTheDay() {
        try {
            const response = await QuotationsApi.getQuotationOfTheDay();
            setQuotation(response);
        } catch (e) {
            console.error(e);
            return (
                <>
                    <title>Mars Rover App</title>
                    <Header />
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
    }
}
