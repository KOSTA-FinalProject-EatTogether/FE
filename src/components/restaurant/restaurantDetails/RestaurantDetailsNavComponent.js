import React from 'react';

function RestaurantDetailsNavComponent({ restaurant, activeSection, setActiveSection }) {
    const getSectionClassName = (section) => {
        return `list-group-item list-group-item-action ${activeSection === section ? 'active' : ''}`;
    };

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
                    style={{ cursor: 'pointer', minWidth: '100px' }}
                >
                    매장상세
                </li>
            </ul>
        </div>
    );
}

export default RestaurantDetailsNavComponent;
