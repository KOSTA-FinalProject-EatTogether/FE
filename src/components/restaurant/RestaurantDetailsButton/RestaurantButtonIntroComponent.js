import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getRestaurantById, getDetailsByRestaurantId } from '../../../service/api';

const OwnerRestaurantIntroComponent = ({ rsId }) => {
  const [restaurantData, setRestaurantData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRestaurantData = async () => {
      try {
        setLoading(true);

        // 기본 정보 가져오기
        const restaurantResponse = await getRestaurantById(rsId);
        console.log('레스토랑 기본 데이터:', restaurantResponse.data);

        // 추가 정보 가져오기
        const detailsResponse = await getDetailsByRestaurantId(rsId);
        console.log('레스토랑 추가 데이터:', detailsResponse);

        // 추가 데이터가 배열로 오기 때문에 첫 번째 요소를 병합
        const mergedData = {
          ...restaurantResponse.data.restaurant,
          ...detailsResponse[0], // 배열의 첫 번째 요소만 병합
        };

        setRestaurantData(mergedData);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching restaurant data:', err);
        setError('데이터를 불러오는 중 오류가 발생했습니다.');
        setLoading(false);
      }
    };

    fetchRestaurantData();
  }, [rsId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }

  // 병합된 데이터에서 필요한 필드 추출
  const {
    rsName = '정보 없음',
    rsAddress = '주소 없음',
    rsTime = '시간 정보 없음',
    rsPhone = '연락처 없음',
    rsDescription = '설명 없음', // 추가 데이터 필드
    corkage = '콜키지 정보 없음', // 추가 데이터 필드
    parkInfo = '주차 정보 없음', // 추가 데이터 필드
  } = restaurantData || {};

  return (
    <div className="card">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h3 className="card-title h5 mb-0">{rsName}</h3>
        </div>

        <div className="list-group list-group-flush border-top">
          <div className="list-group-item px-0">
            <div className="row">
              <div className="col-3">
                <span className="text-muted small">주소</span>
              </div>
              <div className="col-9">{rsAddress}</div>
            </div>
          </div>
          <div className="list-group-item px-0">
            <div className="row">
              <div className="col-3">
                <span className="text-muted small">영업시간</span>
              </div>
              <div className="col-9">{rsTime}</div>
            </div>
          </div>
          <div className="list-group-item px-0">
            <div className="row">
              <div className="col-3">
                <span className="text-muted small">연락처</span>
              </div>
              <div className="col-9">{rsPhone}</div>
            </div>
          </div>
          <div className="list-group-item px-0">
            <div className="row">
              <div className="col-3">
                <span className="text-muted small">설명</span>
              </div>
              <div className="col-9">{rsDescription}</div>
            </div>
          </div>
          <div className="list-group-item px-0">
            <div className="row">
              <div className="col-3">
                <span className="text-muted small">콜키지</span>
              </div>
              <div className="col-9">{corkage}</div>
            </div>
          </div>
          <div className="list-group-item px-0">
            <div className="row">
              <div className="col-3">
                <span className="text-muted small">주차 정보</span>
              </div>
              <div className="col-9">{parkInfo}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OwnerRestaurantIntroComponent;
