import React from "react";
import '../../css/restaurantDetailsCss/RestaurantMain.css';
import RestaurantButtonDetailsComponent from "../../components/RestaurantDetailsButton/RestaurantButtonDetailsComponent";
import RestaurantDetailsLocationComponent from "../../components/restaurantDetails/RestaurantDetailsLocationComponent";
import RestaurantDetailsServiceComponent from "../../components/restaurantDetails/RestaurantDetailsServiceComponent";
import RestaurantCarInfoComponent from "../../components/restaurantDetails/RestaurantCarInfoComponent";
import RestaurantCorkageComponent from "../../components/restaurantDetails/RestaurantCorkageComponent";
import RestaurantDetailsNavComponent from "../../components/restaurantDetails/RestaurantDetailsNavComponent";
import RestaurantFixDataComponent from "../../components/restaurantDetails/RestaurantFixDataComponent";
import BasicBodyLayout from "../../layouts/common/BasicBodyLayout";

const RestaurantButtonDetailsPage = () => {


    return (
        <div>
            <RestaurantFixDataComponent/>
            <RestaurantDetailsNavComponent/>
            <RestaurantButtonDetailsComponent/>
            <RestaurantDetailsLocationComponent />
            <RestaurantDetailsServiceComponent/>
            <RestaurantCarInfoComponent/>
            <RestaurantCorkageComponent/>
            <RestaurantButtonDetailsComponent/>
        </div>
    )
}
export default RestaurantButtonDetailsPage;