import './Speakers.scss';

function Speakers() {
    const speakerDetails = [
        {
            'name': 'Vanika',
            'desc': 'Story Teller',
            'image': 'https://i.pinimg.com/originals/2b/de/de/2bdede0647e3cdf75b44ea33723201d9.jpg'
        },
        {
            'name': 'Vanika',
            'desc': 'Story Teller',
            'image': 'https://i.pinimg.com/originals/2b/de/de/2bdede0647e3cdf75b44ea33723201d9.jpg'
        },
        {
            'name': 'Vanika',
            'desc': 'Story Teller',
            'image': 'https://i.pinimg.com/originals/2b/de/de/2bdede0647e3cdf75b44ea33723201d9.jpg'
        },
        {
            'name': 'Vanika',
            'desc': 'Story Teller',
            'image': 'https://i.pinimg.com/originals/2b/de/de/2bdede0647e3cdf75b44ea33723201d9.jpg'
        },
        {
            'name': 'Vanika',
            'desc': 'Story Teller',
            'image': 'https://i.pinimg.com/originals/2b/de/de/2bdede0647e3cdf75b44ea33723201d9.jpg'
        },
        {
            'name': 'Vanika',
            'desc': 'Story Teller',
            'image': 'https://i.pinimg.com/originals/2b/de/de/2bdede0647e3cdf75b44ea33723201d9.jpg'
        },
    ]
    return (
        <div className='Speakers'>
            <p className='Speakers__heading'>
                Speakers
            </p>
            <div className='Speakers__content'>
                {speakerDetails.map((item) => {
                    return (
                        <div key={item.name} className='Speakers__content--card'>
                            <img className='Speakers__content--card__image' src={item.image} />
                            <p className='Speakers__content--card__name'>{item.name}</p>
                            <p className='Speakers__content--card__desc'>{item.desc}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Speakers;