import './Performers.scss';
import speaker1 from "../../public/Images/2022_speakers/anurag123.jpg";
import speaker2 from "../../public/Images/2022_speakers/Brindali.JPG";
import speaker3 from "../../public/Images/2022_speakers/chinab.JPG";


function Performers() {
    const performerDetails = [
        {
            'name': 'Anurag Vashisht',
            'desc': 'Story Teller',
            'image': speaker1.src
        },
        {
            'name': 'Brindali Patel',
            'desc': 'Story Teller',
            'image': speaker2.src
        },
        {
            'name': 'Chinab',
            'desc': 'Story Teller',
            'image': speaker3.src
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