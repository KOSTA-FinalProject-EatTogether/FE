import React, { useState } from 'react';
import '../../css/RestaurantManageCss/RestaurantManagingToConsumer.css'; // CSS 파일 경로를 실제 경로로 변경하세요

const RestaurantManagingToQueue = () => {
    const [reservations, setReservations] = useState([
        { id: 1, info: '예약 정보 1', status: '대기' },
        { id: 2, info: '예약 정보 2', status: '대기' },
        { id: 3, info: '예약 정보 3', status: '대기' },
        // 필요한 만큼 예약 정보를 추가하세요
    ]);

    const handleChangeStatus = (id, newStatus) => {
        setReservations(prevReservations =>
            prevReservations.map(reservation =>
                reservation.id === id ? { ...reservation, status: newStatus } : reservation
            )
        );
        alert(`예약 상태를 변경합니다: ${id} - ${newStatus}`);
    };

    return (
        <div className="managing_to_consumer_container">
            <div className="restaurant_details_title"><h2>예약 상태 변경</h2></div>
            {reservations.map((reservation) => (
                <div key={reservation.id} className="managing_to_consumer_section">
                    <div className="reservation_info">{reservation.info}</div>
                    <div className="reservation_status">현재 상태: {reservation.status}</div>
                    <button
                        className="reservation_status_button"
                        onClick={() => handleChangeStatus(reservation.id, '예약')}
                    >
                        예약
                    </button>
                    <button
                        className="reservation_status_button"
                        onClick={() => handleChangeStatus(reservation.id, '취소')}
                    >
                        취소
                    </button>
                    <button
                        className="reservation_status_button"
                        onClick={() => handleChangeStatus(reservation.id, '대기')}
                    >
                        대기
                    </button>
                </div>
            ))}
        </div>
    );
};

export default RestaurantManagingToQueue;
