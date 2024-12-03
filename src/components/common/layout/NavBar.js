import React from 'react';
import '../../../css/NavBar.css';
import {useNavigate} from "react-router-dom";
const NavBar = () => {
  const navigate = useNavigate();
  const handleGoToMapSearch = () => {
    navigate('/restaurant/preview');
  };


  const handleReservationClick = (e) => {
    e.preventDefault();

    const loginInfo = localStorage.getItem('loginInfo');
    if (loginInfo) {
      navigate('/mypage/past');
    } else {
      navigate('/user/signin');
    }
  };

  return (
    <nav className="bottom-nav">
      <ul>
        <li><a href="/restaurant/preview">지도검색</a></li>
        <li><a href="#">추천식당</a></li>
        <li><a href="#">테마식당</a></li>
        <li><a href="#">지역별식당</a></li>
        <li><a href="#">커뮤니티</a></li>
        <li><a href="#" onClick={handleReservationClick}>나의예약</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;
