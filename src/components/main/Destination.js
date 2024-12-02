import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faUtensils, faShoppingBag, faTree, faEllipsisH } from '@fortawesome/free-solid-svg-icons';

const Destination = () => {
    const destinations = [
        { id: 1, name: '카페', icon: faCoffee },
        { id: 2, name: '레스토랑', icon: faUtensils },
        { id: 3, name: '쇼핑몰', icon: faShoppingBag },
        { id: 4, name: '공원', icon: faTree },
        { id: 5, name: '카테고리 10', icon: faEllipsisH }
    ];

    return (
        <div className="container p-2">
            <h2 className="mb-3">어디로 갈까?</h2>
            <div className="row g-3">
                {destinations.map(destination => (
                    <div key={destination.id} className="col text-center" style={{width: '20%'}}>
                        <FontAwesomeIcon
                            icon={destination.icon}
                            className="mb-2"
                            style={{
                                width: '50px',
                                height: '50px',
                                padding: '15px',
                                borderRadius: '50%',
                                backgroundColor: '#f8f9fa'
                            }}
                        />
                        <p className="mb-0 small">{destination.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Destination;