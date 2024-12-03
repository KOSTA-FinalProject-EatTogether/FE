import React from 'react';
import KakaoMap from "../../../components/common/map/KakaoMap";
import Filter from '../../../components/restaurant/restaurantpreview/Filter';
import RestaurantList from '../../../components/restaurant/restaurantpreview/RestaurantList';
import BasicBodyLayout from "../../../layouts/common/BasicBodyLayout";

const RestaurantPreviewPage = () => {
  return (
      <>
          {/*<div className="restaurant-preview">*/}
          {/*    <KakaoMap/>*/}
          {/*    <Filter/>*/}
              <RestaurantList/>
          {/*</div>*/}
      </>


  );
};

export default RestaurantPreviewPage;
