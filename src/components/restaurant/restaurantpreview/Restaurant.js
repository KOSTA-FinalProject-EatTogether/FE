import React, { forwardRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import {useNavigate} from "react-router-dom";

const Restaurant = forwardRef(({ restaurant }, ref) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/restaurant/${restaurant.id}`);
    };


    return (
        <div className="card border-0 mb-4" ref={ref}>
            <div className="d-flex justify-content-between align-items-center mb-2">
                <h5 className="mb-0 fw-bold">{restaurant.name}</h5>
                <span className="badge bg-primary">대기 {restaurant.waitingTeams}팀</span>
            </div>

            <div className="d-flex align-items-center gap-2 mb-3">
        <span className="text-warning">
          <FontAwesomeIcon icon={faStar} /> {restaurant.rating}
        </span>
                <span className="text-muted">· 성수</span>
                <span className="text-muted">· 다이닝바</span>
            </div>

            <div className="row g-2">
                {restaurant.images.map((image, index) => (
                    <div key={index} className="col-4">
                        <div
                            className="bg-light d-flex align-items-center justify-content-center"
                            style={{
                                aspectRatio: '1/1',
                                borderRadius: '8px'
                            }}
                        >
                            300x300
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
});

export default Restaurant;