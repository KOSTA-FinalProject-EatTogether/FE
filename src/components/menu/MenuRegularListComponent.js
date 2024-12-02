// RegularMenuList.js
import React from 'react';
import PropTypes from 'prop-types';

const MenuRegularListComponent = ({ menu }) => {
    return (
        <div>
            <h2 className="mb-4">메뉴 목록</h2>
            {menu.map((item) => (
                <div key={item.id} className="card mb-3">
                    <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text text-muted">{item.description}</p>
                        <span className="badge bg-primary">{item.price.toLocaleString()}원</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

RegularMenuList.propTypes = {
    menu: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            description: PropTypes.string.isRequired
        })
    ).isRequired
};

export default MenuRegularListComponent;