import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faParking } from '@fortawesome/free-solid-svg-icons';
import { getDetailsByRestaurantId } from "../../../service/api";

const iconMap = {
  "주차가능": faParking
};

function RestaurantCarInfo({ rsId }) {
  const [restaurantDetails, setRestaurantDetails] = useState(null);

  useEffect(() => {
    if (rsId) {
      const fetchData = async () => {
        try {
          const data = await getDetailsByRestaurantId(rsId);
          setRestaurantDetails(data[0]);
        } catch (error) {
          console.error('Error fetching restaurant details:', error);
        }
      };

      fetchData();
    } else {
      console.error('rsId is undefined');
    }
  }, [rsId]);

  if (!restaurantDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-12">
          <h2 className="mb-4 fs-4">주차 정보</h2>
          <div className="card">
            <div className="card-body">
              <div className="d-flex flex-column align-items-center">
                <FontAwesomeIcon 
                  icon={iconMap["주차가능"]} 
                  size="2x" 
                  className="mb-2"
                />
                <p className="mb-0">{restaurantDetails.parkInfo}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RestaurantCarInfo;
