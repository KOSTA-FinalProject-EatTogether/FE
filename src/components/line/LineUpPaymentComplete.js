import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../css/line/LineUpPaymentComplete.css';

const LineUpPaymentComplete = () => {
  const navigate = useNavigate();

  const handleGoToHistory = () => {
    navigate('/queue-history');
  };

  const handleClose = () => {
    // 원하는 동작 추가 (예: 창 닫기)
  };

  return (
    <div className="complete-payment-complete-container">
      <button className="complete-share-button">공유하기</button>
      <h1 className="complete-title">줄서기신청완료</h1>
      
      <div className="complete-status-boxes">
        <div className="complete-status-box">2인</div>
        <div className="complete-status-box">32번</div>
      </div>
      
      <table className="complete-info-table">
        <tbody>
          <tr>
            <td className="complete-label">매장명</td>
            <td className="complete-value">식당이름1</td>
          </tr>
          <tr>
            <td className="complete-label">인원</td>
            <td className="complete-value">2명</td>
          </tr>
          <tr>
            <td className="complete-label">가격</td>
            <td className="complete-value">28,000원</td>
          </tr>
        </tbody>
      </table>
      
      <div className="complete-buttons">
        <button className="complete-close-button" onClick={handleClose}>닫기</button>
        <button className="complete-history-button" onClick={handleGoToHistory}>줄서기 내역가기</button>
      </div>
    </div>
  );
};

export default LineUpPaymentComplete;
