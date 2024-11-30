import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const MenuListComponent = () => {
    const menu = [
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
            id: "side001",
            name: "공기밥",
            price: 1000,
            description: "따뜻한 밥",
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
    ];

    // const [isFullView, setIsFullView] = useState(false);

    //미리보기용 메뉴
    // const previewMenus = menuList.slice(0,3)

    // 전체 또는 미리보기 메뉴 선택
    // const displayMenus = isFullView ? menuList : previewMenus;

    return (
        <div className="container mt-4">
            <h1 className="mb-4">식당 메뉴 리스트</h1>
            <div className="row">
                {menu.map((item) => (
                    <div key={item.id} className="col-12 mb-3">
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h5 className="card-title mb-0">
                                        {item.name}
                                    </h5>
                                    <span className="badge bg-primary">
                                        {item.price.toLocaleString()}원
                                    </span>
                                </div>
                                <p className="card-text text-muted mt-2">
                                    {item.description}
                                </p>
                            </div>
                            <button>수정</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MenuListComponent;
