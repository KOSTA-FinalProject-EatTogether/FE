import '../../css/restaurantDetailsCss/RestaurantMain.css';
import RestaurantFixData from "../../components/restaurantDetails/RestaurantFixData";
import RestaurantDetailsNav from "../../components/restaurantDetails/RestaurantDetailsNav";
import RestaurantDetailsService from "../../components/restaurantDetails/RestaurantDetailsService";
import RestaurantCarInfo from "../../components/restaurantDetails/RestaurantCarInfo";
import RestaurantCorkage  from "../../components/restaurantDetails/RestaurantCorkage";
import RestaurantDetailsMenu from "../../components/restaurantDetails/RestaurantDetailsMenu";
import React from "react";

const RestaurantDetailsPage = () => {


    return (
        <div>
            <RestaurantFixData/>
            <RestaurantDetailsNav/>
            <RestaurantDetailsService/>
            <RestaurantCarInfo />
            <RestaurantCorkage/>
            <RestaurantDetailsMenu/>
        </div>
    )
}
export default RestaurantDetailsPage;