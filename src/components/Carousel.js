import React, { useState, useEffect } from 'react';
import ParallaxScroll from 'react-parallax-scroll';
import './CSS/Carousel.css';

const imageUrls = [
  { imgUrl : "https://i.imgur.com/GjhhDdu.png" },
  { imgUrl : "https://i.imgur.com/nmZjesZ.png" },
  { imgUrl : "https://i.imgur.com/w8uvJTT.png"}
];

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [maxWidth, setMaxWidth] = useState(0);

  useEffect(() => {
    // Get the maximum width of all images
    const max = Math.max(...imageUrls.map(({ imgUrl }) => {
      const img = new Image();
      img.src = imgUrl;
      return img.width;
    }));
    setMaxWidth(max);
    
    // Set the active index at a regular interval
    const intervalId = setInterval(() => {
      setActiveIndex((activeIndex + 1) % imageUrls.length);
    }, 5000);
    
    return () => clearInterval(intervalId);
  }, [activeIndex]);

  return (
    <div className="carousel-container" style={{ maxWidth: `${maxWidth}px` }}>
      <ParallaxScroll
        className="image-carousel"
        onVisible={() => {
          console.log('onVisible called');
        }}
        onHidden={() => {
          console.log('onHidden called');
        }}
      >
        <div className="carousel-items" style={{ width: `calc(100% * ${imageUrls.length})` }}>
          {imageUrls.map(({ imgUrl }, index) => (
            <div
              key={index}
              className={`carousel-item ${activeIndex === index ? 'active' : ''}`}
              style={{ marginLeft: '10px' }}
            >
              <img src={imgUrl} alt={`Image ${index + 1}`} style={{ maxWidth: `${maxWidth}px` }} />
            </div>
          ))}
        </div>
      </ParallaxScroll>
    </div>
  );
};

export default Carousel;
