import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import { faImage, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const UserReviewWriteFormComponent = ({ visitId, visitType, restaurantName, visitDate }) => {
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);
    const [content, setContent] = useState('');
    const [images, setImages] = useState([]);
    const [previewUrls, setPreviewUrls] = useState([]);

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        if (files.length + images.length > 5) {
            alert('이미지는 최대 5장까지 첨부 가능합니다.');
            return;
        }

        setImages([...images, ...files]);

        // 이미지 미리보기 URL 생성
        const newPreviewUrls = files.map(file => URL.createObjectURL(file));
        setPreviewUrls([...previewUrls, ...newPreviewUrls]);
    };

    const removeImage = (index) => {
        const newImages = [...images];
        const newPreviewUrls = [...previewUrls];

        newImages.splice(index, 1);
        URL.revokeObjectURL(previewUrls[index]);
        newPreviewUrls.splice(index, 1);

        setImages(newImages);
        setPreviewUrls(newPreviewUrls);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (rating === 0) {
            alert('별점을 선택해주세요.');
            return;
        }
        if (content.trim() === '') {
            alert('리뷰 내용을 입력해주세요.');
            return;
        }

        // TODO: API 호출로 리뷰 제출
        const reviewData = {
            visitId,
            visitType,
            rating,
            content,
            images
        };

        console.log('리뷰 제출:', reviewData);
        // 성공 시 리다이렉트 또는 완료 메시지 표시
    };

    const handleGoBack = () => {
        // TODO: 이전 페이지로 이동
        console.log('뒤로가기');
    };

    return (
        <div className="container p-0" style={{ maxWidth: '480px' }}>
            <div className="card">
                <div className="card-header bg-white p-3">
                    <div className="d-flex align-items-center">
                        <button
                            className="btn btn-link text-dark p-0 me-3"
                            onClick={handleGoBack}
                        >
                            <FontAwesomeIcon icon={faArrowLeft} />
                        </button>
                        <h5 className="card-title mb-0">리뷰 작성</h5>
                    </div>
                </div>
                <div className="card-body p-3">
                    <div className="mb-3">
                        <h6 className="fw-bold mb-1">{restaurantName}</h6>
                        <small className="text-muted">방문일자: {visitDate}</small>
                    </div>

                    {/* 별점 선택 */}
                    <div className="mb-4 text-center">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <button
                                key={star}
                                className="btn btn-link p-1 text-warning"
                                onMouseEnter={() => setHoverRating(star)}
                                onMouseLeave={() => setHoverRating(0)}
                                onClick={() => setRating(star)}
                            >
                                <FontAwesomeIcon
                                    icon={(hoverRating || rating) >= star ? faStarSolid : faStarRegular}
                                    size="lg"
                                />
                            </button>
                        ))}
                    </div>

                    {/* 리뷰 내용 */}
                    <div className="mb-3">
            <textarea
                className="form-control"
                rows="4"
                placeholder="음식과 서비스에 대한 솔직한 리뷰를 남겨주세요."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                maxLength={500}
            ></textarea>
                        <small className="text-muted">
                            {content.length}/500자
                        </small>
                    </div>

                    {/* 이미지 업로드 */}
                    <div className="mb-4">
                        <div className="d-flex gap-2 mb-2">
                            {previewUrls.map((url, index) => (
                                <div
                                    key={index}
                                    className="position-relative"
                                    style={{ width: '80px', height: '80px' }}
                                >
                                    <img
                                        src={url}
                                        className="border rounded"
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        alt={`Preview ${index + 1}`}
                                    />
                                    <button
                                        className="btn btn-sm btn-danger position-absolute top-0 end-0"
                                        onClick={() => removeImage(index)}
                                        style={{ padding: '2px 6px', fontSize: '12px' }}
                                    >
                                        ×
                                    </button>
                                </div>
                            ))}
                            {images.length < 5 && (
                                <label
                                    className="border rounded d-flex align-items-center justify-content-center bg-light cursor-pointer"
                                    style={{ width: '80px', height: '80px' }}
                                >
                                    <input
                                        type="file"
                                        accept="image/*"
                                        className="d-none"
                                        onChange={handleImageChange}
                                        multiple
                                    />
                                    <FontAwesomeIcon icon={faImage} className="text-secondary" />
                                </label>
                            )}
                        </div>
                        <small className="text-muted">
                            이미지는 최대 5장까지 첨부 가능합니다.
                        </small>
                    </div>

                    {/* 제출 버튼 */}
                    <button
                        className="btn btn-primary w-100"
                        onClick={handleSubmit}
                    >
                        리뷰 등록하기
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UserReviewWriteFormComponent