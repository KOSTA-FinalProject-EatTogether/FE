import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const LineUpComplete = () => {
    const [currentWaitingTeams, setCurrentWaitingTeams] = useState(10);

    return (
        <div className="container py-5 px-4" style={{
            backgroundColor: '#fff',
            borderRadius: '20px',
            boxShadow: '0 10px 30px rgba(255, 111, 97, 0.1)',
            maxWidth: '500px',
            margin: '20px auto'
        }}>
            <div className="text-center mb-5">
                <h2 style={{color: '#ff6f61', fontWeight: '600', marginBottom: '15px'}}>
                    예약이 완료되었습니다!
                </h2>
                <p className="fs-5" style={{color: '#666'}}>
                    현재 <span style={{color: '#ff6f61', fontWeight: '600'}}>{currentWaitingTeams}팀</span> 대기 중
                </p>
            </div>

            <div className="p-4 mb-4" style={{
                backgroundColor: 'rgba(255, 111, 97, 0.05)',
                borderRadius: '15px'
            }}>
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <span style={{color: '#666'}}>매장명</span>
                    <span style={{fontWeight: '600'}}>식당이름</span>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                    <span style={{color: '#666'}}>대기인원</span>
                    <span style={{fontWeight: '600'}}>2명</span>
                </div>
            </div>

            <div className="d-flex gap-3">
                <button
                    className="btn flex-fill py-3"
                    style={{
                        backgroundColor: 'rgba(255, 111, 97, 0.1)',
                        color: '#ff6f61',
                        borderRadius: '12px',
                        transition: 'all 0.2s ease-in-out',
                        fontWeight: '600'
                    }}
                    onMouseOver={(e) => {
                        e.target.style.backgroundColor = 'rgba(255, 111, 97, 0.15)';
                        e.target.style.transform = 'translateY(-2px)';
                    }}
                    onMouseOut={(e) => {
                        e.target.style.backgroundColor = 'rgba(255, 111, 97, 0.1)';
                        e.target.style.transform = 'translateY(0)';
                    }}
                >
                    인원선택
                </button>
                <button
                    className="btn flex-fill py-3"
                    style={{
                        backgroundColor: '#ff6f61',
                        color: 'white',
                        borderRadius: '12px',
                        transition: 'all 0.2s ease-in-out',
                        fontWeight: '600',
                        boxShadow: '0 4px 12px rgba(255, 111, 97, 0.2)'
                    }}
                    onMouseOver={(e) => {
                        e.target.style.backgroundColor = '#ff3b2e';
                        e.target.style.transform = 'translateY(-2px)';
                    }}
                    onMouseOut={(e) => {
                        e.target.style.backgroundColor = '#ff6f61';
                        e.target.style.transform = 'translateY(0)';
                    }}
                >
                    메뉴선결제
                </button>
            </div>
        </div>
    );
};

export default LineUpComplete;