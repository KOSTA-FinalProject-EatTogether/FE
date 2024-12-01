import React from "react";
import '../../css/restaurantDetailsCss/RestaurantMain.css';
import RestaurantFixData from "../../components/restaurantDetails/RestaurantFixData";
import RestaurantDetailsNav from "../../components/restaurantDetails/RestaurantDetailsNav";
import RestaurantDetailsService from "../../components/restaurantDetails/RestaurantDetailsService";
import RestaurantCarInfo from "../../components/restaurantDetails/RestaurantCarInfo";
import RestaurantCorkage  from "../../components/restaurantDetails/RestaurantCorkage";
import RestaurantDetailsMenu from "../../components/restaurantDetails/RestaurantDetailsMenu";
import RestaurantDetailsPhoto from "../../components/restaurantDetails/RestaurantDetailsPhoto";
import RestaurantDetailsReview from "../../components/restaurantDetails/RestaurantDetailsReview";
import RestaurantDetailsLocation from "../../components/restaurantDetails/RestaurantDetailsLocation";
import {Link} from "react-router-dom";
import RestaurantManageModifyButton from "../../components/RestaurantManage/RestaurantManageModifyButton";

const RestaurantModifyPage = () => {


    return (
        <div>
            <RestaurantFixData/>
            <RestaurantDetailsNav/>
            <RestaurantDetailsService/>
            <RestaurantManageModifyButton/>
            <RestaurantCarInfo/>
            <RestaurantCorkage/>
            <RestaurantDetailsMenu/>
            <RestaurantManageModifyButton/>
            <RestaurantDetailsPhoto/>
            <RestaurantDetailsReview/>
            <RestaurantDetailsLocation/>
            <RestaurantManageModifyButton/>
        </div>
    )
}
export default RestaurantModifyPage;