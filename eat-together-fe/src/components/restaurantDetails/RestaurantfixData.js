import React, {useState} from 'react'; // 리액트와 useState 훅을 불러옵니다.
import '../../Restaurant.css';
import ImageSlider from '../../ImageSlider';

function Restaurant() {
  // 2. 상태 변수 선언 및 초기화
  const [showTimeDetails, setShowTimeDetails] = useState(false);
  const [showAddressDetails, setShowAddressDetails] = useState(false);

  // 3. 상태를 업데이트하는 함수 작성
  const toggleTimeDetails = () => {
    setShowTimeDetails(!showTimeDetails); // showDetails 값을 반대로 토글합니다.
  };

  const toggleAddressDetails = () => {
    setShowAddressDetails(!showAddressDetails);
  }

  return (
      <div className={"container"}>
        <div className="restaurant-listing">
          <ImageSlider/>
          <div className="restaurant-info">
            <h2>성수</h2>
            <h1>강별성수</h1>
            <div className="rating">
              <span className="star">⭐</span>
              <span className="score">4.9</span>
              <span className="reviews">(673)</span>
            </div>
            <br/>
            <div className="invite">
              저희 집에 당신의 소중한 하루를 초대합니다.<br/>
              We invite you to spend your precious day at our home
            </div>
            <div className="location">
              <span className="distance">2호선 상수역에서 655m</span>
              <button onClick={toggleAddressDetails} className="toggle-button">
                {showAddressDetails ? "⌃" : "⌄"}
              </button>
              <span className="icon">📍</span>

              {showAddressDetails && (
                  <span>
                <br/>
                <span className="address">서울특별시 성동구 뚝섬로9길 8 3층</span>
              </span>
              )}
            </div>
            <div className="pricing">
              <span className="lunch">점심 4.9만원</span>
              <span className="dinner">저녁 9.9만원</span>
            </div>
            <div className="hours">
              <span className="today">오늘 (금): 12:00 ~ 22:00</span>
              <button onClick={toggleTimeDetails} className="toggle-button">
                {showTimeDetails ? "↑ 간단히 보기" : "↓ 자세히 보기"}
              </button>
              {showTimeDetails && (
                  <div className="details">
                    <span className="daily">매일 - 점심: 12:00 ~ 15:45</span>
                    <span className="evening">저녁: 18:00 ~ 22:00</span>
                  </div>
              )}
            </div>
            <div className="buttons">
              <button className="call">전화</button>
            </div>
            <div className="tags">
              <span className="tag">콜키지 가능</span>
              <span className="tag">콜키지 프리</span>
              <span className="tag">단체 이용 가능</span>
              <span className="tag">아기의자</span>
              <span className="tag">대관 가능</span>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Restaurant;
