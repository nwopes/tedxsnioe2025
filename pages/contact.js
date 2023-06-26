import '../styles/routes/contact.scss'

function Contact()
{
    return (
        <div className="ContactUsSection">
            <div className="ContactUsSection__container">
                <p className='ContactUsSection__container--heading'>Contact Us</p>
                <div className='ContactUsSection__container--details'>
                    <div className='ContactUsSection__container--details__card'>
                        <p className='ContactUsSection__container--details__card--name'>Snehali Biswas</p>
                        <p className='ContactUsSection__container--details__card--designation'>Lead Organizer</p>
                        <p className='ContactUsSection__container--details__card--phone'>+91-9740746511</p>
                    </div>
                    <div className='ContactUsSection__container--details__card'>
                        <p className='ContactUsSection__container--details__card--name'>Gautam Nanda</p>
                        <p className='ContactUsSection__container--details__card--designation'>Co Organizer</p>
                        <p className='ContactUsSection__container--details__card--phone'>+91-7377943130</p>
                    </div><div className='ContactUsSection__container--details__card'>
                        <p className='ContactUsSection__container--details__card--name'>Dwiti Modi</p>
                        <p className='ContactUsSection__container--details__card--designation'>Finance Head</p>
                        <p className='ContactUsSection__container--details__card--phone'>+91-9316244424</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;