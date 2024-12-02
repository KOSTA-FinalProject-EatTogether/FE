import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const RestaurantNewsAddComponent = () => {
  const [newsPost, setNewsPost] = useState({
    title: '',
    content: '',
    images: [],
    isImportant: false,
    startDate: '',
    endDate: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('뉴스 포스트 데이터:', newsPost);
  };

  
    // handleImageChange 함수 수정
    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        const totalImages = newsPost.images.length + files.length;
        
        if (totalImages > 10) {
        alert('이미지는 최대 10장까지 첨부 가능합니다.');
        return;
        }
        
        setNewsPost(prev => ({
        ...prev,
        images: [...prev.images, ...files]
        }));
    };

  const removeImage = (index) => {
    setNewsPost(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
  };

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="h5 mb-0">식당 소식 작성</h2>
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
        <label className="form-label small">이미지 첨부</label>
        <input
            type="file"
            className="form-control form-control-sm"
            accept="image/*"
            multiple
            onChange={handleImageChange}
            disabled={newsPost.images.length >= 10}
        />
        <div className="form-text small">
            {newsPost.images.length}/10장 첨부됨 (최대 10장까지 첨부 가능합니다)
        </div>

        {newsPost.images.length > 0 && (
            <div className="d-flex flex-wrap gap-2 mt-2">
            {newsPost.images.map((image, index) => (
                <div 
                key={index} 
                className="position-relative"
                style={{ width: '80px', height: '80px' }}
                >
                <div className="bg-light border rounded w-100 h-100" />
                <button
                    type="button"
                    className="btn-close position-absolute top-0 end-0 m-1"
                    style={{ fontSize: '0.5rem' }}
                    onClick={() => removeImage(index)}
                />
                </div>
            ))}
            </div>
        )}
        </div>


        <div className="d-grid gap-2">
          <button type="submit" className="btn btn-primary btn-sm">
            등록하기
          </button>
        </div>
      </form>
    </>
  );
};

export default RestaurantNewsAddComponent;