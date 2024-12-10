import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Restaurant from './Restaurant';
import 'bootstrap/dist/css/bootstrap.min.css';
import KakaoMap from "../../common/map/KakaoMap";
import Filter from './Filter';
import { getRestaurantsByCategory } from '../../../api/api';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const RestaurantList = () => {
  const query = useQuery();
  const categoryName = query.get('categoryName');
  const [restaurants, setRestaurants] = useState([]);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const observer = useRef();
  const navigate = useNavigate();

  const moveToRestaurantDetail = (rsId) => {
    navigate(`/restaurant/detail/${rsId}`);
  };

  const moveToReservationMain = () => {
    navigate('/reservation/main');
  };

  const moveToQueue = () => {
    navigate('/queue/lineReservation');
  };

  const loadMoreData = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await getRestaurantsByCategory(categoryName, page);
      const newRestaurants = response.data.map(restaurant => ({
        rsId: restaurant.rsId,
        name: restaurant.rsName,
        phone: restaurant.rsPhone,
        park: restaurant.rsPark,
        time: restaurant.rsTime,
        state: restaurant.rsState,
        reviewCount: restaurant.rsReviewCount,
        bookmarkCount: restaurant.rsBookmarkCount,
        rating: restaurant.rsAvgRate,
        reservationCount: restaurant.rsReservationCount,
        waitingTeams: restaurant.waitingTeams || 0,
        images: restaurant.images || []
      }));

      setRestaurants(prevRestaurants => [...prevRestaurants, ...newRestaurants]);
      setHasMore(newRestaurants.length === 10); // 10개 단위로 가져올 때만 hasMore를 true로 설정
    } catch (err) {
      console.error('데이터를 불러오는데 실패했습니다:', err);
      setError('데이터를 불러오는데 실패했습니다');
    } finally {
      setLoading(false);
    }
  };

  const lastRestaurantElementRef = useCallback(node => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore && !loading) {
        setPage(prevPage => prevPage + 1);
      }
    });
    if (node) observer.current.observe(node);
  }, [hasMore, loading]);

  useEffect(() => {
    loadMoreData();
  }, [page]);

  return (
    <div className="container p-2">
      <div className="sticky-top bg-white pb-2">
        <KakaoMap />
        <Filter />
      </div>
      <div style={{ height: 'calc(100vh - 200px)', overflowY: 'auto', overflowX: 'hidden' }}>
        {restaurants.map((restaurant, index) => (
          <div key={`restaurant-${restaurant.rsId}-${index}`} className="mb-4">
            <div onClick={() => moveToRestaurantDetail(restaurant.rsId)} className="card p-3">
              <Restaurant
                restaurant={restaurant}
                ref={restaurants.length === index + 1 ? lastRestaurantElementRef : null}
              />
            </div>
            <div className="d-flex justify-content-end gap-2 mt-2">
              <button
                className="btn btn-primary"
                style={{
                  backgroundColor: '#FF7F50',
                  borderColor: '#FF7F50',
                  padding: '8px 16px',
                  fontSize: '14px'
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  moveToQueue();
                  console.log('줄서기 clicked for', restaurant.name);
                }}
              >
                줄서기
              </button>
              <button
                className="btn btn-primary"
                style={{
                  backgroundColor: '#4169E1',
                  borderColor: '#4169E1',
                  padding: '8px 16px',
                  fontSize: '14px'
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  moveToReservationMain();
                  console.log('예약 clicked for', restaurant.name);
                }}
              >
                예약
              </button>
            </div>
          </div>
        ))}
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
      </div>
    </div>
  );
};

export default RestaurantList;
