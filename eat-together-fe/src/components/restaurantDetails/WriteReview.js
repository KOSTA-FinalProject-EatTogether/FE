import React, { useState } from "react";
import "../../css/restaurantDetailsCss/WriteReview.css";

const WriteReview = () => {
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Rating:", rating, "Review:", reviewText);
    alert("리뷰가 제출되었습니다!");
    setReviewText(""); // 입력 필드 초기화
    setRating(0);      // 별점 초기화
  };

  return (
    <div className="review-form-container">
      <h2 className="review-form-title">리뷰 작성하기</h2>
      <form onSubmit={handleSubmit} className="review-form">
        <div className="rating-container">
          <label>별점:</label>
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={`star ${rating >= star ? "selected" : ""}`}
              onClick={() => handleRatingChange(star)}
            >
              ★
            </span>
          ))}
        </div>
        <div className="text-container">
          <label htmlFor="review-text">리뷰 내용:</label>
          <textarea
            id="review-text"
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            placeholder="리뷰를 작성하세요..."
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-button">리뷰 제출</button>
      </form>
    </div>
  );
};

export default WriteReview;
