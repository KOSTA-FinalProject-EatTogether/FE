import KakaoMap from "../../components/common/map/KakaoMap";
import { MenuPreview } from "../../components/menu/MenuListAndPreviewComponent";
import BasicBodyLayout from "../../layouts/common/BasicBodyLayout";
import OwnerRestaurantIntroPage from "./OwnerRestaurantIntroPage";

const OwnerMainPage = () => {
    return (    
        <div>
            <div>
            <h1>식당 관리 페이지 메인</h1>
            <div>
                <h2>식당 지도</h2>
                <KakaoMap/>
            </div>
            <div>
                <h2>식당 소개</h2>
                <OwnerRestaurantIntroPage />
            </div>
            <div>
                <h2>식당 메뉴</h2>
                <ul>
                    <li>
                        <h3>식당 메뉴 목록</h3>
                    </li>
                    <MenuPreview />
                </ul>
            </div>
            <div>
                <h2><a href="../owner/businesshour">식당 운영 설정</a></h2>
                <div>
                    <ul>
                        <li>
                            <h3>식당 정규 영업일 설정</h3>
                        </li>
                        <li>
                            <h3>식당 영업시간 설정</h3>
                        </li>
                        <li>
                            <h3>식당 휴업일 설정</h3>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <h2><a href="../owner/reservationmain">식당 예약 관리</a></h2>
            </div>
            <div>
                <h2><a href="../owner/reservationtimesetting">식당 예약시간 관리</a></h2>
            </div>
            <div>
                <h2><a href="../owner/queuemain">식당 줄서기 관리</a></h2>
            </div>
        </div>
        <div>
            <h2><a href="../owner/reviewmanagemain">식당 리뷰 관리</a></h2>
        </div>
        <div>
            <h2><a href="../owner/newslist">식당 소식 관리</a></h2>
        </div>
    </div>
    );
};

export default OwnerMainPage;
