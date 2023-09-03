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
        <div className='PastSpeakers'>
            <div className='PastSpeakers__heading'>
                OUR SPEAKERS
            </div>
            <div className='PastSpeakers__cards'>
            <div class="container">
                    <h3 class="title">Anubha Bajaj</h3>
                    <div class="content">
                        <div>
                            <div class="content-overlay"></div>
                            <img class="content-image" src="/Images/CurrentSpeakers/anubha_bajaj.jpeg" alt="" />
                            <div class="content-details fadeIn-bottom">
                                <h3 class="content-title">Anubha Bajaj</h3>
                                <p class="content-text">Anubha Bajaj is an Indie artist, and the enchantress behind the captivating "Lamhey". From composing melodies that transcend time to harmonizing emotions through music, Anubha's journey is a tapestry of crafted experiences</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <h3 class="title">Shirish Beri</h3>
                    <div class="content">
                        <div>
                            <div class="content-overlay"></div>
                            <img class="content-image" src="/Images/CurrentSpeakers/shirish.jpg" alt="" />
                            <div class="content-details fadeIn-bottom">
                                <h3 class="content-title">Shirish Beri</h3>
                                <p class="content-text">An architect by profession, Shirish Beri, puts forth a sustainable, simple and minimalist life, revolutionizing modern architecture. His work, reflecting his philosophy of bringing man closer to nature as well as to basic human values. </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <h3 class="title">Gursakhi Lugani</h3>
                    <div class="content">
                        <div>
                            <img class="content-image" src="/Images/CurrentSpeakers/gursakhi.jpg" alt="" />
                            <div class="content-details fadeIn-bottom">
                                <h3 class="content-title">Gursakhi Lugani</h3>
                                <p class="content-text">Gursakhi Lugani, is the founder of NakhreWaali, a fashion brand with millions of customers. Through this, she has created a category of fashion that fuses traditional ethnic Indian textiles with modern sensibilities and sustainable practices that has acquired a widespread appeal and reverence. </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <h3 class="title">Rishab Jain</h3>
                    <div class="content">
                        <div>
                            <div class="content-overlay"></div>
                            <img class="content-image" src="/Images/CurrentSpeakers/Rishab.png" alt="" />
                            <div class="content-details fadeIn-bottom">
                                <h3 class="content-title">Rishab Jain</h3>
                                <p class="content-text">India&apos;s most famous personal finance advisor with over 4 million YouTube subscribers. Having been an IIT-B alum and founding 2 successful startups, meet the phenomenal Rishabh Jain, the labour law advisor.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='PastSpeakers__button'>
                <p className='PastSpeakers__button--text'>View All</p>
            </div> */}
        </div>
    )
}