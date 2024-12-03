import React, { useState } from 'react';

const MenuNavigationComponent = ({ onCategoryChange }) => {
    const [activeCategory, setActiveCategory] = useState('main');

    const categories = [
        { id: 'main', name: '메인', icon: '🍖' },
        { id: 'side', name: '사이드', icon: '🍟' },
        { id: 'dessert', name: '디저트', icon: '🍰' },
        { id: 'beverage', name: '음료', icon: '🥤' },
        { id: 'alcohol', name: '주류', icon: '🍺' }
    ];

    const handleCategoryClick = (categoryId) => {
        setActiveCategory(categoryId);
        onCategoryChange(categoryId);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
            <div className="container-fluid">
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mx-auto">
                        {categories.map((category) => (
                            <li className="nav-item" key={category.id}>
                                <button
                                    className={`nav-link btn btn-link px-4 ${activeCategory === category.id ? 'active fw-bold' : ''}`}
                                    onClick={() => handleCategoryClick(category.id)}
                                >
                                    <span className="me-2">{category.icon}</span>
                                    {category.name}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default MenuNavigationComponent;