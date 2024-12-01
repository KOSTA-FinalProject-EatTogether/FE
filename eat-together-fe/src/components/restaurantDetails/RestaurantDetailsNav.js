import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/restaurantDetailsCss/RestaunrantDetailsNav.css';

function RestaurantDetailsNav() {
  return (
      /*
      <div className="container">
          <nav className="navbar">
          <ul className="nav-menu">
              <li className="nav-item"><Link to="/">홈</Link></li>
              <li className="nav-item"><Link to="/menu">메뉴</Link></li>
              <li className="nav-item"><Link to="/photos">사진</Link></li>
              <li className="nav-item"><Link to="/reviews">리뷰</Link></li>
              <li className="nav-item"><Link to="/store-details">매장상세</Link></li>
          </ul>
      </nav>
      */
      <div className="restaurant_details_container">
          <nav className="navbar">
              <ul className="nav-menu">
                  <li className="nav-item">홈</li>
                  <li className="nav-item">메뉴</li>
                  <li className="nav-item">사진</li>
                  <li className="nav-item">리뷰</li>
                  <li className="nav-item">매장상세</li>
              </ul>
          </nav>
      </div>
  );
}

export default RestaurantDetailsNav;
