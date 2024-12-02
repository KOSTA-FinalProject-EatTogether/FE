import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const SAMPLE_NEWS = [
  {
    id: 1,
    title: "12월 휴무 안내",
    content: "12월 24일과 25일은 성탄절로 인해 휴무입니다. 고객님들의 양해 부탁드립니다.",
    createdAt: "2024-12-01T10:00:00",
    startDate: "2024-12-01",
    endDate: "2024-12-25",
    isImportant: true,
    images: []
  },
  {
    id: 2,
    title: "신메뉴 출시 안내",
    content: "12월부터 겨울 특선 메뉴가 출시됩니다. 많은 관심 부탁드립니다.",
    createdAt: "2024-11-28T15:00:00",
    startDate: "2024-12-01",
    endDate: "2025-02-28",
    isImportant: false,
    images: ["menu1.jpg", "menu2.jpg"]
  }
];

const RestaurantNewsListComponent = () => {
  const [news, setNews] = useState(SAMPLE_NEWS);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  const deleteNews = (id) => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      setNews(prev => prev.filter(item => item.id !== id));
    }
  };

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="h5 mb-0">식당 소식</h2>
        <a 
          href="/owner/newsadd" 
          className="btn btn-primary btn-sm"
        >
          소식 작성
        </a>
      </div>

      {news.length === 0 ? (
        <div className="text-center text-muted py-5">
          등록된 소식이 없습니다.
        </div>
      ) : (
        <div className="d-flex flex-column gap-3">
          {news
            .sort((a, b) => {
              // 중요 공지를 먼저 정렬
              if (a.isImportant !== b.isImportant) {
                return b.isImportant ? 1 : -1;
              }
              // 그 다음 최신순 정렬
              return new Date(b.createdAt) - new Date(a.createdAt);
            })
            .map(item => (
              <div key={item.id} className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    
                    <small className="text-muted">
                      {formatDate(item.createdAt)}
                    </small>
                  </div>

                  <p className="card-text small mb-3" style={{ whiteSpace: 'pre-line' }}>
                    {item.content}
                  </p>

                  {item.images.length > 0 && (
                    <div className="d-flex gap-2 mb-3">
                      {item.images.map((image, index) => (
                        <div
                          key={index}
                          className="bg-light rounded"
                          style={{
                            width: '80px',
                            height: '80px'
                          }}
                        />
                      ))}
                    </div>
                  )}

                  <div className="d-flex gap-2">
                    <a 
                      href={`/owner/newsmodify/${item.id}`}
                      className="btn btn-outline-primary btn-sm"
                    >
                      수정
                    </a>
                    <button 
                      className="btn btn-outline-danger btn-sm"
                      onClick={() => deleteNews(item.id)}
                    >
                      삭제
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      )}
    </>
  );
};

export default RestaurantNewsListComponent;