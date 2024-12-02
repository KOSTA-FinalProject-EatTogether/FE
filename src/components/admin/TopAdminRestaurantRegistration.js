import React, { useState } from 'react';
import '../../css/admin/TopAdminRestaurantRegistration.css';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // 모달이 열릴 때, 접근성 관련 경고를 피하기 위해 설정합니다.

const TopAdminRestaurantRegistration = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [modalAction, setModalAction] = useState('');

  const restaurants = [
    { id: 1, name: '식당1', businessNumber: '123-45-67890', address: '서울특별시 강남구', phone: '02-123-4567', email: 'restaurant1@example.com', hours: '09:00 - 21:00', menu: '한식', additionalInfo: '주차 가능' },
    { id: 2, name: '식당2', businessNumber: '234-56-78901', address: '서울특별시 종로구', phone: '02-234-5678', email: 'restaurant2@example.com', hours: '10:00 - 22:00', menu: '일식', additionalInfo: '와이파이 제공' }
  ];

  const openModal = (restaurant, action) => {
    setSelectedRestaurant(restaurant);
    setModalAction(action);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedRestaurant(null);
    setModalAction('');
  };

  const handleConfirm = () => {
    if (modalAction === 'approve') {
      console.log(`식당 승인: ${selectedRestaurant.name}`);
    } else {
      console.log(`식당 반려: ${selectedRestaurant.name}`);
    }
    closeModal();
  };

  const handleSearch = () => {
    // 식당 검색 로직 추가 (필요시)
    console.log('식당 검색 버튼 클릭');
  };

  return (
    <div className="topadmin-restaurant-container">
      <h1 className="topadmin-restaurant-header">식당 등록 관리</h1>
      <div className="topadmin-search-bar">
        <input type="text" id="searchInput" placeholder="식당 검색..." className="topadmin-search-input" />
        <button className="topadmin-search-button" onClick={handleSearch}>검색</button>
      </div>
      <div className="topadmin-restaurant-list">
        {restaurants.map(restaurant => (
          <div key={restaurant.id} className="topadmin-restaurant-item">
            <div className="topadmin-restaurant-info">
              <div className="topadmin-restaurant-name">이름: {restaurant.name}</div>
              <div className="topadmin-restaurant-business-number">사업자 번호: {restaurant.businessNumber}</div>
              <div className="topadmin-restaurant-address">주소: {restaurant.address}</div>
              <div className="topadmin-restaurant-phone">전화번호: {restaurant.phone}</div>
              <div className="topadmin-restaurant-email">이메일: {restaurant.email}</div>
              <div className="topadmin-restaurant-hours">운영 시간: {restaurant.hours}</div>
              <div className="topadmin-restaurant-menu">메뉴: {restaurant.menu}</div>
              <div className="topadmin-restaurant-additional-info">기타 정보: {restaurant.additionalInfo}</div>
            </div>
            <div className="topadmin-restaurant-actions">
              <button className="topadmin-approve-button" onClick={() => openModal(restaurant, 'approve')}>승인</button>
              <button className="topadmin-reject-button" onClick={() => openModal(restaurant, 'reject')}>반려</button>
            </div>
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
        <h2>식당 {modalAction === 'approve' ? '승인' : '반려'}</h2>
        <p>정말로 이 식당을 {modalAction === 'approve' ? '승인' : '반려'}하시겠습니까?</p>
        <div className="topadmin-modal-actions">
          <button onClick={closeModal}>아니오</button>
          <button onClick={handleConfirm}>예</button>
        </div>
      </Modal>
    </div>
  );
};

export default TopAdminRestaurantRegistration;
