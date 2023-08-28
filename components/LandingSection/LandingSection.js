import './LandingSection.scss'
export default function LandingSection() {
    return (
        <div className='LandingPageContainer'>
            <div className='LandingPageContainer__logo'>
                <img src='/Images/Assets/conf_logo.png' className='LandingPageContainer__logo--image' />
            </div>
            <div className='LandingPageContainer__desc'>
                Every turn tells a different story.
            </div>
            <div className='LandingPageContainer__details'>
                <div className='LandingPageContainer__details--date'>
                    <p className='LandingPageContainer__details--date__text'>24</p>
                    <p className='LandingPageContainer__details--date__month'>September</p>
                    <p className='LandingPageContainer__details--date__year'>2023</p>
                </div>
                <div className='LandingPageContainer__details--venue'>
                    <p className='LandingPageContainer__details--venue__location'>Venue</p>
                    <p className='LandingPageContainer__details--venue__text'>Yet to be disclosed!</p>
                </div>
            </div>
        </div>
    )
}