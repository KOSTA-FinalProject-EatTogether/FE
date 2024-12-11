import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Restaurant from './Restaurant';
import KakaoMap from "../../common/map/KakaoMap";
import Filter from './Filter';
import { getRestaurantsByCategory } from '../../../api/api';
import ReservationModal from '../../reservations/ReservationModal';

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
    const [showModal, setShowModal] = useState(false);
    const [selectedRestaurant, setSelectedRestaurant] = useState(null);

    const moveToRestaurantDetail = (id) => {
        navigate(`/restaurant/${id}`);
    };

    const moveToReservationMain = () => {
        navigate('/reservation/main');
    };

    const handleReservationSubmit = (reservationData) => {
        console.log('Reservation submitted:', {
            restaurant: selectedRestaurant,
            ...reservationData
        });
        setShowModal(false);
        // 선택한 데이터를 state로 전달하면서 페이지 이동
        navigate('/reservation/confirm', {
            state: {
                restaurant: selectedRestaurant,
                ...reservationData
            }
        });
    };

    const moveToQueue = () => {
        navigate('/queue/lineReservation');
    };

    const handleClose = () => {
        setShowModal(false);
    };


    const loadMoreData = async () => {
        try {
            setLoading(true);
            setError(null);

            const response = await getRestaurantsByCategory(categoryName, page);
            const newRestaurants = response.data.map(restaurant => ({
                id: restaurant.rsId,
                rsId : restaurant.rsId,
                name: restaurant.rsName,
                rating: restaurant.rsAvgRate,
                waitingTeams: restaurant.waitingTeams || 0,
                images: restaurant.images || []
            }));

            setRestaurants(prevRestaurants => [...prevRestaurants, ...newRestaurants]);
            setHasMore(newRestaurants.length === 10);
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
        <>
            <div className="w-full">
                <div className="sticky top-0 bg-white pb-2 z-50">
                    <KakaoMap />
                    <Filter />
                </div>

                <div className="h-[calc(100vh-350px)] overflow-y-auto">
                    {restaurants.map((restaurant, index) => (
                        <div key={`restaurant-${restaurant.id}`} className="mb-4">
                            <div
                                onClick={() => moveToRestaurantDetail(restaurant.id)}
                                className="bg-white rounded-lg shadow-sm p-4 cursor-pointer hover:shadow-md transition-shadow duration-200"
                            >
                                <Restaurant
                                    restaurant={restaurant}
                                    ref={restaurants.length === index + 1 ? lastRestaurantElementRef : null}
                                />
                            </div>
                            <div className="flex justify-end gap-2 mt-2">
                                <button
                                    className="px-4 py-2 text-sm font-medium text-white bg-[#FF7F50] hover:bg-[#FF6B3D] rounded-md transition-colors duration-200"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        moveToQueue();
                                    }}
                                >
                                    줄서기
                                </button>
                                <button
                                    className="px-4 py-2 text-sm font-medium text-white bg-[#4169E1] hover:bg-[#3154B4] rounded-md transition-colors duration-200"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setSelectedRestaurant(restaurant);
                                        setShowModal(true);
                                    }}
                                >
                                    예약
                                </button>
                            </div>
                        </div>
                    ))}

                    {loading && (
                        <div className="text-center py-4">
                            <p className="text-gray-600">Loading...</p>
                        </div>
                    )}
                    {error && (
                        <div className="text-center py-4">
                            <p className="text-red-500">{error}</p>
                        </div>
                    )}
                </div>
            </div>

            <ReservationModal
                show={showModal}
                onClose={() =>setShowModal(false)}
                restaurantName={selectedRestaurant?.name}
                onSubmit={handleReservationSubmit}
            />
        </>
    );
};

export default RestaurantList;