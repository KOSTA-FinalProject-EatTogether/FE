import {API_URL} from "./api";
import axios from "axios";

export const addr_convert = async () => {
    try {
        const response = await axios.get(`${API_URL}/all_thousand_addr`);
        return response.data;
    } catch (error) {
        throw new Error('예약 데이터를 불러오는데 실패했습니다');
    }
}

