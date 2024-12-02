import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ReservationTimeSettingComponent = () => {
  const [settings, setSettings] = useState({
    interval: 30, // 기본값 30분
    businessHours: {
      start: '09:00',
      end: '22:00'
    },
    maxReservationsPerSlot: 4
  });

  // 영업 시간대의 모든 시간슬롯 생성
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

  const handleIntervalChange = (e) => {
    setSettings(prev => ({
      ...prev,
      interval: Number(e.target.value)
    }));
  };

  const handleBusinessHoursChange = (e) => {
    const { name, value } = e.target;
    setSettings(prev => ({
      ...prev,
      businessHours: {
        ...prev.businessHours,
        [name]: value
      }
    }));
  };

  const handleMaxReservationsChange = (e) => {
    setSettings(prev => ({
      ...prev,
      maxReservationsPerSlot: Number(e.target.value)
    }));
  };

  return (
    <>
      <h2 className="h5 mb-4">예약 시간 설정</h2>

      <div className="card mb-4">
        <div className="card-body">
          <div className="mb-3">
            <label className="form-label small">예약 시간 간격</label>
            <select 
              className="form-select form-select-sm"
              value={settings.interval}
              onChange={handleIntervalChange}
            >
              <option value={30}>30분</option>
              <option value={60}>1시간</option>
              <option value={90}>1시간 30분</option>
              <option value={120}>2시간</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label small">영업 시작 시간</label>
            <input
              type="time"
              className="form-control form-control-sm"
              name="start"
              value={settings.businessHours.start}
              onChange={handleBusinessHoursChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label small">영업 종료 시간</label>
            <input
              type="time"
              className="form-control form-control-sm"
              name="end"
              value={settings.businessHours.end}
              onChange={handleBusinessHoursChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label small">시간당 최대 예약 수</label>
            <select
              className="form-select form-select-sm"
              value={settings.maxReservationsPerSlot}
              onChange={handleMaxReservationsChange}
            >
              {[1,2,3,4,5,6,7,8].map(num => (
                <option key={num} value={num}>{num}팀</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-body">
          <h6 className="card-title">예약 가능 시간대</h6>
          <div className="d-flex flex-wrap gap-1">
            {generateTimeSlots().map((time, index) => (
              <div
                key={index}
                className="badge bg-light text-dark border"
              >
                {time}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="d-grid mt-3">
        <button className="btn btn-primary btn-sm">
          설정 저장
        </button>
      </div>
    </>
  );
};

export default ReservationTimeSettingComponent;