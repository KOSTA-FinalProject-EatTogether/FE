import React, { useState } from 'react';
import '../../css/mainpage/ImageSlider.css';

const ImageSlider = () => {
  const images = [
    'path/to/image1.jpg',
    'path/to/image2.jpg',
    'path/to/image3.jpg'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // 이미지 배열이 비어 있지 않은지 확인
  if (!images || images.length === 0) {
    return <div className="image-slider">이미지가 없습니다.</div>;
  }

  return (
    <div className="image-slider">
      <button className="slider-button prev" onClick={prevSlide}>
        &#10094;
      </button>
      <div className="slide">
        <img src={images[currentIndex]} alt={`image-${currentIndex}`} className="slider-image" />
      </div>
      <button className="slider-button next" onClick={nextSlide}>
        &#10095;
      </button>
      <div className="indicator-container">
        {images.map((_, index) => (
          <div
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
