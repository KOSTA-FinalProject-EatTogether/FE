import { MenuPreview } from "../../components/menu/MenuListAndPreviewComponent";
import OwnerRestaurantIntroPage from "./OwnerRestaurantIntroPage";

const ownerMainPage = () => {
    return (
        <div>
            <h1>식당 관리 페이지 메인</h1>
            <div>
                <h2>식당 지도</h2>
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
                    <li>
                        <h3>식당 메뉴 관리하기</h3>
                    </li>
                </ul>
            </div>
            <div>
                <h2>식당 운영 설정</h2>
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
        </div>
    );
};

export default ownerMainPage;
