import { useEffect, useState } from 'react';
import './AboutUs.scss';
import SimpleImageSlider from "react-simple-image-slider";
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';

function AboutUs() {
  const [isSmall , setIsSmall] = useState(false);
  useEffect (() => {
    if (window.innerWidth <=768) {
      setIsSmall(true);
    } else {
      setIsSmall(false);
    }
  })
  const images = [
    { url: "/Images/Assets/792A2473.JPG" },
    { url: "/Images/Assets/IMG_0743.JPG" },
    { url: "/Images/Assets/DSC_0128.jpg" },
    { url: "/Images/Assets/DSC_0210.jpg" },
    { url: "/Images/Assets/IMG_0930.JPG" },
    { url: "/Images/Assets/IMG_0879.JPG" },
    { url: "/Images/Assets/792A2544.JPG" },
  ];
  return (
    <div className='AboutUs'>
      <div className='AboutUs__heading'>
        ABOUT US
      </div>
      <div className='AboutUs__content'>
        <div className='AboutUs__content--text'>
        After last year's conference gave us some of the finest moments of awe, positivity, and euphoria, from speakers with riveting talks to rhapsodic performances that left the audience elated, from bustling pre-functional activities to a finger-licking food menu that left the audiences wanting more.. we are back again this year with all that and more! <br /> <br /> We've had a day filled with 11 exceptional speakers and mind-blowing performances for our 6th edition, activities before the conference that kept our audience on their hooked, along with a high-quality buffer lunch, high tea, and a dessert bar. With that in mind... <br /> <br /> We bring the 7th edition of TEDxShivNadarUniversity to happening this year with a vibrant theme and a lineup of brilliant speakers, fun activities, and other exciting things!! We've had the fortune of hosting great and well-received conferences so far, and we promise that this conference will be just that, if not more. Can't wait to see you all on G-Block! Stay tuned for more updates!!
        </div>
        <div className='AboutUs__content--carousel'>
          <SimpleImageSlider
            width={isSmall ? "20rem" : "30rem"}
            height={isSmall ? "10rem" : "20rem"}
            images={images}
            showBullets={true}
            showNavs={true}
          />
        </div>
      </div>
    </div>
  )
}

export default AboutUs;
