import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const BusinessHoursTemporaryComponent = () => {
    const [tempHours, setTempHours] = useState([
        {
            id: 1,
            date: '2024-12-24',
            description: '크리스마스 이브',
            hours: '오전 10시 ~ 오후 6시'
        }
    ]);

    const [newHours, setNewHours] = useState({
        date: '',
        description: '',
        hours: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewHours(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!newHours.date || !newHours.hours) {
            alert('날짜와 영업시간을 입력해주세요.');
            return;
        }

        const newEntry = {
            id: Date.now(),
            ...newHours
        };

        setTempHours(prev => [...prev, newEntry]);
        setNewHours({
            date: '',
            description: '',
            hours: ''
        });
    };

    const handleDelete = (id) => {
        setTempHours(prev => prev.filter(hour => hour.id !== id));
    };

    return (
        <div className="container">
            <h2 className="mb-4">임시 영업시간 설정</h2>
            
            {/* 임시 영업시간 추가 폼 */}
            <form onSubmit={handleSubmit} className="mb-4">
                <div className="row g-3">
                    <div className="col-md-4">
                        <label className="form-label">날짜</label>
                        <input
                            type="date"
                            className="form-control"
                            name="date"
                            value={newHours.date}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="col-md-4">
                        <label className="form-label">영업시간</label>
                        <input
                            type="text"
                            className="form-control"
                            name="hours"
                            placeholder="예: 오전 10시 ~ 오후 8시"
                            value={newHours.hours}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="col-md-4">
                        <label className="form-label">설명</label>
                        <input
                            type="text"
                            className="form-control"
                            name="description"
                            placeholder="예: 공휴일"
                            value={newHours.description}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">
                            임시 영업시간 추가
                        </button>
                    </div>
                </div>
            </form>

            {/* 임시 영업시간 목록 */}
            <div>
                <h3 className="mb-3">설정된 임시 영업시간</h3>
                {tempHours.length === 0 ? (
                    <p className="text-muted">설정된 임시 영업시간이 없습니다.</p>
                ) : (
                    <div className="table-responsive">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>날짜</th>
                                    <th>영업시간</th>
                                    <th>설명</th>
                                    <th>작업</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tempHours.map(hour => (
                                    <tr key={hour.id}>
                                        <td>{hour.date}</td>
                                        <td>{hour.hours}</td>
                                        <td>{hour.description}</td>
                                        <td>
                                            <button
                                                className="btn btn-danger btn-sm"
                                                onClick={() => handleDelete(hour.id)}
                                            >
                                                삭제
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BusinessHoursTemporaryComponent;