import React, { useState, useRef, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuEditableListComponent from './MenuEditableListComponent';
import MenuNavigationComponent from "./MenuNavComponent";


const MenuManagementComponent = () => {
    const [menu, setMenu] = useState([
        // 메인 메뉴
        {
            id: "main001",
            name: "김치찌개",
            price: 10000,
            description: "직접 담근 김치로 만든 김치찌개",
            category: "main"
        },
        {
            id: "main002",
            name: "불고기",
            price: 15000,
            description: "특제 양념 불고기",
            category: "main"
        },
        {
            id: "main003",
            name: "파스타 카르보나라",
            price: 18000,
            description: "크리미한 카르보나라 파스타",
            category: "main"
        },

        // 사이드 메뉴
        {
            id: "side001",
            name: "공기밥",
            price: 1000,
            description: "따뜻한 밥",
            category: "side"
        },
        {
            id: "side002",
            name: "감자튀김",
            price: 5000,
            description: "바삭바삭한 감자튀김",
            category: "side"
        },

        // 디저트
        {
            id: "dessert001",
            name: "티라미수",
            price: 7000,
            description: "수제 티라미수",
            category: "dessert"
        },
        {
            id: "dessert002",
            name: "아이스크림",
            price: 4000,
            description: "바닐라 아이스크림",
            category: "dessert"
        },

        // 음료
        {
            id: "beverage001",
            name: "아메리카노",
            price: 4500,
            description: "깊은 맛의 아메리카노",
            category: "beverage"
        },
        {
            id: "beverage002",
            name: "레모네이드",
            price: 5000,
            description: "상큼한 레모네이드",
            category: "beverage"
        },

        // 주류
        {
            id: "alcohol001",
            name: "생맥주",
            price: 5000,
            description: "시원한 생맥주 500cc",
            category: "alcohol"
        },
        {
            id: "alcohol002",
            name: "소주",
            price: 4000,
            description: "참이슬 후레쉬",
            category: "alcohol"
        }
    ]);

    const [selectedCategory, setSelectedCategory] = useState('main');

    const [newMenu, setNewMenu] = useState({
        id: '',
        name: '',
        price: '',
        description: '',
        category: 'main' // 기본 카테고리 추가
    });

    const [isEditing, setIsEditing] = useState(false);
    const nameInputRef = useRef(null);

    useEffect(() => {
        if (isEditing && nameInputRef.current) {
            nameInputRef.current.focus();
        }
    }, [isEditing]);

    // 카테고리 변경 핸들러 추가
    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        // 폼 초기화
        setNewMenu({
            id: '',
            name: '',
            price: '',
            description: '',
            category: category  // 새로 선택된 카테고리로 설정
        });
        // 수정 모드였다면 해제
        setIsEditing(false);
    };

    // 필터링된 메뉴 가져오기
    const filteredMenu = menu.filter(item => item.category === selectedCategory);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewMenu(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleAddMenu = (e) => {
        e.preventDefault();

        if (!newMenu.name || !newMenu.price || !newMenu.description) {
            alert('모든 항목을 입력해주세요.');
            return;
        }

        if (isEditing) {
            setMenu(prev => prev.map(item =>
                item.id === newMenu.id
                    ? { ...item, ...newMenu, price: parseInt(newMenu.price) }
                    : item
            ));
            setIsEditing(false);
        } else {
            const category = selectedCategory;
            const categoryPrefix = category.substring(0, 3); // 카테고리의 첫 3글자
            const existingMenusInCategory = menu.filter(item => item.category === category).length;
            const newId = `${categoryPrefix}${(existingMenusInCategory + 1).toString().padStart(3, '0')}`;

            const newMenuItem = {
                id: newId,
                name: newMenu.name,
                price: parseInt(newMenu.price),
                description: newMenu.description,
                category: selectedCategory
            };

            setMenu(prev => [...prev, newMenuItem]);
        }

        setNewMenu({
            id: '',
            name: '',
            price: '',
            description: '',
            category: selectedCategory
        });
    };

    const handleEditMenu = (item) => {
        setNewMenu({
            id: item.id,
            name: item.name,
            price: item.price.toString(),
            description: item.description,
            category: item.category
        });
        setIsEditing(true);
        setSelectedCategory(item.category);
    };

    const handleDeleteMenu = (id) => {
        setMenu(prev => prev.filter(item => item.id !== id));
    };

    return (
        <div className="container mt-4">
            <h2 className="mb-4">{isEditing ? '메뉴 수정' : '메뉴 등록'}</h2>
            <form onSubmit={handleAddMenu} className="mb-5">
                <div className="mb-3">
                    <label className="form-label">카테고리</label>
                    <select
                        className="form-select"
                        name="category"
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                        <option value="main">메인</option>
                        <option value="side">사이드</option>
                        <option value="dessert">디저트</option>
                        <option value="beverage">음료</option>
                        <option value="alcohol">주류</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label className="form-label">메뉴 이름</label>
                    <input
                        ref={nameInputRef}
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
                <button type="submit" className="btn btn-primary me-2">
                    {isEditing ? '수정 완료' : '메뉴 추가'}
                </button>
                {isEditing && (
                    <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={() => {
                            setIsEditing(false);
                            setNewMenu({
                                id: '',
                                name: '',
                                price: '',
                                description: '',
                                category: selectedCategory
                            });
                        }}
                    >
                        취소
                    </button>
                )}
            </form>
            <MenuNavigationComponent onCategoryChange={handleCategoryChange} />
            <MenuEditableListComponent
                menu={filteredMenu}
                onEdit={handleEditMenu}
                onDelete={handleDeleteMenu}
            />
        </div>
    );
}

export default MenuManagementComponent;