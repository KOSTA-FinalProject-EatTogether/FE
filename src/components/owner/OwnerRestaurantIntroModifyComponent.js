import React, { useState } from "react";
import InputField from "../common/InputField";

const OwnerRestaurantIntroEditComponent = () => {
    // Initial state based on the dummy store data
    const [storeInfo, setStoreInfo] = useState({
        name: "맛좋은 감자탕",
        description: "맛좋은 감자탕집입니다.",
        address: "서울시 중랑구 상봉동 2893848번지",
        openhour: "평일 : 오전 9시 30분 ~ 오후 7시 30분",
        contact: "02-1234-2345",
    });

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setStoreInfo((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the updated information to a backend
        console.log("Updated Store Information:", storeInfo);
        // Add your API call or state management logic here
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label htmlFor="name" className="block mb-2">
                    상호명
                </label>
                <InputField
                    type="text"
                    id="name"
                    name="name"
                    value={storeInfo.name}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                />
            </div>

            <div>
                <label htmlFor="description" className="block mb-2">
                    가게 설명
                </label>
                <InputField
                    type="text"
                    id="description"
                    name="description"
                    value={storeInfo.description}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                />
            </div>

            <div>
                <label htmlFor="address" className="block mb-2">
                    주소
                </label>
                <InputField
                    type="text"
                    id="address"
                    name="address"
                    value={storeInfo.address}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                />
            </div>

            <div>
                <label htmlFor="openhour" className="block mb-2">
                    영업시간
                </label>
                <InputField
                    type="text"
                    id="openhour"
                    name="openhour"
                    value={storeInfo.openhour}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                />
            </div>

            <div>
                <label htmlFor="contact" className="block mb-2">
                    연락처
                </label>
                <InputField
                    type="text"
                    id="contact"
                    name="contact"
                    value={storeInfo.contact}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                />
            </div>

            <button
                type="submit"
                className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                정보 수정
            </button>
        </form>
    );
};

export default OwnerRestaurantIntroEditComponent;
