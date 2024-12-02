// ReservationPaymentComponent.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const dummyReservationData = {
    restaurantName: "아리아키친",
    location: "서울 성동구 성수동 2가 300-1",
    date: "2024-12-25",
    time: "18:00",
    guests: 4,
    depositPerPerson: 10000,
    paymentMethods: [
        { id: 'card', name: '신용카드', icon: '💳' },
        { id: 'naver', name: '네이버페이', icon: 'N' },
        { id: 'kakao', name: '카카오페이', icon: 'K' },
        { id: 'payco', name: '페이코', icon: 'P' }
    ],
    bookingNumber: "AR241225-1234",
    tableInfo: "테라스석",
    customerInfo: {
        name: "홍길동",
        phone: "010-1234-5678",
        email: "hong@example.com"
    }
 };




const ReservationPaymentComponent = ({ reservationData }) => {
   
    const [paymentMethod, setPaymentMethod] = useState('');
   const [requestMessage, setRequestMessage] = useState('');


   const { 
       restaurantName, 
       location, 
       date, 
       time, 
       guests, 
       depositPerPerson,
       paymentMethods, 
       bookingNumber,
       tableInfo,
       customerInfo 
   } = dummyReservationData;

   const totalAmount = depositPerPerson * dummyReservationData.guests;


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
       <div className="container my-5">
           <div className="row">
               <div className="col-md-8 mx-auto">
                   {/* 예약 정보 섹션 */}
                   <div className="card mb-4">
                       <div className="card-header bg-white">
                           <h5 className="mb-0">예약 정보</h5>
                       </div>
                       <div className="card-body">
                           <div className="mb-4">
                               <h6 className="mb-3">맛있는 식당</h6>
                               <p className="text-muted mb-0">서울 성동구 성수동</p>
                           </div>

                           <div className="row mb-3">
                               <div className="col-6">
                                   <div className="text-muted small">날짜</div>
                                   <div>{formatDate(dummyReservationData.date)}</div>
                               </div>
                               <div className="col-6">
                                   <div className="text-muted small">시간</div>
                                   <div>{dummyReservationData.time}</div>
                               </div>
                           </div>

                           <div className="mb-3">
                               <div className="text-muted small">예약 인원</div>
                               <div>{dummyReservationData.guests}명</div>
                           </div>
                       </div>
                   </div>

                   {/* 결제 수단 선택 */}
                   <div className="card mb-4">
                       <div className="card-header bg-white">
                           <h5 className="mb-0">결제 수단 선택</h5>
                       </div>
                       <div className="card-body">
                           <div className="d-grid gap-2">
                               {[
                                   { id: 'card', name: '신용카드' },
                                   { id: 'naver', name: '네이버페이' },
                                   { id: 'kakao', name: '카카오페이' },
                                   { id: 'payco', name: '페이코' }
                               ].map(method => (
                                   <div 
                                       key={method.id}
                                       className={`btn text-start p-3 ${
                                           paymentMethod === method.id 
                                           ? 'btn-primary' 
                                           : 'btn-outline-primary'
                                       }`}
                                       onClick={() => setPaymentMethod(method.id)}
                                   >
                                       {method.name}
                                   </div>
                               ))}
                           </div>
                       </div>
                   </div>

                   {/* 고객 요청사항 */}
                   <div className="card mb-4">
                       <div className="card-header bg-white">
                           <h5 className="mb-0">고객 요청사항</h5>
                       </div>
                       <div className="card-body">
                           <textarea
                               className="form-control"
                               rows="3"
                               placeholder="요청사항을 입력해주세요 (선택사항)"
                               value={requestMessage}
                               onChange={(e) => setRequestMessage(e.target.value)}
                           ></textarea>
                       </div>
                   </div>

                   {/* 최종 결제 금액 및 결제하기 버튼 */}
                   <div className="card mb-4">
                       <div className="card-body">
                           <div className="d-flex justify-content-between align-items-center mb-3">
                               <h5 className="mb-0">총 결제 금액</h5>
                               <h5 className="mb-0">{totalAmount.toLocaleString()}원</h5>
                           </div>
                           <p className="text-muted small mb-4">
                               * 1인당 예약금 {depositPerPerson.toLocaleString()}원
                           </p>
                           <button 
                               className="btn btn-primary w-100 py-2"
                               disabled={!paymentMethod}
                           >
                               {totalAmount.toLocaleString()}원 결제하기
                           </button>
                       </div>
                   </div>
               </div>
           </div>
       </div>
   );
};

export default ReservationPaymentComponent;