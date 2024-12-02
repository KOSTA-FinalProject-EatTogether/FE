import React, { useState } from 'react';
import '../../css/admin/TopAdminReviewManagement.css';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // 모달이 열릴 때, 접근성 관련 경고를 피하기 위해 설정합니다.

const TopAdminReviewManagement = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const [selectedReview, setSelectedReview] = useState(null);

  const reviews = [
    { id: 1, user: 'User1', content: '이 식당 정말 좋았어요! 음식도 맛있고 서비스도 훌륭했어요.', date: '2024-11-15' },
    { id: 2, user: 'User2', content: '음식은 괜찮았지만, 서비스가 조금 아쉬웠어요.', date: '2024-11-14' },
    { id: 3, user: 'User3', content: '대체로 만족스러운 경험이었어요. 다음에 또 방문할게요!', date: '2024-11-13' }
  ];

  const openModal = (content, review) => {
    setModalContent(content);
    setSelectedReview(review);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedReview(null);
  };

  const handleConfirm = () => {
    if (modalContent === '삭제') {
      // 리뷰 삭제 로직 추가
      console.log(`리뷰 삭제: ${selectedReview.id}`);
    } else if (modalContent === '경고') {
      // 리뷰 경고 로직 추가
      console.log(`리뷰 경고: ${selectedReview.id}`);
    }
    closeModal();
  };

  return (
    <div className="topadmin-review-container">
      <h1 className="topadmin-review-header">리뷰 관리 페이지</h1>
      <div className="topadmin-review-list">
        {reviews.map(review => (
          <div key={review.id} className="topadmin-review-item">
            <div className="topadmin-review-user">{review.user}</div>
            <div className="topadmin-review-content">{review.content}</div>
            <div className="topadmin-review-date">{review.date}</div>
            <div className="topadmin-review-actions">
              <button className="topadmin-warning-button" onClick={() => openModal('경고', review)}>경고</button>
              <button className="topadmin-delete-button" onClick={() => openModal('삭제', review)}>삭제</button>
            </div>
          </div>
        ))}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="리뷰 관리"
        className="topadmin-modal"
        overlayClassName="topadmin-modal-overlay"
      >
        <h2>리뷰 {modalContent}</h2>
        <p>정말로 이 리뷰를 {modalContent}하시겠습니까?</p>
        <div className="topadmin-modal-actions">
          <button onClick={closeModal}>아니오</button>
          <button onClick={handleConfirm}>예</button>
        </div>
      </Modal>
    </div>
  );
};

export default TopAdminReviewManagement;
