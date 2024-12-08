import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../css/mainpage/Categories.css';
import simba from '../../assets/simba_icon.png';

const Categories = () => {
  const categories = [
    { id: 1, name: '한식', icon: simba },
    { id: 2, name: '중식', icon: simba },
    { id: 3, name: '일식', icon: simba },
    { id: 4, name: '이탈리안', icon: simba },
    { id: 5, name: '멕시칸', icon: simba },
    { id: 6, name: '인도식', icon: simba },
    { id: 7, name: '프랑스식', icon: simba },
    { id: 8, name: '태국식', icon: simba },
    { id: 9, name: '미국식', icon: simba },
    { id: 10, name: '기타', icon: simba }
  ];

  const navigate = useNavigate();

  const handleCategoryClick = (categoryName) => {
    navigate(`/restaurant/preview?categoryName=${encodeURIComponent(categoryName)}`);
  };

  return (
    <div className="categories">
      {categories.map(category => (
        <div
          key={category.id}
          className="category"
          onClick={() => handleCategoryClick(category.name)}
        >
          <img
            src={category.icon}
            alt={category.name}
            className="category-icon"
          />
          <p>{category.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Categories;
