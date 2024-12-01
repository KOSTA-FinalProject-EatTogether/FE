import RestaurantFixData from "../../components/restaurantDetails/RestaurantFixData";
import RestaurantDetailsNav from "../../components/restaurantDetails/RestaurantDetailsNav";
import RestaurantDetailsService from "../../components/restaurantDetails/RestaurantDetailsService";
import RestaurantCarInfo from "../../components/restaurantDetails/RestaurantCarInfo";
import React from "react";

const RestaurantDetailsPage = () => {


    return (
        <div>
            <RestaurantFixData/>
            <RestaurantDetailsNav/>
            <RestaurantDetailsService/>
            <RestaurantCarInfo />
        </div>
    )
}
export default RestaurantDetailsPage;