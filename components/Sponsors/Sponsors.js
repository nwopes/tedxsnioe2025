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
        { url: "/Images/Assets/dummy.png" },
        { url: "/Images/Assets/dummy.png" },
        { url: "/Images/Assets/dummy.png" },
        { url: "/Images/Assets/dummy.png" },
    ]
    return (
        <div className='Sponsors'>
            <div className='Sponsors__our'>
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
            </div>
            <div className='Sponsors__past'>
                <p className='Sponsors__past--heading'>PAST SPONSORS</p>
                <div className='Sponsors__past--cards'>
                    {ourSponsors.map((item, index) => {
                        return (
                            <div className='Sponsors__past--cards__image' key={index}>
                                <img src={item.url} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}