import './LandingSection.scss'
export default function LandingSection() {
    return (
        <div className='LandingPageContainer'>
            <div className='LandingPageContainer__logo'>
                <img src='/Images/Assets/conf_logo.png' className='LandingPageContainer__logo--image' />
            </div>
            <div className='LandingPageContainer__desc'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div className='LandingPageContainer__details'>
                <div className='LandingPageContainer__details--date'>
                    <p className='LandingPageContainer__details--date__text'>26</p>
                    <p className='LandingPageContainer__details--date__month'>September</p>
                    <p className='LandingPageContainer__details--date__year'>2023</p>
                </div>
                <div className='LandingPageContainer__details--venue'>
                    <p className='LandingPageContainer__details--venue__location'>G-Block</p>
                    <p className='LandingPageContainer__details--venue__text'>Shiv Nadar Institution of Eminence Delhi - NCR</p>
                </div>
            </div>
        </div>
    )
}