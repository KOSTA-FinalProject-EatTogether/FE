import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const LineReservation = () => {
    const [adultCount, setAdultCount] = useState(1);
    const [infantCount, setInfantCount] = useState(0);

    const CountButton = ({ onClick, children }) => (
        <button
            onClick={onClick}
            className="btn d-flex align-items-center justify-content-center"
            style={{
                width: '36px',
                height: '36px',
                backgroundColor: '#ff6f61',
                color: 'white',
                border: 'none',
                borderRadius: '50%',
                fontSize: '1.2em',
                transition: 'all 0.2s ease-in-out',
                boxShadow: '0 2px 4px rgba(255, 111, 97, 0.2)'
            }}
            onMouseOver={(e) => {
                e.target.style.backgroundColor = '#ff3b2e';
                e.target.style.transform = 'scale(1.05)';
            }}
            onMouseOut={(e) => {
                e.target.style.backgroundColor = '#ff6f61';
                e.target.style.transform = 'scale(1)';
            }}
        >
            {children}
        </button>
    );

    return (
        <div className="container py-5 px-4" style={{
            backgroundColor: '#fff',
            borderRadius: '20px',
            boxShadow: '0 10px 30px rgba(255, 111, 97, 0.1)',
            maxWidth: '500px',
            margin: '20px auto'
        }}>
            <h2 className="text-center mb-5" style={{color: '#ff6f61', fontWeight: '600'}}>
                방문 인원을 선택하세요
            </h2>

            <div className="mb-5">
                <div className="d-flex justify-content-between align-items-center mb-4 p-3" style={{
                    backgroundColor: 'rgba(255, 111, 97, 0.05)',
                    borderRadius: '15px'
                }}>
                    <span className="fs-5" style={{color: '#666'}}>성인</span>
                    <div className="d-flex align-items-center gap-4">
                        <CountButton onClick={() => setAdultCount(Math.max(0, adultCount - 1))}>-</CountButton>
                        <span style={{ width: '30px', textAlign: 'center', fontSize: '1.2em', fontWeight: '600' }}>{adultCount}</span>
                        <CountButton onClick={() => setAdultCount(adultCount + 1)}>+</CountButton>
                    </div>
                </div>

                <div className="d-flex justify-content-between align-items-center p-3" style={{
                    backgroundColor: 'rgba(255, 111, 97, 0.05)',
                    borderRadius: '15px'
                }}>
                    <span className="fs-5" style={{color: '#666'}}>영유아</span>
                    <div className="d-flex align-items-center gap-4">
                        <CountButton onClick={() => setInfantCount(Math.max(0, infantCount - 1))}>-</CountButton>
                        <span style={{ width: '30px', textAlign: 'center', fontSize: '1.2em', fontWeight: '600' }}>{infantCount}</span>
                        <CountButton onClick={() => setInfantCount(infantCount + 1)}>+</CountButton>
                    </div>
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
                    취소
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
                    줄서기완료
                </button>
            </div>
        </div>
    );
};

export default LineReservation;