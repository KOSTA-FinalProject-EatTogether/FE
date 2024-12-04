// 사용자 권한에 따라 내비바의 내용이 바뀜

import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faUserGear,
    faUsers,
    faClipboardList,
    faUtensils, // 메뉴 목록
    faGear,     // 운영 설정
    faCalendarCheck, // 예약 관리
    faComments, // 리뷰 관리
    faBullhorn,  // 소식 관리
    faBowlFood,
    faMagnifyingGlass,
    faUser,
    faRightToBracket,
    faBell,
    faBookmark, faStore, faChartPie
} from '@fortawesome/free-solid-svg-icons';

const NavBarByRole = () => {
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
                                        <a className="nav-link" href="/admin/reviewmanage">
                                            <FontAwesomeIcon icon={faComments} className="me-2"/>
                                            리뷰관리
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/admin/usermanage">
                                            <FontAwesomeIcon icon={faUsers} className="me-2"/>
                                            회원계정관리
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/admin/restaurant/manage">
                                            <FontAwesomeIcon icon={faStore} className="me-2"/>
                                            식당계정관리
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/admin/restaurant/register">
                                            <FontAwesomeIcon icon={faStore} className="me-2"/>
                                            식당등록관리
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/admin/restaurant/status">
                                            <FontAwesomeIcon icon={faChartPie} className="me-2"/>
                                            등록식당현황
                                        </a>
                                    </li>
                                </>
                            ))}
                        {isLoggedIn && (
                            userRole === 'OWNER' && (
                                <>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/owner/basic/menu">
                                        <FontAwesomeIcon icon={faUtensils} className="me-2"/>
                                            식당 메뉴 목록
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/owner/basic/hours/list">
                                            <FontAwesomeIcon icon={faGear} className="me-2"/>
                                            식당 운영 설정
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/owner/reservation/main">
                                            <FontAwesomeIcon icon={faCalendarCheck} className="me-2"/>
                                            식당 예약 관리
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/owner/queue/main">
                                            <FontAwesomeIcon icon={faCalendarCheck} className="me-2"/>
                                            식당 줄서기 관리
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/owner/review">
                                            <FontAwesomeIcon icon={faComments} className="me-2"/>
                                            식당 리뷰 관리
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/owner/news/list">
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
                                        <a className="nav-link" href="/mypage/modify">
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
                                        <a className="nav-link" href="/mypage/tempreview">
                                            <FontAwesomeIcon icon={faCalendarCheck} className="me-2"/>
                                            나의 리뷰
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/mypage">
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

export default NavBarByRole;