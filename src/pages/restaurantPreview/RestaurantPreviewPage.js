import React from 'react';
import KakaoMapComponent from "../../components/map/KakaoMapComponent";
import Filter from '../../components/restaurantpreview/Filter';
import RestaurantList from '../../components/restaurantpreview/RestaurantList';
import BasicBodyLayout from "../../layouts/common/BasicBodyLayout";

const RestaurantPreviewPage = () => {
  return (
      <>
          {/*<div className="restaurant-preview">*/}
          {/*    <KakaoMapComponent/>*/}
          {/*    <Filter/>*/}
              <RestaurantList/>
          {/*</div>*/}
      </>


  );
};

export default RestaurantPreviewPage;
