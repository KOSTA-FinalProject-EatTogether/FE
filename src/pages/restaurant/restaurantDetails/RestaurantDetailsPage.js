import React from "react";
import '../../../css/restaurantDetailsCss/RestaurantMain.css';
import BasicBodyLayout from "../../../layouts/common/BasicBodyLayout";
import RestaurantFixDataComponent from "../../../components/restaurant/restaurantDetails/RestaurantFixDataComponent";
import RestaurantDetailsNavComponent
    from "../../../components/restaurant/restaurantDetails/RestaurantDetailsNavComponent";
 
const RestaurantDetailsPage = () => {


    return (
        <div>
            <RestaurantFixDataComponent/>
            <RestaurantDetailsNavComponent/>
            {/* <RestaurantDetailMainComponent/> */}
        </div>
    )
}
export default RestaurantDetailsPage;