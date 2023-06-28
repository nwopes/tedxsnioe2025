import './Performers.scss';

function Performers() {
    const performerDetails = [
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
        <div className='Performers'>
            <p className='Performers__heading'>
                Performers
            </p>
            <div className='Performers__content'>
                {performerDetails.map((item) => {
                    return (
                        <div key={item.name} className='Performers__content--card'>
                            <img className='Performers__content--card__image' src={item.image} />
                            <p className='Performers__content--card__name'>{item.name}</p>
                            <p className='Performers__content--card__desc'>{item.desc}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Performers;