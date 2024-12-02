import React from 'react';
import '../../css/restaurantDetailsButtonCss/RestaurantButtonReview.css';
import profileImg from '../../assets/simba_icon.png';

const RestaurantButtonReview = () => {
    return (
        <div className="restaurant_details_container">
            <div className="review_section">
                <div className="review_total">
                    <span className="star">⭐</span>
                    <span className="review_total_score">4.9</span>
                    <div className="review_total_count">(352 reviews)</div>
                </div>
                <div className="review_distribution">
                    <div className="review_stars">
                        <div className="star_label">5 stars</div>
                        <div className="star_bar">
                            <div className="star_fill" style={{width: "70%"}}></div>
                        </div>
                        <div className="star_count">247</div>
                    </div>
                    <div className="review_stars">
                        <div className="star_label">4 stars</div>
                        <div className="star_bar">
                            <div className="star_fill" style={{width: "25%"}}></div>
                        </div>
                        <div className="star_count">85</div>
                    </div>
                    <div className="review_stars">
                        <div className="star_label">3 stars</div>
                        <div className="star_bar">
                            <div className="star_fill" style={{width: "5%"}}></div>
                        </div>
                        <div className="star_count">15</div>
                    </div>
                    <div className="review_stars">
                        <div className="star_label">2 stars</div>
                        <div className="star_bar">
                            <div className="star_fill" style={{width: "2%"}}></div>
                        </div>
                        <div className="star_count">5</div>
                    </div>
                    <div className="review_stars">
                        <div className="star_label">1 star</div>
                        <div className="star_bar">
                            <div className="star_fill" style={{width: "0%"}}></div>
                        </div>
                        <div className="star_count">0</div>
                    </div>
                    {/* 드롭다운 메뉴 */}
                    <div className="dropdown">
                        <button className="dropdown_button">베스트 순</button>
                        <div className="dropdown_content">
                            <a href="#">베스트 순</a>
                            <a href="#">최신 순</a>
                        </div>
                    </div>

                    {/* 베스트 리뷰 섹션 */}
                    <div className="best_review">
                        <div className="review_header">
                            <img src={profileImg} alt="Profile" className="profile_img"/>
                            <div className="reviewer_info">
                                <div className="reviewer_name">꿈꾸는 미식가_13050</div>
                                <div className="review_score_date">
                                    <span className="star">⭐️</span>
                                    <span className="review_score">5.0</span>
                                    <span className="review_date">2024.11.24</span>
                                </div>
                            </div>
                        </div>
                        <div className="review_images">
                            <img src={profileImg} alt="Review" className="review_image"/>
                            <img src={profileImg} alt="Review" className="review_image"/>
                            <img src={profileImg} alt="Review" className="review_image"/>
                        </div>
                        <div className="review_text">
                            남자친구랑 저녁 데이트로 방문했어요 - 비오는 날 데이트하기 정...남자친구랑 저녁 데이트로 방문했어요 - 비오는 날 데이트하기 정...남자친구랑 저녁 데이트로 방문했어요 - 비오는 날 데이트하기 정...남자친구랑 저녁 데이트로 방문했어요 - 비오는 날 데이트하기 정...남자친구랑 저녁 데이트로 방문했어요 - 비오는 날 데이트하기 정...남자친구랑 저녁 데이트로 방문했어요 - 비오는 날 데이트하기 정...남자친구랑 저녁 데이트로 방문했어요 - 비오는 날 데이트하기 정...남자친구랑 저녁 데이트로 방문했어요 - 비오는 날 데이트하기 정...
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RestaurantButtonReview;
