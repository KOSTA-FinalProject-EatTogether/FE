// ReservationList.js
import React, { useState } from 'react';
import BusinessHoursRegularComponent from "../businesshours/BusinessHoursRegularComponent";
import BusinessHoursTemporaryComponent from "../businesshours/BusinessHoursTemporaryComponent";
import BusinessHoursHolidayComponent from "../businesshours/BusinessHoursHolidayComponent";
import ReservationCalendarComponent from "./ReservationCalendarComponent";
import ReservationPastComponent from "./ReservationPastComponent";

const ReservationMainComponent = () => {

    const [activeSection, setActiveSection] = useState('calendar');

    // 섹션별 클래스명 생성 함수
    const getSectionClassName = (section) => {
        return `list-group-item list-group-item-action ${activeSection === section ? 'active' : ''}`;
    };

    // 섹션 변경 핸들러
    const handleSectionChange = (section) => {
        setActiveSection(section);
    };

    return (
        <div>

            <ul className="list-group list-group-horizontal mb-3">
                <li
                    className={getSectionClassName('calendar')}
                    onClick={() => handleSectionChange('calendar')}
                    style={{cursor: 'pointer'}}
                >
                    예약 보기
                </li>
                <li
                    className={getSectionClassName('past')}
                    onClick={() => handleSectionChange('past')}
                    style={{cursor: 'pointer'}}
                >
                    지난 예약 내역
                </li>
            </ul>



            {activeSection === 'calendar' && (
                <ReservationCalendarComponent/>
            )}

            {activeSection === 'past' && (
                <ReservationPastComponent/>
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

export default ReservationMainComponent;