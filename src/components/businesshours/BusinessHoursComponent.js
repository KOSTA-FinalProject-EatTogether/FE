import React, {useState} from 'react';
import { Routes, Route, NavLink, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import BusinessHoursMonthlyComponent from './BusinessHoursMonthlyComponent';
import BusinessHoursTemporaryComponent from './BusinessHoursTemporaryComponent';
import BusinessHoursHolidayComponent from './BusinessHoursHolidayComponent';
import BusinessHoursRegularComponent from './BusinessHoursRegularComponent';


const BusinessHoursComponent = () => {
    const [activeSection, setActiveSection] = useState('regular');

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
                    className={getSectionClassName('monthly')}
                    onClick={() => handleSectionChange('monthly')}
                    style={{ cursor: 'pointer' }}
                >
                미리보기
                </li>
                <li
                    className={getSectionClassName('regular')}
                    onClick={() => handleSectionChange('regular')}
                    style={{ cursor: 'pointer' }}
                >
                정규 영업시간
                </li>
                <li
                    className={getSectionClassName('temporary')}
                    onClick={() => handleSectionChange('temporary')}
                    style={{ cursor: 'pointer' }}
                >   
                임시 영업시간
                </li>
                <li
                    className={getSectionClassName('holiday')}
                    onClick={() => handleSectionChange('holiday')}
                    style={{ cursor: 'pointer' }}
                >
                휴무일
                </li>
            </ul>
            
            {activeSection === 'monthly' && (
                <BusinessHoursMonthlyComponent/>
            )}

            {activeSection === 'regular' && (
                <BusinessHoursRegularComponent/>
            )}

            {activeSection === 'temporary' && (
                
                <BusinessHoursTemporaryComponent/>
                
            )}

            {activeSection === 'holiday' && (
                <BusinessHoursHolidayComponent/>
            )}
        </div>
    );
};

export default BusinessHoursComponent;