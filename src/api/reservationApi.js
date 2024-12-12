import axios from "axios"
import {API_URL} from "./api.js"

const prefix = `${API_URL}/reservations`

export const getReservations = async () => {
    try {
        const response = await axios.get(prefix);
        return response.data;
    } catch (error) {
        throw new Error('예약 데이터를 불러오는데 실패했습니다');
    }
};

export const createReservationwithoutdeposit = async (reservationData) => {
    return await axios.post(prefix, reservationData);
};

export const getRestaurantReservationInfo = async (rsId) => {
    try {
        const response = await axios.get(`${API_URL}/restaurants/${rsId}/reservation-info`);
        return response.data;
    } catch (error) {
        throw error;
    }
};
