import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const ReservationComplete = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const reservationData = location.state;

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

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('ko-KR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            weekday: 'long'
        });
    };

    const getPaymentMethodName = (pgProvider, payMethod) => {
        if (pgProvider === 'kakaopay') return '카카오페이';
        if (pgProvider === 'tosspayments') return '토스페이';
        if (pgProvider === 'payco') return '페이코';
        if (pgProvider === 'html5_inicis' && payMethod === 'card') return '신용카드';
        return '기타';
    };

    return (
        <div className="max-w-2xl mx-auto p-6">
            <div className="text-center mb-8">
                <div className="flex justify-center mb-4">
                    <CheckCircle className="w-16 h-16 text-green-500" />
                </div>
                <h1 className="text-2xl font-bold mb-2">
                    {reservationData.payment ? '예약금 결제 및 예약이 완료되었습니다' : '예약이 완료되었습니다'}
                </h1>
                <p className="text-gray-600">
                    예약 내용을 확인해 주세요
                </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-xl font-semibold mb-6 pb-4 border-b">
                    {reservationData.restaurantName}
                </h2>

                <div className="space-y-4">
                    <div className="grid grid-cols-5 gap-4">
                        <div className="text-gray-600 col-span-2">예약 번호</div>
                        <div className="font-medium col-span-3">{reservationData.reservationId || '-'}</div>

                        <div className="text-gray-600 col-span-2">예약자 이름</div>
                        <div className="font-medium col-span-3">{reservationData.guestName}</div>

                        <div className="text-gray-600 col-span-2">연락처</div>
                        <div className="font-medium col-span-3">{reservationData.guestPhone}</div>

                        <div className="text-gray-600 col-span-2">예약 날짜</div>
                        <div className="font-medium col-span-3">{formatDate(reservationData.date)}</div>

                        <div className="text-gray-600 col-span-2">예약 시간</div>
                        <div className="font-medium col-span-3">{reservationData.time}</div>

                        <div className="text-gray-600 col-span-2">예약 인원</div>
                        <div className="font-medium col-span-3">{reservationData.people}명</div>

                        {reservationData.request && (
                            <>
                                <div className="text-gray-600 col-span-2">요청사항</div>
                                <div className="font-medium col-span-3">{reservationData.request}</div>
                            </>
                        )}
                    </div>
                </div>

                {reservationData.payment && (
                    <div className="mt-6 pt-4 border-t">
                        <h3 className="text-lg font-semibold mb-4">예약금 결제 정보</h3>
                        <div className="space-y-3">
                            <div className="flex justify-between items-center">
                                <span className="text-gray-600">결제 금액</span>
                                <span className="font-medium">
                                    {reservationData.payment.amount.toLocaleString()}원
                                </span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-600">결제 수단</span>
                                <span className="font-medium">
                                    {getPaymentMethodName(reservationData.payment.pg_provider, reservationData.payment.pay_method)}
                                </span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-600">결제 상태</span>
                                <span className="font-medium text-green-600">
                                    결제 완료
                                </span>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <h3 className="font-medium mb-2">안내사항</h3>
                <ul className="list-disc space-y-1 text-gray-600 text-sm">
                    <li>예약 시간 10분 전까지 도착해 주시기 바랍니다.</li>
                    <li>예약 인원 변경이나 취소는 예약시간 24시간 전까지 가능합니다.</li>
                    {reservationData.payment ? (
                        <>
                            <li className="text-blue-600">예약금은 방문 시 식사 금액에서 차감됩니다.</li>
                            <li className="text-blue-600">노쇼나 당일 취소 시 예약금은 환불되지 않습니다.</li>
                        </>
                    ) : (
                        <li>당일 취소나 노쇼는 향후 예약에 제한이 있을 수 있습니다.</li>
                    )}
                    <li>문의사항은 레스토랑으로 직접 연락 부탁드립니다.</li>
                </ul>
            </div>

            <div className="flex gap-4">
                <button
                    onClick={() => navigate('/reservations')}
                    className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                    예약 내역 보기
                </button>
                <button
                    onClick={() => navigate('/main')}
                    className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200"
                >
                    메인으로
                </button>
            </div>
        </div>
    );
};

export default ReservationComplete;