import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function RestaurantCorkage() {
 return (
   <div className="container mt-4">
     <div className="row">
       <div className="col-12">
         <h2 className="mb-4 fs-4">주류 및 콜키지</h2>
         <div className="card">
           <div className="card-body">
             <h6 className="card-subtitle mb-3 text-muted">기본 정보</h6>
             <ul className="list-unstyled">
               <li className="mb-2">• 와인 콜키지: 병당 30,000원</li>
               <li className="mb-2">• 소주/맥주 콜키지: 반입 불가</li>
               <li className="mb-2">• 양주 콜키지: 병당 50,000원</li>
             </ul>
             
             <h6 className="card-subtitle mb-3 text-muted mt-4">보유 주류</h6>
             <ul className="list-unstyled">
               <li className="mb-2">• 와인: 25,000원~150,000원</li>
               <li className="mb-2">• 소주: 5,000원</li>
               <li className="mb-2">• 맥주: 8,000원</li>
               <li className="mb-2">• 양주: 120,000원~</li>
             </ul>
           </div>
         </div>
       </div>
     </div>
   </div>
 );
}

export default RestaurantCorkage;