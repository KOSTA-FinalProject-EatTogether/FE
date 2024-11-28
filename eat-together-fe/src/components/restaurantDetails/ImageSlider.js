import React from 'react';
import './ImageSlider.css';
import ex from './1.jpg'
function ImageSlider() {
  return (
    <div className="image-slider">
      <img src="/1.jpg"  alt={ex}/>
      <button className="prev">&#10094;</button>
      <button className="next">&#10095;</button>
    </div>
  );
}

export default ImageSlider;
