import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import ImageSlider from './ImageSlider';
import LocationPoint from '../../../assets/location_pinpoint.png';
import Coin from '../../../assets/coin_won_icon.png';
import Clock from '../../../assets/clock_icon.png';

// 기본 이미지 설정
const defaultImages = [
  'https://via.placeholder.com/150', // Placeholder 이미지 링크
  'https://via.placeholder.com/150', 
  'https://via.placeholder.com/150'
];

function RestaurantFixData({ restaurant }) {
  const [showTimeDetails, setShowTimeDetails] = useState(false);
  const [showAddressDetails, setShowAddressDetails] = useState(false);

  // restaurant 객체가 존재하지 않거나 images 배열이 없는 경우 기본 이미지를 사용
  const images = restaurant && restaurant.images ? restaurant.images : defaultImages;

  return (
    <div className="container mt-4 mb-4">
      <ImageSlider images={images} />
      <div className="card mt-3">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <h6 className="badge bg-secondary mb-0">{restaurant ? restaurant.rsPark : 'Unknown Location'}</h6>
            <button className="btn btn-outline-primary btn-sm">
              📞 전화: {restaurant ? restaurant.rsPhone : 'N/A'}
            </button>
          </div>

          <h2 className="fs-4 mb-2">{restaurant ? restaurant.rsName : 'Unknown Restaurant'}</h2>

          <div className="d-flex align-items-center mb-3">
            <span className="text-warning me-1">⭐</span>
            <span className="fw-bold me-1">{restaurant ? restaurant.rsAvgRate : 'N/A'}</span>
            <span className="text-muted small">({restaurant ? restaurant.rsReviewCount : '0'})</span>
          </div>

          <p className="small text-muted mb-3">
            저희 집에 당신의 소중한 하루를 초대합니다.<br/>
            We invite you to spend your precious day at our home.
          </p>

          <div className="d-flex align-items-start mb-3">
            <img src={LocationPoint} alt="location" className="me-2" style={{ width: '20px' }} />
            <div>
              <div className="small">{restaurant ? restaurant.rsDistance : 'N/A'}</div>
              <div className="d-flex align-items-center">
                <span className="small text-muted">{restaurant ? restaurant.rsAddress : 'N/A'}</span>
                <button
                  className="btn btn-link btn-sm p-0 ms-2"
                  onClick={() => setShowAddressDetails(!showAddressDetails)}
                >
                  {showAddressDetails ? "⌃" : "⌄"}
                </button>
              </div>
            </div>
          </div>

          <div className="d-flex align-items-center mb-3">
            <img src={Coin} alt="price" className="me-2" style={{ width: '20px' }} />
            <span className="small">{restaurant ? restaurant.rsPrice : 'N/A'}</span>
          </div>

          <div className="d-flex align-items-start mb-3">
            <img src={Clock} alt="time" className="me-2" style={{ width: '20px' }} />
            <div>
              <div className="small">{restaurant && restaurant.rsTime ? restaurant.rsTime : 'N/A'}</div>
              <div className="d-flex align-items-center">
                <button
                  className="btn btn-link btn-sm p-0"
                  onClick={() => setShowTimeDetails(!showTimeDetails)}
                >
                  {showTimeDetails ? "⌃" : "⌄"}
                </button>
                {showTimeDetails && restaurant && restaurant.rsTimeDetails && (
                  <div className="ms-2 small text-muted">
                    {restaurant.rsTimeDetails}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="d-flex flex-wrap gap-2">
            {restaurant && restaurant.rsTags && restaurant.rsTags.map((tag, index) => (
              <span key={index} className="badge bg-light text-dark">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RestaurantFixData;
