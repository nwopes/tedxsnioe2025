import Link from 'next/link';
import './AboutUs.scss';
import Image from "next/image";

function AboutUs() {
  return (
    <div className='AboutUs'>
      <div className='AboutUsContainer'>
        <div className='AboutUsHeading'>
          <p>About Us</p>
        </div>
        <div className='AboutUsContent'>
          <div className='AboutUsContentText'>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque, aut sunt doloribus ratione consequuntur ullam quo aperiam velit incidunt reiciendis sed ut animi repudiandae rerum quia reprehenderit quasi porro molestiae.
            </p>
          </div>
          <div className='RectangleShape'>
            <img src='/Images/Rectangle.png' alt="Rectange Shape" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs;
