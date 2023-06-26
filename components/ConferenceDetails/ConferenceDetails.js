import ConfHeader from '../ConfDetailsHeader/ConfDetailsHeader';
import Speakers from '../Speakers/Speakers';
import useConf from '../../hooks/useConf';
import './ConferenceDetails.scss';
import React from 'react';

function ConfDetails() {
    const { conference } = useConf();
    React.useEffect(() => {
        const element = document.getElementById(conference);
        if (element) {
            // 👇 Will scroll smoothly to the top of the next section
            element.scrollIntoView({ behavior: 'smooth' , "block" : "start" });
        }
    }, [conference])
    return (
        <div className='ConfDetailsSection'>
            <div style={{paddingTop : "3rem"}} id='conf1'></div>
            <div className='ConfDetailsSection__conference'>
                <div className='ConfDetailsSection__conference--header'>
                    <ConfHeader />
                </div>
                <div className='ConfDetailsSection__conference--speakers'>
                    <Speakers />
                </div>
            </div>
            <div style={{paddingTop : "3rem"}} id='conf2'></div>
            <div className='ConfDetailsSection__conference'>
                <div className='ConfDetailsSection__conference--header'>
                    <ConfHeader />
                </div>
                <div className='ConfDetailsSection__conference--speakers'>
                    <Speakers />
                </div>
            </div>
            <div style={{paddingTop : "3rem"}} id='conf3'></div>
            <div className='ConfDetailsSection__conference'>
                <div className='ConfDetailsSection__conference--header'>
                    <ConfHeader />
                </div>
                <div className='ConfDetailsSection__conference--speakers'>
                    <Speakers />
                </div>
            </div>
            <div style={{paddingTop : "3rem"}} id='conf4'></div>
            <div className='ConfDetailsSection__conference'>
                <div className='ConfDetailsSection__conference--header'>
                    <ConfHeader />
                </div>
                <div className='ConfDetailsSection__conference--speakers'>
                    <Speakers />
                </div>
            </div>
            <div style={{paddingTop : "3rem"}} id='conf5'></div>
            <div className='ConfDetailsSection__conference'>
                <div className='ConfDetailsSection__conference--header'>
                    <ConfHeader />
                </div>
                <div className='ConfDetailsSection__conference--speakers'>
                    <Speakers />
                </div>
            </div>
            <div style={{paddingTop : "3rem"}} id='conf6'></div>
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