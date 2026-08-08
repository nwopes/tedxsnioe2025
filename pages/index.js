import AboutUs from "../components/AboutUs/AboutUs";
import LandingSection from "../components/LandingSection/LandingSection";
import PastSpeakers from "../components/PastSpeakers/PastSpeakers";

import '../styles/routes/home.scss'
function Home() {
    return (
        <>
            <section
                className="LandingPageSection"
                id="home"
                style={{ display: 'none' }}>
                <LandingSection />
            </section>

            <section
                id="past-speakers"
                className="PastSpeakersSection">
                <PastSpeakers />
            </section>
            <section
                id="about"
                className="AboutSection">
                <AboutUs />
            </section>
            
            <section
                id="what-is-tedx"
                className="SponsorsSection"
                style={{ padding: "5rem 2rem", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                <h2 style={{ fontSize: "4.25rem", marginBottom: "2rem", color: "white", fontWeight: "400", fontFamily: '"Bebas Neue", serif' }}>
                    What is &nbsp;<span style={{ color: "#eb0028", fontFamily: 'Helvetica, Arial, sans-serif', fontWeight: "900", letterSpacing: "-1px" }}>TED<span style={{ fontSize: "0.75em", letterSpacing: "0", marginLeft: "1px", verticalAlign: "text-top" }}>x</span></span>
                </h2>
                <p style={{ maxWidth: "800px", margin: "0 auto", fontSize: "1.3rem", lineHeight: "1.6", color: "white", fontFamily: '"Outfit", sans-serif', textAlign: "justify" }}>
                    In the spirit of ideas worth spreading, TED has created a program called TEDx. TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. Our event is called TEDxShiv Nadar University, where x = independently organized TED event. At our TEDxShiv Nadar University event, TEDTalks video and live speakers will combine to spark deep discussion and connection in a small group. The TED Conference provides general guidance for the TEDx program, but individual TEDx events, including ours, are self-organized.
                </p>
                <a href="https://www.ted.com/about/programs-initiatives/tedx-program" target="_blank" rel="noopener noreferrer" style={{ marginTop: "1.5rem", color: "#eb0028", fontFamily: '"Outfit", sans-serif', fontSize: "1.2rem", textDecoration: "underline", fontWeight: "bold" }}>
                    Learn more about the TEDx program
                </a>
            </section>
        </>
    )
}

export default Home;
