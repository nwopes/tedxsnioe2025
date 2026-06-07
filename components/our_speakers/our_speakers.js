import './our_speaker.css'
import Image from 'next/image';
// import bg from '../../public/Images/WebsitePattern 1.png'

const OurSpeakers = () => {

    const speakers = [
        {
            'name': 'First Name',
            'last': 'Last Name',
            'image': ''
        },
        {
            'name': 'First Name',
            'last': 'Last Name',
            'image': ''
        },
        {
            'name': 'First Name',
            'last': 'Last Name',
            'image': ''
        },
    ]

    return (
        <>
            <div className="speakers_section_bg">
                <Image
                    src='/Images/Assets/dummy.png'
                    className="speakers_section_bg__img"
                    alt="Speakers background"
                    width={1920}
                    height={1080}
                />
            </div>
            <div className="speakers_section_title">
                <p>OUR SPEAKERS</p>
            </div>
            <div className="speakers_section_cards">
                {speakers.map((item) => {
                    return (
                        <>
                            <div className="arrow-speakers-left">

                            </div>
                            <div key={item.name} className="speakers_section_cards-det">
                                <div className="speakers_section_cards__image">
                                    {item.image}
                                </div>
                                <div className="speakers_section-card2">
                                    <div className="speakers_section_cards__firstname">
                                        <p>{item.name}</p>
                                    </div>
                                    <div className="speakers_section_cards__lastname">
                                        <p>{item.last}</p>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </div>
        </>
    );
};

export default OurSpeakers;