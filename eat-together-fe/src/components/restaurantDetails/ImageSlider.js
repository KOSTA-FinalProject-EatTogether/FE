import React from 'react';
import '../../css/restaurantDetailsCss/ImageSlider.css';
import simba from '../../assets/simba_icon.png'
function ImageSlider() {
  return (
    <div className="image-slider">
      <img src={simba}/>
      <button className="prev">&#10094;</button>
      <button className="next">&#10095;</button>
    </div>
  );
}

export default ImageSlider;
