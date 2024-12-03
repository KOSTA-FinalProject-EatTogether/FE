import React, { useState } from 'react';
import '../../css/line/MenuDetailPage.css';
import menu3 from '../../assets/menu/menu3.jpg'; // 임의의 메뉴 사진
import {useNavigate} from "react-router-dom";
const MenuDetailPage = () => {
  const [quantity, setQuantity] = useState(1);
  const pricePerItem = 14000;
  const totalPrice = pricePerItem * quantity;
  const navigate = useNavigate()
  const handleMinus = () => {
    setQuantity(prevQuantity => Math.max(1, prevQuantity - 1));
  };

  const handlePlus = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

    const handleAddToCart = () => {
        navigate('/queue/menuNextSelect'); // 페이지 이동
    };


    return (
    <div className="detail-menu-container">
      <div className="detail-menu-photo">
        <img src={menu3} alt="메뉴 사진" />
      </div>
      <div className="detail-menu-info">
        <div className="detail-menu-name">비빔밥</div>
        <div className="detail-menu-price">₩14,000</div>
      </div>
      <div className="detail-menu-description">
        <p>이 메뉴는 신선한 재료로 만든 특별한 요리입니다. 맛있게 드세요!</p>
      </div>
      
      <div className="detail-menu-order-fixed">
        <div className="detail-menu-order">
          <div className="detail-total-price">총 {totalPrice.toLocaleString()}원</div>
          <div className="detail-quantity-selector">
            <button className="detail-count-button" onClick={handleMinus}>-</button>
            <span className="detail-quantity">{quantity}</span>
            <button className="detail-count-button" onClick={handlePlus}>+</button>
          </div>
        </div>
        <button className="detail-add-to-cart-button" onClick={handleAddToCart}>장바구니에 담기</button>
      </div>
    </div>
  );
};

export default MenuDetailPage;
