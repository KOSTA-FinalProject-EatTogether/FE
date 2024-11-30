import 'bootstrap/dist/css/bootstrap.min.css';
import Simba from "../../assets/simba_icon.png"

const UserProfileComponent = () =>{
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
                    닉네임
                </div>
                <div className="d-flex gap-3">
                    <div>
                        <span className="fw-semibold">팔로워</span> 0
                    </div>
                    <div>
                        <span className="fw-semibold">팔로잉</span> 0
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfileComponent