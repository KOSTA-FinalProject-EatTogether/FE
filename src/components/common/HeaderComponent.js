import React from 'react';
import '../../css/Header.css';
import NavBarByRoleComponent from "./NavBarByRoleComponent";

// Font Awesome에서 아이콘 가져오기
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBowlFood, faMagnifyingGlass, faUser, faRightToBracket, faBell, faBookmark } from '@fortawesome/free-solid-svg-icons';



const HeaderComponent = () => {

    return (
        <div>
            <div className="header-header">
                {/* 로고 및 홈 아이콘 */}
                <div className="header-logo">
                    <FontAwesomeIcon icon={faBowlFood} />
                    <a href="/#" style="color: white;">EatTogether</a>
                </div>
                <div className="header-search-bar">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    <input type="text" placeholder="오늘은 뭘 먹을까?" />
                </div>
                <nav className="header-nav-menu">
                    <FontAwesomeIcon icon={faUser} />
                    <a href="/mypage/user">My page</a>
                    <FontAwesomeIcon icon={faRightToBracket} />
                    <a href="/member/signin">Login</a>
                    <a href="/notifications">
                        <FontAwesomeIcon icon={faBell} />
                    </a>
                    <a href="/bookmark">
                        <FontAwesomeIcon icon={faBookmark} />
                    </a>
                </nav>

            </div>
        </div>
    );
};

export default HeaderComponent;
