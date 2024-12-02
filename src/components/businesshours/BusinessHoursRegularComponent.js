import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const BusinessHoursRegularComponent = () => {
   const [businessHours, setBusinessHours] = useState({
       mon: "휴무일",
       tue: "오전 9시 ~ 다음날 오전 10시",
       wed: "오전 10시 ~ 오후 10시",
       thu: "휴무일", 
       fri: "오전 10시 ~ 다음날 오전 10시",
       sat: "휴무일",
       sun: "오전 9시 ~ 다음날 오전 10시"
   });

   const [isEditing, setIsEditing] = useState(false);
   const [editedHours, setEditedHours] = useState({...businessHours});

   const daysOfWeek = {
       mon: '월요일',
       tue: '화요일',
       wed: '수요일',
       thu: '목요일',
       fri: '금요일',
       sat: '토요일',
       sun: '일요일'
   };

   const handleInputChange = (day, value) => {
       setEditedHours(prev => ({
           ...prev,
           [day]: value
       }));
   };

   const handleSubmit = (e) => {
       e.preventDefault();
       setBusinessHours(editedHours);
       setIsEditing(false);
   };

   return (
       <div className="container">
           <div className="d-flex justify-content-between align-items-center mb-4">
               <h2>정규 영업시간</h2>
               <button 
                   className={`btn ${isEditing ? 'btn-secondary' : 'btn-primary'}`}
                   onClick={() => {
                       if (isEditing) {
                           setEditedHours({...businessHours});
                       }
                       setIsEditing(!isEditing);
                   }}
               >
                   {isEditing ? '취소' : '영업시간 수정'}
               </button>
           </div>

           {isEditing ? (
               <form onSubmit={handleSubmit}>
                   <div className="card">
                       <div className="card-body">
                           {Object.entries(daysOfWeek).map(([day, dayName]) => (
                               <div key={day} className="mb-3">
                                   <label className="form-label fw-bold">{dayName}</label>
                                   <div className="d-flex gap-2">
                                       <input
                                           type="text"
                                           className="form-control"
                                           value={editedHours[day]}
                                           onChange={(e) => handleInputChange(day, e.target.value)}
                                           placeholder="예: 오전 9시 ~ 오후 10시 또는 휴무일"
                                       />
                                   </div>
                               </div>
                           ))}
                           <div className="mt-4">
                               <button type="submit" className="btn btn-success me-2">
                                   저장
                               </button>
                               <button 
                                   type="button" 
                                   className="btn btn-secondary"
                                   onClick={() => {
                                       setEditedHours({...businessHours});
                                       setIsEditing(false);
                                   }}
                               >
                                   취소
                               </button>
                           </div>
                       </div>
                   </div>
               </form>
           ) : (
               <div className="card">
                   <div className="card-body">
                       <table className="table table-hover">
                           <tbody>
                               {Object.entries(daysOfWeek).map(([day, dayName]) => (
                                   <tr key={day}>
                                       <th className="w-25">{dayName}</th>
                                       <td className={businessHours[day] === "휴무일" ? "text-danger" : ""}>
                                           {businessHours[day]}
                                       </td>
                                   </tr>
                               ))}
                           </tbody>
                       </table>
                   </div>
               </div>
           )}

           <div className="alert alert-info mt-4">
               <h5 className="alert-heading mb-3">안내</h5>
               <ul className="mb-0">
                   <li>정규 영업시간은 매주 반복되는 기본 영업시간입니다.</li>
                   <li>휴무일이나 특별 영업시간은 각각 해당 메뉴에서 설정해주세요.</li>
                   <li>24시간 이상 영업 시 "다음날"을 명시해주세요.</li>
               </ul>
           </div>
       </div>
   );
};

export default BusinessHoursRegularComponent;