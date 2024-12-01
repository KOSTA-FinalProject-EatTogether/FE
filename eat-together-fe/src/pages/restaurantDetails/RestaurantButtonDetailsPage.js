import React from "react";
import '../../css/restaurantDetailsCss/RestaurantMain.css';
import RestaurantButtonDetails from "../../components/RestaurantDetailsButton/RestaurantButtonDetails";
import RestaurantDetailsLocation from "../../components/restaurantDetails/RestaurantDetailsLocation";
import RestaurantDetailsService from "../../components/restaurantDetails/RestaurantDetailsService";
import RestaurantCarInfo from "../../components/restaurantDetails/RestaurantCarInfo";
import RestaurantCorkage from "../../components/restaurantDetails/RestaurantCorkage";
import RestaurantDetailsNav from "../../components/restaurantDetails/RestaurantDetailsNav";
import RestaurantFixData from "../../components/restaurantDetails/RestaurantFixData";

const RestaurantDetailsPage = () => {


    return (
        <div>
            <RestaurantFixData/>
            <RestaurantDetailsNav/>
            <RestaurantButtonDetails/>
            <RestaurantDetailsLocation />
            <RestaurantDetailsService/>
            <RestaurantCarInfo/>
            <RestaurantCorkage/>
            <RestaurantButtonDetails/>
        </div>
    )
}
export default RestaurantDetailsPage;