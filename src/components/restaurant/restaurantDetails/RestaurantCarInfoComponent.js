import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faParking } from '@fortawesome/free-solid-svg-icons';

function RestaurantCarInfo() {
 return (
   <div className="container mt-4">
     <div className="row">
       <div className="col-12">
       <h2 className="mb-4 fs-4">주차 정보</h2>
         <div className="card">
           <div className="card-body">
             <div className="d-flex align-items-start mb-3">
               <FontAwesomeIcon icon={faCar} className="me-3 mt-1" />
               <p className="mb-0">
                 건물 내 전용 주차장 보유 (무료주차)
                 <br />
                 <small className="text-muted">주차 가능 대수: 20대</small>
               </p>
             </div>
             <div className="d-flex align-items-start">
               <FontAwesomeIcon icon={faParking} className="me-3 mt-1" />
               <p className="mb-0">
                 근처 외부 주차장 안내<br />
                 - 도보 3분 거리에 공영주차장 위치<br />
                 - 2시간 무료 주차 가능 (식사 영수증 제시)<br />
                 - 발렛파킹 서비스 이용 가능 (저녁시간 운영)
               </p>
             </div>
           </div>
         </div>
       </div>
     </div>
   </div>
 );
}

export default RestaurantCarInfo;