import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const BusinessHoursHolidayComponent = () => {
   const [holidays, setHolidays] = useState([
       {
           id: 1,
           date: '2024-12-25',
           description: '크리스마스'
       }
   ]);

   const [newHoliday, setNewHoliday] = useState({
       date: '',
       description: ''
   });

   const handleInputChange = (e) => {
       const { name, value } = e.target;
       setNewHoliday(prev => ({
           ...prev,
           [name]: value
       }));
   };

   const handleSubmit = (e) => {
       e.preventDefault();
       
       if (!newHoliday.date) {
           alert('날짜를 선택해주세요.');
           return;
       }

       // 날짜 중복 체크
       if (holidays.some(holiday => holiday.date === newHoliday.date)) {
           alert('이미 등록된 날짜입니다.');
           return;
       }

       const newEntry = {
           id: Date.now(),
           ...newHoliday
       };

       setHolidays(prev => [...prev, newEntry]);
       setNewHoliday({
           date: '',
           description: ''
       });
   };

   const handleDelete = (id) => {
       setHolidays(prev => prev.filter(holiday => holiday.id !== id));
   };

   // 날짜순으로 정렬
   const sortedHolidays = [...holidays].sort((a, b) => new Date(a.date) - new Date(b.date));

   return (
       <div className="container">
           <h2 className="mb-4">휴무일 설정</h2>
           
           {/* 휴무일 추가 폼 */}
           <form onSubmit={handleSubmit} className="mb-4">
               <div className="row g-3">
                   <div className="col-md-6">
                       <label className="form-label">날짜</label>
                       <input
                           type="date"
                           className="form-control"
                           name="date"
                           value={newHoliday.date}
                           onChange={handleInputChange}
                       />
                   </div>
                   <div className="col-md-6">
                       <label className="form-label">설명 (선택사항)</label>
                       <input
                           type="text"
                           className="form-control"
                           name="description"
                           placeholder="예: 공휴일, 창립기념일 등"
                           value={newHoliday.description}
                           onChange={handleInputChange}
                       />
                   </div>
                   <div className="col-12">
                       <button type="submit" className="btn btn-primary">
                           휴무일 추가
                       </button>
                   </div>
               </div>
           </form>

           {/* 휴무일 목록 */}
           <div>
               <h3 className="mb-3">설정된 휴무일</h3>
               {sortedHolidays.length === 0 ? (
                   <p className="text-muted">설정된 휴무일이 없습니다.</p>
               ) : (
                   <div className="table-responsive">
                       <table className="table table-striped">
                           <thead>
                               <tr>
                                   <th>날짜</th>
                                   <th>설명</th>
                                   <th>작업</th>
                               </tr>
                           </thead>
                           <tbody>
                               {sortedHolidays.map(holiday => (
                                   <tr key={holiday.id}>
                                       <td>{holiday.date}</td>
                                       <td>{holiday.description || '-'}</td>
                                       <td>
                                           <button
                                               className="btn btn-danger btn-sm"
                                               onClick={() => handleDelete(holiday.id)}
                                           >
                                               삭제
                                           </button>
                                       </td>
                                   </tr>
                               ))}
                           </tbody>
                       </table>
                   </div>
               )}
           </div>

           {/* 주의사항 */}
           <div className="mt-4">
               <div className="alert alert-info" role="alert">
                   <h4 className="alert-heading">주의사항</h4>
                   <ul className="mb-0">
                       <li>정기 휴무일은 정규 영업시간에서 설정해주세요.</li>
                       <li>공휴일이나 특별한 휴무일만 이곳에서 설정해주세요.</li>
                       <li>설정된 휴무일은 월간 영업시간 캘린더에 반영됩니다.</li>
                   </ul>
               </div>
           </div>
       </div>
   );
};

export default BusinessHoursHolidayComponent;