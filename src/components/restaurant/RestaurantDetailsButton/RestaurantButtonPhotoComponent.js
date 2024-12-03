import React from 'react';
import '../../../css/restaurantDetailsButtonCss/RestaurantButtonPhoto.css'
import "bootstrap/dist/css/bootstrap.min.css";
import image1 from '../../../assets/simba_icon.png'; // 각 이미지 경로를 실제 경로로 변경하세요


const RestaurantButtonPhotoComponent = () => {
    const photos = Array(10).fill(image1);
 
    return (
        <div className="container mt-4">
            <div className="row g-3">
                {photos.map((photo, index) => (
                    <div key={index} className="col-6">
                        <div 
                            className="ratio ratio-1x1" 
                            style={{
                                transform: `rotate(${Math.random() * 2 - 1}deg) translateY(${Math.random() * 5}px)`
                            }}
                        >
                            <img
                                src={photo}
                                alt={`Dish ${index + 1}`}
                                className="rounded object-fit-cover w-100 h-100"
                                style={{
                                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                                }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
 };
 

export default RestaurantButtonPhotoComponent;
