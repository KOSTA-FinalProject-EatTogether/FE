import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const TopAdminRestaurantRegistration = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [modalAction, setModalAction] = useState('');

  const restaurants = [
    {
      id: 1,
      name: '식당1',
      businessNumber: '123-45-67890',
      address: '서울특별시 강남구',
      phone: '02-123-4567',
      email: 'restaurant1@example.com',
      hours: '09:00 - 21:00',
      menu: '한식',
      additionalInfo: '주차 가능'
    },
    {
      id: 2,
      name: '식당2',
      businessNumber: '234-56-78901',
      address: '서울특별시 종로구',
      phone: '02-234-5678',
      email: 'restaurant2@example.com',
      hours: '10:00 - 22:00',
      menu: '일식',
      additionalInfo: '와이파이 제공'
    }
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
    console.log('식당 검색 버튼 클릭');
  };

  return (
      <div style={styles.container}>
        <h1 style={styles.header}>식당 등록 관리</h1>

        <div style={styles.searchBar}>
          <input
              type="text"
              placeholder="식당 검색..."
              style={styles.searchInput}
          />
          <button
              style={styles.searchButton}
              onClick={handleSearch}
          >
            검색
          </button>
        </div>

        <div style={styles.restaurantList}>
          {restaurants.map(restaurant => (
              <div key={restaurant.id} style={styles.restaurantItem}>
                <div style={styles.restaurantInfo}>
                  <InfoRow label="이름" value={restaurant.name} />
                  <InfoRow label="사업자 번호" value={restaurant.businessNumber} />
                  <InfoRow label="주소" value={restaurant.address} />
                  <InfoRow label="전화번호" value={restaurant.phone} />
                  <InfoRow label="이메일" value={restaurant.email} />
                  <InfoRow label="운영 시간" value={restaurant.hours} />
                  <InfoRow label="메뉴" value={restaurant.menu} />
                  <InfoRow label="기타 정보" value={restaurant.additionalInfo} />
                </div>
                <div style={styles.buttonGroup}>
                  <button
                      style={styles.approveButton}
                      onClick={() => openModal(restaurant, 'approve')}
                  >
                    승인
                  </button>
                  <button
                      style={styles.rejectButton}
                      onClick={() => openModal(restaurant, 'reject')}
                  >
                    반려
                  </button>
                </div>
              </div>
          ))}
        </div>

        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={{
              content: {
                width: '80%',
                maxWidth: '400px',
                margin: 'auto',
                padding: '20px',
                borderRadius: '8px',
                backgroundColor: 'white',
              },
              overlay: {
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }
            }}
        >
          <div style={styles.modalContent}>
            <h2 style={styles.modalTitle}>
              식당 {modalAction === 'approve' ? '승인' : '반려'}
            </h2>
            <p style={styles.modalText}>
              정말로 이 식당을 {modalAction === 'approve' ? '승인' : '반려'}하시겠습니까?
            </p>
            <div style={styles.modalActions}>
              <button style={styles.modalButton} onClick={closeModal}>아니오</button>
              <button style={styles.modalButton} onClick={handleConfirm}>예</button>
            </div>
          </div>
        </Modal>
      </div>
  );
};

// 정보 행을 표시하는 컴포넌트
const InfoRow = ({ label, value }) => (
    <div style={styles.infoRow}>
      <span style={styles.infoLabel}>{label}:</span>
      <span style={styles.infoValue}>{value}</span>
    </div>
);

const styles = {
  container: {
    padding: '10px',
    maxWidth: '480px',
    margin: '0 auto',
    boxSizing: 'border-box',
  },
  header: {
    fontSize: '1.5rem',
    marginBottom: '15px',
    textAlign: 'center',
  },
  searchBar: {
    display: 'flex',
    gap: '8px',
    marginBottom: '15px',
  },
  searchInput: {
    flex: 1,
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ddd',
  },
  searchButton: {
    padding: '8px 15px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  restaurantList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  restaurantItem: {
    border: '1px solid #ddd',
    borderRadius: '4px',
    padding: '15px',
    backgroundColor: 'white',
  },
  restaurantInfo: {
    marginBottom: '15px',
  },
  infoRow: {
    display: 'flex',
    marginBottom: '8px',
    fontSize: '0.9rem',
    flexWrap: 'wrap',
  },
  infoLabel: {
    minWidth: '90px',
    fontWeight: 'bold',
    marginRight: '8px',
  },
  infoValue: {
    flex: 1,
    wordBreak: 'break-all',
  },
  buttonGroup: {
    display: 'flex',
    gap: '8px',
  },
  approveButton: {
    flex: 1,
    padding: '8px',
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  rejectButton: {
    flex: 1,
    padding: '8px',
    backgroundColor: '#dc3545',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  modalContent: {
    textAlign: 'center',
  },
  modalTitle: {
    fontSize: '1.2rem',
    marginBottom: '15px',
  },
  modalText: {
    marginBottom: '20px',
  },
  modalActions: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
  },
  modalButton: {
    padding: '8px 20px',
    borderRadius: '4px',
    border: 'none',
    cursor: 'pointer',
    backgroundColor: '#6c757d',
    color: 'white',
  },
};

export default TopAdminRestaurantRegistration;