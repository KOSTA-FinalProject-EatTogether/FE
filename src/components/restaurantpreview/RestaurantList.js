import React, { useState, useEffect, useRef, useCallback } from 'react';
import Restaurant from './Restaurant';
import 'bootstrap/dist/css/bootstrap.min.css';
import Map from './Map';
import KakaoMapComponent from "../../components/map/KakaoMapComponent";
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

  const loadMoreData = () => {
    const newRestaurants = dummyData.map((restaurant, index) => ({
      ...restaurant,
      id: restaurant.id + page * dummyData.length
    }));
    setRestaurants(prevRestaurants => [...prevRestaurants, ...newRestaurants]);
    setHasMore(newRestaurants.length > 0);
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
          <KakaoMapComponent/>
          <Filter/>
        </div>
        <div style={{height: 'calc(100vh - 200px)', overflowY: 'auto', overflowX: 'hidden',cursor: 'pointer'}} onClick={moveToRestaurantDetail}
        >
          {restaurants.map((restaurant, index) => (
              <Restaurant
                  key={restaurant.id}
                  restaurant={restaurant}
                  ref={restaurants.length === index + 1 ? lastRestaurantElementRef : null}
              />
          ))}
        </div>
      </div>


  )
      ;
};

export default RestaurantList;