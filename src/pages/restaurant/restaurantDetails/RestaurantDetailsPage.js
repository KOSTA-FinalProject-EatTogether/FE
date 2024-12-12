import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import RestaurantFixDataComponent from "../../../components/restaurant/restaurantDetails/RestaurantFixDataComponent";
import RestaurantDetailsNavComponent from "../../../components/restaurant/restaurantDetails/RestaurantDetailsNavComponent";
import RestaurantDetailSummaryComponent from "../../../components/restaurant/restaurantDetails/RestaurantDetailSummaryComponent";
import MenuListComponent, { MenuPreview } from "../../../components/menu/MenuListAndPreviewComponent";
import RestaurantButtonPhotoComponent from "../../../components/restaurant/RestaurantDetailsButton/RestaurantButtonPhotoComponent";
import ReviewList from "../../../components/reviews/ReviewListAndPreviewComponent";
import RestaurantButtonIntroPage from "../../../components/restaurant/RestaurantDetailsButton/RestaurantButtonIntroComponent";
import { getRestaurantById } from "../../../service/api"; 

const RestaurantDetailsPage = () => {
  const { rsId } = useParams();
  console.log('rsId from useParams:', rsId); // rsId 값 확인
  const [restaurantDetails, setRestaurantDetails] = useState(null);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const fetchRestaurant = async () => {
      try {
        const response = await getRestaurantById(rsId);
        console.log('API 응답 데이터:', response.data); // API 응답 데이터 확인
        setRestaurantDetails(response.data.restaurant);
      } catch (error) {
        console.error("데이터를 불러오는 중 오류 발생:", error);
      }
    };

    if (rsId) {
      fetchRestaurant();
    }
  }, [rsId]);

  return (
    <div>
      {restaurantDetails ? (
        <>
          <RestaurantFixDataComponent restaurant={restaurantDetails} />
          <RestaurantDetailsNavComponent 
            restaurant={restaurantDetails} 
            activeSection={activeSection} 
            setActiveSection={setActiveSection} 
          />
          {activeSection === 'home' && (
            <RestaurantDetailSummaryComponent rsId={rsId} /> 
          )}
          {activeSection === 'menu' && (
            <MenuListComponent rsId={rsId} /> 
          )}
          {activeSection === 'photos' && (
            <RestaurantButtonPhotoComponent/>
          )}
          {activeSection === 'reviews' && (
            <ReviewList/>
          )}
          {activeSection === 'restaurantDetails' && (
            <RestaurantButtonIntroPage rsId={rsId}
            />
          )}
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default RestaurantDetailsPage;
