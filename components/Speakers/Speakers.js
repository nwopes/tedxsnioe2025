import './Speakers.scss';
import speaker4 from '../../public/Images/2022_speakers/himanshu.JPG'
import speaker5 from '../../public/Images/2022_speakers/kavitha.JPG'
import speaker6 from '../../public/Images/2022_speakers/Nafisa.JPG'
import speaker8 from '../../public/Images/2022_speakers/priyanshu.JPG'
import speaker9 from '../../public/Images/2022_speakers/ritika.JPG'
import speaker10 from '../../public/Images/2022_speakers/sanjeev.JPG'
import speaker11 from '../../public/Images/2022_speakers/sudhir.JPG'
import speaker12 from '../../public/Images/2022_speakers/vanika.JPG'


function Speakers() {
    const speakerDetails = [
        {
            'name': 'Himanshu Rai',
            'desc': 'Story Teller',
            'image': speaker4.src
        },
        {
            'name': 'Kavitha Emmanual',
            'desc': 'Story Teller',
            'image': speaker5.src
        },
        {
            'name': 'Nafisa Rachel William',
            'desc': 'Story Teller',
            'image': speaker6.src
        },
        {
            'name': 'Priyanshu Grover',
            'desc': 'Story Teller',
            'image': speaker8.src
        },
        {
            'name': 'Ritika Khatnani',
            'desc': 'Story Teller',
            'image': speaker9.src
        },
        {
            'name': 'Sanjeev Bagai',
            'desc': 'Story Teller',
            'image': speaker10.src
        },
        {
            'name': 'Sudhir R',
            'desc': 'Story Teller',
            'image': speaker11.src
        },
        {
            'name': 'Vanika Sangtani',
            'desc': 'Story Teller',
            'image': speaker12.src
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
                        <div onClick={(e) => e.preventDefault()} key={item.name} className='Speakers__content--card'>
                            <img onClick={(e) => e.preventDefault()} className='Speakers__content--card__image' src={item.image} />
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