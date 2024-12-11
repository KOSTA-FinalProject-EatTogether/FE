import axios from "axios"
import API_URL from "./api.js"
export const API_SERVER_HOST = 'http://localhost:8080'

export const verifyPayment = async (paymentData) => {
    try {
        const response = await axios.post(`${API_SERVER_HOST}/payments/verify`, paymentData);
        return response.data;
    } catch (error) {
        throw new Error('결제 검증에 실패했습니다.');
    }
};

export const createReservation = async (reservationData) => {
    try {
        const response = await axios.post(`${API_SERVER_HOST}/reservations`, reservationData);
        return response.data;
    } catch (error) {
        throw new Error('예약 생성에 실패했습니다.');
    }
};