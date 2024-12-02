import React, { useState } from 'react';
import '../../css/admin/TopAdminRestaurantManagement.css';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // 모달이 열릴 때, 접근성 관련 경고를 피하기 위해 설정합니다.

const TopAdminRestaurantManagement = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  const restaurants = [
    { id: 1, name: 'Restaurant1', address: '서울특별시 중구', status: '영업 중' },
    { id: 2, name: 'Restaurant2', address: '서울특별시 강남구', status: '영업 중' },
    { id: 3, name: 'Restaurant3', address: '서울특별시 마포구', status: '폐업' }
  ];

  const openModal = (restaurant) => {
    setSelectedRestaurant(restaurant);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedRestaurant(null);
  };

  const handleConfirm = () => {
    // 식당 폐업 처리 로직 추가
    console.log(`식당 폐업 처리: ${selectedRestaurant.name}`);
    closeModal();
  };

  const handleSearch = () => {
    // 식당 검색 로직 추가 (필요시)
    console.log('식당 검색 버튼 클릭');
  };

  return (
    <div className="topadmin-restaurant-container">
      <h1 className="topadmin-restaurant-header">계정관리(식당)</h1>
      <div className="topadmin-search-bar">
        <input type="text" id="searchInput" placeholder="식당 검색..." className="topadmin-search-input" />
        <button className="topadmin-search-button" onClick={handleSearch}>검색</button>
      </div>
      <div id="restaurantContainer" className="topadmin-restaurant-list">
        {restaurants.map(restaurant => (
          <div key={restaurant.id} className="topadmin-restaurant-item">
            <div className="topadmin-restaurant-info">
              <div className="topadmin-restaurant-name">이름: {restaurant.name}</div>
              <div className="topadmin-restaurant-address">주소: {restaurant.address}</div>
              <div className="topadmin-restaurant-status">상태: {restaurant.status}</div>
            </div>
            <button className="topadmin-close-button" onClick={() => openModal(restaurant)}>폐업처리</button>
          </div>
        ))}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="식당 관리"
        className="topadmin-modal"
        overlayClassName="topadmin-modal-overlay"
      >
        <h2>식당 폐업 처리</h2>
        <p>정말로 이 식당을 폐업처리 하시겠습니까?</p>
        <div className="topadmin-modal-actions">
          <button onClick={closeModal}>아니오</button>
          <button onClick={handleConfirm}>예</button>
        </div>
      </Modal>
    </div>
  );
};

export default TopAdminRestaurantManagement;
