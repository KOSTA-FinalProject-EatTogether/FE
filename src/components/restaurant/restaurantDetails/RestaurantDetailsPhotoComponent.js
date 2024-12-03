import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import simba from '../../../assets/simba_icon.png';

const photoData = [
   { id: 1, src: simba, alt: "Restaurant Photo 1" },
   { id: 2, src: simba, alt: "Restaurant Photo 2" },
   { id: 3, src: simba, alt: "Restaurant Photo 3" },
   { id: 4, src: simba, alt: "Restaurant Photo 4" },
   { id: 5, src: simba, alt: "Restaurant Photo 5" },
   { id: 6, src: simba, alt: "Restaurant Photo 6" }
];

const MenuItem = () => {
   return (
       <div className="container mt-4">
           <h2 className="mb-4 fs-5">사진</h2>
           <div className="row g-2">
               {photoData.map((photo) => (
                   <div key={photo.id} className="col-4">
                       <div className="ratio ratio-1x1">
                           <img
                               src={photo.src}
                               alt={photo.alt}
                               className="rounded object-fit-cover w-100 h-100"
                           />
                       </div>
                   </div>
               ))}
           </div>
           <div className="text-center mt-3 mb-4">
               <button className="btn btn-outline-primary btn-sm">
                   사진 796개 전체보기
               </button>
           </div>
       </div>
   );
};

export default MenuItem;