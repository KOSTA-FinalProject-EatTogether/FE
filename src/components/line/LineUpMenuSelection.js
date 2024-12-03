import React,{useState} from 'react';
import '../../css/line/LineUpMenuSelection.css';
import simba from '../../assets/simba_icon.png';
// import menu1 from '../../assets/menu1.jpg';  // 이미지 파일 임포트
// import menu2 from '../../assets/menu2.jpg';  // 이미지 파일 임포트
import {useNavigate} from "react-router-dom";
const LineUpMenuSelection = () => {
    const [activeTab, setActiveTab] = useState('식사');
    const [quantity, setQuantity] = useState(1);
    const totalPrice = 10000; // 예시 가격

    const navigate = useNavigate()

    const handleMenuClick = (id) => {
        navigate(`/queue/menuDetails`); // MenuDetailPage로 이동
    };

    const handleMinus = () => setQuantity(prev => Math.max(1, prev - 1));
    const handlePlus = () => setQuantity(prev => prev + 1);

    const menuItems = [
        { id: 1, name: '메뉴이름1', price: '₩10,000', soldOut: false, imageUrl: simba },
        { id: 2, name: '메뉴이름2', price: '₩12,000', soldOut: true, imageUrl: simba },
    ];

    return (
        <div className="position-relative" style={{ paddingBottom: '80px' }}>
            <div className="menu-container p-3" style={{
                backgroundColor: '#fff',
                borderRadius: '20px 20px 0 0',
                boxShadow: '0 10px 30px rgba(255, 111, 97, 0.1)',
                maxWidth: '500px',
                margin: '20px auto'
            }}>
                {/* 기존 내용 유지 */}
                <h1 className="restaurant-namenamename text-center mb-4" style={{color: '#ff6f61'}}>식당이름</h1>

                <div className="menu-tabs d-flex gap-2 mb-4">
                    {['식사', '사이드', '주류', '음료', '기타'].map(tab => (
                        <button
                            key={tab}
                            className={`tab flex-grow-1 py-2 border-0 ${activeTab === tab ? 'active' : ''}`}
                            style={{
                                backgroundColor: activeTab === tab ? '#ff6f61' : '#f5f5f5',
                                color: activeTab === tab ? 'white' : '#666',
                                borderRadius: '8px',
                                transition: 'all 0.2s'
                            }}
                            onClick={() => setActiveTab(tab)}

                        >
                            {tab}
                        </button>
                    ))}
                </div>

                <div className="menu-items">
                    {menuItems.map(item => (
                        <button className="menu-item d-flex align-items-center w-100 mb-3 border-0 bg-light p-3"
                                key={item.id}
                                style={{borderRadius: '12px'}}
                                onClick={() => handleMenuClick(item.id)}
                        >

                            <div className="menu-photophoto me-3" style={{width: '80px', height: '80px'}}>
                                <img src={item.imageUrl} alt={item.name} className="w-100 h-100 object-fit-cover rounded" />
                            </div>
                            <div className="menu-details text-start">
                                <p className="menu-name mb-1 fw-bold">{item.name}</p>
                                <p className="menu-price mb-0" style={{color: '#ff6f61'}}>{item.price}</p>
                                {item.soldOut && <p className="sold-out text-secondary mb-0">품절</p>}
                            </div>
                        </button>
                    ))}
                </div>
            </div>

            {/* Fixed bottom order bar */}
            <div className="position-fixed bottom-0 start-50 translate-middle-x w-100"
                 style={{
                     maxWidth: '500px',
                     backgroundColor: 'white',
                     boxShadow: '0 -4px 12px rgba(0, 0, 0, 0.1)',
                     borderTop: '1px solid #eee'
                 }}>
                <div className="d-flex align-items-center justify-content-between p-3">
                    <div className="d-flex align-items-center gap-4">
            <span className="fw-bold" style={{color: '#ff6f61'}}>
              총 {totalPrice.toLocaleString()}원
            </span>
                        <div className="d-flex align-items-center gap-2">
                            <button
                                onClick={handleMinus}
                                className="btn d-flex align-items-center justify-content-center p-0"
                                style={{
                                    width: '30px',
                                    height: '30px',
                                    backgroundColor: '#f5f5f5',
                                    borderRadius: '8px'
                                }}
                            >-</button>
                            <span style={{width: '30px', textAlign: 'center'}}>{quantity}</span>
                            <button
                                onClick={handlePlus}
                                className="btn d-flex align-items-center justify-content-center p-0"
                                style={{
                                    width: '30px',
                                    height: '30px',
                                    backgroundColor: '#f5f5f5',
                                    borderRadius: '8px'
                                }}
                            >+</button>
                        </div>
                    </div>
                    <button
                        className="btn px-4"
                        style={{
                            backgroundColor: '#ff6f61',
                            color: 'white',
                            borderRadius: '8px'
                        }}
                    >
                        결제하기
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LineUpMenuSelection;