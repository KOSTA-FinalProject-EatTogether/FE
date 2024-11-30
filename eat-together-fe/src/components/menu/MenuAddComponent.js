import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const MenuAddComponent = () => {
    const [menu, setMenu] = useState([
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
    ]);

    const [newMenu, setNewMenu] = useState({
        name: "",
        price: "",
        description: "",
    });

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setNewMenu((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleAddMenu = (e: React.FormEvent) => {
        e.preventDefault();

        // 입력 유효성 검사
        if (!newMenu.name || !newMenu.price || !newMenu.description) {
            alert("모든 항목을 입력해주세요.");
            return;
        }

        const newMenuItem = {
            id: `menu${menu.length + 1}`.padStart(6, "0"),
            name: newMenu.name,
            price: parseInt(newMenu.price),
            description: newMenu.description,
        };

        setMenu((prev) => [...prev, newMenuItem]);

        // 입력 필드 초기화
        setNewMenu({
            name: "",
            price: "",
            description: "",
        });
    };

    const handleDeleteMenu = (id: string) => {
        setMenu((prev) => prev.filter((item) => item.id !== id));
    };

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-6">
                    <h2 className="mb-4">메뉴 등록</h2>
                    <form onSubmit={handleAddMenu}>
                        <div className="mb-3">
                            <label className="form-label">메뉴 이름</label>
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                value={newMenu.name}
                                onChange={handleInputChange}
                                placeholder="메뉴 이름을 입력하세요"
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">가격</label>
                            <input
                                type="number"
                                className="form-control"
                                name="price"
                                value={newMenu.price}
                                onChange={handleInputChange}
                                placeholder="가격을 입력하세요"
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">메뉴 설명</label>
                            <textarea
                                className="form-control"
                                name="description"
                                value={newMenu.description}
                                onChange={handleInputChange}
                                placeholder="메뉴 설명을 입력하세요"
                                rows={3}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">
                            메뉴 추가
                        </button>
                    </form>
                </div>
                <div className="col-md-6">
                    <h2 className="mb-4">메뉴 목록</h2>
                    {menu.map((item) => (
                        <div key={item.id} className="card mb-3">
                            <div className="card-body d-flex justify-content-between align-items-center">
                                <div>
                                    <h5 className="card-title">{item.name}</h5>
                                    <p className="card-text text-muted">
                                        {item.description}
                                    </p>
                                    <span className="badge bg-primary">
                                        {item.price.toLocaleString()}원
                                    </span>
                                </div>
                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => handleDeleteMenu(item.id)}
                                >
                                    삭제
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MenuAddComponent;
