import React,{useState} from "react";


const ReviewAndBookmarkComponent = () =>{

    const [activeSection, setActiveSection] = useState('review');

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
                    className={getSectionClassName('review')}
                    onClick={() => handleSectionChange('review')}
                    style={{ cursor: 'pointer' }}
                >
                    나의 리뷰 0
                </li>
                <li
                    className={getSectionClassName('restaurant')}
                    onClick={() => handleSectionChange('restaurant')}
                    style={{ cursor: 'pointer' }}
                >
                    관심식당 0
                </li>
            </ul>

            {activeSection === 'review' && (
                <div>
                    <h1>리뷰</h1>
                    <p>현재 등록된 리뷰가 없습니다.</p>
                </div>
            )}

            {activeSection === 'restaurant' && (
                <div>
                    <h1>관심식당</h1>
                    <p>현재 등록된 관심식당이 없습니다.</p>
                </div>
            )}
        </div>

    )
}

export default ReviewAndBookmarkComponent