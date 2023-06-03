import React, { useState, useEffect } from 'react';
import './CSS/Carousel.css';

const imageUrls = [
  { imgUrl: "https://i.imgur.com/GjhhDdu.png" },
  { imgUrl: "https://i.imgur.com/nmZjesZ.png" },
  { imgUrl: "https://i.imgur.com/w8uvJTT.png" }
];

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((activeIndex + 1) % imageUrls.length);
    }, 8000);

    return () => clearInterval(intervalId);
  }, [activeIndex]);

  return (
    <div className="carousel-container">
      {imageUrls.map(({ imgUrl }, index) => (
        <div
          key={index}
          className={`carousel-item ${activeIndex === index ? 'active' : ''}`}
          style={{ display: activeIndex === index ? 'block' : 'none' }}
        >
          <img src={imgUrl} alt={`Image ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default Carousel;
