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
                    image: '/Images/Assets/dummy.png'
                },
                {
                    name: 'Vanika Sangtani',
                    profession: 'Storyteller',
                    image: '/Images/Assets/dummy.png'
                },
                {
                    name: 'Chinab',
                    profession: 'Illustrator, political artist',
                    image: '/Images/Assets/dummy.png'
                },
                {
                    name: 'Anurag Vashisht',
                    profession: 'Singer',
                    image: '/Images/Assets/dummy.png'
                },
                {
                    name: 'Prachi Thakur',
                    profession: 'Diversity strategist',
                    image: '/Images/Assets/dummy.png'
                },
                {
                    name: 'Ritika Khatnani',
                    profession: 'Miss Supernational Asia 2022',
                    image: '/Images/Assets/dummy.png'
                },
                {
                    name: 'Himanshu Rai',
                    profession: 'Author',
                    image: '/Images/Assets/dummy.png'
                },
                {
                    name: 'Sudhir R',
                    profession: 'Fluteboxer',
                    image: '/Images/Assets/dummy.png'
                },
                {
                    name: 'Brindali Patel',
                    profession: 'Dancer',
                    image: '/Images/Assets/dummy.png'
                },
                {
                    name: 'Dr. Sanjeev Bagai',
                    profession: 'Doctor, Padma Bhushan',
                    image: '/Images/Assets/dummy.png'
                },
                {
                    name: 'Priyanshu Grover',
                    profession: 'Lawyer',
                    image: '/Images/Assets/dummy.png'
                },
                {
                    name: 'Nafisa Rachel William',
                    profession: 'Celebrity designer',
                    image: '/Images/Assets/dummy.png'
                },
                {
                    name: 'Vineet Panchhi',
                    profession: 'Poet and filmmaker',
                    image: '/Images/Assets/dummy.png'
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
                    image: '/Images/Assets/dummy.png'
                },
                {
                    name: 'Samriddhi and Japnit',
                    profession: 'Founders of The Girl Code',
                    image: '/Images/Assets/dummy.png'
                },
                {
                    name: 'Aakriti Kumar',
                    profession: 'Founder, differniture',
                    image: '/Images/Assets/dummy.png'
                },
                {
                    name: 'Shrishti Pandey',
                    profession: 'Disability rights activist',
                    image: '/Images/Assets/dummy.png'
                },
                {
                    name: 'Radhika Khandelwal',
                    profession: 'Chef',
                    image: '/Images/Assets/dummy.png'
                },
                {
                    name: 'Vatsala Mamgain',
                    profession: 'Director of Resource Mobilization at Child Rights and You, CRY',
                    image: '/Images/Assets/dummy.png'
                },
                {
                    name: 'Rumi Aijaz',
                    profession: 'Senior fellow, ORF',
                    image: '/Images/Assets/dummy.png'
                },
                {
                    name: 'Shrutika Vats',
                    profession: 'Cofounder, QLC',
                    image: '/Images/Assets/dummy.png'
                },
                {
                    name: 'Autoplay',
                    profession: 'Musicians',
                    image: '/Images/Assets/dummy.png'
                },
                {
                    name: 'Anureet',
                    profession: 'Poet',
                    image: '/Images/Assets/dummy.png'
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
                    image: '/Images/Assets/dummy.png'
                },
                {
                    name: 'Chingmak Chang',
                    profession: 'Social entrepreneur',
                    image: '/Images/Assets/dummy.png'
                },
                {
                    name: 'Mahima Gujral Wadhwa',
                    profession: 'Chief Green Bee and Founder of Sui',
                    image: '/Images/Assets/dummy.png'
                },
                {
                    name: 'Alim Chandani',
                    profession: 'Founder and CEO, Access Mantra',
                    image: '/Images/Assets/dummy.png'
                },
                {
                    name: 'Farheen Ahmad',
                    profession: 'Vlogger',
                    image: '/Images/Assets/dummy.png'
                },
                {
                    name: 'Ishaan Chowdhary',
                    profession: 'Spoken Word Poet',
                    image: '/Images/Assets/dummy.png'
                },
                {
                    name: 'Manisha Lath Gupta',
                    profession: 'Marketing Director at Uber, Permaculture farmer',
                    image: '/Images/Assets/dummy.png'
                },
                {
                    name: 'Chaizai',
                    profession: 'Band',
                    image: '/Images/Assets/dummy.png'
                },
                {
                    name: 'Pradeepa Narayanaswamy',
                    profession: 'Fertility coach',
                    image: '/Images/Assets/dummy.png'
                },
                {
                    name: 'Radhika Mitthal',
                    profession: 'Founder, Super School India',
                    image: '/Images/Assets/dummy.png'
                },
                {
                    name: 'Sharath Jeevan',
                    profession: 'Founder and CEO, STIR Education',
                    image: '/Images/Assets/dummy.png'
                },
                {
                    name: 'Maniesh Paul',
                    profession: 'Television anchor',
                    image: '/Images/Assets/dummy.png'
                },
                {
                    name: 'Manish Gupta',
                    profession: 'Business coach',
                    image: '/Images/Assets/dummy.png'
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
                    image: '/Images/Assets/dummy.png'
                },
                {
                    name: 'Ankur Warikoo',
                    profession: 'Cofounder, Nearby',
                    image: '/Images/Assets/dummy.png'
                },
                {
                    name: 'Flavia Agnes',
                    profession: 'Lawyer',
                    image: '/Images/Assets/dummy.png'
                },
                {
                    name: 'Harnidh Kaur',
                    profession: 'Poetess',
                    image: '/Images/Assets/dummy.png'
                },
                {
                    name: 'Sanjeetha Bhatachariya',
                    profession: 'Performer',
                    image: '/Images/Assets/dummy.png'
                },
                {
                    name: 'Sohail Hashmi',
                    profession: 'Historian',
                    image: '/Images/Assets/dummy.png'
                },
                {
                    name: 'Karan Suri',
                    profession: 'Executive Director, Morgan Stanley',
                    image: '/Images/Assets/dummy.png'
                },
                {
                    name: 'Varun Bhal',
                    profession: 'Fashion designer',
                    image: '/Images/Assets/dummy.png'
                },
                {
                    name: 'Suman and Aarshi',
                    profession: 'Performers',
                    image: '/Images/Assets/dummy.png'
                },
                {
                    name: 'Roshini Nadar',
                    profession: 'CEO, HCL',
                    image: '/Images/Assets/dummy.png'
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
                    image: '/Images/Assets/dummy.png'
                },
                {
                    name: 'Biana Ghose',
                    profession: 'Corporate storyteller',
                    image: '/Images/Assets/dummy.png'
                },
                {
                    name: 'Reema Ahmed',
                    profession: 'Sexuality educator',
                    image: '/Images/Assets/dummy.png'
                },
                {
                    name: 'Nikheel Aphale',
                    profession: 'Calligrapher',
                    image: '/Images/Assets/dummy.png'
                },
                {
                    name: 'Stalin. K',
                    profession: 'Film-maker',
                    image: '/Images/Assets/dummy.png'
                },
                {
                    name: 'Reshma Valliappan',
                    profession: 'Artist and activist',
                    image: '/Images/Assets/dummy.png'
                },
                {
                    name: 'Reecha Upadyay',
                    profession: 'Social worker',
                    image: '/Images/Assets/dummy.png'
                },
                {
                    name: 'Abhineet Sonkar',
                    profession: 'Design thinking strategist',
                    image: '/Images/Assets/dummy.png'
                },
                {
                    name: 'Zorian',
                    profession: 'Cross-theatre artist',
                    image: '/Images/Assets/dummy.png'
                },
                {
                    name: 'Sriram Raghavan',
                    profession: 'Director, IBM Research',
                    image: '/Images/Assets/dummy.png'
                },
                {
                    name: 'Shreya Soni',
                    profession: 'Delhi Secret Supper Club',
                    image: '/Images/Assets/dummy.png'
                },
                {
                    name: 'Shaili Chopra',
                    profession: 'Journalist',
                    image: '/Images/Assets/dummy.png'
                },
                {
                    name: 'Sanjay Seth',
                    profession: 'Social activist',
                    image: '/Images/Assets/dummy.png'
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
                    image: '/Images/Assets/dummy.png'
                },
                {
                    name: 'Amrita Mahale',
                    profession: 'Rocket scientist turned author',
                    image: '/Images/Assets/dummy.png'
                },
                {
                    name: 'Vaibhav Mehta',
                    profession: 'Photographer',
                    image: '/Images/Assets/dummy.png'
                },
                {
                    name: 'Karan Singh',
                    profession: 'Illusionist',
                    image: '/Images/Assets/dummy.png'
                },
                {
                    name: 'Karuna Nundy',
                    profession: 'Advocate',
                    image: '/Images/Assets/dummy.png'
                },
                {
                    name: 'Pavitra Mohan',
                    profession: 'Director of AMRIT Health Initiative of the Ajeevika Bureau',
                    image: '/Images/Assets/dummy.png'
                },
                {
                    name: 'Laura Quinn',
                    profession: 'Founder and Managing Director of the Creative Startup Do One Thing',
                    image: '/Images/Assets/dummy.png'
                },
                {
                    name: 'Dr. Shivkumar Kalyanaraman',
                    profession: 'Program Director of Special Initiatives in IBM Research - India',
                    image: '/Images/Assets/dummy.png'
                },
                {
                    name: 'Dr. Isher Judge Ahluwalia',
                    profession: 'Indian Economist, Padma Bhushan',
                    image: '/Images/Assets/dummy.png'
                },
                {
                    name: 'Ramesh Menon',
                    profession: 'Author and Award-winning Journalist',
                    image: '/Images/Assets/dummy.png'
                },
                {
                    name: 'Udayan Baijal',
                    profession: 'Producer at the Jamuncollective',
                    image: '/Images/Assets/dummy.png'
                },
                {
                    name: 'Raul Villamarin Rodriguez',
                    profession: 'Criminal Intelligence Officer at Interpol and Mossad',
                    image: '/Images/Assets/dummy.png'
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