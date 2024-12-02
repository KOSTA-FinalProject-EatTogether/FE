import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ReservationAddComponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: new Date().toISOString().split('T')[0],
    time: '',
    guests: 1,
    requests: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 여기에 예약 등록 로직 추가
    console.log('예약 데이터:', formData);
  };

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="h5 mb-0">새 예약 등록</h2>
        <button className="btn btn-outline-secondary btn-sm">
          뒤로
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label small">예약자 성함*</label>
          <input
            type="text"
            className="form-control form-control-sm"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label small">연락처*</label>
          <input
            type="tel"
            className="form-control form-control-sm"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="010-0000-0000"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label small">예약 날짜*</label>
          <input
            type="date"
            className="form-control form-control-sm"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label small">예약 시간*</label>
          <select 
            className="form-select form-select-sm"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          >
            <option value="">시간 선택</option>
            <option value="11:30">11:30</option>
            <option value="12:00">12:00</option>
            <option value="12:30">12:30</option>
            <option value="13:00">13:00</option>
            <option value="13:30">13:30</option>
            <option value="17:30">17:30</option>
            <option value="18:00">18:00</option>
            <option value="18:30">18:30</option>
            <option value="19:00">19:00</option>
            <option value="19:30">19:30</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label small">인원*</label>
          <select
            className="form-select form-select-sm"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            required
          >
            {[1,2,3,4,5,6,7,8].map(num => (
              <option key={num} value={num}>{num}명</option>
            ))}
          </select>
          <div className="form-text small">최대 8인까지 예약 가능합니다.</div>
        </div>

        <div className="mb-3">
          <label className="form-label small">요청사항</label>
          <textarea
            className="form-control form-control-sm"
            name="requests"
            value={formData.requests}
            onChange={handleChange}
            rows="3"
            placeholder="알러지나 기타 요청사항이 있으시다면 작성해 주세요."
          />
        </div>

        <div className="mb-3">
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="agree"
              required
            />
            <label className="form-check-label small" htmlFor="agree">
              예약 규정에 동의합니다.
            </label>
          </div>
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary btn-sm">
            예약하기
          </button>
        </div>
      </form>
    </>
  );
};

export default ReservationAddComponent;