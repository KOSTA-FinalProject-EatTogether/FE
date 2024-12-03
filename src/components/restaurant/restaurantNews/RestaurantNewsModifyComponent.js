import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// 샘플 뉴스 데이터 (실제로는 API에서 받아올 데이터)
const SAMPLE_NEWS = {
  id: 1,
  content: "12월 24일과 25일은 성탄절로 인해 휴무입니다. 고객님들의 양해 부탁드립니다.",
  createdAt: "2024-12-01T10:00:00",
  images: ["image1.jpg", "image2.jpg"]
};

const RestaurantNewsModifyComponent = () => {
  const [newsPost, setNewsPost] = useState({
    content: '',
    images: [],
    existingImages: [] // 기존 이미지 보관
  });

  // 컴포넌트 마운트 시 데이터 로드
  useEffect(() => {
    // 실제로는 API 호출
    setNewsPost({
      content: SAMPLE_NEWS.content,
      images: [],
      existingImages: SAMPLE_NEWS.images
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('수정된 뉴스 데이터:', newsPost);
    // API 호출 및 수정 처리
  };

// handleImageChange 함수 수정
const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const totalImages = newsPost.existingImages.length + newsPost.images.length + files.length;
    
    if (totalImages > 10) {
      alert('이미지는 최대 10장까지 첨부 가능합니다.');
      return;
    }
    
    setNewsPost(prev => ({
      ...prev,
      images: [...prev.images, ...files]
    }));
  };

  const removeNewImage = (index) => {
    setNewsPost(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
  };

  const removeExistingImage = (index) => {
    setNewsPost(prev => ({
      ...prev,
      existingImages: prev.existingImages.filter((_, i) => i !== index)
    }));
  };

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="h5 mb-0">식당 소식 수정</h2>
        <a href="/owner/news" className="btn btn-outline-secondary btn-sm">
          취소
        </a>
      </div>

      <form onSubmit={handleSubmit}>
        
        <div className="mb-3">
          <label className="form-label small">내용*</label>
          <textarea
            className="form-control form-control-sm"
            rows="8"
            value={newsPost.content}
            onChange={(e) => setNewsPost(prev => ({...prev, content: e.target.value}))}
            required
          />
        </div>

        <div className="mb-3">
        {newsPost.existingImages.length > 0 && (
            <>
            <label className="form-label small">기존 이미지</label>
            <div className="d-flex flex-wrap gap-2 mb-3">
                {newsPost.existingImages.map((image, index) => (
                <div 
                    key={`existing-${index}`}
                    className="position-relative"
                    style={{ width: '80px', height: '80px' }}
                >
                    <div className="bg-light border rounded w-100 h-100" />
                    <button
                    type="button"
                    className="btn-close position-absolute top-0 end-0 m-1"
                    style={{ fontSize: '0.5rem' }}
                    onClick={() => removeExistingImage(index)}
                    />
                </div>
                ))}
            </div>
            </>
        )}

        <label className="form-label small">새 이미지 추가</label>
        <input
            type="file"
            className="form-control form-control-sm"
            accept="image/*"
            multiple
            onChange={handleImageChange}
            disabled={newsPost.existingImages.length + newsPost.images.length >= 10}
        />
        <div className="form-text small">
            {newsPost.existingImages.length + newsPost.images.length}/10장 첨부됨 
            (최대 10장까지 첨부 가능합니다)
        </div>

        {newsPost.images.length > 0 && (
            <div className="d-flex flex-wrap gap-2 mt-2">
            {newsPost.images.map((image, index) => (
                <div 
                key={`new-${index}`}
                className="position-relative"
                style={{ width: '80px', height: '80px' }}
                >
                <div className="bg-light border rounded w-100 h-100" />
                <button
                    type="button"
                    className="btn-close position-absolute top-0 end-0 m-1"
                    style={{ fontSize: '0.5rem' }}
                    onClick={() => removeNewImage(index)}
                />
                </div>
            ))}
            </div>
        )}
        </div>

        <div className="d-grid gap-2">
          <button type="submit" className="btn btn-primary btn-sm">
            수정하기
          </button>
        </div>
      </form>
    </>
  );
};

export default RestaurantNewsModifyComponent;