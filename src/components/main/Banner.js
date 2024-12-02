import React, { useState } from 'react';
import '../../css/mainpage/Banner.css';  // 경로 수정
import banner1 from '../../assets/banner/banner1.jpg';
import banner2 from '../../assets/banner/banner2.jpg';
import banner3 from '../../assets/banner/banner3.jpg';
const Banner = () => {
    const banners = [banner1, banner2, banner3];
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <div className="container mt-4">
            <div id="bannerCarousel" className="carousel slide" style={{ maxWidth: '450px', margin: '0 auto' }}>
                <div className="carousel-inner">
                    {banners.map((banner, index) => (
                        <div key={index} className={`carousel-item ${index === currentIndex ? 'active' : ''}`}>
                            <img
                                src={banner}
                                className="d-block w-100 rounded"
                                alt={`banner-${index}`}
                                style={{
                                    height: '200px',
                                    objectFit: 'cover'
                                }}
                            />
                        </div>
                    ))}
                </div>

                <button
                    className="carousel-control-prev"
                    onClick={() => setCurrentIndex(prev => prev === 0 ? banners.length - 1 : prev - 1)}
                >
                    <span className="carousel-control-prev-icon"></span>
                </button>

                <button
                    className="carousel-control-next"
                    onClick={() => setCurrentIndex(prev => prev === banners.length - 1 ? 0 : prev + 1)}
                >
                    <span className="carousel-control-next-icon"></span>
                </button>

                <div className="carousel-indicators">
                    {banners.map((_, index) => (
                        <button
                            key={index}
                            className={index === currentIndex ? 'active' : ''}
                            onClick={() => setCurrentIndex(index)}
                        ></button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Banner;
