import { Link } from 'react-router-dom';
import React, {useState} from 'react';
import '../../css/restaurantDetailsCss/RestaunrantDetailsNav.css';
import BusinessHoursMonthlyComponent from '../businesshours/BusinessHoursMonthlyComponent';
import BusinessHoursTemporaryComponent from '../businesshours/BusinessHoursTemporaryComponent';
import BusinessHoursHolidayComponent from '../businesshours/BusinessHoursTemporaryComponent';
import BusinessHoursRegularComponent from '../businesshours/BusinessHoursRegularComponent';
import RestaurantDetailSummaryComponent from './RestaurantDetailSummaryComponent';
import MenuListComponent from '../menu/MenuListAndPreviewComponent';
import ReviewList from '../reviews/ReviewListAndPreviewComponent';
import RestaurantButtonIntroPage from '../../pages/restaurantButtonDetails/RestaurantButtonIntroPage';

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
        <ul className="list-group list-group-horizontal mb-3">
            <li
                className={getSectionClassName('home')}
                onClick={() => handleSectionChange('home')}
                style={{ cursor: 'pointer' }}
            >
            홈
            </li>
            <li
                className={getSectionClassName('menu')}
                onClick={() => handleSectionChange('menu')}
                style={{ cursor: 'pointer' }}
            >
            메뉴
            </li>
            <li
                className={getSectionClassName('photos')}
                onClick={() => handleSectionChange('photos')}
                style={{ cursor: 'pointer' }}
            >   
            사진
            </li>
            <li
                className={getSectionClassName('reviews')}
                onClick={() => handleSectionChange('reviews')}
                style={{ cursor: 'pointer' }}
            >
            리뷰
            </li>
            <li
                className={getSectionClassName('restaurantDetails')}
                onClick={() => handleSectionChange('restaurantDetails')}
                style={{ cursor: 'pointer' }}
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
            
            <BusinessHoursTemporaryComponent/>
            
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
