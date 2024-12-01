import React from "react";
import '../../css/restaurantDetailsCss/RestaurantDetailsService.css';
import wine from '../../assets/RestaunrantServiceIcon/RestaurantServiceWineIcon.png';

function RestaurantDetailsService() {


    return (
        <div className="restaurant_details_container">
            <div className="restaurant_service_layout">
                <div className="restaurant_details_title"><h2>편의 시설</h2></div>
                <div className="detail_info">
                    <div className="amenities_icon">
                        <span className="amenities_icon"> <img src={wine} width="100"/></span>
                    </div>
                    <div className="amenities_name">콜키지 가능</div>
                </div>
            </div>
        </div>
    )
}

export default RestaurantDetailsService;