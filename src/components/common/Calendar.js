// Calendar.js
import React, { useState } from 'react';

const Calendar = ({ selectedDate, setSelectedDate, reservations = [] }) => {
    const renderHeader = () => {
        const today = new Date(selectedDate);
        
        return (
            <div className="d-flex justify-content-between align-items-center mb-3">
                <span>{today.getFullYear()}년 {today.getMonth() + 1}월</span>
                <div>
                    <button 
                        className="btn btn-sm btn-outline-secondary"
                        onClick={() => {
                            const newDate = new Date(today);
                            newDate.setMonth(newDate.getMonth() - 1);
                            setSelectedDate(newDate.toISOString().split('T')[0]);
                        }}
                    >
                        ◀
                    </button>
                    <button 
                        className="btn btn-sm btn-outline-secondary ms-1"
                        onClick={() => {
                            const newDate = new Date(today);
                            newDate.setMonth(newDate.getMonth() + 1);
                            setSelectedDate(newDate.toISOString().split('T')[0]);
                        }}
                    >
                        ▶
                    </button>
                </div>
            </div>
        );
    };

    const today = new Date(selectedDate);
    const firstDay = new Date(today.getFullYear(), today.getMonth(), 1);
    const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0);
    
    const days = [];
    const startDay = firstDay.getDay();
    
    for (let i = 0; i < startDay; i++) {
        days.push(null);
    }
    
    for (let i = 1; i <= lastDay.getDate(); i++) {
        days.push(new Date(today.getFullYear(), today.getMonth(), i));
    }

    return (
        <div className="card">
            <div className="card-body p-2">
                {renderHeader()}
                <div 
                    className="d-grid" 
                    style={{ 
                        gridTemplateColumns: 'repeat(7, 1fr)',
                        gap: '2px',
                        fontSize: '0.8rem'
                    }}
                >
                    {['일', '월', '화', '수', '목', '금', '토'].map(day => (
                        <div key={day} className="text-center py-1">{day}</div>
                    ))}
                    {days.map((date, index) => (
                        <div key={index} className="text-center">
                            {date && (
                                <button
                                    className={`btn btn-sm p-0 w-100 position-relative ${
                                        date.toISOString().split('T')[0] === selectedDate 
                                            ? 'btn-primary' 
                                            : 'btn-light'
                                    }`}
                                    style={{ height: '28px' }}
                                    onClick={() => setSelectedDate(date.toISOString().split('T')[0])}
                                >
                                    {date.getDate()}
                                    {reservations.some(r => r.date === date.toISOString().split('T')[0]) && (
                                        <span className="position-absolute top-0 end-0 p-1">
                                            <span 
                                                className="bg-danger rounded-circle d-block"
                                                style={{ width: '4px', height: '4px' }}
                                            />
                                        </span>
                                    )}
                                </button>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Calendar;