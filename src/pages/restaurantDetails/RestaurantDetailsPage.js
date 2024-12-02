import React from "react";
import '../../css/restaurantDetailsCss/RestaurantMain.css';
import RestaurantFixDataComponent from "../../components/restaurantDetails/RestaurantFixDataComponent";
import RestaurantDetailsNavComponent from "../../components/restaurantDetails/RestaurantDetailsNavComponent";
import BasicBodyLayout from "../../layouts/common/BasicBodyLayout";
 
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