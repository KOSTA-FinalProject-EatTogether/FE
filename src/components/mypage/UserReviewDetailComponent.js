import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCalendarDay,
    faArrowLeft,
    faStar,
    faUtensils,
    faLocationDot
} from '@fortawesome/free-solid-svg-icons';

const UserReviewDetailComponent = () => {
    const navigate = useNavigate();

    // 임시 리뷰 데이터
    const tempReviews = [
        {
            id: 1,
            restaurantName: "맛있는 스시",
            visitDate: "2024-03-01",
            visitType: "예약",
            location: "서울시 강남구",
            rating: 4.5,
            content: "사시미가 정말 신선하고 맛있었습니다. 특히 연어와 도로는 입에서 살살 녹았어요. 서비스도 친절하고 분위기도 좋았습니다.",
            images: ["/api/placeholder/320/240", "/api/placeholder/320/240"],
            likes: 15,
            createdAt: "2024-03-02",
            ownerComment: "소중한 후기 감사합니다. 앞으로도 좋은 품질로 보답하겠습니다."
        },
        {
            id: 2,
            restaurantName: "화덕피자",
            visitDate: "2024-03-10",
            visitType: "줄서기",
            location: "서울시 마포구",
            rating: 5.0,
            content: "진짜 화덕피자 맛집입니다! 도우가 쫄깃하면서도 바삭하고, 치즈의 풍미가 끝내줬어요. 마르게리따 피자는 꼭 드셔보세요.",
            images: ["/api/placeholder/320/240"],
            likes: 8,
            createdAt: "2024-03-11"
        },
        {
            id: 3,
            restaurantName: "정통 중식당",
            visitDate: "2024-03-15",
            visitType: "예약",
            location: "서울시 서초구",
            rating: 4.0,
            content: "탕수육이 정말 바삭하고 맛있었어요. 짜장면도 굉장히 맛있었지만 특히 짬뽕이 인상적이었습니다.",
            likes: 5,
            createdAt: "2024-03-16",
            ownerComment: "방문해 주셔서 감사합니다. 더욱 맛있는 요리로 보답하겠습니다."
        }
    ];

    const handleBack = () => {
        navigate(-1);
    };

    const renderStars = (rating) => {
        return [...Array(5)].map((_, index) => (
            <FontAwesomeIcon
                key={index}
                icon={faStar}
                className={index < rating ? 'text-warning' : 'text-gray-300'}
            />
        ));
    };

    return (
        <div className="container p-0" style={{ maxWidth: '480px' }}>
            <div className="card">
                <div className="card-header bg-white p-3">
                    <div className="d-flex align-items-center">
                        <button
                            className="btn btn-link text-dark p-0 me-3"
                            onClick={handleBack}
                        >
                            <FontAwesomeIcon icon={faArrowLeft} />
                        </button>
                        <h5 className="card-title mb-0">내가 작성한 리뷰</h5>
                    </div>
                </div>

                <div className="card-body p-2">
                    {tempReviews.map((review) => (
                        <div key={review.id} className="border rounded mb-2">
                            <div className="p-3">
                                {/* 식당 정보 */}
                                <div className="mb-3">
                                    <div className="d-flex justify-content-between align-items-start">
                                        <h6 className="mb-1 fw-bold">{review.restaurantName}</h6>
                                        <span className="badge bg-primary">{review.visitType}</span>
                                    </div>
                                    <div className="small text-muted mb-2">
                                        <FontAwesomeIcon icon={faLocationDot} className="me-1" />
                                        {review.location}
                                    </div>
                                    <div className="small text-muted">
                                        <FontAwesomeIcon icon={faCalendarDay} className="me-1" />
                                        방문일: {review.visitDate}
                                    </div>
                                </div>

                                {/* 별점과 작성일 */}
                                <div className="mb-3">
                                    <div className="mb-1">
                                        {renderStars(review.rating)}
                                        <span className="ms-2 text-muted">{review.rating}점</span>
                                    </div>
                                    <small className="text-muted">
                                        작성일: {review.createdAt}
                                    </small>
                                </div>

                                {/* 리뷰 내용 */}
                                <p className="small mb-3">{review.content}</p>

                                {/* 리뷰 이미지 */}
                                {review.images && (
                                    <div className="mb-3">
                                        <div className="row g-2">
                                            {review.images.map((image, index) => (
                                                <div key={index} className="col-6">
                                                    <img
                                                        src={image}
                                                        className="img-fluid rounded"
                                                        alt={`리뷰 이미지 ${index + 1}`}
                                                        style={{
                                                            width: '100%',
                                                            height: '120px',
                                                            objectFit: 'cover'
                                                        }}
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* 좋아요 수 */}
                                <div className="small text-muted mb-2">
                                    좋아요 {review.likes}개
                                </div>

                                {/* 사장님 답변 */}
                                {review.ownerComment && (
                                    <div className="bg-light rounded p-3 small">
                                        <div className="fw-bold mb-1">
                                            <FontAwesomeIcon icon={faUtensils} className="me-2" />
                                            사장님 답변
                                        </div>
                                        {review.ownerComment}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default UserReviewDetailComponent;