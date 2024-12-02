import React from 'react';
// import '../../css/restaurantpreview/Filter.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const filterButtonStyle = {
    backgroundColor: '#f5f5f5',
    border: '1px solid #ddd',
    padding: '10px 20px',
    borderRadius: '5px',
    transition: 'background-color 0.3s'
};

const Filter = () => (
    <div className="container p-2">
        <div className="d-flex gap-2">
            <button className="btn" style={filterButtonStyle}>필터 1</button>
            <button className="btn" style={filterButtonStyle}>필터 2</button>
            <button className="btn" style={filterButtonStyle}>필터 3</button>
            <button className="btn" style={filterButtonStyle}>필터 4</button>
        </div>
    </div>
);

export default Filter;
