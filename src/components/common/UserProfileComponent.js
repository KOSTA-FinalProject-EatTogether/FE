import 'bootstrap/dist/css/bootstrap.min.css';
import Simba from "../../assets/simba_icon.png"
import {useEffect, useState} from "react";

// UserProfileComponent.js
const DUMMY_USER = {
    // 더미 데이터
        nickname: "홍길동",
        profileImage: Simba, // 실제 이미지 URL로 교체 필요
        followers: 1234,
        following: 567,

};

const UserProfileComponent = () =>{
    const [user, setUser] = useState({
        nickname:'',
        profileImage: Simba,
        followers: 0,
        following: 0,
    })

    useEffect(() => {
        // 실제로는 API 호출
        setUser({
            nickname:DUMMY_USER.nickname,
            profileImage: Simba,
            followers: DUMMY_USER.followers,
            following: DUMMY_USER.following,

        });
    }, []);

    return (
        <div className="row align-items-center border p-3">
            <div className="col-auto">
                <img
                    src={Simba}
                    className="rounded-circle"
                    style={{width: '100px', height: '100px', objectFit: 'cover'}}
                    alt="프로필 이미지"
                />
            </div>
            <div className="col">
                <div className="fw-bold fs-5 mb-2">
                    {DUMMY_USER.nickname}
                </div>
                <div className="d-flex gap-3">
                    <div>
                        <span className="fw-semibold">팔로워</span> {DUMMY_USER.followers}
                    </div>
                    <div>
                        <span className="fw-semibold">팔로잉</span> {DUMMY_USER.following}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfileComponent