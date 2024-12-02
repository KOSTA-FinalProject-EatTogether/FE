import React from 'react';
import '../../css/admin/TopAdminRestaurantStatus.css';

const TopAdminRestaurantStatus = () => {
  const restaurants = [
    { id: 1, name: '식당1', businessNumber: '123-45-67890', address: '서울특별시 강남구', phone: '02-123-4567', email: 'restaurant1@example.com', hours: '09:00 - 21:00', menu: '한식', additionalInfo: '주차 가능' },
    { id: 2, name: '식당2', businessNumber: '234-56-78901', address: '서울특별시 종로구', phone: '02-234-5678', email: 'restaurant2@example.com', hours: '10:00 - 22:00', menu: '일식', additionalInfo: '와이파이 제공' }
  ];

  const handleSearch = () => {
    // 식당 검색 로직 추가 (필요시)
    console.log('식당 검색 버튼 클릭');
  };

  return (
    <div className="restaurant-status-container">
      <h1 className="restaurant-status-header">등록식당현황</h1>
      <div className="search-bar">
        <input type="text" placeholder="식당 검색..." className="search-input" />
        <button className="search-button" onClick={handleSearch}>검색</button>
      </div>
      <div className="restaurant-list">
        {restaurants.map(restaurant => (
          <div key={restaurant.id} className="restaurant-item">
            <div className="restaurant-info">
              <div className="restaurant-name">이름: {restaurant.name}</div>
              <div className="restaurant-business-number">사업자 번호: {restaurant.businessNumber}</div>
              <div className="restaurant-address">주소: {restaurant.address}</div>
              <div className="restaurant-phone">전화번호: {restaurant.phone}</div>
              <div className="restaurant-email">이메일: {restaurant.email}</div>
              <div className="restaurant-hours">운영 시간: {restaurant.hours}</div>
              <div className="restaurant-menu">메뉴: {restaurant.menu}</div>
              <div className="restaurant-additional-info">기타 정보: {restaurant.additionalInfo}</div>
            </div>
            <button className="details-button">식당 상세정보</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopAdminRestaurantStatus;
