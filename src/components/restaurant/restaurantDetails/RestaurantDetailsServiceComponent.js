import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getAmenitiesByRestaurantId } from "../../../service/api";
import { 
  faWineGlass, 
  faParking, 
  faWifi, 
  faCreditCard,
  faCalendarCheck,
  faTruck,
  faWheelchair,
  faBaby 
} from '@fortawesome/free-solid-svg-icons';

const iconMap = {
  "콜키지가능": faWineGlass,
  "주차가능": faParking,
  "와이파이": faWifi,
  "카드결제": faCreditCard,
  "예약가능": faCalendarCheck,
  "배달가능": faTruck,
  "장애인가능": faWheelchair,
  "유아시설": faBaby
};

function RestaurantDetailsServiceComponent({ rsId }) {
  const [amenities, setAmenities] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAmenitiesByRestaurantId(rsId);
        console.log('편의시설 데이터:', data); // 데이터 확인
        setAmenities(data);
      } catch (error) {
        console.error('Error fetching amenities:', error);
      }
    };

    fetchData();
  }, [rsId]);

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-12">
          <h2 className="mb-4 fs-4">편의 시설</h2>
          <div className="row row-cols-2 row-cols-md-4 g-4">
            {amenities.map((service, index) => {
              console.log('서비스 데이터:', service); // 서비스 데이터 전체 출력
              return (
                <div key={index} className="col text-center">
                  <div className="d-flex flex-column align-items-center">
                    <FontAwesomeIcon 
                      icon={iconMap[service.rsAmenityName]}  // 변경된 속성 이름 사용
                      size="2x" 
                      className="mb-2"
                    />
                    <span className="small">{service.rsAmenityName}</span> {/* 변경된 속성 이름 사용 */}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RestaurantDetailsServiceComponent;
