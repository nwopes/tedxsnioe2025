import React from "react";
import styles from "./Spons.scss"; // Assuming you are using CSS modules for styling
import Image from "next/image"; // Import Image component from Next.js
import image1 from "./image1.png"; // Import the image file

const Spons = () => {
  return (
    <div className={styles.spons_heading}>
      <p>Our Sponsors</p>
      <div className={styles.spons_row}>
        <div className="image-container">
          <Image src={image1} alt="Image 1" />
          <Image src={image1} alt="Image 1" />
          <Image src={image1} alt="Image 1" />
          <Image src={image1} alt="Image 1" />
        </div>
        <div className="image-container">
          <Image src={image1} alt="Image 1" />
          <Image src={image1} alt="Image 1" />
          <Image src={image1} alt="Image 1" />
          <Image src={image1} alt="Image 1" />
        </div>
      </div>
      <div className="spons_heading_past">
        <p>Past Sponsors</p>
      </div>
      <div className={styles.spons_row}>
        <div className="image-container">
          <Image src={image1} alt="Image 1" />
          <Image src={image1} alt="Image 1" />
          <Image src={image1} alt="Image 1" />
          <Image src={image1} alt="Image 1" />
        </div>
      </div>
    </div>
  );
};

export default Spons;
