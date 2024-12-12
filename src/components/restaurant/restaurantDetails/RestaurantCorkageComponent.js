import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { getDetailsByRestaurantId } from "../../../service/api";

function RestaurantCorkage({ rsId }) {
  const [corkageDetails, setCorkageDetails] = useState(null);

  useEffect(() => {
    console.log('rsId:', rsId); // rsId 확인
    if (rsId) {
      const fetchData = async () => {
        try {
          const data = await getDetailsByRestaurantId(rsId);
          console.log('Restaurant details data:', data); // 데이터 확인
          setCorkageDetails(data[0]);
        } catch (error) {
          console.error('Error fetching restaurant details:', error);
        }
      };

      fetchData();
    } else {
      console.error('rsId is undefined');
    }
  }, [rsId]);

  if (!corkageDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-12">
          <h2 className="mb-4 fs-4">주류 및 콜키지</h2>
          <div className="card">
            <div className="card-body">
              <h6 className="card-subtitle mb-3 text-muted">기본 정보</h6>
              <ul className="list-unstyled">
                <li className="mb-2">• {corkageDetails.corkage}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RestaurantCorkage;
