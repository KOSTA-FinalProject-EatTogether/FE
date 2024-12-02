// ReservationConfirmDialog.js
import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

const ReservationConfirmDialog = ({ isOpen, onClose, reservationData }) => {
   const dialogRef = useRef(null);
   const depositPerPerson = 10000; // 1인당 예약금
   const totalDeposit = depositPerPerson * reservationData.guests;

   useEffect(() => {
       if (isOpen) {
           dialogRef.current.showModal();
       } else {
           dialogRef.current.close();
       }
   }, [isOpen]);

   const formatDate = (dateString) => {
       const date = new Date(dateString);
       return date.toLocaleDateString('ko-KR', { 
           year: 'numeric', 
           month: 'long', 
           day: 'numeric',
           weekday: 'long'
       });
   };

   return (
       <dialog
           ref={dialogRef}
           className="p-0 rounded"
           style={{ 
               width: '100%', 
               maxWidth: '500px',
               border: 'none'
           }}
           onClick={(e) => {
               if (e.target === dialogRef.current) {
                   onClose();
               }
           }}
       >
           <div className="modal-content" onClick={(e) => e.stopPropagation()}>
               <div className="modal-header">
                   <h5 className="modal-title">예약 확인</h5>
                   <button 
                       type="button" 
                       className="btn-close"
                       onClick={onClose}
                   ></button>
               </div>
               <div className="modal-body">
                   <div className="mb-4">
                       <h4>맛있는 식당</h4>
                       <p className="text-muted mb-0">서울 성동구 성수동</p>
                   </div>

                   <div className="d-flex align-items-center mb-4">
                       <div className="me-4">
                           <div className="small text-muted">날짜</div>
                           <div>{formatDate(reservationData.date)}</div>
                       </div>
                       <div>
                           <div className="small text-muted">시간</div>
                           <div>{reservationData.time}</div>
                       </div>
                   </div>

                   <div className="mb-4">
                       <div className="small text-muted mb-2">예약 인원</div>
                       <div>{reservationData.guests}명</div>
                   </div>

                   <div className="card bg-light">
                       <div className="card-body">
                           <h6 className="card-title mb-3">예약금</h6>
                           <div className="d-flex justify-content-between mb-2">
                               <span>1인 예약금</span>
                               <span>{depositPerPerson.toLocaleString()}원</span>
                           </div>
                           <div className="d-flex justify-content-between fw-bold">
                               <span>총 예약금</span>
                               <span>{totalDeposit.toLocaleString()}원</span>
                           </div>
                       </div>
                   </div>
               </div>
               <div className="modal-footer justify-content-end">
                   <button 
                       type="button" 
                       className="btn btn-primary"
                       onClick={onClose}
                   >
                       다음
                   </button>
               </div>
           </div>
       </dialog>
   );
};

ReservationConfirmDialog.propTypes = {
   isOpen: PropTypes.bool.isRequired,
   onClose: PropTypes.func.isRequired,
   reservationData: PropTypes.shape({
       date: PropTypes.string.isRequired,
       time: PropTypes.string.isRequired,
       guests: PropTypes.number.isRequired
   }).isRequired
};

export default ReservationConfirmDialog;