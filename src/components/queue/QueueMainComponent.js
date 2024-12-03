// ReservationList.js
import React, { useState } from 'react';
import QueueManageComponent from "./QueueManageComponent";
import QueueHistoryComponent from "./QueueHistoryComponent";

const QueueMainComponent = () => {

  const [activeSection, setActiveSection] = useState('queue');

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
              className={getSectionClassName('queue')}
              onClick={() => handleSectionChange('queue')}
              style={{cursor: 'pointer'}}
          >
            줄서기 보기
          </li>
          <li
              className={getSectionClassName('past')}
              onClick={() => handleSectionChange('past')}
              style={{cursor: 'pointer'}}
          >
            지난 예약 내역
          </li>
        </ul>



        {activeSection === 'queue' && (
            <QueueManageComponent/>
        )}

        {activeSection === 'past' && (
            <QueueHistoryComponent/>
        )}


      </div>
  );
};

export default QueueMainComponent;