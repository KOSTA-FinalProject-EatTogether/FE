import BasicBodyLayout from "../layouts/common/BasicBodyLayout";
import React, {useState} from "react";
import RegisterRestaurantForm from "../components/RegisterRestaurantForm";
import RegisterRestaurantSearch from "../components/RegisterRestaurantSearch";

const RegesterRestaurantPage = () => {
    const [activeSection, setActiveSection] = useState('register');

// 섹션별 클래스명 생성 함수
    const getSectionClassName = (section) => {
        return `list-group-item list-group-item-action ${activeSection === section ? 'active' : ''}`;
    };

// 섹션 변경 핸들러
    const handleSectionChange = (section) => {
        setActiveSection(section);
    };

    return(
        <>
            <div>
                <ul className="list-group list-group-horizontal mb-3">
                    <li
                        className={getSectionClassName('register')}
                        onClick={() => handleSectionChange('register')}
                        style={{cursor: 'pointer'}}
                    >
                        식당 등록
                    </li>
                    <li
                        className={getSectionClassName('search')}
                        onClick={() => handleSectionChange('search')}
                        style={{cursor: 'pointer'}}
                    >
                        식당 등록 조회
                    </li>
                </ul>

                {activeSection === 'register' && (
                    <>
                        <RegisterRestaurantForm/>
                    </>
                )}

                {activeSection === 'search' && (
                    <div>
                        <RegisterRestaurantSearch/>
                    </div>
                )}
            </div>
        </>
    )
}

export default RegesterRestaurantPage