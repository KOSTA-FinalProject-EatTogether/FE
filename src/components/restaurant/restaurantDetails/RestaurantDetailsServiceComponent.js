import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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

const serviceData = [
 { icon: faWineGlass, name: '콜키지 가능' },
 { icon: faParking, name: '주차 가능' },
 { icon: faWifi, name: '와이파이' },
 { icon: faCreditCard, name: '카드 결제' },
 { icon: faCalendarCheck, name: '예약 가능' },
 { icon: faTruck, name: '배달 가능' },
 { icon: faWheelchair, name: '장애인 시설' },
 { icon: faBaby, name: '유아 시설' }
];

function RestaurantDetailsService() {
 return (
   <div className="container mt-4">
     <div className="row">
       <div className="col-12">
       <h2 className="mb-4 fs-4">편의 시설</h2>
         <div className="row row-cols-2 row-cols-md-4 g-4">
           {serviceData.map((service, index) => (
             <div key={index} className="col text-center">
               <div className="d-flex flex-column align-items-center">
                 <FontAwesomeIcon 
                   icon={service.icon} 
                   size="2x" 
                   className="mb-2"
                 />
                 <span className="small">{service.name}</span>
               </div>
             </div>
           ))}
         </div>
       </div>
     </div>
   </div>
 );
}

export default RestaurantDetailsService;