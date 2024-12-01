import React, { useState } from 'react';
import '../../css/RestaurantManageCss/RestaurantManageMenu.css'; // CSS 파일 경로를 실제 경로로 변경하세요
import simba from '../../assets/simba_icon.png';

const RestaurantManageMenu = () => {
    // 여러 섹션의 상태를 배열로 관리
    const [menuSections, setMenuSections] = useState([
        {
            id: 1,
            price: '₩110,000',
            description: '당일 공수한, 살아있는 랍스터와 킹크랩! 거기에 슈림프 칵테일까지, 비법 칵테일 소스에 첨가하여 각종 해산물의 신선함을 즐기세요!',
        },
        {
            id: 2,
            price: '₩90,000',
            description: '신선한 생선회와 다양한 반찬으로 구성된 정통 일본식 스시 플레이트!',
        },
        {
            id: 3,
            price: '₩80,000',
            description: '훈제 연어와 샐러드의 조화! 간단하면서도 건강한 요리입니다.',
        },
        {
            id: 4,
            price: '₩70,000',
            description: '바삭하게 튀겨낸 치킨과 특제 소스로 완성된 최고의 간식!',
        },
    ]);

    // 가격 변경 핸들러
    const handlePriceChange = (id, value) => {
        setMenuSections((prevSections) =>
            prevSections.map((section) =>
                section.id === id ? { ...section, price: value } : section
            )
        );
    };

    // 설명 변경 핸들러
    const handleDescriptionChange = (id, value) => {
        setMenuSections((prevSections) =>
            prevSections.map((section) =>
                section.id === id ? { ...section, description: value } : section
            )
        );
    };

    return (
        <div className="manage_menu_container">
            <div className="restaurant_details_title">
                <h2>메뉴 수정</h2>
            </div>
            {menuSections.map((section) => (
                <div className="manage_menu_section" key={section.id}>
                    <div className="manage_menu_image_container">
                        <img src={simba} alt="Image Placeholder" className="manage_menu_image" />
                    </div>
                    <textarea
                        className="manage_menu_text_box"
                        value={section.price}
                        onChange={(e) => handlePriceChange(section.id, e.target.value)}
                    ></textarea>
                    <textarea
                        className="manage_menu_text_box"
                        value={section.description}
                        onChange={(e) => handleDescriptionChange(section.id, e.target.value)}
                    ></textarea>
                    <button className="manage_menu_edit_button">수정</button>
                </div>
            ))}
        </div>
    );
};

export default RestaurantManageMenu;
