import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import ImageSlider from './ImageSlider';
import LocationPoint from '../../assets/location_pinpoint.png';
import Coin from '../../assets/coin_won_icon.png';
import Clock from '../../assets/clock_icon.png';

function RestaurantFixData() {
    const [showTimeDetails, setShowTimeDetails] = useState(false);
    const [showAddressDetails, setShowAddressDetails] = useState(false);
 
    return (
        <div className="container mt-4 mb-4">
            <ImageSlider/>
            <div className="card mt-3">
                <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                        <h6 className="badge bg-secondary mb-0">성수</h6>
                        <button className="btn btn-outline-primary btn-sm">
                            📞 전화
                        </button>
                    </div>
 
                    <h2 className="fs-4 mb-2">강별 성수</h2>
 
                    <div className="d-flex align-items-center mb-3">
                        <span className="text-warning me-1">⭐</span>
                        <span className="fw-bold me-1">4.9</span>
                        <span className="text-muted small">(673)</span>
                    </div>
 
                    <p className="small text-muted mb-3">
                        저희 집에 당신의 소중한 하루를 초대합니다.<br/>
                        We invite you to spend your precious day at our home
                    </p>
 
                    <div className="d-flex align-items-start mb-3">
                        <img src={LocationPoint} alt="location" className="me-2" style={{width: '20px'}}/>
                        <div>
                            <div className="small">2호선 상수역에서 655m</div>
                            <div className="d-flex align-items-center">
                                <span className="small text-muted">서울특별시 성동구 뚝섬로9길 8 3층</span>
                                <button 
                                    className="btn btn-link btn-sm p-0 ms-2"
                                    onClick={() => setShowAddressDetails(!showAddressDetails)}
                                >
                                    {showAddressDetails ? "⌃" : "⌄"}
                                </button>
                            </div>
                        </div>
                    </div>
 
                    <div className="d-flex align-items-center mb-3">
                        <img src={Coin} alt="price" className="me-2" style={{width: '20px'}}/>
                        <span className="small">점심 4.9만원 · 저녁 9.9만원</span>
                    </div>
 
                    <div className="d-flex align-items-start mb-3">
                        <img src={Clock} alt="time" className="me-2" style={{width: '20px'}}/>
                        <div>
                            <div className="small">오늘 (금): 12:00 ~ 22:00</div>
                            <div className="d-flex align-items-center">
                                <button 
                                    className="btn btn-link btn-sm p-0"
                                    onClick={() => setShowTimeDetails(!showTimeDetails)}
                                >
                                    {showTimeDetails ? "⌃" : "⌄"}
                                </button>
                                {showTimeDetails && (
                                    <div className="ms-2 small text-muted">
                                        매일 - 점심: 12:00 ~ 15:45<br/>
                                        저녁: 18:00 ~ 22:00
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
 
                    <div className="d-flex flex-wrap gap-2">
                        {['콜키지 가능', '콜키지 프리', '단체 이용 가능', '아기의자', '대관 가능'].map((tag, index) => (
                            <span key={index} className="badge bg-light text-dark">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
 }
 

export default RestaurantFixData;
