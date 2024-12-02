// TimeSlots.js
import { useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ChevronLeft, ChevronRight } from 'react-bootstrap-icons';


const TimeSlots = ({ selectedTime, onTimeSelect, settings }) => {
    const scrollContainerRef = useRef(null);

    const generateTimeSlots = () => {
        const slots = [];
        const start = settings.businessHours.start.split(':').map(Number);
        const end = settings.businessHours.end.split(':').map(Number);

        let current = new Date();
        current.setHours(start[0], start[1], 0);

        const endTime = new Date();
        endTime.setHours(end[0], end[1], 0);

        while (current < endTime) {
            slots.push(current.toLocaleTimeString('ko-KR', {
                hour: '2-digit',
                minute: '2-digit',
                hour12: false
            }));
            current = new Date(current.getTime() + settings.interval * 60000);
        }

        return slots;
    };

    const handleScroll = (direction, e) => {
        // 이벤트 버블링 방지
        e.stopPropagation();
        
        if (scrollContainerRef.current) {
            const scrollAmount = 200;
            const newScrollLeft = scrollContainerRef.current.scrollLeft + (direction === 'right' ? scrollAmount : -scrollAmount);
            scrollContainerRef.current.scrollTo({
                left: newScrollLeft,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="card">
            <div className="card-body">
                <h6 className="card-title mb-3">예약 가능 시간대</h6>
                <div className="position-relative">
                    {/* 좌우 스크롤 버튼 */}
                    <button
                        className="btn position-absolute start-0 top-50 translate-middle-y z-1"
                        onClick={(e) => handleScroll('left', e)}
                        style={{
                            width: '32px',
                            height: '32px',
                            borderRadius: '50%',
                            marginLeft: '-8px',
                            background: 'white',
                            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                            border: '1px solid #dee2e6',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: 0,
                            fontSize: '14px',
                            color: '#495057'
                        }}
                    >
                        <i className="bi bi-chevron-left"></i>
                    </button>
                    <button
                        className="btn position-absolute end-0 top-50 translate-middle-y z-1"
                        onClick={(e) => handleScroll('right', e)}
                        style={{
                            width: '32px',
                            height: '32px',
                            borderRadius: '50%',
                            marginRight: '-8px',
                            background: 'white',
                            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                            border: '1px solid #dee2e6',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: 0,
                            fontSize: '14px',
                            color: '#495057'
                        }}
                    >
                        <i className="bi bi-chevron-right"></i>
                    </button>

                    {/* 시간슬롯 컨테이너 */}
                    <div
                        ref={scrollContainerRef}
                        className="d-flex gap-1 px-4"
                        style={{
                            overflowX: 'hidden',
                            scrollBehavior: 'smooth',
                            maxWidth: '480px',
                            margin: '0 auto'
                        }}
                    >
                        {generateTimeSlots().map((time, index) => (
                            <button
                                key={index}
                                className={`badge ${selectedTime === time ? 'bg-primary' : 'bg-light text-dark'} border flex-shrink-0`}
                                onClick={() => onTimeSelect(time)}
                                style={{
                                    cursor: 'pointer',
                                    minWidth: '65px'
                                }}
                            >
                                {time}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TimeSlots;