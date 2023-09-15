import React from 'react';
import './LandingSection.scss'
export default function LandingSection() {
    const targetDate = new Date('2023-09-24T00:00:00'); // September 24, 2023

    // Calculate the initial time remaining
    const calculateTimeRemaining = () => {
        const now = new Date();
        const timeDifference = targetDate - now;
        return timeDifference > 0 ? timeDifference : 0;
    };

    const [timeRemaining, setTimeRemaining] = React.useState(calculateTimeRemaining());

    // Update the time remaining every second
    React.useEffect(() => {
        const interval = setInterval(() => {
            setTimeRemaining(calculateTimeRemaining());
        }, 1000);

        // Clear the interval when the component unmounts
        return () => clearInterval(interval);
    }, []);

    // Helper function to format time in days, hours, minutes, and seconds
    const formatTime = (milliseconds) => {
        const days = Math.floor(milliseconds / (1000 * 60 * 60 * 24));
        const hours = Math.floor((milliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((milliseconds % (1000 * 60)) / 1000);

        return `${days}d ${hours}h ${minutes}m ${seconds}s`;
    };
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
                    <p className='LandingPageContainer__details--venue__location'>G Block</p>
                    <p className='LandingPageContainer__details--venue__text'>Shiv Nadar Institute of Eminence, Delhi NCR</p>
                </div>
            </div>
            <div className='LandingPageContainer__countdown'>
                Time remaining : {formatTime(timeRemaining)}
            </div>
        </div>
    )
}