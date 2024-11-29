import React from 'react';
import './css/Header.css';

// Font Awesome에서 아이콘 가져오기
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBowlFood, faMagnifyingGlass, faUser, faRightToBracket, faBell, faBookmark } from '@fortawesome/free-solid-svg-icons';  // 올바른 가져오기

const Header = () => {
    return (
        <header className="header">
            {/* 로고 및 홈 아이콘 */}
            <div className="logo">
                <FontAwesomeIcon icon={faBowlFood} />
                EatTogether
            </div>
            <div className="search-bar">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                <input type="text" placeholder="오늘은 뭘 먹을까?" />
            </div>
            <nav className="nav-menu">
                <FontAwesomeIcon icon={faUser} />
                <a href="/mypage">My page</a>
                <FontAwesomeIcon icon={faRightToBracket} />
                <a href="/login">Login</a>
                <a href="/notifications">
                    <FontAwesomeIcon icon={faBell} />
                </a>
                <a href="/bookmark">
                    <FontAwesomeIcon icon={faBookmark} />
                </a>
            </nav>
        </header>
    );
};

export default Header;
