import PastConfSlider from '../components/PastConfSlider/PastConfSlider';
import PastConfTitles from '../components/PastConfTitles/PastConfTitles';
import '../styles/routes/pastConferences.scss'

function PastConferences()
{
    return (
        <div className='PastConferencesSection'>
            <div className='PastConferencesSection__slider'>
                <PastConfSlider />
            </div>
            <div className='PastConferencesSection__titles'>
                <PastConfTitles />
            </div>
        </div>
    )
}

export default PastConferences;