// ReservationList.js
import React, { useState } from 'react';
import UserPastQueueComponent from "../../components/mypage/UserPastQueueComponent";
import UserPastReservationComponent from "../../components/mypage/UserPastReservationComponent";

const UserPastPage = () => {

    const [activeSection, setActiveSection] = useState('reservation');

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
                    className={getSectionClassName('reservation')}
                    onClick={() => handleSectionChange('reservation')}
                    style={{cursor: 'pointer'}}
                >
                    지난 예약 내역
                </li>
                <li
                    className={getSectionClassName('queue')}
                    onClick={() => handleSectionChange('queue')}
                    style={{cursor: 'pointer'}}
                >
                    지난 줄서기 내역
                </li>
            </ul>



            {activeSection === 'reservation' && (
                <UserPastReservationComponent/>
            )}

            {activeSection === 'queue' && (
                <UserPastQueueComponent/>
            )}


        </div>
    );
};

export default UserPastPage;