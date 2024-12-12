import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { getMenusByRestaurantId } from "../../service/api"; // API 호출 함수 임포트

const MenuListComponent = ({ rsId }) => {
  const [menuData, setMenuData] = useState([]);
  console.log('MenuListComponent rsId:', rsId); // rsId 값 확인

  useEffect(() => {
    const fetchMenus = async () => {
      try {
        const data = await getMenusByRestaurantId(rsId);
        console.log('메뉴 데이터:', data); // 데이터 확인
        setMenuData(data);
      } catch (error) {
        console.error('Error fetching menu data:', error);
      }
    };

    fetchMenus();
  }, [rsId]);

  return (
    <div className="container mt-4">
      <h2 className="mb-4 fs-4">메뉴</h2>
      {menuData.map((item) => (
        <div key={item.menuId} className="card mb-3">
          <div className="card-body d-flex justify-content-between align-items-center">
            <div>
              <h5 className="card-title">{item.menuName}</h5>
              <p className="card-text text-muted mb-2">{item.menuDesc}</p>
              <span className="badge bg-primary">{item.menuPrice}원</span>
            </div>
            <div className="d-flex align-items-center justify-content-center">
              <img 
                src={item.menuPhotoPath} 
                alt={item.menuName}
                className="rounded object-fit-cover"
                style={{ 
                  width: '100px',
                  height: '100px'
                }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export const MenuPreview = ({ rsId }) => {
  const [menuData, setMenuData] = useState([]);
  console.log('MenuPreview rsId:', rsId); // rsId 값 확인

  useEffect(() => {
    const fetchMenus = async () => {
      try {
        const data = await getMenusByRestaurantId(rsId);
        console.log('메뉴 미리보기 데이터:', data); // 데이터 확인
        // 각 item의 구조를 확인
        data.forEach(item => console.log('item:', item));
        // item 구조에서 isFeatured 값을 필터링
        const featuredMenus = data.filter(item => item.featured === true || item.featured === "true"); 
        // 대표 메뉴 필터링
        console.log('대표 메뉴:', featuredMenus); // 대표 메뉴 데이터 확인
        setMenuData(featuredMenus.slice(0, 3)); // 미리보기용 데이터 슬라이싱
      } catch (error) {
        console.error('Error fetching menu data:', error);
      }
    };

    fetchMenus();
  }, [rsId]);

  return (
    <div className="container mt-4">
      <h2 className="mb-4 fs-5">메뉴 미리보기</h2>
      {menuData.map((item) => (
        <div key={item.menuId} className="card mb-3">
          <div className="row g-0">
            <div className="col-8">
              <div className="card-body">
                <h6 className="card-title mb-2">{item.menuName}</h6>
                <p className="card-text text-muted small mb-2">{item.menuDesc}</p>
                <span className="badge bg-primary">{item.menuPrice}원</span>
              </div>
            </div>
            <div className="col-4 d-flex align-items-center justify-content-center p-2">
              <img
                src={item.menuPhotoPath}
                alt={item.menuName}
                className="rounded object-fit-cover"
                style={{
                  width: '90px',
                  height: '90px'
                }}
              />
            </div>
          </div>
        </div>
      ))}
      <div className="text-center mt-3">
        <a href="/owner/menulist" className="btn btn-sm btn-outline-primary">
          전체 메뉴 보기
        </a>
      </div>
    </div>
  );
};

export default MenuListComponent; // MenuListComponent를 기본적으로 내보냄
