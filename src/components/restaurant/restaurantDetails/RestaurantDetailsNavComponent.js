import { Link } from 'react-router-dom';
import React, {useState} from 'react';
import '../../../css/restaurantDetailsCss/RestaunrantDetailsNav.css';
import RestaurantDetailSummaryComponent from "./RestaurantDetailSummaryComponent";
import MenuListComponent from "../../menu/MenuListAndPreviewComponent";
import RestaurantButtonPhotoComponent from "../RestaurantDetailsButton/RestaurantButtonPhotoComponent";
import ReviewList from "../../reviews/ReviewListAndPreviewComponent";
import RestaurantButtonIntroPage from "../../../pages/restaurant/restaurantButtonDetails/RestaurantButtonIntroPage";


function RestaurantDetailsNav() {
    const [activeSection, setActiveSection] = useState('home');

    // 섹션별 클래스명 생성 함수
        const getSectionClassName = (section) => {
            return `list-group-item list-group-item-action ${activeSection === section ? 'active' : ''}`;
        };

    // 섹션 변경 핸들러
    const handleSectionChange = (section) => {
        setActiveSection(section);
    };

    return (
        <div style={{ width: '450px' }}>
            <ul className="list-group list-group-horizontal mb-3 fs-6">
                <li
                    className={`${getSectionClassName('home')} flex-grow-1 text-center`}
                    onClick={() => handleSectionChange('home')}
                    style={{ cursor: 'pointer', minWidth: '70px' }}
                >
                    홈
                </li>
                <li
                    className={`${getSectionClassName('menu')} flex-grow-1 text-center`}
                    onClick={() => handleSectionChange('menu')}
                    style={{ cursor: 'pointer', minWidth: '70px' }}
                >
                    메뉴
                </li>
                <li
                    className={`${getSectionClassName('photos')} flex-grow-1 text-center`}
                    onClick={() => handleSectionChange('photos')}
                    style={{ cursor: 'pointer', minWidth: '70px' }}
                >
                    사진
                </li>
                <li
                    className={`${getSectionClassName('reviews')} flex-grow-1 text-center`}
                    onClick={() => handleSectionChange('reviews')}
                    style={{ cursor: 'pointer', minWidth: '70px' }}
                >
                    리뷰
                </li>
                <li
                    className={`${getSectionClassName('restaurantDetails')} flex-grow-1 text-center`}
                    onClick={() => handleSectionChange('restaurantDetails')}
                    style={{ cursor: 'pointer', minWidth: '85px' }}
                >
                    매장상세
                </li>
            </ul>
        
        {activeSection === 'home' && (
            <RestaurantDetailSummaryComponent/>
        )}

        {activeSection === 'menu' && (
            <MenuListComponent/>
        )}

        {activeSection === 'photos' && (
            
            <RestaurantButtonPhotoComponent/>
            
        )}

        {activeSection === 'reviews' && (
            
            <ReviewList/>
            
        )}

        {activeSection === 'restaurantDetails' && (
            <RestaurantButtonIntroPage/>
        )}
    </div>
);
}

export default RestaurantDetailsNav;
