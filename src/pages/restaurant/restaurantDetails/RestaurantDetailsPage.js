import React from 'react';
import { useParams } from 'react-router-dom';
import RestaurantFixDataComponent from "../../../components/restaurant/restaurantDetails/RestaurantFixDataComponent";
import RestaurantDetailsNavComponent from "../../../components/restaurant/restaurantDetails/RestaurantDetailsNavComponent";
import { getRestaurantById } from "../../../api/api";

const RestaurantDetailsPage = () => {
  const { rsId } = useParams();
  const [restaurantDetails, setRestaurantDetails] = React.useState(null);

  React.useEffect(() => {
    const fetchRestaurant = async () => {
      try {
        const response = await getRestaurantById(rsId);
        console.log('API 응답 데이터:', response.data); // API 응답 데이터 확인
        setRestaurantDetails(response.data.restaurant); // response.data.restaurant로 설정
      } catch (error) {
        console.error("데이터를 불러오는 중 오류 발생:", error);
      }
    };

    fetchRestaurant();
  }, [rsId]);

  return (
    <div>
      {restaurantDetails ? (
        <>
          <RestaurantFixDataComponent restaurant={restaurantDetails} />
          <RestaurantDetailsNavComponent restaurant={restaurantDetails} />
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default RestaurantDetailsPage;
