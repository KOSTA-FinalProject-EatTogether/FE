import React, { useState } from 'react';
import '../../../css/Header.css';
import NavBarByRole from "./NavBarByRole";
import { Modal, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBowlFood,
    faMagnifyingGlass,
    faUser,
    faRightToBracket,
    faBell,
    faBookmark
} from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const [showModal, setShowModal] = useState(false);

    const handleMyPageClick = (e) => {
        e.preventDefault();
        const loginInfo = localStorage.getItem('loginInfo');

        if (!loginInfo) {
            setShowModal(true);
        } else {
            window.location.href = '/mypage';
        }
    };

    const handleLoginRedirect = () => {
        window.location.href = '/user/signin';
    };

    return (
        <div>
            <div className="header-header">
                {/* 로고 및 홈 아이콘 */}
                <div className="header-logo">
                    <FontAwesomeIcon icon={faBowlFood} />
                    <a href="/main" style={{color: 'white'}}>EatTogether</a>
                </div>
                <div className="header-search-bar">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    <input type="text" placeholder="오늘은 뭘 먹을까?" />
                </div>
                <nav className="header-nav-menu">
                    <FontAwesomeIcon icon={faUser} />
                    <a href="/mypage" onClick={handleMyPageClick}>My page</a>
                    <FontAwesomeIcon icon={faRightToBracket} />
                    <a href="/user/signin">Login</a>
                    <a href="/notifications">
                        <FontAwesomeIcon icon={faBell} />
                    </a>
                    <a href="/bookmark">
                        <FontAwesomeIcon icon={faBookmark} />
                    </a>
                </nav>
            </div>

            <Modal
                show={showModal}
                onHide={() => setShowModal(false)}
                backdrop="static"
                keyboard={false}
                centered
            >
                <Modal.Header>
                    <Modal.Title>로그인이 필요합니다</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    마이페이지를 이용하기 위해서는 로그인이 필요합니다.
                    로그인 페이지로 이동하시겠습니까?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleLoginRedirect}>
                        로그인 페이지로 이동
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Header;