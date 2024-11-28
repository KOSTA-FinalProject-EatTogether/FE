import 'bootstrap/dist/css/bootstrap.min.css';
import UserProfileComponent from "../common/UserProfileComponent";

const userMyPageComponent = () =>{
    return (
        <div>
            <h2>유저 프로필 컴포넌트입니다</h2>
            <UserProfileComponent/>
            <div>
                <button type="button" className="btn-primary">프로필 수정</button>
            </div>


        </div>


    )

}

export default userMyPageComponent