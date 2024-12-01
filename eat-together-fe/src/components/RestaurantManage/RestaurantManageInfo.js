import React, { useState } from 'react';
import '../../css/RestaurantManageCss/RestaurantManageInfo.css';

const RestaurantManageInfo = () => {
    const [restaurantTitle, setTitle] = useState('강성별곡');
    const [restaurantText, setText] = useState('맛있음 ㅇㅇ');
    const [restaurantTime, setTime] = useState('내 마음대로 영업함');
    const [restaurantLocation, setLocation] = useState('서울특별시 성동구 뚝섬로9길 8 3층');

    return (
        <div className="manage_container">
            <div className="restaurant_details_container">
                <div className="restaurant_details_title"><h2>식당 정보 수정</h2></div>
                <div className="section">
                    <textarea
                        className="title_text_box"
                        value={restaurantTitle}
                        onChange={(e) => setTitle(e.target.value)}
                    ></textarea>
                    <textarea
                        className="text_box"
                        value={restaurantText}
                        onChange={(e) => setText(e.target.value)}
                    ></textarea>
                    <textarea
                        className="text_box"
                        value={restaurantTime}
                        onChange={(e) => setTime(e.target.value)}
                    ></textarea>
                    <textarea
                        className="text_box"
                        value={restaurantLocation}
                        onChange={(e) => setLocation(e.target.value)}
                    ></textarea>
                    <button className="edit_button">수정</button>
                </div>
            </div>
        </div>
    );
};

export default RestaurantManageInfo;
