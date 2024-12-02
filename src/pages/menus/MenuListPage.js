import {MenuListComponent} from "../../components/menu/MenuListAndPreviewComponent";
import BasicBodyLayout from "../../layouts/common/BasicBodyLayout";
import MenuManagementComponent from "../../components/menu/MenuManagementComponent";

const MenuListPage = () => {
    return (
        <div>
            <h2>식당 메뉴 목록 페이지</h2>
            <MenuManagementComponent />
        </div>
    );
};

export default MenuListPage;
