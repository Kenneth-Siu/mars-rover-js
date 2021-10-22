import React, { useEffect, useState } from "react";
import * as QuotationsApi from "../../api/QuotationsApi";
import "./Home.css";
const curiosity = "/curiosity.jpg";
const opportunity = "/oppotunity.jpg";
const spirit = "/spirit.jpg";

// import NavBar from "../../components/NavBar";

export default function Home() {
    const [quotation, setQuotation] = useState();
    useEffect(getQuotationOfTheDay, []);

    return (
        <>
            <title>Mars Rover App</title>
            <main className="home-page">
                <body>
                    {/* <NavBar /> */}
                    <h1>Mars Rover</h1>
                    <h2>Quotation of the day</h2>
                    <p className="quotation">{quotation?.text}</p>
                    <p className="attribution">—{quotation?.attribution}</p>

                    <div className="flex-container">
                        <div>
                            <div className="text">
                                <h3>Curiosity Rover</h3>

                                <p1>
                                    Curiosity is the largest and most capable rover ever sent to Mars. Curiosity is a car-sized Mars rover designed to
                                    explore the Gale crater on Mars as part of NASA's Mars Science Laboratory (MSL) mission. Curiosity was launched
                                    from Cape Canaveral (CCAFS) on 26 November 2011, at 15:02:00 UTC and landed on Aeolis Palus inside Gale crater on
                                    Mars on 6 August 2012, 05:17:57 UTC.
                                    <br />
                                    <br />
                                    It is exploring Gale Crater, which is near the equator of Mars. The rover uses a nuclear power to operate. The MSL
                                    mission has four main scientific goals: study Martian climate and geology, search for water, and find out whether
                                    Mars could have ever supported life. Curiosity carries the most advanced scientific equipment ever used on the
                                    surface of Mars.
                                </p1>
                            </div>
                            <div className="image">
                                <img src={curiosity} alt="Curiosity Rover" />
                            </div>
                        </div>
                        <div>
                            <div className="text">
                                <h3>Opportunity Rover</h3>

                                <p1>
                                    Opportunity, also known as MER-B (Mars Exploration Rover – B) or MER-1, and nicknamed Oppy, was a robotic rover
                                    that was active on Mars from 2004 to 2018. It was launched on July 7, 2003, as part of NASA's Mars Exploration
                                    Rover program, it landed in Meridiani Planum on January 25, 2004, three weeks after its twin Spirit (MER-A)
                                    touched down on the other side of the planet Mars.
                                    <br />
                                    <br />
                                    Opportunity was active for 17 years, 167 days (in Earth Time), 55 times more than its lifespan. By June 10, 2018,
                                    when it last contacted NASA, the rover had traveled a distance of 45.16 kilometers (28.06 miles). Due to the
                                    massive dust storms on Mars in 2018, Opportunity stopped communications on June 10, 2018. It was hoped it would
                                    reboot once the atmosphere cleared. However it did not, as it either suffered a catastrophic failure or that a
                                    layer of dust has covered its solar panels. On February 13, 2019, NASA officials declared that the Opportunity
                                    mission was complete, after the spacecraft failed to respond to repeated signals sent since August 2018.
                                </p1>
                            </div>
                            <div className="image">
                                <img src={opportunity} alt="Opportunity Rover" />
                            </div>
                        </div>
                        <div>
                            <div className="text">
                                <h3>Spirit Rover</h3>
                                <p1>
                                    Spirit, also known as MER-A (Mars Exploration Rover – A) or MER-2, is a robotic rover on Mars, active from 2004 to
                                    2010. ... Spirit also logged 7.73 km (4.8 mi) of driving instead of the planned 600 m (0.4 mi), allowing more
                                    extensive geological analysis of Martian rocks and planetary surface features.
                                    <br/>
                                    <br/>
                                    NASA's Spirit rover—and it's twin Opportunity—studied the history of climate and water at sites on Mars where
                                    conditions may once have been favorable to life. Spirit uncovered strong evidence that Mars was once much wetter
                                    than it is now.
                                </p1>
                            </div>
                            <div className="image">
                                <img src={spirit} alt="Spirit Rover" />
                            </div>
                        </div>
                    </div>
                </body>
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
