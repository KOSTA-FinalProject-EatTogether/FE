import React from 'react';

import UserMyPageComponent from "../../components/mypage/UserMyPageComponent";
import ReviewAndBookmarkComponent from "../../components/mypage/ReviewAndBookmarkComponent";

const UserMyPage = () => {


    return (
        <div>
            <h1>유저 마이페이지</h1>
            <UserMyPageComponent/>
            <ReviewAndBookmarkComponent/>
        </div>
    )
}

export default UserMyPage;