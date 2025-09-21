import './PastSpeakers.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/autoplay'
import { Autoplay, Pagination, Navigation } from "swiper";
import { useState, useEffect } from 'react'
export default function PastSpeakers() {
    const [isSmall, setIsSmall] = useState(false);
    const [isMedium, setIsMedium] = useState(false);
    useEffect(() => {
        if (window.innerWidth <= 768) {
            setIsSmall(true);
            setIsMedium(false);
        } else if (window.innerWidth > 768 && window.innerWidth <= 1200) {
            setIsSmall(false);
            setIsMedium(true);
        } else {
            setIsSmall(false);
            setIsMedium(false);
        }
    })
    return (
        <>
            <div className='PastSpeakers'>
                <div className='PastSpeakers__heading'>
                    OUR SPEAKERS
                </div>
                <div className='PastSpeakers__cards'>
                    <div className="container">
                        <h3 className="title">Debojyoti Chakraborty</h3>
                        <div className="content">
                            <div>
                                <div className="content-overlay"></div>
                                <img className="content-image" src="/Images/CurrentSpeakers/deb.jpg" alt="" />
                                <div className="content-details fadeIn-bottom">
                                    <h3 className="content-title">Debojyoti Chakraborty</h3>
                                    <p className="content-text">Debojyoti Chakraborty is a principal scientist at the Institute of Genomics and Integrative Biology. From inventing the world&apos;s first paper strip COVID-19 test, to working on an accessible cure for sickle celled anemia, Dr. Debjyoti definitely has done the unimaginable and brought a new perspective to all things science.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <h3 className="title">Gursakhi Lugani</h3>
                        <div className="content">
                            <div>
                                <div className="content-overlay"></div>
                                <img className="content-image" src="/Images/CurrentSpeakers/gursakhi.jpg" alt="" />
                                <div className="content-details fadeIn-bottom">
                                    <h3 className="content-title">Gursakhi Lugani</h3>
                                    <p className="content-text">Gursakhi Lugani, is the founder of NakhreWaali, a fashion brand with millions of customers. Through this, she has created a category of fashion that fuses traditional ethnic Indian textiles with modern sensibilities and sustainable practices that has acquired a widespread appeal and reverence. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <h3 className="title">Rishabh Jain</h3>
                           <div className="content">
                              <div>
                                 <div className="content-overlay"></div>
                                <img className="content-image" src="/Images/CurrentSpeakers/rishab.png" alt="Rishabh Jain" />
                                <div className="content-details fadeIn-bottom">
                                    <h3 className="content-title">Rishabh Jain</h3>
                                     <p className="content-text">India&apos;s most famous personal finance advisor with over 4 million YouTube subscribers. Having been an IIT-B alum and founding 2 successful startups, meet the phenomenal Rishabh Jain, the labour law advisor.</p>
                                </div>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='PastSpeakers'>
                <div className='PastSpeakers__heading'>
                    OUR PERFORMERS
                </div>
                <div className='PastSpeakers__cards'>
                    <div className="container">
                        <h3 className="title">Anubha Bajaj</h3>
                        <div className="content">
                            <div>
                                <div className="content-overlay"></div>
                                <img className="content-image" src="/Images/CurrentSpeakers/anubha_bajaj.jpeg" alt="" />
                                <div className="content-details fadeIn-bottom">
                                    <h3 className="content-title">Anubha Bajaj</h3>
                                    <p className="content-text">Anubha Bajaj is an Indie artist, and the enchantress behind the captivating &quot;Lamhey&quot;. From composing melodies that transcend time to harmonizing emotions through music, Anubha&apos;s journey is a tapestry of crafted experiences</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <h3 className="title">Aashima Mahajan</h3>
                        <div className="content">
                            <div>
                                <div className="content-overlay"></div>
                                <img className="content-image" src="/Images/CurrentSpeakers/aashima.jpg" alt="" />
                                <div className="content-details fadeIn-bottom">
                                    <h3 className="content-title">Aashima Mahajan</h3>
                                    <p className="content-text">Aashima Mahajan has proven herself in various musical vocal genres, including Opera, folk, Bollywood and contemporary music. She also plays the lead antagonist role as an actor/singer in the one and only Broadway musical pride of India "Mughal E Azam" with over 275 shows worldwide.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}