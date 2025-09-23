import { useEffect, useState } from 'react';
import './AboutUs.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function AboutUs() {
  const [isSmall, setIsSmall] = useState(false);
  useEffect(() => {
    if (window.innerWidth <= 768) {
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
          <p>
          Join us at TEDxShivNadarUniversity as we explore Simplexity– a theme that challenges us to think deeper, look closer, and appreciate the invisible threads that bind simplicity and complexity. We invite the thinkers, doers, and dreamers who turn the complicated into the doable, and the simple into the extraordinary. Whether you're a seeker of clarity or a lover of layered thinking, TEDxShivNadarUniversity offers a space where we believe ‘Ideas Change Everything’- simple, complex, and the spectrum in between. Just remember that; the most powerful ideas often start with one quiet spark.
          </p>
        </div>
        <div className='AboutUs__content--carousel'>
          <Carousel>
            {images.map((item, index) => {
              return (
                <img key={index} src={item.url} />
              )
            })}
          </Carousel>
        </div>
      </div>
    </div>
  )
}

export default AboutUs;
