import axios from 'axios';

export const API_URL = 'http://localhost:8080/api'; // Spring Boot 서버 URL

export const getRestaurantsByCategory = async (categoryName, page, size = 10) => {
  try {
    const response = await axios.get(`${API_URL}/restaurants/cuisine-category`, {
      params: {
        categoryName: categoryName,
        page,
        size
      }
    });
    console.log('응답 데이터:', response.data); // 응답 데이터 확인
    return response;
  } catch (error) {
    console.error('API 호출 오류:', error); // 오류 메시지 확인
    throw error;
  }
};