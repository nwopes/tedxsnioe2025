import ConfDetails from '../components/ConferenceDetails/ConferenceDetails';
import PastConfSlider from '../components/PastConfSlider/PastConfSlider';
import PastConfTitles from '../components/PastConfTitles/PastConfTitles';
import '../styles/routes/pastConferences.scss'
import Footer from '../components/Footer/Footer';
function PastConferences() {
    return (
        <>
            <div className='PastConferencesSection'>
                <div className='PastConferencesSection__container'>
                    <p className='PastConferencesSection__container--heading'>PAST CONFERENCES</p>
                    <div className='PastConferencesSection__container--slider'>
                        <PastConfSlider />
                    </div>
                    <div className='PastConferencesSection__container--titles'>
                        <PastConfTitles />
                    </div>
                    <ConfDetails />
                </div>
            </div>
            <section className="FooterSection">
                <Footer />
            </section>
        </>
    )
}

export default PastConferences;