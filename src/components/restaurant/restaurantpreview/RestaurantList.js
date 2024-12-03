import React, { useState, useEffect, useRef, useCallback } from 'react';
import Restaurant from './Restaurant';
import 'bootstrap/dist/css/bootstrap.min.css';
import Map from './Map';
import KakaoMap from "../../common/map/KakaoMap";
import Filter from './Filter';
import {useNavigate} from "react-router-dom";

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const observer = useRef();

  const navigate = useNavigate()

  const moveToRestaurantDetail = () => {
    navigate({
      pathname: `../detail`
    })
  }

  const moveToReservationMain = () => {
    navigate({
      pathname: `../../reservation/main`
    })
  }
  const moveToQueue = () => {
    navigate({
      pathname: `../../queue/lineReservation`
    })
  }

  const dummyData = [
    {
      id: 1,
      name: '강별성수',
      rating: 4.9,
      waitingTeams: 24,
      images: ['img1.jpg', 'img2.jpg', 'img3.jpg']
    },
    {
      id: 2,
      name: '리틀넥 성수',
      rating: 4.7,
      waitingTeams: 15,
      images: ['img4.jpg', 'img5.jpg', 'img6.jpg']
    },
    {
      id: 3,
      name: '플레이버스 성수',
      rating: 4.8,
      waitingTeams: 18,
      images: ['img7.jpg', 'img8.jpg', 'img9.jpg']
    },
    {
      id: 4,
      name: '어반플랜트',
      rating: 4.6,
      waitingTeams: 10,
      images: ['img10.jpg', 'img11.jpg', 'img12.jpg']
    },
    {
      id: 5,
      name: '스시코우지',
      rating: 4.9,
      waitingTeams: 30,
      images: ['img13.jpg', 'img14.jpg', 'img15.jpg']
    },
    {
      id: 6,
      name: '디플로우',
      rating: 4.5,
      waitingTeams: 8,
      images: ['img16.jpg', 'img17.jpg', 'img18.jpg']
    },
    {
      id: 7,
      name: '차릴리',
      rating: 4.8,
      waitingTeams: 20,
      images: ['img19.jpg', 'img20.jpg', 'img21.jpg']
    },
    {
      id: 8,
      name: '미라이',
      rating: 4.7,
      waitingTeams: 12,
      images: ['img22.jpg', 'img23.jpg', 'img24.jpg']
    }
  ];

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadMoreData = async () => {
    try {
      setLoading(true);
      setError(null);

      const newRestaurants = dummyData.map((restaurant) => ({
        ...restaurant,
        id: `${page}-${restaurant.id}`
      }));

      setRestaurants(prevRestaurants => [...prevRestaurants, ...newRestaurants]);
      setHasMore(page < 3);
    } catch (err) {
      setError('데이터를 불러오는데 실패했습니다');
    } finally {
      setLoading(false);
    }
  };

  const lastRestaurantElementRef = useCallback(node => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setPage(prevPage => prevPage + 1);
      }
    });
    if (node) observer.current.observe(node);
  }, [hasMore]);

  useEffect(() => {
    loadMoreData();
  }, [page]);

  return (
      <div className="container p-2">
        <div className="sticky-top bg-white pb-2">
          <KakaoMap/>
          <Filter/>
        </div>
        <div style={{height: 'calc(100vh - 200px)', overflowY: 'auto', overflowX: 'hidden'}}>
          {restaurants.map((restaurant, index) => (
              <div key={`restaurant-${restaurant.id}`}>
                <div onClick={moveToRestaurantDetail}>
                  <Restaurant
                      restaurant={restaurant}
                      ref={restaurants.length === index + 1 ? lastRestaurantElementRef : null}
                  />
                </div>
                <div className="d-flex justify-content-end gap-2 mb-3">
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
        </div>
      </div>
  );
};

export default RestaurantList;