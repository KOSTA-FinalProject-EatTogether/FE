import React, { useState } from 'react';
import '../../css/admin/TopAdminUserManagement.css';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // 모달이 열릴 때, 접근성 관련 경고를 피하기 위해 설정합니다.

const TopAdminUserManagement = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const users = [
    { id: 1, nickname: 'User1', warnings: 2 },
    { id: 2, nickname: 'User2', warnings: 1 },
    { id: 3, nickname: 'User3', warnings: 0 }
  ];

  const openModal = (user) => {
    setSelectedUser(user);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedUser(null);
  };

  const handleConfirm = () => {
    // 유저 삭제 로직 추가
    console.log(`유저 삭제: ${selectedUser.nickname}`);
    closeModal();
  };

  const handleSearch = () => {
    // 유저 검색 로직 추가 (필요시)
    console.log('유저 검색 버튼 클릭');
  };

  return (
    <div className="topadmin-user-container">
      <h1 className="topadmin-user-header">계정관리(유저)</h1>
      <div className="topadmin-search-bar">
        <input type="text" id="searchInput" placeholder="유저 검색..." className="topadmin-search-input" />
        <button className="topadmin-search-button" onClick={handleSearch}>검색</button>
      </div>
      <div id="userContainer" className="topadmin-user-list">
        {users.map(user => (
          <div key={user.id} className="topadmin-user-item">
            <div className="topadmin-user-nickname">{user.nickname}</div>
            <div className="topadmin-user-warnings">경고 누적 횟수: {user.warnings}</div>
            <div className="topadmin-user-actions">
              <button className="topadmin-delete-button" onClick={() => openModal(user)}>계정삭제</button>
            </div>
          </div>
        ))}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="계정 관리"
        className="topadmin-modal"
        overlayClassName="topadmin-modal-overlay"
      >
        <h2>계정 삭제</h2>
        <p>정말로 이 유저를 삭제하시겠습니까?</p>
        <div className="topadmin-modal-actions">
          <button onClick={closeModal}>아니오</button>
          <button onClick={handleConfirm}>예</button>
        </div>
      </Modal>
    </div>
  );
};

export default TopAdminUserManagement;
