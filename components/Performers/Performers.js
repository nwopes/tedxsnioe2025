import './Performers.scss';
import Image from 'next/image';


function Performers() {
    const performerDetails = [
        {
            'name': 'Anurag Vashisht',
            'desc': 'Story Teller',
        },
        {
            'name': 'Brindali Patel',
            'desc': 'Story Teller',
        },
        {
            'name': 'Chinab',
            'desc': 'Story Teller',
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
                            <Image className='Performers__content--card__image' src={item.image} />
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