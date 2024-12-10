// PaymentButton.jsx
import React from 'react';

const PaymentButton = ({ orderData }) => {
    const onClickPayment = () => {
        const { IMP } = window;
        IMP.init('your_imp_key'); // 포트원 가맹점 식별코드

        // 결제 데이터 준비
        const data = {
            pg: 'html5_inicis',           // PG사 (관리자 페이지에서 설정한 PG사 사용)
            pay_method: 'card',           // 결제수단
            merchant_uid: `mid_${new Date().getTime()}`,   // 주문번호
            amount: orderData.amount,     // 결제금액
            name: orderData.productName,  // 주문명
            buyer_name: orderData.buyerName,    // 구매자 이름
            buyer_tel: orderData.buyerTel,      // 구매자 전화번호
            buyer_email: orderData.buyerEmail,  // 구매자 이메일
            buyer_addr: orderData.buyerAddr,    // 구매자 주소
        };

        // 결제 창 호출
        IMP.request_pay(data, callback);
    };

    const callback = async (response) => {
        const { success, error_msg, imp_uid, merchant_uid } = response;

        if (success) {
            // 결제 성공 시 로직
            try {
                // 결제 검증 요청
                const validateResult = await fetch('/api/payments/validate', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        imp_uid: imp_uid,
                        merchant_uid: merchant_uid,
                    }),
                });

                if (validateResult.ok) {
                    alert('결제가 완료되었습니다.');
                    // 결제 성공 후 추가 로직
                } else {
                    throw new Error('결제 검증 실패');
                }
            } catch (error) {
                alert('결제 검증 중 오류가 발생했습니다.');
                console.error(error);
            }
        } else {
            alert(`결제 실패: ${error_msg}`);
        }
    };

    return (
        <button
            onClick={onClickPayment}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
            결제하기
        </button>
    );
};

export default PaymentButton;