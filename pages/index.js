import LandingSection from "../components/LandingSection/LandingSection";
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
        </>
    )
}

export default Home;