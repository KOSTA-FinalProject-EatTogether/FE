import React from "react";
import '../../css/restaurantDetailsCss/RestaurantMain.css';
import RestaurantFixDataComponent from "../../components/restaurantDetails/RestaurantFixDataComponent";
import RestaurantDetailsNavComponent from "../../components/restaurantDetails/RestaurantDetailsNavComponent";
import RestaurantDetailsServiceComponent from "../../components/restaurantDetails/RestaurantDetailsServiceComponent";
import RestaurantCarInfoComponent from "../../components/restaurantDetails/RestaurantCarInfoComponent";
import RestaurantCorkageComponent  from "../../components/restaurantDetails/RestaurantCorkageComponent";
import RestaurantDetailsPhotoComponent from "../../components/restaurantDetails/RestaurantDetailsPhotoComponent";
import RestaurantDetailsLocationComponent from "../../components/restaurantDetails/RestaurantDetailsLocationComponent";
import {Link} from "react-router-dom";
import RestaurantManageModifyButtonComponent from "../../components/RestaurantManage/RestaurantManageModifyButtonComponent";
import BasicBodyLayout from "../../layouts/common/BasicBodyLayout";

const RestaurantModifyPage = () => {


    return (
        <div>
            <RestaurantFixDataComponent/>
            <RestaurantDetailsNavComponent/>
            <RestaurantDetailsServiceComponent/>
            <RestaurantManageModifyButtonComponent/>
            <RestaurantCarInfoComponent/>
            <RestaurantCorkageComponent/>
            <RestaurantManageModifyButtonComponent/>
            <RestaurantDetailsPhotoComponent/>
            <RestaurantDetailsLocationComponent/>
            <RestaurantManageModifyButtonComponent/>
        </div>
    )
}
export default RestaurantModifyPage;