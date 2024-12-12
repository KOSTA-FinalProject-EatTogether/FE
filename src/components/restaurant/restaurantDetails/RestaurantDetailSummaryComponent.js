import React from 'react';
import RestaurantCarInfoComponent from "./RestaurantCarInfoComponent";
import RestaurantCorkageComponent from "./RestaurantCorkageComponent";
import RestaurantDetailsServiceComponent from "./RestaurantDetailsServiceComponent";
import RestaurantDetailsPhotoComponent from "./RestaurantDetailsPhotoComponent";
import RestaurantDetailsLocationComponent from "./RestaurantDetailsLocationComponent";
import { MenuPreview } from "../../menu/MenuListAndPreviewComponent";
import { ReviewPreview } from "../../reviews/ReviewListAndPreviewComponent";

const RestaurantDetailSummaryComponent = ({ rsId }) => {
    console.log('RestaurantDetailSummaryComponent rsId:', rsId); // rsId 값 확인
    return (
        <div>
            <RestaurantDetailsServiceComponent rsId={rsId} />
            <hr className="my-4 mx-3 opacity-25" />
            <RestaurantCarInfoComponent rsId={rsId} />
            <hr className="my-4 mx-3 opacity-25" />
            <RestaurantCorkageComponent rsId={rsId}/>
            <hr className="my-4 mx-3 opacity-25" />
            <MenuPreview rsId={rsId} />
            <hr className="my-4 mx-3 opacity-25" />
            <RestaurantDetailsPhotoComponent />
            <hr className="my-4 mx-3 opacity-25" />
            <ReviewPreview />
            <hr className="my-4 mx-3 opacity-25" />
            <RestaurantDetailsLocationComponent />
        </div>
    );
};

export default RestaurantDetailSummaryComponent;
