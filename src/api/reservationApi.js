import axios from "axios"

export const API_SERVER_HOST = 'http://localhost:8080'

const prefix = `${API_SERVER_HOST}/api/reservations`

export const getReservations = async () => {
    try {
        const response = await axios.get(prefix);
        return response.data;
    } catch (error) {
        throw new Error('예약 데이터를 불러오는데 실패했습니다');
    }
};

export const postReservation = async (reservationObj) => {
    const res = await axios(`${prefix}`, reservationObj)
}