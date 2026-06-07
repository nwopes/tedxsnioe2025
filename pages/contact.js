import '../styles/routes/contact.scss'

function Contact()
{
    return (
        <div className="ContactUsSection">
            <div className="ContactUsSection__container">
                <p className='ContactUsSection__container--heading'>Contact Us</p>
                <div className='ContactUsSection__container--details'>
                    <div className='ContactUsSection__container--details__card'>
                        <p className='ContactUsSection__container--details__card--name'>Dipro Mukherjee</p>
                        <p className='ContactUsSection__container--details__card--designation'>Lead Organizer</p>
                        <p className='ContactUsSection__container--details__card--phone'>+91-7032536333</p>
                    </div>
                    <div className='ContactUsSection__container--details__card'>
                        <p className='ContactUsSection__container--details__card--name'>Aanya Anand</p>
                        <p className='ContactUsSection__container--details__card--designation'>Co Organizer</p>
                        <p className='ContactUsSection__container--details__card--phone'>+91-9622816781</p>
                    </div><div className='ContactUsSection__container--details__card'>
                        <p className='ContactUsSection__container--details__card--name'>Anshika Gupta</p>
                        <p className='ContactUsSection__container--details__card--designation'>Finance Head</p>
                        <p className='ContactUsSection__container--details__card--phone'>+91-7358012257</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;
