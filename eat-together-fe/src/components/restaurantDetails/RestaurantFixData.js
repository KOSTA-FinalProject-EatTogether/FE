import React, {useState} from 'react'; // 리액트와 useState 훅을 불러옵니다.
import '../../css/restaurantDetailsCss/RestaurantFixData.css';
import ImageSlider from './ImageSlider';
import LocationPoint from '../../assets/location_pinpoint.png';
import Coin from '../../assets/coin_won_icon.png';
import Clock from '../../assets/clock_icon.png';

function RestaurantFixData() {
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
        <div className="restaurant_details_container">
            <div className="restaurant-listing">
                <ImageSlider/>
                <div className="restaurant-info">
                    <div className="location-call">
                        <span className="location_code"><h3>성수</h3></span>
                        <span className="buttons">
              <button className="call">📞&nbsp; &nbsp; 전화</button>
            </span>
                    </div>
                    <span className="restaurant_name"><h1>강별 성수</h1></span>
                    <div className="rating">
                        <span className="star">⭐</span>
                        <span className="score">4.9</span>
                        <span className="reviews">(673)</span>
                    </div>
                    <div className="invite">
                        저희 집에 당신의 소중한 하루를 초대합니다.<br/>
                        We invite you to spend your precious day at our home
                    </div>
                    <div className="location">
                        <strong className="pinpoint"><img src={LocationPoint}/></strong>
                        <div className="place-details">
                            <span className="distance">2호선 상수역에서 655m</span>
                            <button onClick={toggleAddressDetails} className="toggle-button">
                                {showAddressDetails ? "⌃" : "⌄"}
                            </button>
                            <span className="icon">📍</span>
                            {showAddressDetails && (
                                <div className="address">서울특별시 성동구 뚝섬로9길 8 3층</div>
                            )}
                        </div>
                    </div>
                    <div className="pricing">
                        <span className="coinIcon"><img src={Coin}/></span>
                        <span className="timePricing">점심 4.9만원 &nbsp;· &nbsp;저녁 9.9만원 </span>
                    </div>
                        <div className="hours">
                            <strong className="time_icon"><img src={Clock}/></strong>
                            <div className="all_time_info">
                                <span className="today">오늘 (금): 12:00 ~ 22:00</span>
                                <button onClick={toggleTimeDetails} className="toggle-button">
                                    {showTimeDetails ? "⌃" : "⌄"}
                                </button>
                                {showTimeDetails && (
                                    <div className="details">
                                        <span className="daily">매일 - 점심: 12:00 ~ 15:45</span><br/>
                                        <span className="evening">저녁: 18:00 ~ 22:00</span>
                                    </div>

                                )}
                            </div>
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

export default RestaurantFixData;
