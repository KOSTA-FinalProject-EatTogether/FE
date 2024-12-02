// ReservationList.js
import React, { useState } from 'react';
import Calendar from '../common/Calendar';

const ReservationMainComponent = () => {
    const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
    const [reservations, setReservations] = useState([
        {
            id: 1,
            date: '2024-12-10',
            time: '12:00',
            name: '홍길동',
            guests: 4
        }
        // ... 더 많은 예약 데이터
    ]);

    const filteredReservations = reservations.filter(
        reservation => reservation.date === selectedDate
    );

    return (
        <div>
            <Calendar 
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
                reservations={reservations}
            />
            
            <div className="card mt-3">
                <div className="card-body">
                    <h3 className="h6 mb-3">
                        {new Date(selectedDate).toLocaleDateString('ko-KR', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                        })} 예약 목록
                    </h3>
                    {filteredReservations.length > 0 ? (
                        <div className="table-responsive">
                            <table className="table table-sm">
                                <thead>
                                    <tr>
                                        <th>시간</th>
                                        <th>예약자</th>
                                        <th>인원</th>
                                        <th>관리</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredReservations.map(reservation => (
                                        <tr key={reservation.id}>
                                            <td>{reservation.time}</td>
                                            <td>{reservation.name}</td>
                                            <td>{reservation.guests}명</td>
                                            <td>
                                                <button className="btn btn-outline-primary btn-sm me-1">
                                                    수정
                                                </button>
                                                <button className="btn btn-outline-danger btn-sm">
                                                    취소
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <p className="text-center text-muted">예약이 없습니다.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ReservationMainComponent;