import React, { useState } from 'react';
import '../../../css/RestaurantManageCss/RestaurantManagingToConsumer.css'; // CSS 파일 경로를 실제 경로로 변경하세요

const RestaurantManagingToConsumer = () => {
    const [reservations, setReservations] = useState([
        { id: 1, info: '예약 정보 1' },
        { id: 2, info: '예약 정보 2' },
        { id: 3, info: '예약 정보 3' },
        // 필요한 만큼 예약 정보를 추가하세요
    ]);

    const handleChangeStatus = (id) => {
        // 예약 상태 변경 로직을 여기에 구현할 수 있습니다.
        alert(`예약 상태를 변경합니다: ${id}`);
    };

    return (
        <div className="managing_to_consumer_container">
            <div className="header_buttons">
                <button className="header_button">예약 관리</button>
                <button className="header_button">줄서기 관리</button>
            </div>
            {reservations.map((reservation) => (
                <div key={reservation.id} className="managing_to_consumer_section">
                    <div className="reservation_info">{reservation.info}</div>
                    <button
                        className="reservation_status_button"
                        onClick={() => handleChangeStatus(reservation.id)}
                    >
                        예약상태 변경
                    </button>
                </div>
            ))}
        </div>
    );
};

export default RestaurantManagingToConsumer;
