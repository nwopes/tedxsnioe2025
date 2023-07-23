import AboutUs from "../components/AboutUs/AboutUs";
import LandingSection from "../components/LandingSection/LandingSection";
import PastSpeakers from "../components/PastSpeakers/PastSpeakers";
import Sponsors from "../components/Sponsors/Sponsors";
import Stats from "../components/Stats/stats";
import '../styles/routes/home.scss'
function Home() {
    return (
        <>
            <section className="LandingPageSection">
                <LandingSection />
            </section>
            <section className="StatsSection">
                <Stats />
            </section>
            <section className="AboutSection">
                <AboutUs />
            </section>
            <section className="PastSpeakersSection">
                <PastSpeakers />
            </section>
            <section className="SponsorsSection">
                <Sponsors />
            </section>
        </>
    )
}

export default Home;