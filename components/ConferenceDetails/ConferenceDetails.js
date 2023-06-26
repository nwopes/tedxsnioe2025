import ConfHeader from '../ConfDetailsHeader/ConfDetailsHeader';
import Speakers from '../Speakers/Speakers';
import './ConferenceDetails.scss';

function ConfDetails() {
    return (
        <div className='ConfDetailsSection'>
            <div className='ConfDetailsSection__conference'>
                <div className='ConfDetailsSection__conference--header'>
                    <ConfHeader />
                </div>
                <div className='ConfDetailsSection__conference--speakers'>
                    <Speakers />
                </div>
            </div>
        </div>
    )
}

export default ConfDetails;