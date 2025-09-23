import { useEffect, useState } from 'react';
import Image from 'next/image';
import './AboutUs.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function AboutUs() {
  const [isSmall, setIsSmall] = useState(false);
  
  useEffect(() => {
    const handleResize = () => {
      setIsSmall(window.innerWidth <= 768);
    };
    
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty dependency array as we only want to set up the listener once
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
          Join us at TEDxShivNadarUniversity as we explore Simplexity– a theme that challenges us to think deeper, look closer, and appreciate the invisible threads that bind simplicity and complexity. We invite the thinkers, doers, and dreamers who turn the complicated into the doable, and the simple into the extraordinary. Whether you&apos;re a seeker of clarity or a lover of layered thinking, TEDxShivNadarUniversity offers a space where we believe &apos;Ideas Change Everything&apos;– simple, complex, and the spectrum in between. Just remember that; the most powerful ideas often start with one quiet spark.
          </p>
        </div>
        <div className='AboutUs__content--carousel'>
          <Carousel>
            {images.map((item, index) => (
              <div key={index}>
                <Image 
                  src={item.url} 
                  alt={`TEDx event image ${index + 1}`}
                  width={800}
                  height={600}
                  className="AboutUs__content--carousel__image"
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  )
}

export default AboutUs;
