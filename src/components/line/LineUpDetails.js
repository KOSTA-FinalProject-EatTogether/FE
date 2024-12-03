import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import '../../css/line/LineUpReservation.css';

Modal.setAppElement('#root'); // 모달이 열릴 때, 접근성 관련 경고를 피하기 위해 설정합니다.

const LineUpDetails = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleGoToHistory = () => {
    navigate('/queue-history');
  };

  const handleCancelWaiting = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const confirmCancel = () => {
    // 원하는 대기 취소 로직 추가
    setIsModalOpen(false);
  };

  return (
    <div className="reservationek-container">
      <div className="reservationek-header">
        <div className="reservationek-restaurant-name">식당이름 1</div>
        <div className="reservationek-reception-date">접수일시: 2024.11.16(토) 14:56</div>
      </div>
      <div className="reservationek-buttons">
        <button className="reservationek-phone">전화</button>
        <button className="reservationek-location">위치</button>
      </div>
      <div className="reservationek-status">
        <div className="reservationek-current-position">현재 내 순서 7번째</div>
        <div className="reservationek-waiting-number">대기번호 2인 32번</div>
      </div>
      <div className="reservationek-info">
        <div className="reservationek-info-header">대기정보</div>
        <div className="reservationek-info-content">
          <div className="reservationek-date-time">일시: 2024.11.16(토) 14:56</div>
          <div className="reservationek-people">인원: 2명</div>
          <div className="reservationek-status">이용 상태: 이용예정</div>
        </div>
      </div>
      <div className="reservationek-request">
        <div className="reservationek-request-header">요청사항</div>
        <div className="reservationek-request-content">요청내용</div>
      </div>
      <div className="reservationek-footer">
        <button className="reservationek-go-history" onClick={handleGoToHistory}>이용내역으로 가기</button>
        <button className="reservationek-cancel-waiting" onClick={handleCancelWaiting}>대기취소하기</button>
      </div>

      <Modal 
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="대기 취소 확인"
        className="reservationek-modal"
        overlayClassName="reservationek-modal-overlay"
      >
        <h2>대기등록을 취소하시겠습니까?</h2>
        <p>결제했던 금액은 전액 환불됩니다</p>
        <p>대기 취소 시 복구 불가합니다.</p>
        <button onClick={closeModal}>아니요</button>
        <button onClick={confirmCancel}>예</button>
      </Modal>
    </div>
  );
};

export default LineUpDetails;
