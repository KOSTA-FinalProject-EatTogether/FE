import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// ReviewData.js - 데이터 공유를 위한 파일
const SAMPLE_REVIEWS = [
    {
      id: 1,
      userName: "김민수",
      rating: 5,
      content: "감자탕이 정말 맛있어요! 고기도 푸짐하고 직원분들도 친절하셨습니다.",
      date: "2024-12-01",
      images: ["image1.jpg", "image2.jpg"],
      reply: null,
      visited: "2024-11-30"
    },
    {
      id: 2,
      userName: "이지은",
      rating: 4,
      content: "전체적으로 만족스러웠어요. 다만 좀 더 매콤했으면 좋겠어요.",
      date: "2024-11-30",
      images: [],
      reply: "안녕하세요, 고객님. 소중한 의견 감사합니다. 매운맛 조절이 가능하니 다음에 방문하실 때 말씀해 주세요!",
      visited: "2024-11-29"
    }
  ];
  
  const ReviewForm = ({ review, onChange, onImageChange }) => {
    return (
      <div className="card">
        <div className="card-header">
          <h5 className="mb-0">리뷰 작성</h5>
        </div>
        <div className="card-body">
          <div className="mb-3">
            <label className="form-label">별점</label>
            <div>
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  className="btn btn-link text-warning p-0 me-1"
                  onClick={() => onChange({ ...review, rating: star })}
                >
                  {star <= review.rating ? '★' : '☆'}
                </button>
              ))}
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">리뷰 내용</label>
            <textarea
              className="form-control"
              rows="3"
              value={review.content}
              onChange={(e) => onChange({ ...review, content: e.target.value })}
              placeholder="음식과 서비스는 어떠셨나요?"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">사진 첨부</label>
            <input 
              type="file" 
              className="form-control" 
              accept="image/*" 
              multiple 
              onChange={onImageChange}
            />
          </div>
        </div>
      </div>
    );
  };
  
 export const ReviewPreview = () => {
    return (
      <div className="container py-3">
        <div className="card">
          <div className="card-header d-flex justify-content-between align-items-center">
            <h5 className="mb-0">최근 리뷰</h5>
            <span className="badge bg-primary">{SAMPLE_REVIEWS.length}개</span>
          </div>
          <div className="card-body p-0">
            <div className="list-group list-group-flush">
              {SAMPLE_REVIEWS.map(review => (
                <div key={review.id} className="list-group-item p-3">
                  <div className="d-flex justify-content-between mb-2">
                    <div>
                      <span className="fw-bold">{review.userName}</span>
                      <span className="mx-2 text-muted">|</span>
                      <span className="text-warning">{'★'.repeat(review.rating)}</span>
                      <span className="text-muted">{'★'.repeat(5-review.rating)}</span>
                    </div>
                    <small className="text-muted">
                      {new Date(review.date).toLocaleDateString()}
                    </small>
                  </div>
  
                  <p className="mb-2">{review.content}</p>
  
                  {review.images.length > 0 && (
                    <div className="d-flex gap-2 mb-2">
                      {review.images.map((image, index) => (
                        <div 
                          key={index}
                          className="bg-light"
                          style={{
                            width: '60px',
                            height: '60px',
                            borderRadius: '4px'
                          }}
                        />
                      ))}
                    </div>
                  )}
  
                  {review.reply && (
                    <div className="bg-light rounded p-3 mt-2">
                      <div className="d-flex align-items-center mb-2">
                        <span className="badge bg-primary me-2">사장님</span>
                        <small className="text-muted">답변</small>
                      </div>
                      <p className="mb-0 small">{review.reply}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="text-center">
                <a href={ReviewList} className="btn btn-outline-primary">
                    전체 리뷰 보기
                </a>
            </div>
          </div>
        </div>
      </div>
    );
  };

export const ReviewList = () => {
    return (
      <div className="card">
        <div className="card-header d-flex justify-content-between align-items-center">
          <h5 className="mb-0">방문자 리뷰</h5>
          <span className="badge bg-primary">{SAMPLE_REVIEWS.length}개</span>
        </div>
        <div className="card-body p-0">
          <div className="list-group list-group-flush">
            {SAMPLE_REVIEWS.map(review => (
              <div key={review.id} className="list-group-item p-3">
                {/* 리뷰 헤더 */}
                <div className="d-flex justify-content-between mb-2">
                  <div>
                    <span className="fw-bold">{review.userName}</span>
                    <span className="mx-2 text-muted">|</span>
                    <span className="text-warning">{'★'.repeat(review.rating)}</span>
                    <span className="text-muted">{'★'.repeat(5-review.rating)}</span>
                  </div>
                  <small className="text-muted">
                    {new Date(review.date).toLocaleDateString()}
                  </small>
                </div>
  
                {/* 리뷰 내용 */}
                <p className="mb-2">{review.content}</p>
  
                {/* 리뷰 이미지 */}
                {review.images.length > 0 && (
                  <div className="d-flex gap-2 mb-2">
                    {review.images.map((image, index) => (
                      <div 
                        key={index}
                        className="bg-light"
                        style={{
                          width: '60px',
                          height: '60px',
                          borderRadius: '4px'
                        }}
                      />
                    ))}
                  </div>
                )}
  
                {/* 사장님 답변 */}
                {review.reply && (
                  <div className="bg-light rounded p-3 mt-2">
                    <div className="d-flex align-items-center mb-2">
                      <span className="badge bg-primary me-2">사장님</span>
                      <small className="text-muted">답변</small>
                    </div>
                    <p className="mb-0 small">{review.reply}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  

  export default ReviewList;