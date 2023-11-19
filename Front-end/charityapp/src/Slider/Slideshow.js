import React, { useState, useEffect } from 'react';

const Slideshow = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1
    );
  };

  useEffect(() => {
    const autoSlide = setInterval(nextSlide, 5000); // Auto-slide every 5 seconds
    return () => clearInterval(autoSlide); // Clean up the interval
  },[nextSlide]);

  return (
    <>
      <button onClick={prevSlide}  className="arrow left"><i className="fa-regular fa-greater-than fa-rotate-180"></i></button>
      <button onClick={nextSlide} className="arrow right"><i className="fa-regular fa-greater-than"></i></button>
     <img src={images[currentSlide]} alt="Slideshow" className='img'/>
    
    </>
      
  );
};

export default Slideshow;
