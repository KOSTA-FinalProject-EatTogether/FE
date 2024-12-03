import Calendar from "../../common/Calendar";
import React, {useState} from "react";

const ReservationCalendarComponent = () =>{
    const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
    const [reservations, setReservations] = useState([
        {
            id: 1,
            date: '2024-12-10',
            time: '12:00',
            name: '홍길동',
            guests: 4
        },
        {
            id: 2,
            date: '2024-12-10',
            time: '13:30',
            name: '김영희',
            guests: 2
        },
        {
            id: 3,
            date: '2024-12-10',
            time: '18:00',
            name: '이철수',
            guests: 6
        },
        {
            id: 4,
            date: '2024-12-11',
            time: '11:30',
            name: '박민지',
            guests: 3
        },
        {
            id: 5,
            date: '2024-12-11',
            time: '19:00',
            name: '정수진',
            guests: 5
        },
        {
            id: 6,
            date: '2024-12-12',
            time: '12:30',
            name: '강동원',
            guests: 2
        },
        {
            id: 7,
            date: '2024-12-12',
            time: '17:30',
            name: '최예린',
            guests: 4
        },
        {
            id: 8,
            date: '2024-12-13',
            time: '13:00',
            name: '송미란',
            guests: 8
        },
        {
            id: 9,
            date: '2024-12-13',
            time: '20:00',
            name: '윤재호',
            guests: 2
        },
        {
            id: 10,
            date: '2024-12-14',
            time: '18:30',
            name: '백지원',
            guests: 3
        }
    ]);

    const filteredReservations = reservations.filter(
        reservation => reservation.date === selectedDate
    );

    return(
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
    )
}

export default ReservationCalendarComponent

