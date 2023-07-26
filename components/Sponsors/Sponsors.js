import './Sponsors.scss'

export default function Sponsors() {
    const ourSponsors = [
        { url: "/Images/Assets/dummy.png" },
        { url: "/Images/Assets/dummy.png" },
        { url: "/Images/Assets/dummy.png" },
        { url: "/Images/Assets/dummy.png" },
        { url: "/Images/Assets/dummy.png" },
        { url: "/Images/Assets/dummy.png" },
        { url: "/Images/Assets/dummy.png" },
    ];
    const pastSponsors = [
        { url: "/Images/Sponsors/s1.png" },
        { url: "/Images/Sponsors/s2.png" },
        { url: "/Images/Sponsors/s3.png" },
        { url: "/Images/Sponsors/s4.png" },
        { url: "/Images/Sponsors/s5.png" },
        { url: "/Images/Sponsors/s6.png" },
        { url: "/Images/Sponsors/s7.png" },
        { url: "/Images/Sponsors/s8.png" },
        { url: "/Images/Sponsors/s9.png" },
        { url: "/Images/Sponsors/s10.png" },
        { url: "/Images/Sponsors/s11.png" },
        { url: "/Images/Sponsors/s12.png" },
        { url: "/Images/Sponsors/s13.png" },
        { url: "/Images/Sponsors/s14.png" },
        { url: "/Images/Sponsors/s15.png" },
        { url: "/Images/Sponsors/s16.png" },
    ]
    return (
        <div className='Sponsors'>
            {/* <div className='Sponsors__our'>
                <p className='Sponsors__our--heading'>OUR SPONSORS</p>
                <div className='Sponsors__our--cards'>
                    {ourSponsors.map((item, index) => {
                        return (
                            <div className='Sponsors__our--cards__image' key={index}>
                                <img src={item.url} />
                            </div>
                        )
                    })}
                </div>
            </div> */}
            <div className='Sponsors__past'>
                <p className='Sponsors__past--heading'>PAST SPONSORS</p>
                <div className='Sponsors__past--cards'>
                    {pastSponsors.map((item, index) => {
                        return (
                            <div style={{ backgroundColor: "white" }} className='Sponsors__past--cards__image' key={index}>
                                <img src={item.url} />
                            </div>
                        )
                    })}
                </div>
                <div className='Sponsors__past--button'>
                    <p className='Sponsors__past--button__content'>View All</p>
                </div>
            </div>
        </div>
    )
}