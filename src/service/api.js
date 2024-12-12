import axios from 'axios';

const API_URL = 'http://localhost:8080/api'; // Spring Boot 서버 URL

export const getRestaurantsByCategory = async (categoryName, page, size = 10) => {
  try {
    const response = await axios.get(`${API_URL}/restaurants/cuisine-category`, {
      params: { categoryName, page, size }
    });
    console.log('응답 데이터:', response.data); // 응답 데이터 확인
    return response;
  } catch (error) {
    console.error('API 호출 오류:', error); // 오류 메시지 확인
    throw error;
  }
};

export const getRestaurantById = async (rsId) => {
  try {
    const response = await axios.get(`${API_URL}/restaurant-details/${rsId}`, {
      params: { page: 0, size: 10 }
    });
    console.log('레스토랑 데이터:', response.data); // 응답 데이터 확인
    return response;
  } catch (error) {
    console.error('API 호출 오류:', error); // 오류 메시지 확인
    throw error;
  }
};

export const getAmenitiesByRestaurantId = async (rsId) => {
  try {
    const response = await axios.get(`${API_URL}/dining/${rsId}/amenities`);
    console.log('편의 시설 데이터:', response.data); // 응답 데이터 확인
    return response.data;
  } catch (error) {
    console.error('편의 시설 데이터 호출 오류:', error); // 오류 메시지 확인
    throw error;
  }
};

export const getMenusByRestaurantId = async (rsId) => {
  try {
    const response = await axios.get(`${API_URL}/dining/${rsId}/menus`);
    console.log('메뉴 데이터:', response.data); // 응답 데이터 확인
    return response.data;
  } catch (error) {
    console.error('메뉴 데이터 호출 오류:', error); // 오류 메시지 확인
    throw error;
  }
};

export const getDetailsByRestaurantId = async (rsId) => {
  try {
    const response = await axios.get(`${API_URL}/dining/${rsId}/details`);
    console.log('식당 상세정보 데이터:', response.data); // 데이터 확인
    return response.data;
  } catch (error) {
    console.error('식당 상세정보 호출 오류:', error); // 오류 메시지 확인
    throw error;
  }
};


