import React, { useState, useRef } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

// Calendar component
const Calendar = ({ selectedDate, onDateSelect }) => {
    const [currentDate, setCurrentDate] = useState(new Date());

    const daysInMonth = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        0
    ).getDate();

    const firstDayOfMonth = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        1
    ).getDay();

    const monthNames = [
        "1월", "2월", "3월", "4월", "5월", "6월",
        "7월", "8월", "9월", "10월", "11월", "12월"
    ];

    const prevMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
    };

    const nextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
    };

    const isToday = (date) => {
        const today = new Date();
        return date.toDateString() === today.toDateString();
    };

    const isSelected = (date) => {
        return selectedDate && date.toDateString() === new Date(selectedDate).toDateString();
    };

    const isPastDate = (date) => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return date < today;
    };

    const handleDateClick = (date) => {
        if (!isPastDate(date)) {
            // 로컬 시간 기준으로 처리
            const year = date.getFullYear();
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const day = String(date.getDate()).padStart(2, '0');
            onDateSelect(`${year}-${month}-${day}`);
        }
    };

    return (
        <div className="w-full">
            <div className="flex justify-between items-center mb-4">
                <button
                    onClick={prevMonth}
                    className="p-1 hover:bg-gray-100 rounded-full"
                >
                    <ChevronLeft className="w-5 h-5" />
                </button>
                <h3 className="font-medium">
                    {currentDate.getFullYear()}년 {monthNames[currentDate.getMonth()]}
                </h3>
                <button
                    onClick={nextMonth}
                    className="p-1 hover:bg-gray-100 rounded-full"
                >
                    <ChevronRight className="w-5 h-5" />
                </button>
            </div>

            <div className="grid grid-cols-7 gap-1 text-center text-sm mb-2">
                {['일', '월', '화', '수', '목', '금', '토'].map(day => (
                    <div key={day} className="font-medium">{day}</div>
                ))}
            </div>

            <div className="grid grid-cols-7 gap-1">
                {[...Array(firstDayOfMonth)].map((_, index) => (
                    <div key={`empty-${index}`} className="p-2"></div>
                ))}

                {[...Array(daysInMonth)].map((_, index) => {
                    const date = new Date(
                        currentDate.getFullYear(),
                        currentDate.getMonth(),
                        index + 1
                    );
                    const isDisabled = isPastDate(date);

                    return (
                        <button
                            key={index}
                            type="button"
                            onClick={() => handleDateClick(date)}
                            disabled={isDisabled}
                            className={`
                                p-2 rounded-full text-sm
                                ${isDisabled ? 'text-gray-300 cursor-not-allowed' : 'hover:bg-gray-100'}
                                ${isToday(date) ? 'border border-blue-500' : ''}
                                ${isSelected(date) ? 'bg-blue-500 text-white hover:bg-blue-600' : ''}
                              `}
                        >
                            {index + 1}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

const TimeSelector = ({ selectedTime, onTimeSelect }) => {
    const scrollRef = useRef(null);

    const times = Array.from({ length: 28 }, (_, i) => {
        const hour = Math.floor(i / 2) + 11;
        const minute = i % 2 === 0 ? '00' : '30';
        return `${hour}:${minute}`;
    });

    const scroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = 200;
            scrollRef.current.scrollLeft += direction * scrollAmount;
        }
    };

    return (
        <div className="relative w-full">
            <button
                onClick={() => scroll(-1)}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-1 rounded-full shadow-md hover:bg-gray-100"
            >
                <ChevronLeft className="w-5 h-5" />
            </button>

            <div
                ref={scrollRef}
                className="flex gap-2 overflow-hidden px-8 py-2"
                style={{
                    scrollBehavior: 'smooth',
                    msOverflowStyle: 'none',
                    scrollbarWidth: 'none'
                }}
            >
                {times.map((time) => (
                    <button
                        key={time}
                        type="button"
                        onClick={() => onTimeSelect(time)}
                        className={`
              flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium
              transition-colors duration-200 min-w-[80px]
              ${selectedTime === time
                            ? 'bg-blue-500 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }
            `}
                    >
                        {time}
                    </button>
                ))}
            </div>

            <button
                onClick={() => scroll(1)}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-1 rounded-full shadow-md hover:bg-gray-100"
            >
                <ChevronRight className="w-5 h-5" />
            </button>
        </div>
    );
};


const RestaurantModal = ({ show, onClose, restaurantName, onSubmit }) => {
    const [formData, setFormData] = useState({
        people: 2,
        date: '',
        time: ''
    });
    const [validationMessage, setValidationMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.date || !formData.time) {
            setValidationMessage('날짜와 시간을 모두 선택해주세요.');
            return;
        }
        setValidationMessage('');
        onSubmit(formData);
        onClose(); // Only close the modal after successful form submission
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        setValidationMessage('');
    };

    const handleDateSelect = (date) => {
        console.log('Date selected:', date);
        console.log('Current show status:', show);
        setFormData(prev => ({
            ...prev,
            date: date
        }));
        setValidationMessage('');
    };

    const handleTimeSelect = (time) => {
        console.log('Time selected:', time);
        console.log('Current show status:', show);
        setFormData(prev => ({
            ...prev,
            time: time
        }));
        setValidationMessage('');
    };

    console.log('Modal rendering. Show status:', show);
    if (!show) return null;

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={(e) => {
                if (e.target === e.currentTarget) {
                    onClose();
                }
            }}
        >
            <div
                className="bg-white rounded-lg w-full max-w-md mx-4"
                onClick={e => e.stopPropagation()}
            >
                <div className="flex justify-between items-center p-4 border-b">
                    <h2 className="text-lg font-semibold">
                        {restaurantName ? `${restaurantName} 예약` : '식당 예약'}
                    </h2>
                    <button
                        onClick={onClose}
                        className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-4 space-y-4">
                    {validationMessage && (
                        <div className="bg-blue-50 text-blue-600 px-4 py-2 rounded-md text-sm">
                            {validationMessage}
                        </div>
                    )}

                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                            예약 인원
                        </label>
                        <select
                            name="people"
                            value={formData.people}
                            onChange={handleChange}
                            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        >
                            {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                                <option key={num} value={num}>
                                    {num}명
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                            예약 날짜
                        </label>
                        <Calendar
                            selectedDate={formData.date}
                            onDateSelect={handleDateSelect}
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                            예약 시간
                        </label>
                        <TimeSelector
                            selectedTime={formData.time}
                            onTimeSelect={handleTimeSelect}
                        />
                    </div>

                    <div className="flex gap-2 pt-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="flex-1 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors duration-200"
                        >
                            취소
                        </button>
                        <button
                            type="submit"
                            className="flex-1 px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors duration-200"
                        >
                            예약하기
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RestaurantModal;