import React from 'react';
import '../../../css/restaurantDetailsCss/RestaurantDetailsLocation.css';
import mapImage from '../../../assets/simba_icon.png';
import LocationPoint from "../../../assets/location_pinpoint.png";
import KakaoMap from "../../common/map/KakaoMap";

const RestaurantDetailsLocation = () => {
    return (
        <div className="location_container">
            <div className="location_title">위치</div>
            <div className="location_map">
                <KakaoMap/>
            </div>
            <div className="location_address">
                <strong className="pinpoint"><img src={LocationPoint}/></strong>

                서울특별시 성동구 뚝섬로9길 8 3층
            </div>
            <div className="location_distance">
                2호선 상수역에서 655m
            </div>
            <div className="location_button_container">
                <button className="location_button">길찾기</button>
            </div>
        </div>
    );
};

export default RestaurantDetailsLocation;
