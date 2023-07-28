import ConfHeader from '../ConfDetailsHeader/ConfDetailsHeader';
import Speakers from '../Speakers/Speakers';
import useConf from '../../hooks/useConf';
import './ConferenceDetails.scss';
import React from 'react';
import Performers from '../Performers/Performers';
import { motion } from 'framer-motion';

function ConfDetails() {

    const details = [
        {
            title: "Misfits",
            desc: "Misfits are people whose ideas and initiatives set them apart from the crowd, and they have the courage to do something different and make a difference. For the 2022 conference, TedxShivNadarUniversity brought together 13 people who embody this definition.",
            year: "2022",
            speakers: [
                {
                    name: 'Kavitha Emmanuel',
                    profession: 'Anti-colourism activist',
                    image: './Images/2022_speakers/kavitha.JPG'
                },
                {
                    name: 'Vanika Sangtani',
                    profession: 'Storyteller',
                    image: './Images/2022_speakers/vanika.JPG'
                },
                {
                    name: 'Chinab',
                    profession: 'Illustrator, political artist',
                    image: './Images/2022_speakers/chinab.JPG'
                },
                {
                    name: 'Anurag Vashisht',
                    profession: 'Singer',
                    image: './Images/2022_speakers/anurag123.JPG'
                },
                {
                    name: 'Prachi Thakur',
                    profession: 'Diversity strategist',
                    image: './Images/2022_speakers/prachi.JPG'
                },
                {
                    name: 'Ritika Khatnani',
                    profession: 'Miss Supernational Asia 2022',
                    image: './Images/2022_speakers/ritika.JPG'
                },
                {
                    name: 'Himanshu Rai',
                    profession: 'Author',
                    image: './Images/2022_speakers/himanshu.JPG'
                },
                {
                    name: 'Sudhir R',
                    profession: 'Fluteboxer',
                    image: './Images/2022_speakers/sudhir.JPG'
                },
                {
                    name: 'Brindali Patel',
                    profession: 'Dancer',
                    image: './Images/2022_speakers/brindali.JPG'
                },
                {
                    name: 'Dr. Sanjeev Bagai',
                    profession: 'Doctor, Padma Bhushan',
                    image: './Images/2022_speakers/sanjeev.JPG'
                },
                {
                    name: 'Priyanshu Grover',
                    profession: 'Lawyer',
                    image: './Images/2022_speakers/priyanshu.JPG'
                },
                {
                    name: 'Nafisa Rachel William',
                    profession: 'Celebrity designer',
                    image: './Images/2022_speakers/nafisa.JPG'
                },
                {
                    name: 'Vineet Panchhi',
                    profession: 'Poet and filmmaker',
                    image: './Images/2022_speakers/vineet.JPG'
                }
            ]
        },
        {
            title: "Rewire",
            desc: "This conference put the spotlight on 10 people from across India who had the courage to break away from convention and create change, thus inspiring others to do something different in their life",
            year: "2021",
            speakers: [
                {
                    name: 'Ayushmaan',
                    profession: 'Drag performer, human rights lawyer',
                    image: './Images/2021_speakers/ayushmaan.JPG'
                },
                {
                    name: 'Samriddhi and Japnit',
                    profession: 'Founders of The Girl Code',
                    image: './Images/2021_speakers/girlcode.JPG'
                },
                {
                    name: 'Aakriti Kumar',
                    profession: 'Founder, differniture',
                    image: './Images/2021_speakers/akriti.JPG'
                },
                {
                    name: 'Shrishti Pandey',
                    profession: 'Disability rights activist',
                    image: './Images/2021_speakers/srishti.JPG'
                },
                {
                    name: 'Radhika Khandelwal',
                    profession: 'Chef',
                    image: './Images/2021_speakers/radhika.JPG'
                },
                {
                    name: 'Vatsala Mamgain',
                    profession: 'Director of Resource Mobilization at Child Rights and You, CRY',
                    image: './Images/2021_speakers/vatsala.JPG'
                },
                {
                    name: 'Rumi Aijaz',
                    profession: 'Senior fellow, ORF',
                    image: './Images/2021_speakers/rumi.JPG'
                },
                {
                    name: 'Shrutika Vats',
                    profession: 'Cofounder, QLC',
                    image: './Images/2021_speakers/shruti.JPG'
                },
                {
                    name: 'Autoplay',
                    profession: 'Musicians',
                    image: './Images/2021_speakers/perf_autoplay.JPG'
                },
                {
                    name: 'Anureet',
                    profession: 'Poet',
                    image: './Images/2021_speakers/anureet.JPG'
                }
            ]
        },
        {
            title: "BlindSpots",
            desc: "11 speakers and 3 performers took the stage and shed light on the topics that are often ignored by many and gave the audience an insight into fields that are relatively unexplored",
            year: "2019",
            speakers: [
                {
                    name: 'Manit Ramaiya',
                    profession: 'Concept developer at Saint Gobain',
                    image: './Images/2019_speakers/manit.JPG'
                },
                {
                    name: 'Chingmak Chang',
                    profession: 'Social entrepreneur',
                    image: './Images/assets/dummy.JPG'
                },
                {
                    name: 'Mahima Gujral Wadhwa',
                    profession: 'Chief Green Bee and Founder of Sui',
                    image: './Images/2019_speakers/mahima.JPG'
                },
                {
                    name: 'Alim Chandani',
                    profession: 'Founder and CEO, Access Mantra',
                    image: './Images/2019_speakers/alim.JPG'
                },
                {
                    name: 'Farheen Ahmad',
                    profession: 'Vlogger',
                    image: './Images/2019_speakers/.JPG'
                },
                {
                    name: 'Ishaan Chowdhary',
                    profession: 'Spoken Word Poet',
                    image: './Images/2019_speakers/manit.JPG'
                },
                {
                    name: 'Manisha Lath Gupta',
                    profession: 'Marketing Director at Uber, Permaculture farmer',
                    image: './Images/2019_speakers/manisha.JPG'
                },
                {
                    name: 'Chaizai',
                    profession: 'Band',
                    image: './Images/2019_speakers/.JPG'
                },
                {
                    name: 'Pradeepa Narayanaswamy',
                    profession: 'Fertility coach',
                    image: './Images/2019_speakers/pradeepa.JPG'
                },
                {
                    name: 'Radhika Mitthal',
                    profession: 'Founder, Super School India',
                    image: './Images/2019_speakers/radhika.JPG'
                },
                {
                    name: 'Sharath Jeevan',
                    profession: 'Founder and CEO, STIR Education',
                    image: './Images/2019_speakers/sharath.JPG'
                },
                {
                    name: 'Manish Paul',
                    profession: 'Television anchor',
                    image: '/Images/Assets/dummy.png'
                },
                {
                    name: 'Manish Gupta',
                    profession: 'Business coach',
                    image: './Images/2019_speakers/manish.png'
                }
            ]
        },
        {
            title: "Conference",
            desc: "This conference consisted of a star-studded speaker lineup with speakers like the legendary cricketer Kapil Dev, famous entrepreneur and mentor Ankur Warikoo, renowned Business woman Roshni Nadar and so many more renowned names from diverse fields. The conference was an experience of a lifetime for all those who witnessed it.",
            year: "2018",
            speakers: [
                {
                    name: 'Vasu Primlani',
                    profession: 'Standup comedian',
                    image: './Images/2018_speakers/vasu.JPG'
                },
                {
                    name: 'Ankur Warikoo',
                    profession: 'Cofounder, Nearby',
                    image: './Images/2018_speakers/ankur.JPG'
                },
                {
                    name: 'Flavia Agnes',
                    profession: 'Lawyer',
                    image: './Images/2018_speakers/flavia.jpg'
                },
                {
                    name: 'Harnidh Kaur',
                    profession: 'Poetess',
                    image: './Images/2018_speakers/harnidh.jpg'
                },
                {
                    name: 'Sanjeetha Bhatachariya',
                    profession: 'Performer',
                    image: '/Images/Assets/dummy.png'
                },
                {
                    name: 'Sohail Hashmi',
                    profession: 'Historian',
                    image: './Images/2018_speakers/sohail.jpg'
                },
                {
                    name: 'Karan Suri',
                    profession: 'Executive Director, Morgan Stanley',
                    image: './Images/2018_speakers/manit.JPG'
                },
                {
                    name: 'Varun Bhal',
                    profession: 'Fashion designer',
                    image: './Images/2018_speakers/varun.jpg'
                },
                {
                    name: 'Suman and Aarshi',
                    profession: 'Performers',
                    image: './Images/2018_speakers/perf.JPG'
                },
                {
                    name: 'Roshini Nadar',
                    profession: 'CEO, HCL',
                    image: './Images/2018_speakers/roshni.jpg'
                },
                {
                    name: 'Nila Mahab Panda',
                    profession: 'Producer',
                    image: '/Images/Assets/dummy.png'
                },
                {
                    name: 'Aditya Bhandari',
                    profession: 'Performer',
                    image: '/Images/Assets/dummy.png'
                },
                {
                    name: 'Kapil Dev',
                    profession: 'Cricketer',
                    image: '/Images/Assets/dummy.png'
                },
                {
                    name: 'Yogesh Saini',
                    profession: 'Founder, Delhi Street Art',
                    image: '/Images/Assets/dummy.png'
                },
                {
                    name: 'Nandita Das',
                    profession: 'Actress',
                    image: '/Images/Assets/dummy.png'
                },
                {
                    name: 'NG Jayasimha',
                    profession: 'MD, Humane Society India',
                    image: '/Images/Assets/dummy.png'
                },
                {
                    name: 'Shoma Choudhary',
                    profession: 'Journalist',
                    image: '/Images/Assets/dummy.png'
                }
            ]
        },
        {
            title: "Conference",
            desc: "This conference was as good if not better than its predecessor. Invited as speakers were 15 people and performers who helped open the window to understanding niche areas of business, art, education and much more. The experience was educationally and creatively enriching.",
            year: "2017",
            speakers: [
                {
                    name: 'Amitabh Mall',
                    profession: 'Partner at the Boston Consulting Group',
                    image: './Images/2017_speakers/amitabh.jpg'
                },
                {
                    name: 'Biana Ghose',
                    profession: 'Corporate storyteller',
                    image: '/Images/Assets/dummy.png'
                },
                {
                    name: 'Reema Ahmed',
                    profession: 'Sexuality educator',
                    image: './Images/2017_speakers/reema.jpg'
                },
                {
                    name: 'Nikheel Aphale',
                    profession: 'Calligrapher',
                    image: './Images/2017_speakers/nikheel.jpg'
                },
                {
                    name: 'Stalin. K',
                    profession: 'Film-maker',
                    image: './Images/2017_speakers/stalin.jpg'
                },
                {
                    name: 'Reshma Valliappan',
                    profession: 'Artist and activist',
                    image: './Images/2017_speakers/reshma.jpg'
                },
                {
                    name: 'Reecha Upadyay',
                    profession: 'Social worker',
                    image: '/Images/Assets/dummy.png'
                },
                {
                    name: 'Abhineet Sonkar',
                    profession: 'Design thinking strategist',
                    image: './Images/2017_speakers/abhineet.jpg'
                },
                {
                    name: 'Zorian',
                    profession: 'Cross-theatre artist',
                    image: './Images/2017_speakers/zorian.jpg'
                },
                {
                    name: 'Sriram Raghavan',
                    profession: 'Director, IBM Research',
                    image: './Images/2017_speakers/sriram.jpg'
                },
                {
                    name: 'Shreya Soni',
                    profession: 'Delhi Secret Supper Club',
                    image: './Images/2017_speakers/shreya.jpg'
                },
                {
                    name: 'Shaili Chopra',
                    profession: 'Journalist',
                    image: '/Images/Assets/dummy.png'
                },
                {
                    name: 'Sanjay Seth',
                    profession: 'Social activist',
                    image: './Images/2017_speakers/sanjay.jpg'
                },
                {
                    name: 'Garima Agarwal',
                    profession: 'Rally racing driver',
                    image: '/Images/Assets/dummy.png'
                },
                {
                    name: 'Karan Vaish',
                    profession: 'System engineer, Team Indus',
                    image: '/Images/Assets/dummy.png'
                }
            ]
        },
        {
            title: "Conference",
            desc: "TedXSNIoE 2016 conference hosted 13 speakers and artists from various professional and social fields. This conference was nothing short of a spectacle of stories and lessons from exceptional people which inspired and captivated everyone who witnessed it.",
            year: "2016",
            speakers: [
                {
                    name: 'Anahita Dhondy',
                    profession: 'Chef',
                    image: './Images/2016_speakers/anahita.jpg'
                },
                {
                    name: 'Amrita Mahale',
                    profession: 'Rocket scientist turned author',
                    image: './Images/2016_speakers/amrit.jpg'
                },
                {
                    name: 'Vaibhav Mehta',
                    profession: 'Photographer',
                    image: './Images/2016_speakers/vaibhav.jpg'
                },
                {
                    name: 'Karan Singh',
                    profession: 'Illusionist',
                    image: './Images/2016_speakers/karan.jpg'
                },
                {
                    name: 'Karuna Nundy',
                    profession: 'Advocate',
                    image: './Images/2016_speakers/karuna.jpg'
                },
                {
                    name: 'Pavitra Mohan',
                    profession: 'Director of AMRIT Health Initiative of the Ajeevika Bureau',
                    image: './Images/2016_speakers/pavitra.jpg'
                },
                {
                    name: 'Laura Quinn',
                    profession: 'Founder and Managing Director of the Creative Startup Do One Thing',
                    image: './Images/2016_speakers/laura.jpg'
                },
                {
                    name: 'Dr. Shivkumar Kalyanaraman',
                    profession: 'Program Director of Special Initiatives in IBM Research - India',
                    image: './Images/2016_speakers/shivkumar.jpg'
                },
                {
                    name: 'Dr. Isher Judge Ahluwalia',
                    profession: 'Indian Economist, Padma Bhushan',
                    image: './Images/2016_speakers/isher.jpg'
                },
                {
                    name: 'Ramesh Menon',
                    profession: 'Author and Award-winning Journalist',
                    image: './Images/2016_speakers/ramesh.jpg'
                },
                {
                    name: 'Udayan Baijal',
                    profession: 'Producer at the Jamuncollective',
                    image: './Images/2016_speakers/udyan.jpg'
                },
                {
                    name: 'Raul Villamarin Rodriguez',
                    profession: 'Criminal Intelligence Officer at Interpol and Mossad',
                    image: './Images/2016_speakers/raul.jpg'
                },
                {
                    name: 'Prof. Jagdeep S. Chhokar',
                    profession: 'Former Director In-charge of Indian Institute of Management',
                    image: '/Images/Assets/dummy.png'
                }
            ]
        },
    ]



    const { conference } = useConf();
    React.useEffect(() => {
        const element = document.getElementById(conference);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', "block": "start" });
        }
    }, [conference])
    return (
        <div className='ConfDetailsSection'>
            {details.map((item, index) => {
                return (
                    <div key={index}>
                        <div style={{ paddingTop: "3rem" }} id='conf1'></div>
                        <div className='ConfDetailsSection__conference'>
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: .7 }}
                                key={index}
                            >
                                <div className='ConfDetailsSection__conference--header'>
                                    <ConfHeader title={item.title} year={item.year} desc={item.desc} />
                                </div>
                            </motion.div>
                            <div className='ConfDetailsSection__conference--speakers'>
                                <Speakers speakers={item.speakers} />
                            </div>
                            {/* <div className='ConfDetailsSection__conference--performers'>
                                <Performers />
                            </div> */}
                        </div>
                    </div>
                )
            })}
            {/* <div style={{ paddingTop: "3rem" }} id='conf1'></div>
            <div className='ConfDetailsSection__conference'>
                <div className='ConfDetailsSection__conference--header'>
                    <ConfHeader title={details.title} year={details.year} desc={details.desc} />
                </div>
                <div className='ConfDetailsSection__conference--speakers'>
                    <Speakers />
                </div>
                <div className='ConfDetailsSection__conference--performers'>
                    <Performers />
                </div>
            </div>
            <div style={{ paddingTop: "3rem" }} id='conf2'></div>
            <div className='ConfDetailsSection__conference'>
                <div className='ConfDetailsSection__conference--header'>
                    <ConfHeader />
                </div>
                <div className='ConfDetailsSection__conference--speakers'>
                    <Speakers />
                </div>
            </div>
            <div style={{ paddingTop: "3rem" }} id='conf3'></div>
            <div className='ConfDetailsSection__conference'>
                <div className='ConfDetailsSection__conference--header'>
                    <ConfHeader />
                </div>
                <div className='ConfDetailsSection__conference--speakers'>
                    <Speakers />
                </div>
            </div>
            <div style={{ paddingTop: "3rem" }} id='conf4'></div>
            <div className='ConfDetailsSection__conference'>
                <div className='ConfDetailsSection__conference--header'>
                    <ConfHeader />
                </div>
                <div className='ConfDetailsSection__conference--speakers'>
                    <Speakers />
                </div>
            </div>
            <div style={{ paddingTop: "3rem" }} id='conf5'></div>
            <div className='ConfDetailsSection__conference'>
                <div className='ConfDetailsSection__conference--header'>
                    <ConfHeader />
                </div>
                <div className='ConfDetailsSection__conference--speakers'>
                    <Speakers />
                </div>
            </div>
            <div style={{ paddingTop: "3rem" }} id='conf6'></div>
            <div className='ConfDetailsSection__conference'>
                <div className='ConfDetailsSection__conference--header'>
                    <ConfHeader />
                </div>
                <div className='ConfDetailsSection__conference--speakers'>
                    <Speakers />
                </div>
            </div> */}
        </div>
    )
}

export default ConfDetails;