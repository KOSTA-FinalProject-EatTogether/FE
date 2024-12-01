import React, {useState} from 'react';
import '../../css/RestaurantManageCss/RestaurantManageInfo.css';

const RestaurantManageInfo = () => {
    const [restaurant_title, setTitle] = useState('강성별곡');
    const [restaurant_text, setText] = useState('맛있음 ㅇㅇ');
    const [restaurant_time, setTime] = useState('내 마음대로 영업함');
    const [restaurant_location, setLocation] = useState('서울특별시 성동구 뚝섬로9길 8 3층');
    const handleChange = (e) => {
        setTitle(e.target.value);
        setText(e.target.value);
        setTime(e.target.value);
        setLocation(e.target.value);

    };

    return (
        <div className="manage_container">
            <div className="restaurant_details_container">
                <div className="restaurant_details_title"><h2>식당 정보 수정</h2></div>
                <div className="section">
                    <textarea
                        className="title_text_box"
                        value={restaurant_title}
                        onChange={handleChange}
                    ></textarea>
                    <textarea
                        className="text_box"
                        value={restaurant_text}
                        onChange={handleChange}
                    ></textarea>
                    <textarea
                        className="text_box"
                        value={restaurant_time}
                        onChange={handleChange}
                    ></textarea>
                    <textarea
                        className="text_box"
                        value={restaurant_location}
                        onChange={handleChange}
                    ></textarea>
                    <button className="edit_button">수정</button>
                </div>
            </div>
        </div>
    );
};

export default RestaurantManageInfo;
