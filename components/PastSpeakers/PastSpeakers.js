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
                <Swiper
                    autoplay={{ delay: 3000 }}
                    className='PastSpeakers__cards--swiper'
                    spaceBetween={isSmall ? "10rem" : "40rem"}
                    slidesPerView={isSmall ? 1 : (isMedium ? 2 : 3)}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide className='PastSpeakers__cards--swiper__slide'>
                        <div className='PastSpeakers__cards--swiper__slide--content'>
                            <img src='/Images/Assets/dummy.png' className='PastSpeakers__cards--swiper__slide--content__image' />
                            <div className='PastSpeakers__cards--swiper__slide--content__details'>
                                <p className='PastSpeakers__cards--swiper__slide--content__details--name'>Speaker</p>
                                <p className='PastSpeakers__cards--swiper__slide--content__details--desg'>Bad Speaker</p>
                                <p className='PastSpeakers__cards--swiper__slide--content__details--descrip'>js skk skk soos soms skmc cemce comdc ckdmc eeokcd dcdc ssmdc rpckc scksck</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='PastSpeakers__cards--swiper__slide'>
                        <div className='PastSpeakers__cards--swiper__slide--content'>
                            <img src='/Images/Assets/dummy.png' className='PastSpeakers__cards--swiper__slide--content__image' />
                            <div className='PastSpeakers__cards--swiper__slide--content__details'>
                                <p className='PastSpeakers__cards--swiper__slide--content__details--name'>Speaker</p>
                                <p className='PastSpeakers__cards--swiper__slide--content__details--desg'>Bad Speaker</p>
                                <p className='PastSpeakers__cards--swiper__slide--content__details--descrip'>js skk skk soos soms skmc cemce comdc ckdmc eeokcd dcdc ssmdc rpckc scksck</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='PastSpeakers__cards--swiper__slide'>
                        <div className='PastSpeakers__cards--swiper__slide--content'>
                            <img src='/Images/Assets/dummy.png' className='PastSpeakers__cards--swiper__slide--content__image' />
                            <div className='PastSpeakers__cards--swiper__slide--content__details'>
                                <p className='PastSpeakers__cards--swiper__slide--content__details--name'>Speaker</p>
                                <p className='PastSpeakers__cards--swiper__slide--content__details--desg'>Bad Speaker</p>
                                <p className='PastSpeakers__cards--swiper__slide--content__details--descrip'>js skk skk soos soms skmc cemce comdc ckdmc eeokcd dcdc ssmdc rpckc scksck</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='PastSpeakers__cards--swiper__slide'>
                        <div className='PastSpeakers__cards--swiper__slide--content'>
                            <img src='/Images/Assets/dummy.png' className='PastSpeakers__cards--swiper__slide--content__image' />
                            <div className='PastSpeakers__cards--swiper__slide--content__details'>
                                <p className='PastSpeakers__cards--swiper__slide--content__details--name'>Speaker</p>
                                <p className='PastSpeakers__cards--swiper__slide--content__details--desg'>Bad Speaker</p>
                                <p className='PastSpeakers__cards--swiper__slide--content__details--descrip'>js skk skk soos soms skmc cemce comdc ckdmc eeokcd dcdc ssmdc rpckc scksck</p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className='PastSpeakers__button'>
                <p className='PastSpeakers__button--text'>View All</p>
            </div>
        </div>
    )
}