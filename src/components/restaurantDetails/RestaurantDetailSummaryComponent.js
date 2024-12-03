import RestaurantCarInfoComponent from "./RestaurantCarInfoComponent"
import RestaurantCorkageComponent from "./RestaurantCorkageComponent"
import RestaurantDetailsServiceComponent from "./RestaurantDetailsServiceComponent"
import RestaurantDetailsPhotoComponent from "./RestaurantDetailsPhotoComponent"
import RestaurantDetailsLocationComponent from "./RestaurantDetailsLocationComponent"
import { MenuPreview } from "../../components/menu/MenuListAndPreviewComponent";
import { ReviewPreview } from "../reviews/ReviewListAndPreviewComponent"

const RestaurantDetailSummaryComponent = () => {
    return (
        <div>
            <RestaurantDetailsServiceComponent/>
            <hr className="my-4 mx-3 opacity-25" />
            
            <RestaurantCarInfoComponent/>
            <hr className="my-4 mx-3 opacity-25" />
            
            <RestaurantCorkageComponent/>
            <hr className="my-4 mx-3 opacity-25" />
            
            <MenuPreview />
            <hr className="my-4 mx-3 opacity-25" />
            
            <RestaurantDetailsPhotoComponent/>
            <hr className="my-4 mx-3 opacity-25" />
            
            <ReviewPreview/>
            <hr className="my-4 mx-3 opacity-25" />
            
            <RestaurantDetailsLocationComponent/>
        </div>
    )
 }
export default RestaurantDetailSummaryComponent
