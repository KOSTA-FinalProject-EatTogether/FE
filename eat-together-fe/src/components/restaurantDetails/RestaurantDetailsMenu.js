import '../../css/restaurantDetailsCss/RestaurantDetailsMenu.css';
import seafoodTowerImg from '../../assets/simba_icon.png'; // 이미지 경로를 실제 경로로 변경하세요

const MenuItem = () => {
    return (
        <div className="restaurant_details_container">
            <div className="restaurant_details_main_title_layout">
                <div className="restaurant_details_menu"><h2>메뉴</h2></div>
            </div>
            <div className="restaurant_details_menu_layout">
                    <div className="restaurant_menu_text">
                        <h2 className="restaurant_details_menu_title">대표 시푸드 타워</h2>
                        <p className="restaurant_details_menu_description">
                            당일 공수한, 살아있는 랍스터와 킹크랩! 거기에 슈림프 칵테일까지, 비법 칵테일 소스에 첨가하여 각종 해산물의 신선함을 즐기세요!
                        </p>
                        <p className="restaurant_details_menu_price">110,000원</p>
                    </div>
                    <div className="menu_image_container">
                        <img src={seafoodTowerImg} alt="Seafood Tower" className="restaurant_details_wmenu_image"/>
                    </div>
                </div>
        </div>
    );
};

export default MenuItem;
