import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// 메뉴 데이터
export const menuData = [
    {
        id: "menu001",
        name: "김치찌개",
        price: 10000,
        description: "직접 담근 김치로 만든 김치찌개",
    },
    {
        id: "menu002",
        name: "불고기",
        price: 15000,
        description: "특제 양념 불고기",
    },
    {
        id: "menu003",
        name: "파스타 카르보나라",
        price: 18000,
        description: "크리미한 카르보나라 파스타",
    },
    {
        id: "menu004",
        name: "스테이크",
        price: 25000,
        description: "앵거스 등심 스테이크",
    },
    {
        id: "side001",
        name: "공기밥",
        price: 1000,
        description: "따뜻한 밥",
    },
];

// 전체 메뉴 리스트 컴포넌트 (전체 메뉴 페이지)
export const MenuListComponent = () => {
    return (
        <div className="container mt-4">
            <h2 className="mb-4">전체 메뉴 목록</h2>
            {menuData.map((item) => (
                <div key={item.id} className="card mb-3">
                    <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text text-muted">
                            {item.description}
                        </p>
                        <span className="badge bg-primary">
                            {item.price.toLocaleString()}원
                        </span>
                    </div>
                    <button>수정</button>
                </div>
            ))}
        </div>
    );
};

// 메뉴 미리보기 컴포넌트 (다른 페이지에서 사용)
export const MenuPreview = () => {
    // 처음 3개 메뉴만 미리보기
    const previewMenus = menuData.slice(0, 3);

    return (
        <div className="container mt-4">
            <h2 className="mb-4">메뉴 미리보기</h2>
            {previewMenus.map((item) => (
                <div key={item.id} className="card mb-3">
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
