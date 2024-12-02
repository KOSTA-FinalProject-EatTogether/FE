// EditableMenuList.js
import React from 'react';
import PropTypes from 'prop-types';

const MenuEditableListComponent = ({ menu, onEdit, onDelete }) => {
    return (
        <div>
            <h2 className="mb-4">메뉴 목록</h2>
            {menu.map((item) => (
                <div key={item.id} className="card mb-3">
                    <div className="card-body d-flex justify-content-between align-items-center">
                        <div>
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text text-muted">{item.description}</p>
                            <span className="badge bg-primary">{item.price.toLocaleString()}원</span>
                        </div>
                        <div>
                            <button 
                                className="btn btn-warning btn-sm me-2" 
                                onClick={() => onEdit(item)}
                            >
                                수정
                            </button>
                            <button 
                                className="btn btn-danger btn-sm" 
                                onClick={() => onDelete(item.id)}
                            >
                                삭제
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

MenuEditableListComponent.propTypes = {
    menu: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            description: PropTypes.string.isRequired
        })
    ).isRequired,
    onEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
};

export default MenuEditableListComponent;