import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import TimeSlots from '../common/TimeSlots';
import Calendar from '../common/Calendar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import ReservationConfirmDialog from './ReservationConfirmDialog';
import {useNavigate} from "react-router-dom";

const ReservationMainComponent = () => {
    const [showModal, setShowModal] = useState(false);
    const [showConfirmDialog, setShowConfirmDialog] = useState(false);  // 이 줄 추가
    const dialogRef = useRef(null);
    const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
    const [reservationData, setReservationData] = useState({
        guests: 1,
        date: selectedDate,
        time: ''
    });
 
    const settings = {
        businessHours: {
            start: '10:00',
            end: '22:00'
        },
        interval: 30
    };
 
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setReservationData(prev => ({
            ...prev,
            [name]: value
        }));
    };
 
    const handleTimeSelect = (time) => {
        setReservationData(prev => ({
            ...prev,
            time: time
        }));
    };

    const navigate = useNavigate();

        ;
    const handleSubmit = () => {
        navigate('../payment');
        console.log('Reservation Data:', reservationData);
    };
 
    const closeModal = () => {
        dialogRef.current.close();
        setShowModal(false);
    };
 
    const handleReservation = () => {
        handleSubmit();
        closeModal();
        setShowConfirmDialog(true);
    };
 
    return (
        <div className="container mt-5">
            <div className="text-center">
                <button 
                    className="btn btn-primary btn-lg"
                    onClick={() => {
                        setShowModal(true);
                        dialogRef.current.showModal();
                    }}
                >
                    예약하기
                </button>
            </div>
 
            <dialog 
                ref={dialogRef}
                className="p-0 rounded"
                style={{ 
                    width: '100%', 
                    maxWidth: '500px',
                    border: 'none'
                }}
                onClick={(e) => {
                    if (e.target === dialogRef.current) {
                        closeModal();
                    }
                }}
            >
                {showModal && (
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">예약하기</h5>
                            <button 
                                type="button" 
                                className="btn-close"
                                onClick={closeModal}
                            ></button>
                        </div>
                        <div className="modal-body">
                            <div className="mb-3">
                                <label className="form-label">예약 인원</label>
                                <select 
                                    className="form-select"
                                    name="guests"
                                    value={reservationData.guests}
                                    onChange={handleInputChange}
                                >
                                    {[...Array(10)].map((_, i) => (
                                        <option key={i + 1} value={i + 1}>
                                            {i + 1}명
                                        </option>
                                    ))}
                                </select>
                            </div>
 
                            <div className="mb-3">
                                <Calendar 
                                    selectedDate={selectedDate}
                                    setSelectedDate={(date) => {
                                        setSelectedDate(date);
                                        setReservationData(prev => ({
                                            ...prev,
                                            date: date
                                        }));
                                    }}
                                    reservations={[]}
                                />
                            </div>
 
                            <div className="mb-3">
                                <label className="form-label">방문 시간</label>
                                <TimeSlots 
                                    selectedTime={reservationData.time}
                                    onTimeSelect={handleTimeSelect}
                                    settings={settings}
                                />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button 
                                type="button" 
                                className="btn btn-secondary"
                                onClick={closeModal}
                            >
                                취소
                            </button>
                            <button 
                                type="button" 
                                className="btn btn-primary"
                                onClick={handleReservation}
                            >
                                예약하기
                            </button>
                        </div>
                    </div>
                )}
            </dialog>
 
            <ReservationConfirmDialog 
                isOpen={showConfirmDialog}
                onClose={() => setShowConfirmDialog(false)}
                reservationData={{
                    date: selectedDate,
                    time: reservationData.time,
                    guests: reservationData.guests
                }}
            />
        </div>
    );
 };

 export default ReservationMainComponent