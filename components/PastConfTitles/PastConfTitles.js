import './PastConfTitles.scss'
import useConf from '../../hooks/useConf';

function PastConfTitles() {
    const { setConference , conference } = useConf();
    const handleClick = (value) => {
        setConference(value);
    }
    return (
        <div className='PastConfTitlesContainer'>
            <div onClick={() => handleClick('conf1')} className='PastConfTitlesContainer__card'>
                <p className='PastConfTitlesContainer__card--year'>2021</p>
                <p className='PastConfTitlesContainer__card--title'>Misfits</p>
            </div>
            <img className='PastConfTitlesContainer__divider' src='/Images/divider.png' />
            <div onClick={() => handleClick('conf2')} className='PastConfTitlesContainer__card'>
                <p className='PastConfTitlesContainer__card--year'>2021</p>
                <p className='PastConfTitlesContainer__card--title'>Misfits</p>
            </div>
            <img className='PastConfTitlesContainer__divider' src='/Images/divider.png' />
            <div onClick={() => handleClick('conf3')} className='PastConfTitlesContainer__card'>
                <p className='PastConfTitlesContainer__card--year'>2021</p>
                <p className='PastConfTitlesContainer__card--title'>Misfits</p>
            </div>
            <img className='PastConfTitlesContainer__divider' src='/Images/divider.png' />
            <div onClick={() => handleClick('conf4')} className='PastConfTitlesContainer__card'>
                <p className='PastConfTitlesContainer__card--year'>2021</p>
                <p className='PastConfTitlesContainer__card--title'>Misfits</p>
            </div>
            <img className='PastConfTitlesContainer__divider' src='/Images/divider.png' />
            <div onClick={() => handleClick('conf5')} className='PastConfTitlesContainer__card'>
                <p className='PastConfTitlesContainer__card--year'>2021</p>
                <p className='PastConfTitlesContainer__card--title'>Misfits</p>
            </div>
            <img className='PastConfTitlesContainer__divider' src='/Images/divider.png' />
            <div onClick={() => handleClick('conf6')} className='PastConfTitlesContainer__card'>
                <p className='PastConfTitlesContainer__card--year'>2021</p>
                <p className='PastConfTitlesContainer__card--title'>Misfits</p>
            </div>
        </div>
    )
}

export default PastConfTitles;