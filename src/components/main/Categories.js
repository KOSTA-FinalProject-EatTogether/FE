import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import simba from '../../assets/simba_icon.png';

const Categories = () => {
  const categories = [
    { id: 1, name: '카테고리 1', icon: simba },
    { id: 2, name: '카테고리 2', icon: simba },
    { id: 3, name: '카테고리 3', icon: simba },
    { id: 4, name: '카테고리 4', icon: simba },
    { id: 5, name: '카테고리 5', icon: simba },
    { id: 6, name: '카테고리 6', icon: simba },
    { id: 7, name: '카테고리 7', icon: simba },
    { id: 8, name: '카테고리 8', icon: simba },
  ];

  return (
      <div className="container p-2">
        <div className="row row-cols-4 g-2">
          {categories.map(category => (
              <div key={category.id} className="col text-center">
                <img
                    src={category.icon}
                    alt={category.name}
                    className="img-fluid mb-2 rounded-circle"
                    style={{width: '80px'}}
                />
                <p className="mb-0 small">{category.name}</p>
              </div>
          ))}
        </div>
      </div>
  );
};

export default Categories;