import React from 'react';
import '../../css/NavBar.css';

const NavBarComponent = () => {
  return (
    <nav className="bottom-nav">
      <ul>
        <li><a href="#">지도검색</a></li>
        <li><a href="#">추천식당</a></li>
        <li><a href="#">테마식당</a></li>
        <li><a href="#">지역별식당</a></li>
        <li><a href="#">커뮤니티</a></li>
        <li><a href="#">나의예약</a></li>
      </ul>
    </nav>
  );
};

export default NavBarComponent;
