import React, { useState } from 'react';
import '../../css/line/LineUpMenunextSelection.css';
import simba from '../../assets/simba_icon.png';
import {useNavigate} from "react-router-dom";
// import menu1 from '../../assets/menu/menu1.jpg';  // 이미지 파일 임포트
// import menu2 from '../../assets/menu/menu2.jpg';  // 이미지 파일 임포트

const menuItems = [
  { id: 1, name: '메뉴이름1', price: '₩10,000', soldOut: false, imageUrl: simba },
  { id: 2, name: '메뉴이름2', price: '₩12,000', soldOut: true, imageUrl: simba },
  // 추가 메뉴 항목을 여기에 추가하세요
];

const LineUpMenunextSelection = () => {
  const [quantity, setQuantity] = useState(1); // 수량을 0으로 시작
  const pricePerItem = 14000;
  const totalPrice = pricePerItem * quantity;

  const handleMinus = () => {
    setQuantity(prevQuantity => Math.max(1, prevQuantity - 1));
  };

  const handlePlus = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };
    const navigate = useNavigate()
    const handlePayment = () => {
        navigate('/queue/payment'); // 페이지 이동
    };


    return (
    <div className="next-menu-container">
      <h1 className="next-restaurant-name">식당이름</h1>
      <div className="next-menu-tabs">
        <button className="next-tab active">식사</button>
        <button className="next-tab">사이드</button>
        <button className="next-tab">주류</button>
        <button className="next-tab">음료</button>
        <button className="next-tab">기타</button>
      </div>
      <div className="next-menu-items">
        {menuItems.map(item => (
          <button className="next-menu-item" key={item.id} onClick={() => window.location.href = item.linkUrl}>
            <div className="next-menu-photo">
              <img src={item.imageUrl} alt={`메뉴사진 ${item.id}`} />
            </div>
            <div className="next-menu-details">
              <p className="next-menu-name">{item.name}</p>
              <p className="next-menu-price">{item.price}</p>
              {item.soldOut && <p className="next-sold-out">품절</p>}
            </div>
          </button>
        ))}
      </div>
      
      <div className="next-menu-order-fixed">
        <div className="next-menu-order">
          <div className="next-total-price">총 {totalPrice.toLocaleString()}원</div>
          <div className="next-quantity-selector">
            <button className="next-count-button" onClick={handleMinus}>-</button>
            <span className="next-quantity">{quantity}</span>
            <button className="next-count-button" onClick={handlePlus}>+</button>
          </div>
        </div>
        <button className="next-add-to-cart-button" onClick={handlePayment}>결제하기</button>
      </div>
    </div>
  );
};

export default LineUpMenunextSelection;
