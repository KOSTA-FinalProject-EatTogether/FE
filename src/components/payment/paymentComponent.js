import * as PortOne from "@portone/browser-sdk/v2";

const paymentComponent = async () => {
    const response = await PortOne.requestPayment({
        // Store ID 설정
        storeId: "store-4ff4af41-85e3-4559-8eb8-0d08a2c6ceec",
        // 채널 키 설정
        channelKey: "channel-key-893597d6-e62d-410f-83f9-119f530b4b11",
        paymentId: `payment-${crypto.randomUUID()}`,
        orderName: "나이키 와플 트레이너 2 SD",
        totalAmount: 1000,
        currency: "CURRENCY_KRW",
        payMethod: "CARD",
    });

    return (
        <>
        </>
    )
}
export default paymentComponent