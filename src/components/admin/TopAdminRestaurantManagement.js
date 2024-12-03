import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

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
    console.log(`식당 폐업 처리: ${selectedRestaurant.name}`);
    closeModal();
  };

  const handleSearch = () => {
    console.log('식당 검색 버튼 클릭');
  };

  return (
      <div style={styles.container}>
        <h1 style={styles.header}>계정관리(식당)</h1>

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
                  <div style={styles.infoText}>이름: {restaurant.name}</div>
                  <div style={styles.infoText}>주소: {restaurant.address}</div>
                  <div style={styles.infoText}>상태: {restaurant.status}</div>
                </div>
                <button
                    style={styles.closeButton}
                    onClick={() => openModal(restaurant)}
                >
                  폐업처리
                </button>
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
            <h2 style={styles.modalTitle}>식당 폐업 처리</h2>
            <p style={styles.modalText}>정말로 이 식당을 폐업처리 하시겠습니까?</p>
            <div style={styles.modalActions}>
              <button style={styles.modalButton} onClick={closeModal}>아니오</button>
              <button style={styles.modalButton} onClick={handleConfirm}>예</button>
            </div>
          </div>
        </Modal>
      </div>
  );
};

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
    gap: '10px',
  },
  restaurantItem: {
    border: '1px solid #ddd',
    borderRadius: '4px',
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  restaurantInfo: {
    flex: 1,
  },
  infoText: {
    marginBottom: '5px',
    fontSize: '0.9rem',
  },
  buttonGroup: {
    display: 'flex',
    gap: '8px',
    marginBottom: '5px',
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
  closeButton: {
    padding: '8px',
    backgroundColor: '#6c757d',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    width: '100%',
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

export default TopAdminRestaurantManagement;