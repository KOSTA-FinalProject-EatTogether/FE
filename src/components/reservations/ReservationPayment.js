// ReservationPaymentComponent.js
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const dummyReservationData = {
    restaurantName: "아리아키친",
    location: "서울 성동구 성수동 2가 300-1",
    date: "2024-12-25",
    time: "18:00",
    guests: 4,
    depositPerPerson: 10000,
    paymentMethods: [
        { id: 'card', name: '신용카드', icon: '💳', pgProvider: 'mobilians' },
        { id: 'naverpay', name: '네이버페이', icon: 'N', pgProvider: 'naverpay' },
        { id: 'kakaopay', name: '카카오페이', icon: 'K', pgProvider: 'kakaopay' }
    ],
    bookingNumber: "AR241225-1234",
    tableInfo: "테라스석",
    customerInfo: {
        name: "홍길동",
        phone: "010-1234-5678",
        email: "hong@example.com"
    }
};

const ReservationPayment = () => {
    const [paymentMethod, setPaymentMethod] = useState('');
    const [requestMessage, setRequestMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const {
        restaurantName,
        location,
        date,
        time,
        guests,
        depositPerPerson,
        paymentMethods,
        bookingNumber,
        customerInfo
    } = dummyReservationData;

    const totalAmount = depositPerPerson * guests;

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://cdn.iamport.kr/v1/iamport.js';
        script.async = true;
        document.body.appendChild(script);

        script.onload = () => {
            const IMP = window.IMP;
            IMP.init('imp00000000'); // 테스트용 가맹점 식별코드
        };

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('ko-KR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            weekday: 'long'
        });
    };

    const handlePayment = () => {
        if (!paymentMethod || isLoading) return;

        const selectedMethod = paymentMethods.find(method => method.id === paymentMethod);
        if (!selectedMethod) return;

        setIsLoading(true);

        const IMP = window.IMP;

        const paymentData = {
            pg: `${selectedMethod.pgProvider}`,
            pay_method: selectedMethod.id,
            merchant_uid: `${bookingNumber}_${Date.now()}`,
            name: `${restaurantName} 예약금`,
            amount: totalAmount,
            buyer_email: customerInfo.email,
            buyer_name: customerInfo.name,
            buyer_tel: customerInfo.phone,
            buyer_addr: location,
            digital: true,
            notice_url: 'https://your-webhook-url.com/payments/hook', // 웹훅 URL (실제 운영시 설정 필요)
            custom_data: {
                reservationId: bookingNumber,
                requestMessage: requestMessage
            }
        };

        IMP.request_pay(paymentData, response => {
            setIsLoading(false);

            if (response.success) {
                alert('결제가 완료되었습니다!\n' +
                    `고유ID: ${response.imp_uid}\n` +
                    `상점 거래ID: ${response.merchant_uid}\n` +
                    `결제 금액: ${response.paid_amount}원`);

                // 여기서 결제 완료 후 처리 (예: 완료 페이지로 이동)
                console.log('Payment successful:', response);
                // window.location.href = '/reservation/complete';
            } else {
                alert(`결제에 실패하였습니다. ${response.error_msg}`);
                console.error('Payment failed:', response);
            }
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
                                <h6 className="mb-3">{restaurantName}</h6>
                                <p className="text-muted mb-0">{location}</p>
                            </div>

                            <div className="row mb-3">
                                <div className="col-6">
                                    <div className="text-muted small">날짜</div>
                                    <div>{formatDate(date)}</div>
                                </div>
                                <div className="col-6">
                                    <div className="text-muted small">시간</div>
                                    <div>{time}</div>
                                </div>
                            </div>

                            <div className="mb-3">
                                <div className="text-muted small">예약 인원</div>
                                <div>{guests}명</div>
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
                                {paymentMethods.map(method => (
                                    <div
                                        key={method.id}
                                        className={`btn text-start p-3 ${
                                            paymentMethod === method.id
                                                ? 'btn-primary'
                                                : 'btn-outline-primary'
                                        }`}
                                        onClick={() => setPaymentMethod(method.id)}
                                    >
                                        <span className="me-2">{method.icon}</span>
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
                                disabled={!paymentMethod || isLoading}
                                onClick={handlePayment}
                            >
                                {isLoading ? (
                                    <span>처리중...</span>
                                ) : (
                                    `${totalAmount.toLocaleString()}원 결제하기`
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReservationPayment;