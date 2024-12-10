import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {getReservations} from "../../api/reservationApi";

const ReservationList = () => {
    const [reservations, setReservations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchReservations = async () => {
            try {
                const data = await getReservations();
                setReservations(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchReservations();
    }, []);

    if (loading) {
        return (
            <div className="d-flex justify-content-center p-4">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="alert alert-danger m-4" role="alert">
                {error}
            </div>
        );
    }

    return (
        <div className="container mt-4">
            <div className="card">
                <div className="card-header">
                    <h3 className="card-title fs-5">예약 목록</h3>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-striped table-hover small">
                            <thead>
                            <tr>
                                <th scope="col">예약 ID</th>
                                <th scope="col">예약식당</th>
                                <th scope="col">고객명</th>
                                <th scope="col">예약 날짜</th>
                                <th scope="col">상태</th>
                                <th scope="col">작업</th>
                            </tr>
                            </thead>
                            <tbody>
                            {reservations.map((reservation) => (
                                <tr key={reservation.rsReservationId}>
                                    <td>{reservation.rsReservationId}</td>
                                    <td>{reservation.rsName}</td>
                                    <td>{reservation.userName}</td>
                                    <td>{new Date(reservation.rsReservationTime).toLocaleString('ko-KR', {
                                        year: 'numeric',
                                        month: '2-digit',
                                        day: '2-digit',
                                        hour: '2-digit',
                                        minute: '2-digit',
                                        hour12: false // 24시간 형식으로 표시
                                    })}</td>
                                    <td>
                      <span className={`badge ${
                          reservation.status === 'APPROVED' ? 'bg-success' :
                              reservation.status === 'PENDING' ? 'bg-warning' :
                                  'bg-secondary'
                      }`}>
                        {reservation.status}
                      </span>
                                    </td>
                                    <td>
                                        <button className="btn btn-sm btn-primary me-2">상세</button>
                                        <button className="btn btn-sm btn-danger">취소</button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReservationList;