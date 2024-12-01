import React from 'react';
import '../../css/restaurantDetailsCss/RestaurantDetailsReview.css';
import simba from '../../assets/simba_icon.png'; // 이미지 경로를 실제 경로로 변경하세요

const ReviewSection = () => {
    return (
        <div className="restaurant_details_review_container">
            <div className="restaurant_details_review_title">추천 리뷰</div>
            <div className="restaurant_details_review_rating">
                <span className="review_stars">⭐️</span>
                <span className="restaurant_details_rating_score">4.9</span>
                <span className="restaurant_details_rating_count">(351)</span>
            </div>
            <div className="restaurant_details_review_layout">
                <div className="restaurant_details_review_highlight">
                    <div className="restaurant_details_highlight_image">
                        <img src={simba} alt="Review" className="review_image"/>
                    </div>
                    <div className="restaurant_details_highlight_top">

                        <span className="restaurant_details_highlight_name">꿈꾸는 미식가_82190</span>
                        <span className="restaurant_details_highlight_date">2024.11.19</span>
                    </div>
                    <div className="restaurant_details_highlight_content">
                        남자친구랑 저녁 데이트로 방문했어요 - 비오는 날 데이트하기 정...
                    </div>

                </div>
                <div className="restaurant_details_review_button_container">
                    <button className="restaurant_details_review_button">
                        리뷰 351개 전체보기
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewSection;
