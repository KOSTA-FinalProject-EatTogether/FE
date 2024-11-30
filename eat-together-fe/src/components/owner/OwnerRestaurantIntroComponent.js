import InputField from "../common/InputField";

const DUMMY_STORE = {
    name: "맛좋은 감자탕",
    description: "맛좋은 감자탕집입니다.",
    address: "서울시 중랑구 상봉동 2893848번지",
    openhour: "평일 : 오전 9시 30분 ~ 오후 7시 30분",
    contact: "02-1234-2345",
};

const OwnerRestaurantIntroComponent = () => {
    return (
        <div>
            <div>
                <h3>{DUMMY_STORE.name}</h3>
            </div>
            <div>{DUMMY_STORE.description}</div>
            <div>주소 : {DUMMY_STORE.address}</div>
            <div>영업시간 : {DUMMY_STORE.openhour}</div>
            <div>연락처 : {DUMMY_STORE.contact}</div>
        </div>
    );
};

export default OwnerRestaurantIntroComponent;
