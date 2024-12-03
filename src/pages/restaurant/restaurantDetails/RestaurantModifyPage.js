import React from "react";
import '../../../css/restaurantDetailsCss/RestaurantMain.css';
import {Link} from "react-router-dom";
import BasicBodyLayout from "../../../layouts/common/BasicBodyLayout";
import RestaurantFixDataComponent from "../../../components/restaurant/restaurantDetails/RestaurantFixDataComponent";
import RestaurantDetailsNavComponent
    from "../../../components/restaurant/restaurantDetails/RestaurantDetailsNavComponent";
import RestaurantDetailsServiceComponent
    from "../../../components/restaurant/restaurantDetails/RestaurantDetailsServiceComponent";
import RestaurantManageModifyButtonComponent
    from "../../../components/restaurant/owner/RestaurantManageModifyButtonComponent";
import RestaurantCarInfoComponent from "../../../components/restaurant/restaurantDetails/RestaurantCarInfoComponent";
import RestaurantCorkageComponent from "../../../components/restaurant/restaurantDetails/RestaurantCorkageComponent";
import RestaurantDetailsPhotoComponent
    from "../../../components/restaurant/restaurantDetails/RestaurantDetailsPhotoComponent";
import RestaurantDetailsLocationComponent
    from "../../../components/restaurant/restaurantDetails/RestaurantDetailsLocationComponent";

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