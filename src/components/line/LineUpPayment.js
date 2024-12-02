import React, { useState } from 'react';
import '../../css/line/LineUpPayment.css';
import naverpayImage from '../../assets/payment/naverpayImage.svg';
import kakaopayImage from '../../assets/payment/kakaopayImage.png';
import paycoImage from '../../assets/payment/paycoImage.jpg';
import cardImage from '../../assets/payment/cardImage.png';

const paymentMethods = [
  { id: 1, name: '신용, 체크카드', image: cardImage },
  { id: 2, name: '네이버페이', image: naverpayImage },
  { id: 3, name: '카카오페이', image: kakaopayImage },
  { id: 4, name: '페이코', image: paycoImage },
];

const LineUpPayment = () => {
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [request, setRequest] = useState('');

  const handlePayment = () => {
    if (!selectedMethod) {
      // 결제 수단 선택이 필요하다는 메시지 표시
      return;
    }
    console.log(`결제 수단: ${selectedMethod.name}\n고객 요청: ${request}`);
    // 여기서 실제 결제 로직을 구현하세요
  };

  return (
    <div className="detail-payment-container">
      <div className="detail-waiting-status">현재 2팀 대기중</div>
      
      <div className="detail-info">
        <div className="detail-info-item">
          <span className="detail-label">매장명</span>
          <span className="detail-value">XYZ 레스토랑</span>
        </div>
        <div className="detail-info-item">
          <span className="detail-label">인원</span>
          <span className="detail-value">2명</span>
        </div>
        <div className="detail-info-item">
          <span className="detail-label">가격</span>
          <span className="detail-value">28,000원</span>
        </div>
      </div>
      
      <h1 className="detail-payment-title">결제 방법 선택</h1>
      
      <div className="detail-payment-methods">
        {paymentMethods.map(method => (
          <button 
            key={method.id} 
            className={`detail-payment-method ${selectedMethod?.id === method.id ? 'selected' : ''}`} 
            onClick={() => setSelectedMethod(method)}
          >
            <img src={method.image} alt={method.name} />
            <span>{method.name}</span>
          </button>
        ))}
      </div>
      
      <div className="detail-payment-amount">
        <h2>현장 결제 금액: 28,000원</h2>
      </div>
      
      <div className="detail-customer-request">
        <label htmlFor="request">고객 요청사항:</label>
        <textarea 
          id="request" 
          value={request} 
          onChange={(e) => setRequest(e.target.value)} 
          placeholder="요청사항을 입력하세요."
        />
      </div>
      
      <div className="detail-payment-button-wrapper">
        <button className="detail-payment-button" onClick={handlePayment}>
          결제하기
        </button>
      </div>
    </div>
  );
};

export default LineUpPayment;
