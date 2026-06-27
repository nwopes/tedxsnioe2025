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
            Join us at TEDxShivNadarUniversity as we explore Mosaic—a celebration of the ideas, perspectives, and discoveries that shape the way we understand our world.
          </p>
          <p>
            Like the pieces of a mosaic, great ideas rarely exist in isolation. They emerge from different disciplines, challenge one another, and connect in unexpected ways to reveal a larger picture. Each perspective adds depth, and every conversation has the potential to unlock new ways of thinking.
          </p>
          <p>
            Through thought-provoking talks and engaging discussions, TEDxShivNadarUniversity brings together researchers, entrepreneurs, artists, scientists, innovators, educators, and changemakers whose ideas inspire curiosity, spark dialogue, and encourage fresh approaches to the challenges and opportunities of our time. Alongside voices from across diverse fields, we are committed to celebrating the ideas emerging from our own community, creating a platform where local voices and global perspectives come together in meaningful conversation.
          </p>
          <p>
            At TEDxShivNadarUniversity, we believe that Ideas Change Everything. Mosaic celebrates the power of bringing together our community, local voices, and global perspectives to spark conversations that shape the future. Because every idea is a piece of something bigger.
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
