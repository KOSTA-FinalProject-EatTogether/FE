import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const BUSINESS_HOUR = {
    mon: "휴무일",
    tue: "오전 9시 ~ 다음날 오전 10시",
    wed: "오전 10시 ~ 오후 10시",
    thu: "휴무일",
    fri: "오전 10시 ~ 다음날 오전 10시",
    sat: "휴무일",
    sun: "오전 9시 ~ 다음날 오전 10시",
};


const BusinessHoursMonthlyComponent = () => {
    // 현재 연월 상태 관리
    const [currentDate, setCurrentDate] = useState(new Date());

    // 달력 데이터 생성
    const getDaysInMonth = (date) => {
        const year = date.getFullYear();
        const month = date.getMonth();
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const days = [];

        // 첫 주의 이전 달 날짜들 채우기
        for (let i = 0; i < firstDay.getDay(); i++) {
            days.push(null);
        }

        // 이번 달 날짜들 채우기
        for (let i = 1; i <= lastDay.getDate(); i++) {
            days.push(i);
        }

        return days;
    };

    // 이전달, 다음달 이동
    const changeMonth = (amount) => {
        const newDate = new Date(currentDate);
        newDate.setMonth(newDate.getMonth() + amount);
        setCurrentDate(newDate);
    };

    // 요일별 영업시간 가져오기
    const getBusinessHours = (dayOfWeek) => {
        const hours = {
            0: BUSINESS_HOUR.sun, // 일요일
            1: BUSINESS_HOUR.mon,
            2: BUSINESS_HOUR.tue,
            3: BUSINESS_HOUR.wed,
            4: BUSINESS_HOUR.thu,
            5: BUSINESS_HOUR.fri,
            6: BUSINESS_HOUR.sat
        };
        return hours[dayOfWeek];
    };

    const days = getDaysInMonth(currentDate);
    const monthNames = ["1월", "2월", "3월", "4월", "5월", "6월", 
                       "7월", "8월", "9월", "10월", "11월", "12월"];

    return (
        <div className="container mt-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <button 
                    className="btn btn-outline-primary" 
                    onClick={() => changeMonth(-1)}
                >
                    이전달
                </button>
                <h2>{currentDate.getFullYear()}년 {monthNames[currentDate.getMonth()]}</h2>
                <button 
                    className="btn btn-outline-primary" 
                    onClick={() => changeMonth(1)}
                >
                    다음달
                </button>
            </div>

            <div className="table-responsive">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>일</th>
                            <th>월</th>
                            <th>화</th>
                            <th>수</th>
                            <th>목</th>
                            <th>금</th>
                            <th>토</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array(Math.ceil(days.length / 7)).fill().map((_, weekIndex) => (
                            <tr key={weekIndex}>
                                {days.slice(weekIndex * 7, (weekIndex + 1) * 7).map((day, dayIndex) => {
                                    const actualDayOfWeek = (dayIndex) % 7;
                                    const businessHours = getBusinessHours(actualDayOfWeek);
                                    
                                    return (
                                        <td key={dayIndex} className="position-relative" style={{height: '120px'}}>
                                            {day && (
                                                <>
                                                    <div className="fw-bold mb-1">{day}</div>
                                                    <small className="text-muted d-block">
                                                        {businessHours}
                                                    </small>
                                                </>
                                            )}
                                        </td>
                                    );
                                })}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BusinessHoursMonthlyComponent;