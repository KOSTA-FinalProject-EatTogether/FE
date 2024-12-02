import React from 'react';
import '../../css/restaurantDetailsButtonCss/RestaurantButtonPhoto.css'
import image1 from '../../assets/simba_icon.png'; // 각 이미지 경로를 실제 경로로 변경하세요


const RestaurantButtonPhoto = () => {
    return (
        <div className="restaurant_details_container">
            <div className="photo_gallery">
                <img src={image1} alt="Dish 1" className="gallery_image large_image"/>
                <img src={image1} alt="Dish 2" className="gallery_image"/>
                <img src={image1} alt="Dish 3" className="gallery_image"/>
                <img src={image1} alt="Dish 4" className="gallery_image"/>
                <img src={image1} alt="Dish 5" className="gallery_image"/>
                <img src={image1} alt="Dish 5" className="gallery_image"/>
                <img src={image1} alt="Dish 5" className="gallery_image"/>
                <img src={image1} alt="Dish 5" className="gallery_image"/>
                <img src={image1} alt="Dish 5" className="gallery_image"/>
                <img src={image1} alt="Dish 5" className="gallery_image"/>

            </div>
        </div>
    );
};

export default RestaurantButtonPhoto;
