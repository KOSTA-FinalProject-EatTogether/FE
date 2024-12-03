import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useEffect, useState} from 'react';

// 사용자 권한 타입
const USER_ROLES = {
    USER: 'USER',
    OWNER: 'OWNER',
    ADMIN: 'ADMIN'
};

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
  
 export const ReviewForm = ({ review, onChange, onImageChange }) => {
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
    const previewReviews = SAMPLE_REVIEWS.slice(0, 2); // 최근 2개 리뷰만 표시
 
    return (
        <div className="container mt-4">
            <h2 className="mb-4 fs-5 d-flex justify-content-between align-items-center">
                최근 리뷰
                <span className="badge bg-primary">{SAMPLE_REVIEWS.length}개</span>
            </h2>
            <div className="card">
                <div className="card-body p-0">
                    {previewReviews.map(review => (
                        <div key={review.id} className="border-bottom p-3">
                            <div className="d-flex justify-content-between mb-2">
                                <div>
                                    <span className="fw-bold small">{review.userName}</span>
                                    <span className="mx-2 text-muted small">|</span>
                                    <span className="text-warning small">{'★'.repeat(review.rating)}</span>
                                    <span className="text-muted small">{'★'.repeat(5-review.rating)}</span>
                                </div>
                                <small className="text-muted">
                                    {new Date(review.date).toLocaleDateString()}
                                </small>
                            </div>
 
                            <p className="mb-2 small">{review.content}</p>
 
                            {review.images.length > 0 && (
                                <div className="d-flex gap-2 mb-2">
                                    {review.images.map((image, index) => (
                                        <div
                                            key={index}
                                            className="bg-light"
                                            style={{
                                                width: '50px',
                                                height: '50px',
                                                borderRadius: '4px'
                                            }}
                                        />
                                    ))}
                                </div>
                            )}
 
                            {review.reply && (
                                <div className="bg-light rounded p-2 mt-2">
                                    <div className="d-flex align-items-center mb-1">
                                        <span className="badge bg-primary me-2">사장님</span>
                                    </div>
                                    <p className="mb-0 small">{review.reply}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <div className="text-center mt-3">
                <a href="/reviews" className="btn btn-sm btn-outline-primary">
                    전체 리뷰 보기
                </a>
            </div>
        </div>
    );
 };



export const ReviewList = ({onEditReview, onReportReview, onDeleteReview }) => {
    const [userRole, setUserRole] = useState(null);
    const [editingReview, setEditingReview] = useState(null);
    const [editContent, setEditContent] = useState('');

    // localStorage에서 로그인 정보 가져오기
     useEffect(() => {
        const loginInfo = localStorage.getItem('loginInfo');
        if (loginInfo) {
            const parsedInfo = JSON.parse(loginInfo);
            setUserRole(parsedInfo.role);
        }
    }, []);

    const handleEditClick = (review) => {
        setEditingReview(review.id);
        setEditContent(review.content);
    };

    const handleSaveEdit = async (reviewId) => {
        await onEditReview(reviewId, editContent);
        setEditingReview(null);
        setEditContent('');
    };

    const handleReport = async (reviewId) => {
        if (window.confirm('이 리뷰를 신고하시겠습니까?\n부적절한 내용이 포함된 리뷰는 검토 후 삭제될 수 있습니다.')) {
            await onReportReview(reviewId);
        }
    };

    const handleDelete = async (reviewId) => {
        if (window.confirm('이 리뷰를 삭제하시겠습니까?\n삭제된 리뷰는 복구할 수 없습니다.')) {
            await onDeleteReview(reviewId);
        }
    };

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
                                <div className="d-flex align-items-center">
                                    <small className="text-muted me-3">
                                        {new Date(review.date).toLocaleDateString()}
                                    </small>

                                    {/* 권한별 액션 버튼 */}
                                    {userRole === USER_ROLES.USER && review.isOwner && (
                                        <button
                                            className="btn btn-outline-primary btn-sm ms-2"
                                            onClick={() => handleEditClick(review)}
                                        >
                                            수정
                                        </button>
                                    )}

                                    {userRole === USER_ROLES.OWNER && (
                                        <button
                                            className="btn btn-outline-warning btn-sm ms-2"
                                            onClick={() => handleReport(review.id)}
                                        >
                                            신고
                                        </button>
                                    )}

                                    {userRole === USER_ROLES.ADMIN && (
                                        <button
                                            className="btn btn-outline-danger btn-sm ms-2"
                                            onClick={() => handleDelete(review.id)}
                                        >
                                            삭제
                                        </button>
                                    )}
                                </div>
                            </div>

                            {/* 리뷰 내용 */}
                            {editingReview === review.id ? (
                                <div className="mt-3">
                  <textarea
                      className="form-control mb-2"
                      value={editContent}
                      onChange={(e) => setEditContent(e.target.value)}
                      rows="3"
                  />
                                    <div className="d-flex justify-content-end gap-2">
                                        <button
                                            className="btn btn-outline-secondary btn-sm"
                                            onClick={() => setEditingReview(null)}
                                        >
                                            취소
                                        </button>
                                        <button
                                            className="btn btn-primary btn-sm"
                                            onClick={() => handleSaveEdit(review.id)}
                                        >
                                            저장
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <p className="mb-2">{review.content}</p>
                            )}

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