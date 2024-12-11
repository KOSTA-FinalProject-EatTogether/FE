import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getRestaurantReservationInfo, createReservationwithoutdeposit } from "../../api/reservationApi";
import { verifyPayment, createReservation } from "../../api/paymentApi";



const ReservationConfirm = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const reservationData = location.state;
    const [request, setRequest] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('inicis_card');
    const [restaurantInfo, setRestaurantInfo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [userInfo, setUserInfo] = useState({
        userName: '',
        userPhone: ''
    });

    const getPgAndPayMethod = (method) => {
        switch(method) {
            case 'kakaopay':
                return { pg: 'kakaopay', pay_method: 'card' };
            case 'tosspay':
                return { pg: 'tosspayments', pay_method: 'card' };
            case 'payco':
                return { pg: 'payco', pay_method: 'card' };
            case 'inicis_card':
                return { pg: 'html5_inicis', pay_method: 'card' };
            default:
                return { pg: 'html5_inicis', pay_method: 'card' };
        }
    };

    useEffect(() => {
        const fetchRestaurantInfo = async () => {
            try {
                setLoading(true);
                const info = await getRestaurantReservationInfo(reservationData.restaurant.rsId);
                setRestaurantInfo(info);
            } catch (error) {
                console.error('예약 정보를 불러오는데 실패했습니다:', error);
                setError('예약 정보를 불러오는데 실패했습니다.');
            } finally {
                setLoading(false);
            }
        };

        if (reservationData?.restaurant?.rsId) {
            fetchRestaurantInfo();
        }
    }, [reservationData]);

    const handleUserInfoChange = (e) => {
        const { name, value } = e.target;
        setUserInfo(prev => ({
            ...prev,
            [name]: value
        }));
    };


    const handlePayment = async () => {
        const IMP = window.IMP;
        IMP.init('imp63523851');

        const { pg, pay_method } = getPgAndPayMethod(paymentMethod);

        try {
            const response = await IMP.request_pay({
                pg,
                pay_method,
                merchant_uid: `mid_${new Date().getTime()}`,
                name: `${reservationData.restaurant.name} 예약금`,
                amount: restaurantInfo.rsDepositAmount * reservationData.people,
                buyer_name: '구매자이름', // TODO: 로그인된 사용자 정보
                buyer_tel: '구매자번호',  // TODO: 로그인된 사용자 정보
                buyer_email: '구매자이메일',
            });

            if (response.success) {
                return response;
            } else {
                throw new Error(response.error_msg);
            }
        } catch (error) {
            throw new Error('결제 처리 중 오류가 발생했습니다.');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            let reservationRequestData;

            if (restaurantInfo?.rsDepositRequired) {
                // 예약금이 필요한 경우
                const paymentResponse = await handlePayment();

                reservationRequestData = {
                    restaurantId: reservationData.restaurant.rsId,
                    date: reservationData.date,
                    time: reservationData.time,
                    people: reservationData.people,
                    request: request,
                    payment: {
                        imp_uid: paymentResponse.imp_uid,
                        merchant_uid: paymentResponse.merchant_uid,
                        amount: paymentResponse.paid_amount,
                        status: paymentResponse.status,
                        pg_provider: paymentResponse.pg_provider,
                        pay_method: paymentResponse.pay_method
                    }
                };
            } else {
                // 예약금이 필요없는 경우
                reservationRequestData = {
                    rsId: parseInt(reservationData.restaurant.rsId),
                    userId: 1,
                    guestName: userInfo.userName,
                    rsReservationPartySize: reservationData.people,
                    rsReservationDate: reservationData.date,
                    rsReservationTime: reservationData.time.substring(0, 5),
                    rsReservationRequest: request
                };

                
                console.log("Sending reservation data:", reservationRequestData);
                
                const response = await createReservationwithoutdeposit(reservationRequestData);
                console.log("Received response:", response); // 응답 데이터 구조 확인
                const reservationId = response.data?.rs_reservation_id;

                console.log("reservationId",reservationId)
                navigate('/reservation/complete', {
                    state: {
                        reservationId: response.data, // 예약 ID 추가
                        restaurantName: reservationData.restaurant.name,
                        restaurantId: reservationData.restaurant.rsId,
                        date: reservationData.date,
                        time: reservationData.time,
                        people: reservationData.people,
                        guestName: userInfo.userName,
                        guestPhone: userInfo.userPhone,
                        request: request,
                        depositRequired: restaurantInfo?.rsDepositRequired,
                        depositAmount: restaurantInfo?.rsDepositRequired ?
                            restaurantInfo.rsDepositAmount * reservationData.people : 0
                    }

                });
            }


        } catch (error) {
            console.error('처리 중 오류가 발생했습니다:', error);
            alert(error.message);
        }
    };

    if (!reservationData) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-xl font-semibold mb-4">잘못된 접근입니다</h2>
                    <button
                        onClick={() => navigate('/')}
                        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    >
                        메인으로 돌아가기
                    </button>
                </div>
            </div>
        );
    }

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-xl font-semibold">로딩중...</h2>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-xl font-semibold text-red-500 mb-4">{error}</h2>
                    <button
                        onClick={() => navigate(-1)}
                        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    >
                        이전으로 돌아가기
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-2xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-6">예약 확인</h1>

            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-xl font-semibold mb-4">{reservationData.restaurant.name}</h2>

                <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="text-gray-600">예약 날짜</div>
                        <div>{reservationData.date}</div>

                        <div className="text-gray-600">예약 시간</div>
                        <div>{reservationData.time}</div>

                        <div className="text-gray-600">예약 인원</div>
                        <div>{reservationData.people}명</div>
                    </div>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-lg font-semibold mb-4">예약자 정보</h3>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                이름
                            </label>
                            <input
                                type="text"
                                name="userName"
                                value={userInfo.userName}
                                onChange={handleUserInfoChange}
                                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="예약자 이름을 입력해주세요"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                연락처
                            </label>
                            <input
                                type="tel"
                                name="userPhone"
                                value={userInfo.userPhone}
                                onChange={handleUserInfoChange}
                                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="연락처를 입력해주세요 (예: 010-1234-5678)"
                                required
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        요청사항
                    </label>
                    <textarea
                        value={request}
                        onChange={(e) => setRequest(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        rows={4}
                        placeholder="요청사항을 입력해주세요. (선택사항)"
                    />
                </div>

                {restaurantInfo?.rsDepositRequired && (
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="text-lg font-semibold mb-4">예약금 결제</h3>
                        <div className="space-y-4">
                            <div className="border-b pb-4">
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center">
                                        <p className="text-gray-600">1인당 예약금</p>
                                        <p className="font-medium">{restaurantInfo.rsDepositAmount.toLocaleString()}원</p>
                                    </div>
                                    <div className="flex justify-between items-center border-t pt-3">
                                        <p className="text-gray-600">총 예약금 ({reservationData.people}인)</p>
                                        <p className="text-xl font-bold text-blue-600">
                                            {(restaurantInfo.rsDepositAmount * reservationData.people).toLocaleString()}원
                                        </p>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-500 mt-3">
                                    * 예약금은 방문 시 식사 금액에서 차감됩니다.
                                </p>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    결제 수단 선택
                                </label>
                                <div className="grid grid-cols-2 gap-2">
                                    <label
                                        className="flex items-center p-3 border rounded-md hover:border-blue-500 cursor-pointer">
                                        <input
                                            type="radio"
                                            value="inicis_card"
                                            checked={paymentMethod === 'inicis_card'}
                                            onChange={(e) => setPaymentMethod(e.target.value)}
                                            className="form-radio text-blue-500"
                                        />
                                        <span className="ml-2">카드결제</span>
                                    </label>
                                    <label
                                        className="flex items-center p-3 border rounded-md hover:border-blue-500 cursor-pointer">
                                        <input
                                            type="radio"
                                            value="kakaopay"
                                            checked={paymentMethod === 'kakaopay'}
                                            onChange={(e) => setPaymentMethod(e.target.value)}
                                            className="form-radio text-blue-500"
                                        />
                                        <span className="ml-2">카카오페이</span>
                                    </label>
                                    <label
                                        className="flex items-center p-3 border rounded-md hover:border-blue-500 cursor-pointer">
                                        <input
                                            type="radio"
                                            value="payco"
                                            checked={paymentMethod === 'payco'}
                                            onChange={(e) => setPaymentMethod(e.target.value)}
                                            className="form-radio text-blue-500"
                                        />
                                        <span className="ml-2">페이코</span>
                                    </label>
                                    <label
                                        className="flex items-center p-3 border rounded-md hover:border-blue-500 cursor-pointer">
                                        <input
                                            type="radio"
                                            value="tosspay"
                                            checked={paymentMethod === 'tosspay'}
                                            onChange={(e) => setPaymentMethod(e.target.value)}
                                            className="form-radio text-blue-500"
                                        />
                                        <span className="ml-2">토스페이</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                <div className="flex gap-4">
                    <button
                        type="button"
                        onClick={() => navigate(-1)}
                        className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200"
                    >
                        이전으로
                    </button>
                    <button
                        type="submit"
                        className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    >
                        {restaurantInfo?.rsDepositRequired ? '결제하기' : '예약하기'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ReservationConfirm;