import './HomeHeader.scss'

function HomeHeader() {
    return (
        <div className="HomeHeaderContainer">
            <p className="HomeHeaderContainer__heading">We&apos;re currently building our website.</p>
            <p className="HomeHeaderContainer__description">Take a look at out Past Conferences!</p>
            <div className="HomeHeaderContainer__buttons">
                <p className="HomeHeaderContainer__buttons--pastConf">Past Conferences</p>
                <p className="HomeHeaderContainer__buttons--contactUs">Contact Us</p>
            </div>
        </div>
    )
}

export default HomeHeader;