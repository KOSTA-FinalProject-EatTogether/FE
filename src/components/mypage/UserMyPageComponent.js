import UserProfileComponent from "../common/UserProfileComponent";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

const MyPageComponent = () => {

    const navigate = useNavigate();

    const handleModifyClick = () => {
        navigate('/mypage/modify');
    };

    return (
        <div className="container py-4">
            <div className="row justify-content-center">
                <div className="col-12 col-md-8">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <h4 className="mb-0">마이 페이지</h4>
                        <button
                            type="button"
                            className="btn btn-outline-primary"
                            onClick={handleModifyClick}
                        >
                            프로필 수정
                        </button>
                    </div>
                    <UserProfileComponent />
                </div>
            </div>
        </div>
    )
}
export default MyPageComponent