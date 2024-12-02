import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import simba from '../../assets/simba_icon.png';

// 메뉴 데이터
export const menuData = [
    {
        id: "menu001",
        name: "김치찌개",
        price: 10000,
        description: "직접 담근 김치로 만든 김치찌개",
        image: simba
    },
    {
        id: "menu002",
        name: "불고기",
        price: 15000,
        description: "특제 양념 불고기",
        image: simba
    },
    {
        id: "menu003",
        name: "파스타 카르보나라",
        price: 18000,
        description: "크리미한 카르보나라 파스타",
        image: simba
    },
    {
        id: "menu004",
        name: "스테이크",
        price: 25000,
        description: "앵거스 등심 스테이크",
        image: simba
    },
    {
        id: "side001",
        name: "공기밥",
        price: 1000,
        description: "따뜻한 밥",
        image: simba
    },
];

// 전체 메뉴 리스트 컴포넌트 (전체 메뉴 페이지)
export const MenuListComponent = () => {
    return (
        <div className="container mt-4">
            <h2 className="mb-4">전체 메뉴 목록</h2>
            {menuData.map((item) => (
                <div key={item.id} className="card mb-3">
                    <div className="card-body d-flex justify-content-between align-items-center">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text text-muted mb-2">
                            {item.description}
                        </p>
                        <span className="badge bg-primary">
                            {item.price.toLocaleString()}원
                        </span>
                    </div>
                    <div className="mt-2">
                        <button className="btn btn-outline-primary">수정</button>
                    </div>
                    <div className="col-md-4 d-flex align-items-center justify-content-center">
                        <img
                            src={item.image}
                            alt={item.name}
                            className="rounded object-fit-cover"
                            style={{
                                width: '100px',
                                height: '100px'
                            }}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};

// 메뉴 미리보기 컴포넌트 (다른 페이지에서 사용)
export const MenuPreview = () => {
    const previewMenus = menuData.slice(0, 3);

    return (
        <div className="container mt-4">
            <h2 className="mb-4">메뉴 미리보기</h2>
            {previewMenus.map((item) => (
                <div key={item.id} className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-8">
                            <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                                <p className="card-text text-muted">
                                    {item.description}
                                </p>
                                <span className="badge bg-primary">
                                    {item.price.toLocaleString()}원
                                </span>
                            </div>
                        </div>
                        <div className="col-md-4 d-flex align-items-center justify-content-center">
                            <img
                                src={item.image}
                                alt={item.name}
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
            <div className="text-center">
                <a href="/owner/menulist" className="btn btn-outline-primary">
                    전체 메뉴 보기
                </a>
            </div>
        </div>
    );
};

export default MenuListComponent;
