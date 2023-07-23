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
    { url: "/Images/Assets/dummy.png" },
    { url: "/Images/Assets/dummy.png" },
    { url: "/Images/Assets/dummy.png" },
    { url: "/Images/Assets/dummy.png" },
    { url: "/Images/Assets/dummy.png" },
    { url: "/Images/Assets/dummy.png" },
    { url: "/Images/Assets/dummy.png" },
  ];
  return (
    <div className='AboutUs'>
      <div className='AboutUs__heading'>
        ABOUT US
      </div>
      <div className='AboutUs__content'>
        <div className='AboutUs__content--text'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis <br /> <br /> nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,sunt in culpa qui officia deserunt mollit anim id est laborum.
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
