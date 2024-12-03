// src/components/common/NavbarComponent.js
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faUserGear,
    faUsers,
    faClipboardList,
    faUser,
    faBookmark,
    faUtensils, // 메뉴 목록
    faGear,     // 운영 설정
    faCalendarCheck, // 예약 관리
    faComments, // 리뷰 관리
    faBullhorn  // 소식 관리
} from '@fortawesome/free-solid-svg-icons';

const NavBarByRoleComponent = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userRole, setUserRole] = useState(null);

    useEffect(() => {
        const loginInfo = localStorage.getItem('loginInfo');
        if (loginInfo) {
            const parsedInfo = JSON.parse(loginInfo);
            setIsLoggedIn(true);
            setUserRole(parsedInfo.role);
        }
    }, []);

    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container">
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mx-auto">
                        {isLoggedIn && (
                            userRole === 'ADMIN' && (
                                <>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/admin/dashboard">
                                            <FontAwesomeIcon icon={faUserGear} className="me-2" />
                                            관리자 대시보드
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/admin/users">
                                            <FontAwesomeIcon icon={faUsers} className="me-2" />
                                            회원 관리
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/admin/reports">
                                            <FontAwesomeIcon icon={faClipboardList} className="me-2" />
                                            신고 관리
                                        </a>
                                    </li>
                                </>
                            ))}
                            {isLoggedIn && (
                            userRole === 'RESTAURANT' && (
                                <>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/owner/menulist">
                                            <FontAwesomeIcon icon={faUtensils} className="me-2"/>
                                            식당 메뉴 목록
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/owner/businesshour">
                                            <FontAwesomeIcon icon={faGear} className="me-2"/>
                                            식당 운영 설정
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/owner/reservationmain">
                                            <FontAwesomeIcon icon={faCalendarCheck} className="me-2"/>
                                            식당 예약 관리
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/owner/queuemain">
                                            <FontAwesomeIcon icon={faCalendarCheck} className="me-2"/>
                                            식당 줄서기 관리
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/owner/reviewmanagemain">
                                            <FontAwesomeIcon icon={faComments} className="me-2"/>
                                            식당 리뷰 관리
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/owner/newslist">
                                            <FontAwesomeIcon icon={faBullhorn} className="me-2"/>
                                            식당 소식 관리
                                        </a>
                                    </li>

                                </>
                                ))}
                        {isLoggedIn && (
                            userRole === 'USER' && (
                                <>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/owner/menulist">
                                            <FontAwesomeIcon icon={faUtensils} className="me-2"/>
                                            프로필 수정
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/mypage/past">
                                            <FontAwesomeIcon icon={faGear} className="me-2"/>
                                            나의 지난 내역
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/owner/reservationmain">
                                            <FontAwesomeIcon icon={faCalendarCheck} className="me-2"/>
                                            나의 리뷰
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/owner/queuemain">
                                            <FontAwesomeIcon icon={faCalendarCheck} className="me-2"/>
                                            나의 관심모임
                                        </a>
                                    </li>
                                </>
                            ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBarByRoleComponent;