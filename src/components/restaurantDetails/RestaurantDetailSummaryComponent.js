import RestaurantCarInfoComponent from "./RestaurantCarInfoComponent"
import RestaurantCorkageComponent from "./RestaurantCorkageComponent"
import RestaurantDetailsServiceComponent from "./RestaurantDetailsServiceComponent"
import RestaurantDetailsMenuComponent from "./RestaurantDetailsMenuComponent"
import RestaurantDetailsPhotoComponent from "./RestaurantDetailsPhotoComponent"
import RestaurantDetailsReviewComponent from "./RestaurantDetailsReviewComponent"
import RestaurantDetailsLocationComponent from "./RestaurantDetailsLocationComponent"
import { MenuPreview } from "../../components/menu/MenuListAndPreviewComponent";
import { ReviewPreview } from "../reviews/ReviewListAndPreviewComponent"

const RestaurantDetailSummaryComponent = () =>{
    return(
        <div>
            <RestaurantDetailsServiceComponent/>
            <RestaurantCarInfoComponent/>
            <RestaurantCorkageComponent/>
            <MenuPreview />
            <RestaurantDetailsPhotoComponent/>
            <ReviewPreview/>
            <RestaurantDetailsLocationComponent/>
        </div>
    )
}

export default RestaurantDetailSummaryComponent
