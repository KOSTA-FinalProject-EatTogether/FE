import '../../css/restaurantDetailsCss/restaurantDetailsPhoto.css';
import simba from '../../assets/simba_icon.png';
import React from "react"; // 이미지 경로를 실제 경로로 변경하세요

const MenuItem = () => {
    return (
        <div className="restaurant_details_container">
            <div className="restaurant_details_title"><h2>사진</h2></div>
            <div className="restaurant_details_wphoto_layout"> {/* 첫 번째 행 */}
                <div className="restaurant_details_photo_row">
                    <div className="restaurant_details_photo_container"><img src={simba}
                                                                             alt="Seafood Tower"
                                                                             className="restaurant_details_photo_image"/>
                    </div>
                    <div className="restaurant_details_photo_container"><img src={simba}
                                                                             alt="Seafood Tower"
                                                                             className="restaurant_details_photo_image"/>
                    </div>
                    <div className="restaurant_details_photo_container"><img src={simba}
                                                                             alt="Seafood Tower"
                                                                             className="restaurant_details_photo_image"/>
                    </div>
                </div>
                {/* 두 번째 행 */}
                <div className="restaurant_details_photo_row">
                    <div className="restaurant_details_photo_container"><img src={simba}
                                                                             alt="Seafood Tower"
                                                                             className="restaurant_details_photo_image"/>
                    </div>
                    <div className="restaurant_details_photo_container"><img src={simba}
                                                                             alt="Seafood Tower"
                                                                             className="restaurant_details_photo_image"/>
                    </div>
                    <div className="restaurant_details_photo_container"><img src={simba}
                                                                             alt="Seafood Tower"
                                                                             className="restaurant_details_photo_image"/>
                    </div>
                </div>
            </div>
            <div className="restaurant_details_button_container">
                <button className="restaurant_details_button"> 사진 796개 전체보기 </button>
            </div>
        </div>
    );
};

export default MenuItem;
